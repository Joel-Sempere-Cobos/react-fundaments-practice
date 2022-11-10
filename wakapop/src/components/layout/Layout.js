import { NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children, onLogout, ...props }) => {
  return (
    <div>
      <header className="header">
        <div className="header-logo">logo</div>
        <div className="header-navbar">
          <NavLink className="navlinks" to="/adverts/" end>
            Adverts list
          </NavLink>
          <NavLink className="navlinks" to="/adverts/new">
            New advert
          </NavLink>
        </div>
        <div className="header-logout">
          {' '}
          <button onClick={onLogout}>Logout</button>
        </div>
      </header>
      {children}
      <footer className="footer">Joël Sempere Cobos 2022</footer>
    </div>
  );
};

export default Layout;
