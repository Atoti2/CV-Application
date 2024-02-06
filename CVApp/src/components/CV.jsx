export default function CV({ personalInfo, education, experience }){
    const { name, email, phoneNumber, about } = personalInfo
    return(
        <>
        <div className="bg-slate-100 p-8 min-h-screen shadow-xl ">   
            <div className="px-12">
                <h1 className="sm:text-right text-center sm:text-7xl text-5xl mb-10 uppercase font-MerriWeather border-b-2 border-l-2 ml-12 border-black pb-5">{name}</h1>
                <div className="flex md:gap-32 gap-0 flex-col items-center md:items-start md:flex-row ">
                    <div className="flex-1 border-b-2 border-black pb-3 max-w-64 text-center w-full ">
                        <h3 className="uppercase font-MerriWeather text-3xl mb-5 md:p-5 p-0 tracking-wide">Contact</h3>
                        <ul className="text-center">
                            <li className="font-MerriWeather font-semibold mb-3">{phoneNumber} <br /> <span className="font-normal italic">Phone Number</span></li>
                            <li className="font-MerriWeather font-semibold">{email} <br /> <span className="font-normal italic">Email</span></li>
                        </ul>
                    </div>
                    <div className="flex-2 border-b-2 border-black pb-3 w-full">
                        <h3 className="uppercase font-MerriWeather text-3xl mb-5 py-5 tracking-wide">About me</h3>
                        <p className="tracking-wider leading-7 text-lg">{about}</p>
                    </div>
                </div>
            </div>

            <div>
            <div className="px-12">
                <div className="flex md:gap-20 gap-0 flex-col items-center md:items-start md:flex-row">
                    <div className="flex-1 border-b-2 border-black pb-3 max-w-64 text-center">
                        <h3 className="uppercase font-MerriWeather text-3xl mb-5 mt-10 md:p-5 p-0 tracking-wide">Education</h3>
                        <ul className="text-center">
                        {education.map((educate) => (
                        <div key={educate.id}>
                            <ul>
                                <li className="text-xl font-bold">{educate.data.name}</li>
                                <li className="text-sm italic">{educate.data.degree}</li>
                            </ul>
    
                        </div>
                    ))}
                        </ul>
                    </div>
                    <div className="flex-2 border-b-2 border-black pb-3 w-full">
                        <h3 className="uppercase font-MerriWeather text-3xl my-10 md:p-5 p-0 tracking-wide">Practical Experience</h3>
                        {experience.map((exp) => (
                            <div key={exp.id}>
                                <ul className="text-right">
                                    <li className="font-bold font-MerriWeather text-2xl">{exp.data.company}</li>
                                    <li className="text-lg">Position: {exp.data.position}</li>
                                    <li>Responsibility: {exp.data.responsibility}</li>
                                    <li>From: {exp.data.from}</li>
                                    <li>To: {exp.data.to}</li>
                                </ul>
                          
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <div>

           

            </div>
        </div>
        </>
    )
}