import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import Footer from './Footer/Footer';
import Loader from './Loader/Loader';
// import css from './'

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 16px',

        // height: '100vh',
        position: 'relative',
        //wrapper
        // minHeight: '100%',
        // display: 'flex',
        // flexDirection: 'column',
      }}
      // className="wrapper"
    >
      <AppBar />
      {/* <Loader /> */}
      <Suspense fallback={<Loader />}>
        <Outlet
        // style={{
        //   flex: '1 1 auto',
        // }}
        // className="main"
        />
      </Suspense>
      <Footer />
      {/* <p>FOOTER</p> */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
