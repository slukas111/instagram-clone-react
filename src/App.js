import React, { useState, useEffect  } from 'react';
import './App.css';
import Posts from './Posts';
import { db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';


function getModalStyle() {
  const top = 50;
  const left = 50;
  
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function App() {
  // firebase database posts
  const [posts, setPosts] = useState([]);
  // modal defined
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  // Sign Up within Modal
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 


  //  run once database collection, maping posts + id  
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);
  
  // sign up and login functions
  const signUp = (e) => {
    
  }
  

  return (
    <div className="app">
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              >
      <div style={modalStyle} className={classes.paper}>
      <form className="app__signup">
        <center>
          <img 
            src="/images/insta-logo.png"
            className="app__headerImage"
            alt="Instagram Logo" 
            />
          </center>

          <Input 
                placeholder="username"
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                />
              <Input 
                placeholder="email"
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
              <Input 
                placeholder="password"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
              <Button onClick={signUp}>Sign Up</Button>
            </form>
          </div>
        </Modal>
      
      <div className="app__header">
        <img 
        src="/images/insta-logo.png"
        className="app__headerImage"
        alt="Instagram Logo" 
        />
      </div>
      <Button onClick = {() => setOpen(true)}>Sign Up</Button>

        <h1> Hello,  welcome to instagram! 🚀</h1>
        {
          posts.map(({id, post}) => (
            <Posts key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
            ))
          }
          </div>

);
}

export default App;
