import '../App.css';
import MenuBar from './MenuBar'

function Contacts() {
  return (
    <div className="Contacts">
        <MenuBar active={4}></MenuBar>
        <div className="contacts-section"></div>
    </div>
  );
}

export default Contacts
