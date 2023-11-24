import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "layouts/MainLayout";

import HomePaeView from "views/HomePage";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout children={<Outlet />} />}>
          <Route path="/" element={<HomePaeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
