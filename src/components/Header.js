import { useState } from "react";

//Below is the React element
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlbz7UxtD02us1-KilNMvEeHSG5jP3L6Yyw&s"
      alt="logo"
    />
  </a>
);

//React Component
// Functional Component
const Header = () => {
  const [isLoggedIn, setIsLoggIn] = useState(false);

  return (
    <div className="header">
      {/* Component Composition */}
      <Title />
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
