import "./index.css";
import { useState } from "react";
function Testimonails({ details }) {
  const [index, setIndex] = useState(0);
  const detail = details[index];
  const handleClickNext = () => {
    setIndex(index === details.length - 1 ? index - 1 : index + 1);
  };
  const handleClickPrev = () => {
    setIndex(index === 0 ? index + 1 : index - 1);
  };
  return (
    <div className="wrapper">
      <div className="container ">
        <div className="image-container">
          <div className="image">
            <img src={detail.image} alt="" />
          </div>
          <div className="button">
            <div className="prev" onClick={handleClickPrev}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  strokeWidth="3"
                  d="M11 1L3 9l8 8"
                />
              </svg>
            </div>
            <div className="next" onClick={handleClickNext}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  strokeWidth="3"
                  d="M2 1l8 8-8 8"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-container">
          <p className="qoute">{detail.feedback}</p>
          <div className="info">
            <p className="name">{detail.name}</p>
            <p className="profession">{detail.profession}</p>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default Testimonails;
