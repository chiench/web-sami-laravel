import { useState } from 'react'

import './App.css'

function App() {

  const [jobs, setJobs] = useState(() => {
    const storage = JSON.parse(localStorage.getItem('JOBS'));
    return storage || []
  });
  const [job, setJob] = useState('');
  const handleJobs = () => {
    setJobs((pre) => {
      const jobsTransform = [...pre, job]
      localStorage.setItem('JOBS', JSON.stringify(jobsTransform));
      return jobsTransform
    })
    setJob('');
  }
  const removeJobs = () => {
    setJobs([]);
    setJob('');
    localStorage.removeItem('JOBS');
  }
  console.log('jobs: ', jobs);
  return (
    <>
      <div>
        <input value={job} onChange={(e) => setJob(e.target.value)} type="text" />
        <button style={{ marginLeft: '10px' }} onClick={handleJobs}> Add todo</button>
        <button style={{ marginLeft: '10px' }} onClick={removeJobs}> Remove todo</button>
        <br />
        <div>
          <ul>
            {
              jobs && jobs.map((el, index) => {
                return <li key={index} >{el}</li>
              })
            }
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
