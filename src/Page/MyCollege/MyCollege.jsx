import { useEffect, useState } from "react";

const MyCollege = () => {
    const [appliers, setAppliers] = useState([])
    console.log(appliers)
    
    useEffect(()=>{
        fetch('https://colloge-booking-server.vercel.app/applier')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAppliers(data)
        })
    },[])
    return (
        <div>
            {
                appliers.map(applier=>
                    <div  className="text-center">
                        <img className="m-auto w-[300px]" src={applier.picture} alt="" />
                        <h1 className="text-2xl font-bold">{applier.name}</h1>
                        <p><span className="mr-2 font-bold">Email:</span>{applier.email}</p>
                        <p><span className="mr-2 font-bold">Phone:</span>{applier.phone}</p>
                        <p><span className="mr-2 font-bold">Address:</span>{applier.address}</p>
                        <p><span className="mr-2 font-bold">Date of Birth:</span>{applier.date}</p>
                        <p><span className="mr-2 font-bold">Subject:</span>{applier.subject}</p>

                    </div>

                    )
            }
        </div>
    );
};

export default MyCollege;