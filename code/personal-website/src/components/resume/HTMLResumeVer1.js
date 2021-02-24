import './assets/css/resume.css';
import img1 from './assets/images/kisspng-computer-icons-linkedin-5aff0283e54964.1704227815266617639392.png'
import img2 from './assets/images/mailblacktransparent.png'
import img3 from './assets/images/phone.png'
import img4 from './assets/images/maps.png'
import img5 from './assets/images/www.png'

const HTMLResume = () => {
    return (
        <div className="resume-page">
            <div className="resume-start">
                <div className="resume-name-intro">
                    <h1 className="resume-name">Zhi Hao Tan</h1>
                    <div className="resume-intro">
                        <p>Zhi Hao is a computer science graduate from Monash
                            University and a recipient of Monash High Achievers
                            Award who is eager to apply his passion and skills in
                            computer programming and software development
                            experience to help enable businesses to solve complex
                            problems.
                        </p>
                    </div>
                </div>
                <div className="resume-contact-div">
                    <ul className="resume-contact">
                        <li><a href="https://www.linkedin.com/in/zhi-hao-tan-233b56199">https://www.linkedin.com/in/zhi-hao-tan-233b56199</a> <img src={img1} alt="linkedin logo" width="15px" height="15px"/></li>
                        <li>ztan0040@gmail.com <img src={img2} alt="email logo" width="15px" height="15px"/></li>
                        <li>+61 491 123 727 <img id="resume-phone-img" src={img3} alt="phone logo" width="15px" height="15px"/></li>
                        <li>57A Estelle Street, Bulleen, VIC 3105 <img src={img4} alt="address logo" width="15px" height="15px"/></li>
                        <li><a href="https://github.com/zhihao0040">https://github.com/zhihao0040</a> <img src={img5} alt="internet logo" width="15px" height="15px"/></li>
                    </ul>
                </div>
            </div>
            <hr id="resume-hr"></hr>
            <div className="resume-body">
                <div className="resume-body-left-half">
                    <h2 className="resume-section-name">EXPERIENCE</h2>
                    <h3 className="resume-section-entry">Research Position, Monash University IT Dept.<p class="resume-date">(12/2019 - 06/2020)</p></h3>
                    <p className="resume-section-entry-desc">Developed a machine learning capable mobile app to predict if a patient will have complications when taking a medication.</p>
                    <ul className="resume-section-entry-points-list">
                        <li>Created the pipeline and defined the work-flow for the development of the application.</li>
                        <li>Researched methods to efficiently pull bulk data from the FHIR server.</li>
                        <li>Learned the use of Android Studio for Android app development along with the use of TenslowFlow and Keras.</li>
                        <li>Learned to research and learn new skills.</li>
                    </ul>
                    <h3 className="resume-section-entry">International Hackathon Team Leader, Hack Upstate XV<p class="resume-date">(12/2020 - 12/2020)</p></h3>
                    <p className="resume-section-entry-desc">Created a relationship advice app using Flutter and powered by artificial intelligence.</p>
                    <ul className="resume-section-entry-points-list">
                        <li>Led the back-end development team (4 members).</li>
                        <li>Integrated the front-end with the back-end.</li>
                        <li>Learned to use Flutter and Dart to create a cross-platform application.</li>
                        <li>Learned about the software development life-cycle practically.</li>
                        <li>Learned to work in a relatively big team (5 members in the back-end, and 7 in the front-end).</li>
                    </ul>
                    <h3 className="resume-section-entry">Team Leader, Computer Science Project<p class="resume-date">(07/2020 - 11/2020)</p></h3>
                    <p className="resume-section-entry-desc">Created a coronary artery disease prediction web app. <a href="https://cadprediction.herokuapp.com">https://cadprediction.herokuapp.com</a></p>
                    <ul className="resume-section-entry-points-list">
                        <li>Led a team of 3 - allocated tasks, organized meetings, resolved conflicts, and supervised team members' progress.</li>
                        <li>Explored and used a novel feature selection technique.</li>
                        <li>Developed machine learning models to embed inside the web app.</li>
                        <li>Learned to work independently.</li>
                        <li>Learned how to work on a project from scratch whilst applying knowledge obtained from all other units.</li>
                    </ul>
                    <h2 className="resume-section-name">EDUCATION</h2>
                    <h3 className="resume-section-entry">Bachelor of Computer Science<p class="resume-education-location">Monash University</p></h3>
                    <div className="resume-date-score">
                        <div className="resume-date resume-date-education"><p>(01/2018 - 12/2020)</p></div>
                        <div className="resume-education-average-score"><p>GPA: 3.917/4.000</p></div>
                    </div>
                    <div className="resume-secondary-score">
                        <p>WAM: 85.615</p>
                    </div>
                    <p className="resume-education-description">High Distinction(HD) Average.</p>
                    <h3 className="resume-section-entry">IELTS (International English Language Testing System)</h3>
                    <div className="resume-date-score">
                        <div className="resume-date resume-date-education"><p>(20/01/2020)</p></div>
                        <div className="resume-education-average-score"><p>Band: 8.5</p></div>
                    </div>
                    <div className="resume-education-split-dot-points">
                        <div className="resume-dot-points-left">
                            <ul className="resume-section-entry-points-list resume-left-half">
                                <li>Writing: 7.0</li>
                                <li>Reading: 9.0</li>
                            </ul>
                        </div>
                        <div className="resume-dot-points-right">
                            <ul className="resume-section-entry-points-list resume-right-half">
                                <li>Speaking: 8.0</li>
                                <li>Listening: 9.0</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="resume-body-right-half">
                    <h2 className="resume-section-name" id="resume-awards">AWARDS AND ACHIEVEMENTS</h2>
                    <ul className="resume-medium-list resume-section-entry-points-list">
                        <li>Monash International Merit Scholarship <p className="resume-year">(2020)</p></li>
                        <li>Top 12% in Adv. Algo and Data Structures Cohort <p className="resume-year">(2020)</p></li>
                        <li>Monash High Achievers Award <p className="resume-year">(2018)</p></li>
                        <li>High Distinction in National Chemistry Quiz, Malaysia <p className="resume-year">(2015)</p></li>
                        <li>Silver Medal in Kangaroo Maths Competition <p className="resume-year">(2015)</p></li>
                    </ul>
                    <h2 className="resume-section-name">VOLUNTEERING EXPERIENCE</h2>
                    <h3 className="resume-section-entry">Volunteer, Salvation Army<p className="resume-date">(01/2020 - 01/2020)</p></h3>
                    <ul className="resume-section-entry-points-list">
                        <li>Collected donations for bush-fire victims and helped to raise a cumulative total of $8.4m.</li>
                        <li>Learned to communicate with a variety of people.</li>
                    </ul>
                    <h3 className="resume-section-entry">Business Consultant, Study Melbourne Live Project<p className="resume-date">(11/2019 - 01/2020)</p></h3>
                    <ul className="resume-section-entry-points-list">
                        <li>Analysed market penetration into India for Young Change Agents in a team of 5 as Study Melbourne Live Project's business consultant. </li>
                        <li>Learned about working in a professional environment and learned to find out what users want.</li>
                    </ul>
                    <h2 className="resume-section-name" id="resume-skills">SKILLS</h2>
                    <h2 className="resume-section-name">PROGRAMMING LANGUAGES</h2>
                    <ul className="resume-medium-list resume-section-entry-points-list">
                        <li>JavaScript: React.js, Node.js, Mocha.js, Material UI </li>
                        <li>Python: SkLearn, Pandas, TensorFlow </li>
                        <li>C: OpenMPI, POSIX, OpenMP</li>
                        <li>Java</li>
                        <li>TypeScript</li>
                        <li>SQL</li>
                        <li>HTML/CSS</li>
                    </ul>
                    <h2 className="resume-section-name">LANGUAGES</h2>
                    <ul className="resume-medium-list resume-section-entry-points-list">
                        <li>English: Native </li>
                        <li>Mandarin: Fluent but low literacy</li>
                        <li>Malay: Fluent and literate</li>
                    </ul>
                </div>
                <div className="resume-bottom">
                    <br id="resume-separator"></br>
                    <h2 className="resume-section-name resume-bottom-name">INTERESTS</h2>
                    <ul className="resume-interests-entry">
                        <li>Machine Learning</li>
                        <li>Video Games</li>
                        <li>Philosophy</li>
                        <li>Badminton</li>
                        <li>Cybersecurity</li>
                        <li>Artificial Intelligence</li>
                        <li>Animations</li>
                    </ul>
                    <h2 className="resume-section-name resume-bottom-name">REFERENCES</h2>
                    <p id="resume-references-entry">Available Upon Request</p>
                </div>
            </div>
        </div>

    )
  }

  export default HTMLResume;