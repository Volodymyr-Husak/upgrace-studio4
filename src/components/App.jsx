import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout';
// import ContactsPage from 'pages/Contacts';
const MainPage = lazy(() => import('../pages/Main'));
const OurWorksPage = lazy(() => import('../pages/OurWorks'));
const PricePage = lazy(() => import('../pages/Price'));
const MastersPage = lazy(() => import('../pages/Masters'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/our-works" element={<OurWorksPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/masters" element={<MastersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        {/* <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        /> */}
      </Route>
    </Routes>
  );
};
