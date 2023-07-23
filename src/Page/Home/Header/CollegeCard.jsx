import React from "react";

const CollegeCard = ({ college }) => {
  const { admission_date, events, image, name, research_history, sports } = college;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
        className=" w-[384px] h-[256px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body gap-0">
        <h2 className="card-title">{name}</h2>
        <p>{research_history}</p>
        <hr />
        <h1 className="text-lg font-bold">Event</h1>
        
        {
            events.map(event=>
            <ul>
                <li>{event}</li>
            </ul>)
        }
        <div className="flex items-end justify-between">
        <div>
        <h1 className="text-lg font-bold mt-3">Sports</h1>
        {
            sports.map(sport=>
            <ul>
                <li>{sport}</li>
            </ul>)
        }
        </div>
        <div>
            <p> <span className="font-bold mt-3">DOA:</span> {admission_date}</p>
        </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary mt-3">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
