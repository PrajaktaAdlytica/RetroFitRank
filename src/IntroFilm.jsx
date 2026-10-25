import {useEffect, useRef, useState} from 'react';
import {ArrowDown} from '@phosphor-icons/react/dist/csr/ArrowDown';
import {Pause} from '@phosphor-icons/react/dist/csr/Pause';
import {Play} from '@phosphor-icons/react/dist/csr/Play';
import {scrollPageTo} from './scroll-motion';
import './intro-film.css';

const DURATION = 12;

export function IntroFilm({motion, onActiveChange}) {
  const section = useRef(null);
  const video = useRef(null);
  const departed = useRef(Boolean(location.hash));
  const handingOff = useRef(false);
  const [portrait] = useState(() => matchMedia('(max-width: 800px)').matches);
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState('paused');
  const [failed, setFailed] = useState(false);
  const light = time >= 9;
  const chapter = time < 3 ? 0 : time < 7.8 ? 1 : 2;

  function enterSite() {
    handingOff.current = true;
    video.current?.pause();
    onActiveChange(false);
    const header = document.querySelector('.navbar');
    const main = document.getElementById('main');
    const destination = main.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 68);
    // Numeric target avoids applying the page's anchor scroll-padding twice.
    scrollPageTo(destination, {
      duration: motion ? 1.65 : 0,
      immediate: !motion,
      offset: 0,
      onComplete: () => {
        handingOff.current = false;
        document.getElementById('main')?.focus({preventScroll: true});
      },
    });
  }

  useEffect(() => {
    const film = video.current;
    if (!motion || location.hash || departed.current) {
      film.pause();
    } else {
      film.play().catch(() => setStatus('paused'));
    }
    return () => film.pause();
  }, [motion]);

  useEffect(() => {
    const observePosition = () => {
      const bounds = section.current.getBoundingClientRect();
      const visible = bounds.bottom > innerHeight * .55;
      onActiveChange(visible && !handingOff.current);
      // A person scrolling takes control. Completion must never pull them back.
      if (-bounds.top > bounds.height * .18 && !handingOff.current) {
        departed.current = true;
        video.current.pause();
      }
    };
    const suspend = () => { if (document.hidden) video.current.pause(); };
    addEventListener('scroll', observePosition, {passive: true});
    document.addEventListener('visibilitychange', suspend);
    observePosition();
    return () => {
      removeEventListener('scroll', observePosition);
      document.removeEventListener('visibilitychange', suspend);
    };
  }, [onActiveChange]);

  function toggleFilm() {
    const film = video.current;
    if (!film.paused) return film.pause();
    if (film.ended) { film.currentTime = 0; setTime(0); }
    departed.current = false;
    handingOff.current = false;
    film.play().catch(() => setStatus('paused'));
  }

  function finish() {
    setTime(DURATION);
    setStatus('finished');
    if (!departed.current && !document.hidden && section.current.getBoundingClientRect().bottom > innerHeight * .7) enterSite();
  }

  return <section ref={section} className={'intro-film' + (light ? ' intro-film--light' : '')} aria-label="Look beyond the façade — an architectural introduction">
    <video
      ref={video}
      className="intro-film__video"
      src={'/assets/intro-facade-' + (portrait ? 'mobile' : 'desktop') + '.mp4'}
      poster="/assets/intro-facade-poster.jpg"
      muted playsInline preload="auto"
      aria-hidden="true" tabIndex={-1}
      onTimeUpdate={event => setTime(event.currentTarget.currentTime)}
      onPlaying={() => setStatus('playing')}
      onPause={() => setStatus('paused')}
      onEnded={finish}
      onError={() => { setFailed(true); setStatus('paused'); }}
    />
    <div className="intro-film__shade" aria-hidden="true"/>
    <div className="intro-film__topline">
      <span className="intro-film__signature">RETROFITRANK <i/> A DIFFERENT PERSPECTIVE</span>
      <span className="intro-film__edition">ARCHITECTURAL STUDY / 01</span>
    </div>
    <div className="intro-film__copy">
      <p className="intro-film__eyebrow"><span aria-hidden="true">+</span> MORE THAN MEETS THE EYE</p>
      <h2 className={light ? 'intro-film__title is-out' : 'intro-film__title'} aria-hidden={light}>
        <span>Look beyond</span><span><em>the façade.</em></span>
      </h2>
      <h2 className={light ? 'intro-film__title intro-film__closing is-in' : 'intro-film__title intro-film__closing'} aria-hidden={!light}>
        <span>A clearer view.</span><span><em>A better next decision.</em></span>
      </h2>
      <p className={'intro-film__caption' + (light ? ' is-out' : '')}>Every building has a story.<br/>Start with what lies beneath the surface.</p>
    </div>
    <div className="intro-film__bottom">
      <div className="intro-film__chapters" aria-hidden="true">
        {['The façade', 'The evidence', 'The bigger picture'].map((label, index) => <span className={index === chapter ? 'is-current' : ''} key={label}><b>0{index + 1}</b>{label}</span>)}
      </div>
      <div className="intro-film__controls">
        {!failed && <button type="button" className="intro-film__play" onClick={toggleFilm} aria-label={status === 'playing' ? 'Pause introduction' : status === 'finished' ? 'Replay introduction' : 'Play introduction'}>{status === 'playing' ? <Pause size={14}/> : <Play size={14}/>}<span>{status === 'playing' ? 'Pause' : status === 'finished' ? 'Replay' : 'Play film'}</span></button>}
        <button type="button" className="intro-film__skip" onClick={enterSite}>{failed || !motion ? 'Enter the website' : 'Skip to the website'}<ArrowDown size={18}/></button>
      </div>
    </div>
    <div className="intro-film__progress" aria-hidden="true"><span style={{transform: `scaleX(${Math.min(time / DURATION, 1)})`}}/></div>
    <p className="intro-film__description">Concept illustration. The film moves from a building façade to its interior, then reveals the whole building. No surveyed property is shown.</p>
  </section>;
}
