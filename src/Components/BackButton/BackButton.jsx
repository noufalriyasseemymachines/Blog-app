import React from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  function backClick(event) {
    event.preventDefault();
    navigate("/");
  }
  return (
    <div className="back-button">
      <button onClick={backClick}>Back</button>
    </div>
  );
};

export default BackButton;
