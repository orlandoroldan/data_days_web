import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className='menu'>
        <ul>
          <li><Link to="/">Inici</Link></li>
          <li><Link to="/agenda">Agenda</Link></li>
          <li><Link to="/presentacio">FAQs</Link></li>
          <li><Link to="/quisom">Qui som?</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;