import { useState } from "react"
export default function EducationSection({education, edit, func, editing}){
    const [formInfo, setFormInfo] = useState({name: '', degree: ''})
    const [id, setId] = useState('')

    function handle(event){
        setFormInfo((prevData) => ({
            ...prevData, [event.target.name]: event.target.value
        }))
    }
    const isEditing = (id) => {
        editing(true);
        setId(id)
    }

    const cancelEditing = () => {
        editing(false)
    }

    function add(id){
        const newEducations = education.map(item => {
            if(item.id == id){
                return {...item, data: formInfo}
            }
            return item
        })
        
        func(newEducations)
        editing(false)
        setFormInfo({name: '', degree: ''})
    }
    
    const handleRemoveItem = id => {
        func(education.filter(item => item.id !== id))
    }

    return(
        <> 
        {!edit ?  
        <div>
                {education.map((educate) => (
                <div key={educate.id}>
                    <p className="font-bold text-xl">College name: {educate.data.name}</p>
                    <p className="font-bold text-xl" >Degree: {educate.data.degree}</p>
                    <div className="flex gap-4">
                        <button className="bg-red-600 p-2 rounded-md mt-3 text-slate-100 font-bold hover:bg-red-500 transition-all" onClick={() => handleRemoveItem(educate.id)}>Delete</button>
                        <button className="bg-sky-600 p-2 rounded-md mt-3 text-slate-100 font-bold hover:bg-sky-500 transition-all" onClick={() => isEditing(educate.id)}>Edit</button>
                    </div>
                    <hr className="my-3"/>
                </div>
            ))}
            </div>
            :
            <div>
                <div>
                
                <div>
                    <div className="flex flex-col">
                        <label htmlFor="name" id="name" className="text-xl mb-2">Name: </label>
                        <input value={formInfo.name} onInput={handle} name="name" type="text" placeholder="Kandó" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md"/>
                        <label htmlFor="degree" id="degree" className="text-xl mb-2">Degree: </label>
                        <input value={formInfo.degree} onInput={handle} name="degree" type="text" placeholder="Asztalos" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md" />
                    </div>
            
                    <div className="flex gap-4">
                        <button className="bg-sky-600 p-2 rounded-md mt-3 text-slate-100 font-bold hover:bg-sky-500 transition-all" onClick={() => add(id)}>Done</button>
                        <button className="bg-red-600 p-2 rounded-md mt-3 text-slate-100 font-bold hover:bg-red-500 transition-all" onClick={() => cancelEditing()}>Cancel</button>
                    </div>
                    <hr className="my-3"/>
                </div>
           
            </div>
            </div>
            }
        </>
    )
}