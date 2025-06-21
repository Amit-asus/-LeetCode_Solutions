import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  console.log("first")


  return (
    <>
      <Carousel imagesPerSlide={2} imageLimit={10} />
    </>
  );
}

export default App;
