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
            <form className="flex flex-col">
                <label htmlFor="name" id="name" className="text-xl mb-2">Name: </label>
                <input value={formInfo.name} onInput={handle} name="name" type="text" placeholder="Kandó" className="inputStyle"/>
                <label htmlFor="degree" id="degree" className="text-xl mb-2">Degree: </label>
                <input value={formInfo.degree} onInput={handle} name="degree" type="text" placeholder="Asztalos" className="inputStyle" />
            </form>
            <div className="flex justify-center">
                <button className="font-bold flex bg-sky-600 rounded-md p-2 mt-3 w-1/2 justify-center hover:scale-105 transition-all" onClick={addToEducation}>Add</button>
            </div>
        </>
    )
}