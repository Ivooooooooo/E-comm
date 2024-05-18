import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import "./NavBarComponent.css";

const NavBarComponent = ({ 
  logo = "Logo", 
  items 
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">{logo}</a>
        </div>
        <ul className="navbar-menu">
          {items.map((item, index) => (
            <li className="navbar-item" key={index}>
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
        <CartWidgetComponent />
      </div>
    </nav>
  );
};

export default NavBarComponent;
