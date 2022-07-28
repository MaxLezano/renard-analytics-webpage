import Navbar from './Navbar/Navbar';
import './Header.css';

function Header({className}){
  return(
    <div className={className}>
      <Navbar />
    </div>
  );
}

export default Header;