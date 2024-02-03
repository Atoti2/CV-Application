import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Education({data, educationFc}){
    const [formInfo, setFormInfo] = useState({name: '', degree: ''})

    function handle(event){
        setFormInfo((prevData) => ({
            ...prevData, [event.target.name]: event.target.value
        }))
    }
    
    function addToEducation(){
        if (formInfo.name !== "" && formInfo.degree !== ""){
            educationFc([
                ...data, {id: uuidv4(), data: formInfo}
            ])
        }
        setFormInfo({name: '', degree: ''})
    }

    return(
        <>
            <form className="flex flex-col ">
                <label htmlFor="name" id="name" className="text-xl mb-2">Name: </label>
                <input value={formInfo.name} onInput={handle} name="name" type="text" placeholder="Kandó" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md"/>
                <label htmlFor="degree" id="degree" className="text-xl mb-2">Degree: </label>
                <input value={formInfo.degree} onInput={handle} name="degree" type="text" placeholder="Asztalos" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md" />
            </form>
            <button onClick={addToEducation}>Add</button>
        </>
    )
}