import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.css';
import { MenuOutlined } from '@ant-design/icons';

function Navbar() {
  //when resize the screen to 600px, nav bar become toggle bar
  //may happen in mobile users
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => { 
    setIsOpen(!isOpen);
  }

  //when after click the links in the toggle bar, the toggle bar would disappear
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false)
  },[location]);

  return (
    <div className="navbar" id={isOpen ? "open" : "close"}>
      <div className="toggleButton" onClick={toggleMenu}>
      <MenuOutlined />
      </div>
      <div className='links'>
        <Link to="/"> Home </Link>
        <Link to="/gallery"> Gallery </Link>
        <Link to="/playGround"> PlayGround </Link>
      </div>
    </div>
  );
}

export default Navbar;