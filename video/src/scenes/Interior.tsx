import {AbsoluteFill, CanvasImage, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

// The trace is editorial annotation, not simulated building telemetry.
export const Interior = () => {
  const frame = useCurrentFrame();
  const {fps,width,height} = useVideoConfig();
  const portrait = height > width;
  const progress=interpolate(frame,[.55*fps,4.8*fps],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <AbsoluteFill style={{backgroundColor:'#08142d',overflow:'hidden'}}>
    <AbsoluteFill style={{transformOrigin:'54% 58%',scale:interpolate(frame,[0,6*fps],[1.02,1.16],{extrapolateRight:'clamp'})}}>
      <CanvasImage src={staticFile('plates/interior.png')} premountFor={fps} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:portrait?'54% 50%':'50% 50%'}}/>
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" style={{position:'absolute',width:'100%',height:'100%',overflow:'visible'}}>
        <path d={portrait?'M -30 820 L 410 820 L 840 730 L 1060 664 L 1060 638':'M -30 760 L 470 760 L 810 760 L 940 675 L 1028 664 L 1028 638'} fill="none" stroke="#ffe100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-progress}/>
        <circle cx={portrait?1060:1028} cy="638" r="7" fill="#ffe100" opacity={interpolate(progress,[.93,1],[0,1],{extrapolateLeft:'clamp'})}/>
        <circle cx={portrait?1060:1028} cy="638" r="20" fill="none" stroke="#ffe100" strokeWidth="1" opacity={interpolate(progress,[.96,1],[0,.6],{extrapolateLeft:'clamp'})}/>
      </svg>
    </AbsoluteFill>
    <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(5,14,35,.45),transparent 65%)'}}/>
  </AbsoluteFill>;
};
