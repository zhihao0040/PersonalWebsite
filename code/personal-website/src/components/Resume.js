import '../App.css';
import HTMLResume from './resume/HTMLResume'
import MenuBar from './MenuBar'


function Resume({resumeVersion, setResumeVersion}) {
  
  const pdfButtonHandler = () => {
    setResumeVersion(1)
  }

  const htmlButtonHandler = () => {
    setResumeVersion(0)
  }

  if (resumeVersion === 0){
    return (
      <div className="Resume">
        <MenuBar active={1}></MenuBar>
        <div className = "version-buttons">
          <button onClick = {pdfButtonHandler}>PDF</button>
          <button onClick = {htmlButtonHandler}>HTML</button>
        </div>
        <div className="resume-body">
          <HTMLResume/>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="Resume">
        <MenuBar active={1}></MenuBar>
        <div className = "version-buttons">
          <button onClick = {pdfButtonHandler}>PDF</button>
          <button onClick = {htmlButtonHandler}>HTML</button>
        </div>
        <div className="pdf-viewer">
         {/* <embed src="../../public/zhihao0040Resume.pdf" width="800px" height="1100px" /> */}
         <iframe title="resume PDF version" src="https://zhihao0040.github.io/PersonalWebsite/zhihao0040Resume.pdf" width="800px" height="1200px"></iframe>
        </div>
       
      </div>
    )
  }
}

export default Resume;
