import { Outlet } from "react-router-dom";
// import { Toaster } from 'react-hot-toast';
import AppBar from "./AppBar/AppBar";
import { Suspense } from "react";
import Footer from "./Footer/Footer";
import Loader from "./Loader/Loader";
// import css from './'

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 16px",
        position: "relative",
      }}
    >
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
