
// Title component for display logo
const Title = () => (
  <a href="/">
  
  </a>
);

const SmallNavbar = () => {
  return (
    <div className="small-navbar">
      <ul>
        <li><a href="/">Scaling serverless Postgres Preview</a></li>
        <li><a href="/about">|</a></li>
        <li><a href="/contact">Learn More</a></li>
      </ul>
    </div>
  );
};


// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    
    <div className="header">
      <SmallNavbar/>
      <h1 className="logo-header">अमृत-Rasoi</h1>
      
      <Title />
      <div className="nav-items">
        
        <ul>
        
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li><button
            text="Click me!"
           onClick={()=>alert("button clicked")}
           className="button-3"
           >Buy Now</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;