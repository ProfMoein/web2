import React from "react";
import Menu from "./Menu";
import HeroSlider2 from "./HeroSlider2";
import CourseShowcase from "./CourseShowcase";
import "./CenteredShowcase.css";
import TeacherShowcase from "./TeacherShowcase";
import StudentShowcase from "./StudentShowcase";

export function Home() {
    return(
    <>
    <div>
      <Menu />
      <HeroSlider2 />
      <div className="centered-showcase-bg">
        <div className="centered-showcase-wrapper">
          <CourseShowcase />
      </div>
        </div>
    <TeacherShowcase />
    <div className="centered-showcase-bg">
      <div className="centered-showcase-wrapper">
        <StudentShowcase />
      </div>
    </div>
    </div>
    </>
    )
}