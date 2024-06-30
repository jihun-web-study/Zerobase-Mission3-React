import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="grid grid-flow-col gap-4">
      <Link
        rel="noreferrer noopener external"
        className="link link-hover"
        to="https://zero-base.co.kr/"
        target="_blank"
      >
        제로베이스
      </Link>
    </div>
  );
};

export default Banner;
