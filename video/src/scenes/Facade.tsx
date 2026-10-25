import {AbsoluteFill, CanvasImage, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const Facade = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor:'#08142d', overflow:'hidden'}}>
    <CanvasImage src={staticFile('plates/facade.png')} premountFor={fps} style={{
      width:'100%',height:'100%',objectFit:'cover',objectPosition:'58% 50%',
      transformOrigin:'65% 53%',
      scale:interpolate(frame,[0,3.8*fps],[1.03,1.16],{extrapolateRight:'clamp'}),
      translate:interpolate(frame,[0,3.8*fps],['0px 0px','-20px 0px'],{extrapolateRight:'clamp'}),
    }}/>
    <AbsoluteFill style={{background:'linear-gradient(90deg,rgba(5,14,35,.7),transparent 72%)'}}/>
    <AbsoluteFill style={{backgroundColor:'#08142d',opacity:interpolate(frame,[0,.75*fps],[.62,0],{extrapolateRight:'clamp'})}}/>
  </AbsoluteFill>;
};
