import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav className='menu'>
        <ul>
          <li><Link to="/">Inici</Link></li>
          <li><Link to="/agenda">Agenda</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
          <li><a href='https://form.typeform.com/to/jvZTlP41' target='_blank' rel='noopener'>Apunta&apos;t</a></li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <a href='https://instagram.com/datastudents/' target='_blank' rel='noopener'>Instagram</a><br />
        <a href='https://linkedin.com/company/data-students' target='_blank' rel='noopener'>LinkedIn</a><br />
        <a href='https://youtube.com/@datastudents' target='_blank' rel='noopener'>YouTube</a><br />
        <a href='https://twitter.com/datastudents' target='_blank' rel='noopener'>X (Twitter)</a><br />
        <br />
        <p><b>© 2024 Associació d&apos;Estudiants de Dades</b></p>
        <p className='small-text'>Logo: Sohl-Dickstein, J. (2024). The boundary of neural network trainability is fractal. arXiv preprint arXiv:2402.06184.</p>
      </footer>
    </>
  );
};

export default Layout;