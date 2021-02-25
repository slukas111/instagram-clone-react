import React, { useState, useEffect  } from 'react';
import './App.css';
import Posts from './Posts';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';


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
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [user, setUser] = useState(null);

useEffect(() => {
  const deleteUser = auth.onAuthStateChanged((authUser) =>{
    if (authUser) {
      // user has logged in..
      console.log(authUser);
      setUser(authUser);
    }else{
      // user has logged off.. 
      setUser(null);
    }
  })
  return () => {
    deleteUser();
  }
}, [user, username]);

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
  const signUp = (event) => {
    event.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message));
  setOpen(false);
  }

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .catch((error) => alert(error.message))
    setOpenSignIn(false);
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
              <Button type="submit" onClick={signUp}>Sign Up</Button>
            </form>
          </div>
        </Modal>

        <Modal
          open={openSignIn}
          onClose={() => setOpenSignIn(false)}
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
              <Button type="submit" onClick={signIn}>Login</Button>
            </form>
          </div>
        </Modal>

      
      <div className="app__header">
        <img 
        src="/images/insta-logo.png"
        className="app__headerImage"
        alt="Instagram Logo" 
        />
      { user ? (
                <Button onClick={() => auth.signOut()}>Logout</Button>
              ): (
      <div className="app__loginContainer">
        <Button onClick = {() => setOpenSignIn(true)}>Login</Button>
        <Button onClick = {() => setOpen(true)}>Sign Up</Button>
      </div>
              )}
      </div>
    <div className="app__posts">

        {
          posts.map(({id, post}) => (
            <Posts key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
            ))
          }
    </div>
            {user?.displayName ? (
                    <ImageUpload username={user.displayName} />
                  ): (
                    <h3>Sorry, you need to login to upload</h3>
                  )}
          </div>
);
}

export default App;
