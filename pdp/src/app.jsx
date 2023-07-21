import React from "react";
import "./index.scss";
const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

const App = () => {
  return (
    <div>
      <React.Suspense fallback="Loading header">
        <Header />
        <div>This is PDP Content</div>
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default App;
