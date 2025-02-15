import "./index.css";
import tanya from "/src/assets/image-tanya.jpg";
import john from "/src/assets/image-john.jpg";
function Testimonails() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="image-container">
          <div className="image">
            <img src={tanya} alt="" />
          </div>
          <div className="button">
            <div className="prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  stroke-width="3"
                  d="M11 1L3 9l8 8"
                />
              </svg>
            </div>
            <div className="next">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  stroke-width="3"
                  d="M2 1l8 8-8 8"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-container">
          <p className="qoute">
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”
          </p>
          <div className="info">
            <p className="name">Tanya Sinclair</p>
            <p className="profession">UX Engineer</p>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default Testimonails;
