import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUserName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [rollnumber, setRollNumber] = useState("");
  const [timing, setTiming] = useState("");
  const [sirname, setSirName] = useState("");
  const [students, setStudent] = useState([]);
  const [error, setError] = useState("");

  const addStudent = () => {
    // Check if all fields are filled
    if (!username || !fathername || !rollnumber || !sirname || !timing) {
      setError('All fields are required');
      return;
    }

    // Create a new student object and update the state
    const newStudent = { username, fathername, rollnumber, sirname, timing };
    setStudent([...students, newStudent]);

    // Clear input fields and error
    setUserName("");
    setFatherName("");
    setRollNumber("");
    setSirName("");
    setTiming("");
    setError("");
  };

  return (
    <div className='container'>
      <center><h2>Student Form</h2></center>
      <div className='form-group'>
        {error && <p className="error">{error}</p>}
        <input
          placeholder='Student Name'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          placeholder='Father Name'
          value={fathername}
          onChange={(e) => setFatherName(e.target.value)}
        />
        <input
          placeholder='Roll Number'
          value={rollnumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <input
          placeholder='Sir Name'
          value={sirname}
          onChange={(e) => setSirName(e.target.value)}
        />
        <input type='Time'
          placeholder='Class Timing'
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
        />
        <button onClick={addStudent}>SUBMIT</button>
      </div>

      <center><h2>Students List</h2></center>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father's Name</th>
            <th>Roll No</th>
            <th>Sir Name</th>
            <th>Class Timing</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.username}</td>
              <td>{student.fathername}</td>
              <td>{student.rollnumber}</td>
              <td>{student.sirname}</td>
              <td>{student.timing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
