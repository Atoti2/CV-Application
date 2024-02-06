export default function GeneralInfo({data, func}){
    const { name, email, phoneNumber, about } = data
    return (
        <div>
            <form className="flex flex-col ">
                <label htmlFor="name" id="name" className="text-xl mb-2">Name: {' '}</label>
                <input value={name} onChange={func} name="name" type="text" placeholder="John Wick" className="inputStyle"/>

                <label htmlFor="email" id="email"  className="text-xl mb-2">Email: {' '}</label>
                <input value={email} onChange={func} name="email" type="email" placeholder="johnwick@gmail.com" className="inputStyle" />

                <label htmlFor="phone" id="phone"  className="text-xl mb-2">Phone number: {' '}</label>
                <input value={phoneNumber} onChange={func} name="phoneNumber" type="tel" placeholder="+36938159" className="inputStyle" />

                <label htmlFor="about" id="about" className="text-xl mb-2">About me: {' '}</label>
                <textarea name="about" onChange={func} id="about" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}

