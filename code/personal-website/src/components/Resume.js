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
          <a onClick = {pdfButtonHandler}>PDF</a>
          <a onClick = {htmlButtonHandler}>HTML</a>
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
          <a onClick = {pdfButtonHandler}>PDF</a>
          <a onClick = {htmlButtonHandler}>HTML</a>
        </div>
        <div className="pdf-viewer">
         <embed src="https://zhihao0040.github.io/PersonalWebsite/code/personal-website/public/zhihao0040Resume.pdf" width="800px" height="1100px" />
        </div>
       
      </div>
    )
  }
}

export default Resume;
