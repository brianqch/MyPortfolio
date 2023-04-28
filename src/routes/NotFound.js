import "./NotFound.css";
import React from "react";

function NotFound() {
  return (
    <div className="NotFound">
      <h3 className="NotFound_title">Sorry, I couldn't find this page :(</h3>
      <img className="NotFound_image" src="/assets/error.png" alt="" />
    </div>
  );
}

export default NotFound;
