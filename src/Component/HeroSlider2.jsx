import React, { useState, useEffect } from "react";
import "./HeroSlider2.css";

const slides = [
  {
    image: "../Images/21.jpg",
    title: "REACT PROJ",
    subtitle: "Moein Keramati.",
    button: "botton",
    url: "#",
  },
  {
    image: "../Images/22.jpg",
    title: "Ostad Dars : Dr.Ali Rezaee",
    subtitle: "Ostad Dars Web 2.",
    button: "botton",
    url: "#",
  },
  {
    image: "../Images/23.jpg",
    title: "Web 2 Panjaree be Ayande !",
    subtitle: "Hello World Wide Web.",
    button: "botton",
    url: "#",
  },
];

export default function HeroSlider2() {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearTimeout(timer);
  }, [index]);

  const goTo = (i) => setIndex(i);
  const prev = () => setIndex(index === 0 ? slides.length - 1 : index - 1);
  const next = () => setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <div className="hero2-slider">
      <div className="hero2-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div
            className="hero2-slide"
            key={i}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero2-overlay" />
            <div className="hero2-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <a className="hero2-btn" href={slide.url}>{slide.button}</a>
            </div>
          </div>
        ))}
      </div>
      <button className="hero2-arrow left" onClick={prev}>&#8592;</button>
      <button className="hero2-arrow right" onClick={next}>&#8594;</button>
      <div className="hero2-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
