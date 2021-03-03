import '../App.css';
import MenuBar from './MenuBar'
import Project from './Project'
import {useState, useEffect} from 'react' 
import {HashLink as HLink} from 'react-router-hash-link'

const Projects = () => {
    return (
      <div className="Projects">
        <MenuBar active={2}></MenuBar>
        <h1 className="page-name">Projects</h1>
        <div className="white-page">
          {/* <Project title="Ukkonen's Algorithm" description="An implementation of the Ukkonen's Algorithm to achieve O(N) suffix tree creation for O(M) pattern search where N is length of text and M is length of pat." image_url="https://drive.google.com/file/d/1Oc8Wnc_Y3GCh95SweohI97wUy2lN0X9Q/preview"></Project> */}
          <Project title="Ukkonen's Algorithm" description="An implementation of the Ukkonen's Algorithm to achieve O(N) suffix tree creation for O(M) pattern search where N is length of text and M is length of pat." image_url="../../public/Ukkonen_Suffix_Tree_eg"></Project>
          <p>Hello</p>
        </div>
      </div>
    )
  }

  export default Projects