import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Experience({data, experienceFc}){
    const [info, setInfo] = useState({company: '', position: '', responsibility: '', from: '', to: ''})
    function handle(event){
        setInfo((prevData) => ({
            ...prevData, [event.target.name]: event.target.value
        }))
    }

    function addToExperience(){
        if (info.company != "" && info.position != "" && info.responsibility != "" && info.from != "" && info.to != ""){
            experienceFc([
                ...data, {id: uuidv4(), data: info}
            ])
        }
        setInfo({company: '', position: '', responsibility: '', from: '', to: ''})
    }

    return(
        <>
             <form className="flex flex-col ">
                <label htmlFor="company" id="company" className="text-xl mb-2">Company: </label>
                <input value={info.company} onInput={handle} name="company" type="text" placeholder="Google" className="inputStyle"/>
                
                <label htmlFor="position" id="position" className="text-xl mb-2">Position: </label>
                <input value={info.position} onInput={handle} name="position" type="text" placeholder="Lakatos" className="inputStyle" />
                
                <label htmlFor="responsibility" id="responsibility" className="text-xl mb-2">Responsibility: </label>
                <input value={info.responsibility} onInput={handle} name="responsibility" type="text" placeholder="Lopni" className="inputStyle" />
                
                <label htmlFor="from" id="from" className="text-xl mb-2">From: </label>
                <input value={info.from} onInput={handle} name="from" type="date" placeholder="2024-05-11" className="inputStyle" />
                
                <label htmlFor="to" id="to" className="text-xl mb-2">To: </label>
                <input value={info.to} onInput={handle} name="to" type="date" placeholder="2025-01-01" className="inputStyle" />
            </form>
            <div className="flex justify-center">
                <button className="font-bold flex bg-sky-600 rounded-md p-2 mt-3 w-1/2 justify-center hover:scale-105 transition-all" onClick={addToExperience}>Add</button>
            </div>
        </>
    )
}