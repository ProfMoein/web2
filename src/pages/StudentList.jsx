import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../services/studentService';
import { Link } from 'react-router-dom';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  const fetch = () => {
    getStudents().then(res => setStudents(res.data));
  };

  useEffect(fetch, []);

  const handleDelete = (id) => {
    deleteStudent(id).then(fetch);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">لیست دانشجویان</h2>
      <Link
        to="/add-student"
        className="inline-block mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        افزودن دانشجو
      </Link>
      <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
        {/* thead */}
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td className="py-2 px-4">{s.name}</td>
              <td className="py-2 px-4">{s.email}</td>
              <td className="py-2 px-4 space-x-2">
                <Link to={`/edit-student/${s.id}`} className="text-blue-600 hover:underline">
                  ویرایش
                </Link>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="text-red-600 hover:underline"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
