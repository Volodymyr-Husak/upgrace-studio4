import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { Layout } from "./Layout";
const MainPage = lazy(() => import("../pages/Main"));
const OurWorksPage = lazy(() => import("../pages/OurWorks"));
const PricePage = lazy(() => import("../pages/Price"));
const MastersPage = lazy(() => import("../pages/Masters"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/our-works" element={<OurWorksPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/masters" element={<MastersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
