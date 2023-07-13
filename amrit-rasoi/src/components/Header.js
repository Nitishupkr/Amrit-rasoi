
// Title component for display logo
const Title = () => (
  <a href="/">
  
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <h1 className="logo-header">अमृत -Rasoi</h1>
      <Title />
      <div className="nav-items">
        
        <ul>
        
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;