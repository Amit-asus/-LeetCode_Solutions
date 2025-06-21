import React, { useEffect, useState } from "react";
import "./Carousel.css"

function Carousel({ isLoading = false, imageLimit = 5, imagesPerSlide = 1 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  const fetchData = async() => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    const data = await res.json() ; 

    const result = data.map((item) => ({
      id: item.id,
      image: item.image,
      title: item.title,
    }));
    console.log("result" , result) ;

    setImages(result) ;

  }
  //use effect to fetch images
  useEffect(() => {
     fetchData() ;
  }, [imageLimit]);

  //Handle Navigation
  const goToPrev = () => {
    setCurrentIndex((prev) =>
     {  console.log("00" ,images.length)
        console.log(
          "Math.ceil(prev == 0 ? images.length - 1 : prev - 1)",
          Math.ceil(prev == 0 ? images.length - 1 : prev - 1)
        );
        return Math.ceil(prev == 0 ? images.length - 1 : prev - 1)}
    );
  };
  const goToNext = () => {
    setCurrentIndex((prev) =>
      Math.ceil(prev == images?.length - 1 ? 0 : prev + 1)
    );
  };
  console.log("images.length ", Math.ceil(images?.length || 0 / imagesPerSlide));

  const totalSlides = Math.ceil(images?.length || 0 / imagesPerSlide);

  return isLoading || images?.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="image-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {images?.map((image) => {
            console.log("image", image.thumbnailUrl);
            return (
              <div>
                {" "}
                <img
                  className="image"
                  key={image.id}
                  src={image.image}
                  alt={image.title}
                />
              </div>
            );
          })}
          <button className="btn prev" onClick={goToPrev}>
            Prev
          </button>
          <button className="btn next" onClick={goToNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
