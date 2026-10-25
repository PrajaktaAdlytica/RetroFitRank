import {useLayoutEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {SplitText} from 'gsap/SplitText';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger, SplitText);
let activeScroll;

export function scrollPageTo(target, {immediate=false,duration,offset,onComplete}={}) {
  const topOffset=offset ?? (typeof target==='number'?0:-80);
  if(activeScroll) activeScroll.scrollTo(target,{immediate,offset:topOffset,duration,onComplete});
  else {
    const node=typeof target==='number'?null:document.querySelector(target);
    const top=typeof target==='number'?target:node?node.getBoundingClientRect().top+window.scrollY+topOffset:window.scrollY;
    const smooth=!immediate && duration>0 && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top,behavior:smooth?'smooth':'instant'});
    if(onComplete) smooth?setTimeout(onComplete,duration*1000):onComplete();
  }
}

// One owner for the ticker, scroll listeners, split text and route-local timelines.
export function useScrollMotion(path, enabled) {
  useLayoutEffect(()=>{
    if(!enabled) return;
    const media=gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)',()=>{
      let disposed=false;
      const splits=[];
      const focusAnimations=new Map();
      const lenis=new Lenis({
        lerp:.095, smoothWheel:true, syncTouch:false, autoRaf:false,
        anchors:{offset:-80},
        prevent:node=>node.matches?.('.mega,.table-wrap,.building-list,textarea,select,[data-lenis-prevent]'),
      });
      activeScroll=lenis;
      lenis.on('scroll',ScrollTrigger.update);
      const tick=time=>lenis.raf(time*1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      document.documentElement.classList.add('scroll-choreography');
      const context=gsap.context(()=>{});
      const mobile=matchMedia('(max-width: 800px)').matches;
      const travel=mobile?24:65;
      const repeat=(element)=>({trigger:element.closest('.evidence-scene,.offers-scroll')||element,start:'top 93%',end:'bottom 7%',toggleActions:'play reverse play reverse',invalidateOnRefresh:true});
      const reveal=(el,from={},delay=0)=>{
        const animation=gsap.fromTo(el,{opacity:0,...from},{opacity:1,x:0,y:0,rotation:0,scale:1,clipPath:'inset(0% 0% 0% 0%)',duration:.85,delay,ease:'power3.out',scrollTrigger:repeat(el)});
        focusAnimations.set(el,animation);
        return animation;
      };
      const refresh=()=>{if(!disposed){lenis.resize();ScrollTrigger.refresh()}};
      // Wait for font metrics before splitting; split words naturally reflow on resize.
      document.fonts.ready.then(()=>{
        if(disposed)return;
        context.add(()=>{
          const marketing=!path.startsWith('/demo');
          if(marketing){
            document.querySelectorAll('main h1,main h2,.footer-invitation h2').forEach((heading,i)=>{
              if(heading.closest('.artifact,.offer-slide,.resource-grid,.form-panel,.signin-card'))return;
              const accessibleCopy=heading.cloneNode(true);
              accessibleCopy.querySelectorAll('br').forEach(br=>br.replaceWith(' '));
              const label=accessibleCopy.textContent.replace(/\s+/g,' ').trim();
              const split=SplitText.create(heading,{type:'words',mask:'words',wordsClass:'motion-word',aria:'auto'});
              heading.setAttribute('aria-label',label);
              splits.push(split);
              const variant=i%4;
              const from=variant===0?{yPercent:95,rotation:3}:variant===1?{x:mobile?-18:-38,rotation:-2}:variant===2?{yPercent:-65}:{x:mobile?18:38};
              const tween=gsap.fromTo(split.words,{opacity:0,...from},{opacity:1,x:0,yPercent:0,rotation:0,duration:.72,stagger:{each:.045,from:'start'},ease:'power3.out',scrollTrigger:repeat(heading)});
              focusAnimations.set(heading,tween);
            });
            document.querySelectorAll('.section-top>p,.section-top>div>p,.hero-desc,.hero-sub,.page-intro>p,.editorial-hero>div>p,.manifesto-heading p,.cta-action>p,.film-heading>p').forEach((el,i)=>reveal(el,{y:i%2?22:-18},.12));
            document.querySelectorAll('.hero-copy>.eyebrow,.section-top .eyebrow,.manifesto .eyebrow,.page-intro>.eyebrow,.cta-head>.eyebrow').forEach(el=>reveal(el,{x:-20,clipPath:'inset(0% 100% 0% 0%)'}));
            // Each section has a distinct direction and stagger, in both scroll directions.
            document.querySelectorAll('.comparison,.roles,.protocol-strip,.resource-grid,.module-details,.dictionary,.pricing-grid').forEach((group,groupIndex)=>{
              [...group.children].filter(el=>!el.matches('.role-note')).forEach((el,i)=>{
                const mode=(i+groupIndex)%4;
                const from=mode===0?{x:-travel,y:12}:mode===1?{y:48}:mode===2?{x:travel,y:12}:{y:-35};
                reveal(el,from,Math.min(i*.085,.3));
              });
            });
            document.querySelectorAll('.faq details').forEach((el,i)=>reveal(el,{x:i%2?travel:-travel},Math.min(i*.04,.2)));
            document.querySelectorAll('.product-list>section,.article-grid>article').forEach((el,i)=>reveal(el,{x:i%2?travel:-travel}));
            document.querySelectorAll('.queue-preview,.signin-card,.footer-note').forEach(el=>reveal(el,{y:45,scale:.975}));
            document.querySelectorAll('.hero-copy>.actions,.cta-action>.button,.chapter-mark').forEach(el=>reveal(el,{y:20},.25));
            const hero=document.querySelector('.hero-building');
            if(hero)reveal(hero,{x:travel,scale:.93},.1);
            document.querySelectorAll('.hero-art .callout').forEach((el,i)=>reveal(el,{x:25},.35+i*.12));
            // Architectural plate travels with the page, while its text stays readable.
            document.querySelectorAll('.manifesto figure img,.editorial-hero>img,.request-layout>div>img').forEach((el,i)=>{
              gsap.fromTo(el,{x:i%2?-travel:travel,y:24,scale:.96},{x:0,y:-12,scale:1.025,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:.7,invalidateOnRefresh:true}});
            });
          }
          document.querySelectorAll('.footer-top>div').forEach((el,i)=>reveal(el,{y:32},i*.08));
          const progress=document.querySelector('.scroll-progress');
          if(progress)gsap.fromTo(progress,{scaleX:0},{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:true}});
          refresh();
        });
      });
      // Keyboard users never have to wait for a reveal to reach a focused control.
      const focus=e=>focusAnimations.forEach((animation,el)=>{if(el.contains(e.target))animation.progress(1)});
      document.addEventListener('focusin',focus);
      document.addEventListener('toggle',refresh,true);
      const images=[...document.querySelectorAll('main img,footer img')];
      images.forEach(img=>img.addEventListener('load',refresh));
      return()=>{
        disposed=true;
        document.removeEventListener('focusin',focus);
        document.removeEventListener('toggle',refresh,true);
        images.forEach(img=>img.removeEventListener('load',refresh));
        context.revert();
        splits.forEach(split=>split.revert());
        gsap.ticker.remove(tick);
        lenis.off('scroll',ScrollTrigger.update);
        lenis.destroy();
        if(activeScroll===lenis)activeScroll=null;
        document.documentElement.classList.remove('scroll-choreography');
      };
    });
    return()=>media.revert();
  },[path,enabled]);
}
