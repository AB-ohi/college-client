import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const Header = () => {
    const [colleges, setColleges] = useState([])

    useEffect(()=>{
        fetch('https://colloge-booking-server.vercel.app/college')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setColleges(data.slice(1, 4))
        })
    },[])
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-5 justify-items-center">
                {
                    colleges.map(college=><CollegeCard
                    key={college._id}
                    college={college}
                    ></CollegeCard>)
                }
            </div>

        </div>
    );
};

export default Header;