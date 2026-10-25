import {AbsoluteFill,useVideoConfig} from 'remotion';
import {TransitionSeries,linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {Facade} from './scenes/Facade';
import {Interior} from './scenes/Interior';
import {Building} from './scenes/Building';

export const ThroughTheFacade=()=>{
 const {fps}=useVideoConfig();
 return <AbsoluteFill style={{backgroundColor:'#08142d'}}>
  <TransitionSeries>
   <TransitionSeries.Sequence name="01 — The facade" durationInFrames={3.8*fps} premountFor={fps}><Facade/></TransitionSeries.Sequence>
   <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:.8*fps})}/>
   <TransitionSeries.Sequence name="02 — Beyond the surface" durationInFrames={6*fps} premountFor={fps}><Interior/></TransitionSeries.Sequence>
   <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:1.2*fps})}/>
   <TransitionSeries.Sequence name="03 — A clearer view" durationInFrames={4.2*fps} premountFor={fps}><Building/></TransitionSeries.Sequence>
  </TransitionSeries>
 </AbsoluteFill>;
};
