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
        <h1> Hello,  welcome to instagram! :rocket</h1>
      <Posts username="user1" caption="dummy text for post 1" imageUrl="https://daman.co.id/daman.co.id/wp-content/uploads/2016/06/10-male-models-to-follow-on-instagram_tomas-skoloudik-1024x1024.jpg"/>
      <Posts username="user2" caption="dummy text for post 2" imageUrl="http://www.modzik.com/wp-content/uploads/2015/05/Hot-Men-Coffee-Instagram-Pictures-6.jpg"/>
      <Posts username="user3" caption="dummy text for post 3" imageUrl="https://qnews.com.au/wp-content/uploads/2019/04/19-04-09-Queer-Eye-Jess.jpeg"/>
    </div>


  );
}

export default App;
