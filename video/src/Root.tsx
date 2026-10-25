import {Composition,Folder} from 'remotion';
import {ThroughTheFacade} from './ThroughTheFacade';
import {Facade} from './scenes/Facade';
import {Interior} from './scenes/Interior';
import {Building} from './scenes/Building';

export const RemotionRoot=()=> <>
 <Composition id="BeyondTheFacade" component={ThroughTheFacade} durationInFrames={360} fps={30} width={1920} height={1080}/>
 <Composition id="BeyondTheFacadeMobile" component={ThroughTheFacade} durationInFrames={360} fps={30} width={900} height={1600}/>
 <Folder name="Scenes">
  <Composition id="Facade" component={Facade} durationInFrames={114} fps={30} width={1920} height={1080}/>
  <Composition id="Interior" component={Interior} durationInFrames={180} fps={30} width={1920} height={1080}/>
  <Composition id="Building" component={Building} durationInFrames={126} fps={30} width={1920} height={1080}/>
 </Folder>
</>;
