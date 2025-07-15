import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./StudentDetail.css";

const API_URL = "http://localhost:3001/students";

export default function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(setStudent);
  }, [id]);

  if (!student)
    return (
      <div className="studentdetail-loading">Loading...</div>
    );

  return (
    <div className="studentdetail-bg">
      <div className="studentdetail-card">
        <div
          className="studentdetail-photo"
          style={{
            backgroundImage: `url(${student.photo || "https://randomuser.me/api/portraits/lego/1.jpg"})`
          }}
        />
        <h2 className="studentdetail-name">{student.name}</h2>
        <div className="studentdetail-major">{student.major}</div>
        <p className="studentdetail-bio">{student.bio}</p>
        <Link to="/" className="studentdetail-backbtn">
          &#8592; Back to Students
        </Link>
      </div>
    </div>
  );
}
