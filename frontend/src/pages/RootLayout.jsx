import { Outlet } from 'react-router-dom';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
