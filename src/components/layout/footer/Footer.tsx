import Banner from "./components/Banner";
import Payments from "./components/Payments";
import Socials from "./components/Socials";
import Copyright from "./components/Copyright";

const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <Banner />
      <Payments />
      <Socials />
      <Copyright />
    </footer>
  );
};

export default Footer;
