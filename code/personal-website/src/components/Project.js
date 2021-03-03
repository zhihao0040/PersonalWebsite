import '../App.css';

const Project = ({title, description, image_url}) => {
    return (
      <div className="Project">
        <div className="project-flex-item-img">
            {/* <iframe className="project-image" src={image_url} alt={title}></iframe> */}
            <img className="project-image" src={image_url} alt={title}></img>
        </div>
        <div className="project-flex-item-others">
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
        </div>
      </div>
    )
  }

  export default Project