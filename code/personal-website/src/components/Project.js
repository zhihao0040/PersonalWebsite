import '../App.css';

const Project = ({title, description, image_url}) => {
    return (
      <div className="Project">
        <div className="project-flex-item">
            <iframe className="proejct-image" src={image_url} alt={title}></iframe>
        </div>
        <div className="project-flex-item">
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
        </div>
      </div>
    )
  }

  export default Project