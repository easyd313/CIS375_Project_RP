import './App.css';
import start_button from './assets/start_button.png';
import notepad_icon from './assets/notepad_icon.jpg';


function App() {
  return (
    <div className="background">
      <img src={notepad_icon} alt="notepad" className="notepad_icon" />
      <div className="notepad">
        <div className="topBar"></div>
      </div>

      <div className="start_menu">
        <img src={start_button} alt="start button" className="start_button" />
      </div>
    </div>
  );
}

export default App;
