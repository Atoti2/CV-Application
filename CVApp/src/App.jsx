import { useState } from 'react'

import CV from './components/CV'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education';
import EducationSection from './components/EducationSection';
import Experience from './components/Experience';
import ExperienceSection from './components/ExperienceSection';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Wick',
    email: 'johnwick@gmail.com',
    phoneNumber: '+3463463321',
    about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, sequi officiis distinctio officia, totam ipsa deserunt voluptates autem impedit veritatis rem excepturi illum molestiae neque tenetur adipisci dicta nostrum aperiam?'
  })
  

  function handleInputChange(event){
    setPersonalInfo((prevData) => ({
        ...prevData, [event.target.name]: event.target.value
    }))
  }

  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  return (
    <>

    <div className='flex justify-around bg-slate-700 m-0 p-8 flex-col lg:flex-row gap-10'>
      <div className='flex-1'>
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
      <div className='flex-[2]'>
        <CV personalInfo={personalInfo} education={education} experience={experience}/>
      </div>
    </div>
    </>
  )
}

export default App
