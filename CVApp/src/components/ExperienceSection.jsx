import { useState } from "react"
export default function ExperienceSection({experience, func}){
    const [formInfo, setFormInfo] = useState({company: '', position: '', responsibility: '', from: '', to: ''})
    const [id, setId] = useState('')
    const [edit, setEdit] = useState(false)
    function handle(event){
        setFormInfo((prevData) => ({
            ...prevData, [event.target.name]: event.target.value
        }))
    }
    const isEditing = (id) => {
        setEdit(true);
        setId(id)
    }

    const cancelEditing = () => {
        setEdit(false)
    }

    const handleRemoveItem = id => {
        func(experience.filter(item => item.id !== id))
    }

    function add(id){
        if(formInfo.company != "" && formInfo.position != "" && formInfo.responsibility != "" && formInfo.from != "" && formInfo.to != ""){
            const newExperience = experience.map(item => {
                if(item.id == id){
                    return {...item, data: formInfo}
                }
                return item
            })
            func(newExperience)
        }
        setEdit(false)
    }
    return(
        <>
            {!edit ? 
            <div>
                {experience.map((exp) => (
                    <div key={exp.id}>
                        <p className="font-bold text-xl">Company name: {exp.data.company}</p>
                        <p className="font-bold text-xl">Position: {exp.data.position}</p>
                        <p className="font-bold text-xl">Responsibility: {exp.data.responsibility}</p>
                        <p className="font-bold text-xl">From: {exp.data.from}</p>
                        <p className="font-bold text-xl">To: {exp.data.to}</p>
                        <div className="flex gap-4">
                            <button className="bg-red-600 p-2 rounded-md mt-3 text-slate-100 font-bold hover:bg-red-500 transition-all" onClick={() => handleRemoveItem(exp.id)}>Delete</button>
                            <button className="bg-sky-600 p-2 rounded-md mt-3 text-slate-100 font-bold hover:bg-sky-500 transition-all" onClick={() => isEditing(exp.id)}>Edit</button>
                        </div>
                    </div>
                    
                ))}
            </div>
            : 
            <div>
            <form className="flex flex-col ">
                <label htmlFor="company" id="company" className="text-xl mb-2">Company name: </label>
                <input value={formInfo.company} onInput={handle} name="company" type="text" placeholder="Google" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md text-slate-100 font-bold"/>
                <label htmlFor="position" id="position" className="text-xl mb-2">Position: </label>
                <input value={formInfo.position} onInput={handle} name="position" type="text" placeholder="Lakatos" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md text-slate-100 font-bold" />
                <label htmlFor="responsibility" id="responsibility" className="text-xl mb-2">Responsibility: </label>
                <input value={formInfo.responsibility} onInput={handle} name="responsibility" type="text" placeholder="Lakatos" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md text-slate-100 font-bold" />
                <label htmlFor="from" id="from" className="text-xl mb-2">From date: </label>
                <input value={formInfo.from} onInput={handle} name="from" type="date" placeholder="Lakatos" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md text-slate-100 font-bold" />
                <label htmlFor="to" id="to" className="text-xl mb-2">To date: </label>
                <input value={formInfo.to} onInput={handle} name="to" type="date" placeholder="Lakatos" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md text-slate-100 font-bold" />
            
            </form>
            <div className="flex gap-4">
                        <button className="bg-sky-600 p-2 rounded-md mt-3 text-slate-100 font-bold hover:bg-sky-500 transition-all" onClick={() => add(id)}>Done</button>
                        <button className="bg-red-600 p-2 rounded-md mt-3 text-slate-100 font-bold hover:bg-red-500 transition-all" onClick={() => cancelEditing()}>Cancel</button>
                    </div>
            </div>
            }
        </>
    )
}