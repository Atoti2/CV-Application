export default function CV({ personalInfo, education, experience }){
    const { name, email, phoneNumber, about } = personalInfo
    return(
        <>
        <div className="bg-slate-100 p-8 min-h-screen shadow-xl ">   
            <div className="px-12">
                <h1 className="text-right text-7xl mb-10 uppercase font-MerriWeather border-b-2 border-l-2 ml-12 border-black pb-5">{name}</h1>
                <div className="flex gap-32 flex-col sm:flex-row">
                    <div className="flex-1 border-b-2 border-black pb-3 max-w-64 text-center w-full ">
                        <h3 className="uppercase font-MerriWeather text-3xl mb-5 p-5 tracking-wide">Contact</h3>
                        <ul className="text-center">
                            <li className="font-MerriWeather font-semibold mb-3">{phoneNumber} <br /> <span className="font-normal italic">Phone Number</span></li>
                            <li className="font-MerriWeather font-semibold">{email} <br /> <span className="font-normal italic">Email</span></li>
                        </ul>
                    </div>
                    <div className="flex-2 border-b-2 border-black pb-3 w-full">
                        <h3 className="uppercase font-MerriWeather text-3xl mb-5 py-5 tracking-wide">About me</h3>
                        <p className="tracking-wider leading-7">{about}</p>
                    </div>
                </div>
            </div>

            <div>
            <div className="px-12">
                <div className="flex gap-24 flex-col sm:flex-row">
                    <div className="flex-1 border-b-2 border-black pb-3 max-w-64 text-center">
                        <h3 className="uppercase font-MerriWeather text-3xl mb-5 p-5 tracking-wide">Education</h3>
                        <ul className="text-center">
                            <li className="font-MerriWeather font-semibold mb-3">{phoneNumber} <br /> <span className="font-normal italic">Phone Number</span></li>
                            <li className="font-MerriWeather font-semibold">{email} <br /> <span className="font-normal italic">Email</span></li>
                        </ul>
                    </div>
                    <div className="flex-2 border-b-2 border-black pb-3 w-full">
                        <h3 className="uppercase font-MerriWeather text-3xl mb-5 py-5 tracking-wide">Practical Experience</h3>
                        <p className="tracking-wider leading-7">{about}</p>
                    </div>
                </div>
            </div>
            </div>
            <div>

            {education.map((educate) => (
                <div key={educate.id}>
                    <p>College name: {educate.data.name}</p>
                    <p>Degree: {educate.data.degree}</p>
                </div>
            ))}

            {experience.map((exp) => (
                <div key={exp.id}>
                    <p>Company name: {exp.data.company}</p>
                    <p>Position: {exp.data.position}</p>
                    <p>Responsibility: {exp.data.responsibility}</p>
                    <p>From date: {exp.data.from}</p>
                    <p>To date: {exp.data.to}</p>
                </div>
            ))}

            </div>
        </div>
        </>
    )
}