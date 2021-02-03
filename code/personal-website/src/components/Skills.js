import '../App.css';
import MenuBar from './MenuBar'
// Talk about Academic results, show academic transcript, show IELTS, show courses -> Explain the courses. Maybe create a jsx for course. and wrap it in list. Maybe.

const Skills = () => {
    return (
      <div className="Skills">
        <MenuBar active={3}></MenuBar>
        <h1>Skills</h1>
        <div className="skills-container">
          <div></div>
          <div></div>

        </div>
      </div>
    )
  }

  export default Skills;