import React from "react";
import "./CourseShowcase.css";

const courses = [
  {
    title: "Introduction to ReAct WEB2",
    code: "WEB 2",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    description: "Amozesh ghadam be ghadam Zaban ReAct !",
    link: "#",
    teacher: "Dr. Ali Rezaee"
  },
  {
    title: "Modern Web Development",
    code: "WD202",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    description: "Explore HTML, CSS, JavaScript, and React to build modern, responsive web applications.",
    link: "#",
    teacher: "Prof. John Doe"
  },
  {
    title: "Artificial Intelligence",
    code: "AI301",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    description: "An introduction to AI concepts, machine learning, neural networks, and real-world applications.",
    link: "#",
    teacher: "Dr. Maria Zhang"
  },
  {
    title: "Database Systems",
    code: "DB205",
    image: "../Images/11.jpg",
    description: "Learn about relational databases, SQL, data modeling, and database management.",
    link: "#",
    teacher: "Dr. Evan Lee"
  }
];

export default function CourseShowcase() {
  return (
    <section className="course-section">
      <h2 className="course-title">Our Featured Courses</h2>
      <div className="course-grid">
        {courses.map((course, i) => (
          <div className="course-card" key={i}>
            <div
              className="course-img"
              style={{ backgroundImage: `url(${course.image})` }}
            />
            <div className="course-content">
              <h3>{course.title}</h3>
              <div className="course-meta">
                <span className="course-code">{course.code}</span>
                <span className="course-teacher">{course.teacher}</span>
              </div>
              <p>{course.description}</p>
              <a href={course.link} className="course-btn">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}