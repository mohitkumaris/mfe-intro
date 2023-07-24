import React, { Suspense } from "react";
import "./index.scss";
const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

const App = () => {
  return (
    <div>
      <Suspense fallback="Loading header">
        <Header />
        <div>This is PDP Content</div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
