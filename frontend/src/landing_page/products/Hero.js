import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1 className="">Technology</h1>
        <h3 className="fs-4 text-muted mt-3">
          Sleek, modern and intutive trading platforms
        </h3>
        <p classname='mt-3 mb-5'>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
