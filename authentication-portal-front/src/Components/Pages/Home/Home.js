import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.scss'

export const Home = ({ isUserLoggedIn,setUserName,userName,setIsUserLoggedIn}) => {

  const navigate = useNavigate();

  useEffect(() => {

    if (!isUserLoggedIn) {
      navigate('/login');
    }
  }, [isUserLoggedIn, navigate]);
  const handleLogout = () => {
    setIsUserLoggedIn(false);
    setUserName('');
  };

  return (
    <motion.div
      className='p-Home'
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.4 }}
    >
      <div className="welcome-message">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Welcome, {userName}!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          You have successfully logged in.
        </motion.p>
        <motion.button
          className="logout-button"
          onClick={handleLogout}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Logout
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Home;
