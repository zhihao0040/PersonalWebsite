import '../App.css';
import HTMLResume from './resume/HTMLResume'
import MenuBar from './MenuBar'
// Hi There

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
        <h1 className="page-name">Resume - HTML</h1>
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
        <h1 className="page-name">Resume - PDF</h1>
        <div className = "version-buttons">
          <button onClick = {pdfButtonHandler}>PDF</button>
          <button onClick = {htmlButtonHandler}>HTML</button>
        </div>
        <div className="pdf-viewer">
         {/* <embed src="../../public/zhihao0040Resume.pdf" width="800px" height="1100px" /> */}
         <iframe className="resume-iframe" title="resume PDF version" src="https://zhihao0040.github.io/PersonalWebsite/zhihao0040Resume.pdf" width="800px" height="1200px"></iframe>
         <p className="alternative-to-iframe">Sorry! PDF viewing not supported on small-devices. Download available.</p>
         <a className="alternative-to-iframe" href="https://zhihao0040.github.io/PersonalWebsite/zhihao0040Resume.pdf" download="zhihao0040Resume">DOWNLOAD</a>
        {/* <object data='https://zhihao0040.github.io/PersonalWebsite/zhihao0040Resume.pdf' width="800px" height="1100px">
          <p>Sorry! PDF viewing not supported on small devices!</p>
          <p><a href="https://zhihao0040.github.io/PersonalWebsite/zhihao0040Resume.pdf" download="zhihao0040Resume">Download Instead</a></p>
        </object> */}
        </div>
       
      </div>
    )
  }
}

export default Resume;
