import React from "react";
import { useNavigate } from "react-router-dom";
import './index.scss'
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div id="not-found-page">
      <div className="container">
      <div className="flex-container">
  <div className="text-center">
    <h1>
      <span className="fade-in" id="digit1">
        4
      </span>
      <span className="fade-in" id="digit2">
        0
      </span>
      <span className="fade-in" id="digit3">
        4
      </span>
    </h1>
    <h3 className="fadeIn">PAGE NOT FOUND</h3>
    <button onClick={() => navigate('/')}>go back</button>

  </div>
</div>
      </div>
    </div>
  );
};

export default NotFoundPage;
