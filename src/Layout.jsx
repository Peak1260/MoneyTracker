import NavBar from './NavBar';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="pt-16 md:pt-20">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;