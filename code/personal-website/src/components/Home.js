import '../App.css';
import MenuBar from './MenuBar'
// days since i have started coding: (today date - 09/12/2017) days`
// graduadted: t`oday date - 31/12/2020

// Who I am

// Personal values

// Interests and Passion - Teaching - Youtube
// Artificial intelligence
// Badminton
// games
// books and mangas - Stormlight Archive & Doraemon - talk about Syl and  Doraemon -> AI 
const Home = () => {
    return (
      <div className="Home">
        <MenuBar active={0}></MenuBar>
        <div className="white-page">
          <h1>Zhi Hao Tan</h1>
          <h2>About</h2>
        </div>

        <div className="home-container">
          <div></div>
          <div></div>

        </div>
      </div>
    )
  }

  export default Home;