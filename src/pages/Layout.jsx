import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav className='menu'>
        <ul>
          <li><Link to="/">Inici</Link></li>
          <li><Link to="/agenda">Agenda</Link></li>
          <li><Link to="/presentacio">FAQs</Link></li>
          <li><a href='https://form.typeform.com/to/jvZTlP41' target='_blank' rel='noreferrer'>Apunta&apos;t</a></li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <p><b>© 2024 Associació d&apos;Estudiants de Dades</b></p>
        <p className='small-text'>Logo: Sohl-Dickstein, J. (2024). The boundary of neural network trainability is fractal. arXiv preprint arXiv:2402.06184.</p>
      </footer>
    </>
  );
};

export default Layout;