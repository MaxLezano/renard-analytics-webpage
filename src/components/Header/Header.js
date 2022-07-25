import Navbar from './Navbar/Navbar';
import './Header.css';

function Header({ className }){
  return(
    <div className={`header ${className}`}>
      <Navbar />
    </div>
  );
}

export default Header;