import { Link } from "react-router-dom";
import Facebook from "@/assets/img/svg/socials/facbook.svg?react";
import Instagram from "@/assets/img/svg/socials/instagram.svg?react";
import Github from "@/assets/img/svg/socials/github.svg?react";

const Socials = () => {
  const socialList = [
    { dataTip: "facebook", Icon: Facebook, to: "https://www.facebook.com/0base" },
    { dataTip: "instagram", Icon: Instagram, to: "https://www.instagram.com/zerobase.official" },
    { dataTip: "github", Icon: Github, to: "https://github.com/zerobase-school" },
  ];

  return (
    <div className="grid grid-flow-col gap-4">
      {socialList.map(({ Icon, dataTip, to }, idx) => (
        <Link
          key={idx}
          rel="noreferrer noopener external"
          data-tip={dataTip}
          className="tooltip ml-1"
          to={to}
          target="_blank"
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
