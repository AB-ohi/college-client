import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
    const [colleges, setColleges] = useState([])

    useEffect(()=>{
        fetch('https://colloge-booking-server.vercel.app/college')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setColleges(data)
        })
    },[])
    return (
        <div className="w-2/3 m-auto">
            {
                colleges.map(college=>
                <div className="flex items-center justify-between mb-5 shadow-lg shadow-indigo-500/50 rounded-xl">
                    <div className="flex items-center">
                        <img className="w-[200px] h-[150px] rounded-xl" src={college.image} alt="" />
                        <div className="ml-2">
                            <p><span className="mr-2 font-bold">Name:</span>{college.name}</p>
                            <p><span className="mr-2 font-bold">DOA:</span>{college.admission_date}</p>
                        </div>
                    </div>
                    <button className="btn mr-5  btn-primary"><Link to='/apply'>Apply Now</Link></button>
                </div>)
            }
        </div>
    );
};

export default Admission;