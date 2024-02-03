import { useState } from 'react'

import CV from './components/CV'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education';
import EducationSection from './components/EducationSection';
function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  })
  
  function handleInputChange(event){
    setPersonalInfo((prevData) => ({
        ...prevData, [event.target.name]: event.target.value
    }))
  }

  const [education, setEducation] = useState([])

  const [edit, setEdit] = useState(false)

  return (
    <>
    <div className='flex justify-around m-5'>
      <div>
        <div className='bg-slate-500 p-5'>
          <h1 className='text-2xl'>Personal Information</h1>
          <GeneralInfo data={personalInfo} func={handleInputChange} />
        </div>
        <div className='bg-slate-500 p-5 mt-8'>
          <h1 className='text-2xl'>Education</h1>
            <Education data={education} educationFc={setEducation}/>
        </div>

        <div className='bg-slate-300 p-5 my-8'>
          <EducationSection education={education} func={setEducation} editing={setEdit} edit={edit}/>
        </div>

      </div>
      <div>
        <CV personalInfo={personalInfo} education={education}/>
      </div>
    </div>
    </>
  )
}

export default App
