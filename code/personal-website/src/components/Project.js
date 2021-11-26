import '../App.css';

const Project = ({filter, type, title, description, image_url, link}) => {
    return (
      <div className={"Project " + type}>
        <div className="project-flex-item-img">
            {/* <iframe className="project-image" src={image_url} alt={title}></iframe> */}
            <img className="project-image" src={image_url} alt={title}></img>
        </div>
        <div className="project-flex-item-others">
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
            <a href={link} target="_blank">{link}</a>
        </div>
      </div>
    )
  }

  export default Project