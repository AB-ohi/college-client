import { useEffect, useState } from "react";
import Card from "./Card";

const Colleges = () => {
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
        <div>
            <h1>College</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5 justify-items-center">
                {
                    colleges.map(college=><Card
                    key={college._id}
                    college = {college}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Colleges;