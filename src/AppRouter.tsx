import ProductDetails from 'pages/ProductDetails/ProductDetails';
import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Home/Help/Help'));
const AppRouter: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
