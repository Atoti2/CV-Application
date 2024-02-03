export default function GeneralInfo({data, func}){
    const { name, email, phoneNumber } = data
    return (
        <div>
            <form className="flex flex-col ">
                <label htmlFor="name" id="name" className="text-xl mb-2">Name: {' '}</label>
                <input value={name} onChange={func} name="name" type="text" placeholder="John Wick" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md"/>

                <label htmlFor="email" id="email"  className="text-xl mb-2">Email: {' '}</label>
                <input value={email} onChange={func} name="email" type="email" placeholder="johnwick@gmail.com" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md" />

                <label htmlFor="phone" id="phone"  className="text-xl mb-2">Phone number: {' '}</label>
                <input value={phoneNumber} onChange={func} name="phoneNumber" type="tel" placeholder="+36938159" className="w-40 p-1 bg-slate-600 placeholder:text-slate-200/70 rounded-md" />
            </form>
        </div>
    )
}

