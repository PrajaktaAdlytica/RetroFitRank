import {AbsoluteFill, CanvasImage, Easing, interpolate, interpolateColors, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const Building = () => {
  const frame=useCurrentFrame();
  const {fps,width,height}=useVideoConfig();
  const portrait=height>width;
  return <AbsoluteFill style={{overflow:'hidden',backgroundColor:interpolateColors(frame,[0,1.65*fps],['#08142d','#fffef4'])}}>
    <CanvasImage src={staticFile('plates/building.png')} premountFor={fps} style={{
      position:'absolute',width:portrait?'112%':'65%',height:portrait?'65%':'105%',objectFit:'contain',
      right:portrait?'-7%':'-2%',bottom:portrait?'7%':'-6%',transformOrigin:'50% 60%',
      scale:interpolate(frame,[0,3.6*fps],[1.28,1],{extrapolateRight:'clamp',easing:Easing.bezier(.22,1,.36,1)}),
      opacity:interpolate(frame,[0,.65*fps],[0,1],{extrapolateRight:'clamp'}),
    }}/>
    <AbsoluteFill style={{opacity:interpolate(frame,[1.2*fps,2.5*fps],[0,.12],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}),backgroundImage:'linear-gradient(#003cff 1px,transparent 1px),linear-gradient(90deg,#003cff 1px,transparent 1px)',backgroundSize:'160px 160px',maskImage:'linear-gradient(transparent,black)'}}/>
  </AbsoluteFill>;
};
