import './App.css';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// context
import { AuthProvider } from './contexts/AuthContext';

// hooks
import { useAuthentication } from './hooks/useAuthentication';
import Post from './pages/Post/Post';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return (
      <div className="loadingScreen">
        <p>Carregando</p>
        <svg
          version="1.1"
          id="L5"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
          xmlSpace="preserve"
        >
          <circle fill="#000" stroke="none" cx="6" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 15 ; 0 -15; 0 15"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="#000" stroke="none" cx="30" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 10 ; 0 -10; 0 10"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="#000" stroke="none" cx="54" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      </div>
    );
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              ></Route>
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              ></Route>
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              ></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
