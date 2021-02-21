import './App.css';
import Posts from './Posts';


function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img 
        src="/images/insta-logo.png"
        className="app__headerImage"
        alt="" 
        />

      </div>
        <h1> Hello, username welcome to instagram! :rocket</h1>
      <Posts />
      <Posts />
      <Posts />
    </div>


  );
}

export default App;
