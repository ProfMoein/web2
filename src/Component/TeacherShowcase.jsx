import React from "react";
import "./TeacherShowcase.css";

const teachers = [
  {
    name: "Dr. Ali Rezaee",
    title: "Professor of Web 2",
    photo: "../Images/31.jpg",
    bio: "Modares Zaban Barname Nevisi ReAct.",
    email: "alice.smith@university.edu"
  },
  {
    name: "Prof. Nimaee",
    title: "Web Development Lecturer",
    photo: "../Images/32.jpg",
    bio: "Expert in modern web technologies and project-based learning.",
    email: "john.miller@university.edu"
  },
  {
    name: "Dr. sara",
    title: "AI & Machine Learning",
    photo: "../Images/33.jpg",
    bio: "Researcher in neural networks, deep learning, and applications.",
    email: "maria.zhang@university.edu"
  },
  {
    name: "Dr. Ahmad Mohhamadi",
    title: "Database Systems",
    photo: "../Images/34.jpg",
    bio: "Passionate about databases, SQL, and data-driven solutions.",
    email: "evan.lee@university.edu"
  }
];

export default function TeacherShowcase() {
  return (
    <section className="teacher-section">
      <h2 className="teacher-title">Meet Our Wonderfull Teachers</h2>
      <div className="teacher-grid">
        {teachers.map((teacher, i) => (
          <div className="teacher-card" key={i}>
            <div
              className="teacher-photo"
              style={{ backgroundImage: `url(${teacher.photo})` }}
            />
            <div className="teacher-content">
              <h3>{teacher.name}</h3>
              <div className="teacher-role">{teacher.title}</div>
              <p>{teacher.bio}</p>
              <a href={`mailto:${teacher.email}`} className="teacher-btn">
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
