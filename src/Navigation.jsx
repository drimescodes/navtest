import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ navigation }) => {
  const [currentLevel, setCurrentLevel] = useState(navigation);
  const [navStack, setNavStack] = useState([]);
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.url) {
      navigate(item.url);
    } else if (item.children) {
      setNavStack([...navStack, { level: currentLevel, title: item.title }]); // Store both the level and title
      setCurrentLevel(item.children);
    }
  };

  console.log('navStack', navStack);
  console.log('currentLevel', currentLevel);
  const handleBack = () => {
    if (navStack.length > 0) {
      const newStack = [...navStack];
      const { level } = newStack.pop(); // Pop the last level from the stack
      setCurrentLevel(level);
      setNavStack(newStack);
      navigate(-1); // Navigate back in history since I wasn't told what to do with the url on the back button
    }
  };

  const getParentTitle = () => {
    if (navStack.length > 0) {
      return navStack[navStack.length - 1].title; // Get the title of the last parent in the stack
    }
    return null;
  };

  return (
    <div className="mobile-navigation">
      {navStack.length > 0 && (
        <div className="parent-navigation">
          <button onClick={handleBack} className="back-button">
            Back
          </button>
          <h3>{getParentTitle()}</h3>
        </div>
      )}
      <ul>
        {currentLevel.map((item, index) => (
          <li key={index} onClick={() => handleClick(item)} style={{cursor:'pointer'}}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
