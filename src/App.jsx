import Testimonails from "./Testimonails";
import tanya from "/src/assets/image-tanya.jpg";
import john from "/src/assets/image-john.jpg";
function App() {
  const details = [
    {
      id: 1,
      image: tanya,
      name: "Tanya Sinclair",
      profession: "UX Engineer",
      feedback:
        " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    },
    {
      id: 2,
      image: john,
      name: "John Tarkpor",
      profession: "Junior Front-end Developer",
      feedback:
        "  “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    },
  ];
  return (
    <>
      <Testimonails details={details} />
    </>
  );
}

export default App;
