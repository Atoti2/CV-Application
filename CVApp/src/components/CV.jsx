export default function CV({ personalInfo, education, experience }){
    const { name, email, phoneNumber } = personalInfo
    return(
        <>
        <div>
            <h1>Name: {name} </h1>
            <h2>Email: {email} </h2>
            <h3>Phone number: {phoneNumber} </h3>
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
        </>
    )
}