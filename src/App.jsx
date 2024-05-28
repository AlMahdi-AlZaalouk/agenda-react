// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/agenda')
      .then(response => {
        setAgenda(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the agenda!", error);
      });
  }, []);

  const renderTable = (day) => {
    return (
      <div className="section" key={day}>
        <table>
          <thead>
            <tr>
              <th>الوقت</th>
              <th>الفعالية</th>
            </tr>
          </thead>
          <tbody>
            {agenda.filter(item => item.day === day).map((item) => (
              <React.Fragment key={item.id}>
                <tr>
                  <td>{item.time}</td>
                  <td>{item.session_name}<br /><span className="lecturer">({item.session_leader})</span></td>
                </tr>
                <tr>
                  <td colSpan="2">{item.details}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <hr />
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="./FBIT.png" alt="شعار المؤتمر" />
        <h1>مؤتمر آفاق لتكنولوجيا المعلومات</h1>
        <h3>أجندة المؤتمر</h3>
      </header>
      <div className="content">
        <div className="section centered">
          <h2>اليوم الأول</h2>
          <h3>29 مايو 2024</h3>
          <h4>التسجيل والافتتاح 9:00 – 10:00</h4>
        </div>
        {renderTable(1)}
        <div className="section centered">
          <h2>اليوم الثاني</h2>
          <h3>30 مايو 2024</h3>
          <h4>التسجيل والافتتاح 9:00 – 10:00</h4>
        </div>
        {renderTable(2)}
        <div className="section centered">
          <h2>الجلسة الختامية و توزيع الشهادات</h2>
          <h3>14:30 – 15:30</h3>
        </div>
      </div>
      <div className="footer">
        <a href="https://androidlibya.ly" target="_blank" rel="noopener">Android Libya</a>
      </div>
    </div>
  );
};

export default App;
