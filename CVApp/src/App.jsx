import { useState } from 'react'

import CV from './components/CV'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education';
import EducationSection from './components/EducationSection';
import Experience from './components/Experience';
import ExperienceSection from './components/ExperienceSection';
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
  const [experience, setExperience] = useState([])

  const [edit, setEdit] = useState(false)

  return (
    <>
    <div className='flex justify-around bg-slate-700 m-0 p-8 '>
      <div>
        <div className='bg-slate-500 p-8 rounded-md w-full'>
          <h1 className='text-2xl mb-5 font-bold font-mono text-center'>Personal Information</h1>
          <GeneralInfo data={personalInfo} func={handleInputChange} />
        </div>

        <div className='bg-slate-500 p-8 mt-8 rounded-md w-full'>
          <h1 className='text-2xl mb-5 font-bold font-mono text-center'>Education</h1>
            <Education data={education} educationFc={setEducation}/>
            {education.length ?
          <div className='bg-slate-300 shadow-xl rounded-md p-5 my-8'>
            <EducationSection education={education} func={setEducation} />
          </div>  
          : <></>
        }
        </div>

        <div className='bg-slate-500 p-8 mt-8 rounded-md w-full'>
          <h1 className='text-2xl mb-5 font-bold font-mono text-center'>Practical Experience</h1>
            <Experience data={experience} experienceFc={setExperience}/>
            {experience.length ?
              <div className='bg-slate-300 rounded-md p-5 my-8'>
                <ExperienceSection experience={experience} func={setExperience}  />
              </div>
          : <></>
        }
        </div>
      </div>
      <div>
        <CV personalInfo={personalInfo} education={education} experience={experience}/>
      </div>
    </div>
    </>
  )
}

export default App
