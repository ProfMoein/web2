import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentShowcase.css";

const API_URL = "http://localhost:3001/students";

export default function StudentShowcase() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", major: "", photo: "", bio: "", id: null });
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  // Load students from json-server
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setStudents);
  }, []);

  // Form change handler
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add new student
  const handleAdd = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.major.trim()) return;
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, id: undefined }),
    })
      .then(res => res.json())
      .then(newStudent => {
        setStudents([...students, newStudent]);
        setForm({ name: "", major: "", photo: "", bio: "", id: null });
      });
  };

  // Start editing a student
  const handleEdit = student => {
    setForm(student);
    setEditing(true);
  };

  // Save student edits
  const handleUpdate = e => {
    e.preventDefault();
    fetch(`${API_URL}/${form.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(updated => {
        setStudents(students.map(s => (s.id === updated.id ? updated : s)));
        setForm({ name: "", major: "", photo: "", bio: "", id: null });
        setEditing(false);
      });
  };

  // Delete student
  const handleDelete = id => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setStudents(students.filter(s => s.id !== id)));
  };

  return (
    <section className="student-section">
      <h2 className="student-title">Our Students</h2>
      <form className="student-form" onSubmit={editing ? handleUpdate : handleAdd}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="major"
          placeholder="Major"
          value={form.major}
          onChange={handleChange}
          required
        />
        <input
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
        />
        <input
          name="bio"
          placeholder="Short Bio"
          value={form.bio}
          onChange={handleChange}
        />
        <button type="submit">{editing ? "Update" : "Add"}</button>
        {editing && (
          <button type="button" className="cancel-btn" onClick={() => {
            setEditing(false);
            setForm({ name: "", major: "", photo: "", bio: "", id: null });
          }}>
            Cancel
          </button>
        )}
      </form>
      <div className="student-grid">
        {students.map((student) => (
          <div
            className="student-card"
            key={student.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/students/${student.id}`)}
          >
            <div
              className="student-photo"
              style={{
                backgroundImage: `url(${student.photo || "https://randomuser.me/api/portraits/lego/1.jpg"})`,
              }}
            />
            <div className="student-content">
              <h3>{student.name}</h3>
              <div className="student-major">{student.major}</div>
              {}
              <div className="student-actions">
                <button
                  onClick={e => {
                    e.stopPropagation(); 
                    handleEdit(student);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={e => {
                    e.stopPropagation(); 
                    handleDelete(student.id);
                  }}
                >
                  Delete
                </button>
              </div>
              {}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
