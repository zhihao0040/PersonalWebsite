import '../App.css';
import MenuBar from './MenuBar'
import Project from './Project'
import {useState, useEffect} from 'react' 
import {HashLink as HLink} from 'react-router-hash-link'
// import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const [currentFilter, setFilter] = useState([])

    return (
      <div className="Projects">
        <MenuBar active={2}></MenuBar>
        <h1 className="page-name">Projects</h1>
        <div className="white-page">
          {/* <Project title="Ukkonen's Algorithm" description="An implementation of the Ukkonen's Algorithm to achieve O(N) suffix tree creation for O(M) pattern search where N is length of text and M is length of pat." image_url="https://drive.google.com/file/d/1Oc8Wnc_Y3GCh95SweohI97wUy2lN0X9Q/preview"></Project> */}
          <Project filter={currentFilter} type="algorithm" title="Ukkonen's Algorithm Implementation" description="An implementation of the Ukkonen's Algorithm to achieve O(N) suffix tree creation for O(M) pattern search where N is length of text and M is length of pat." image_url="https://zhihao0040.github.io/PersonalWebsite/Ukkonen_Suffix_Tree_eg.png" link="https://github.com/zhihao0040/VariousProjects/tree/main/ukkonensAlgorithm"></Project>
          <Project filter={currentFilter} type="game" title="Asteroid" description="Asteroid game made in TypeScript with Observables while striving for pure code with minimum side effects." image_url="https://zhihao0040.github.io/PersonalWebsite/asteroid.png" link="https://github.com/zhihao0040/VariousProjects/tree/main/asteroid"></Project>
          <Project filter={currentFilter} type="health-IT machine-learning"></Project>
        </div>
      </div>
    )
  }

  export default Projects

  // other projects like the FIT2099 one
  // idea to implement using filter and classes. Basically check if type is not in filter.
  //  if not, add filter-out to className of Project.js. display:None those.