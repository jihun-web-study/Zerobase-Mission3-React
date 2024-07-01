import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import Nav from "./components/layout/nav/Nav";
import Footer from "./components/layout/footer/Footer";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        {/* Nav를 렌더링 하세요 */}
        <Nav />
        <section className="main pt-16 min-h-[calc(100vh-4rem-224px)]">
          <Router />
        </section>
        {/* Footer를 렌더링 하세요 */}
        <Footer />
      </section>
      <Drawer />
    </BrowserRouter>
  );
};

export default App;
