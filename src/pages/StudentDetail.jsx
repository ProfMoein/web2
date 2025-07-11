import React, { useState, useEffect } from 'react';
import { addStudent, getStudent, updateStudent } from '../services/studentService';
import { useNavigate, useParams } from 'react-router-dom';

export default function StudentDetail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    if (id) {
      getStudent(id).then(res => {
        setName(res.data.name);
        setEmail(res.data.email);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fn = id ? updateStudent : addStudent;
    fn(id, { name, email })
      .then(() => nav('/students'));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        {id ? 'ویرایش' : 'افزودن'} دانشجو
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* نام و ایمیل inputs */}
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
          ذخیره
        </button>
      </form>
    </div>
  );
}
