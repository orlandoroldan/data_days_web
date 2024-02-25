import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/presentacio">Presentació</Link>
          </li>
          <li>
            <Link to="/quisom">Qui Som?</Link>
          </li>
          <li>
            <Link to="/agenda">Agenda</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;