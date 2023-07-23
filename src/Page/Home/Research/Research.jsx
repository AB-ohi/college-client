import React from "react";

const Research = () => {
  return (
    <div className="mt-10">
        <h1 className="text-center text-5xl font-bold">Research</h1>
        <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-2/3"
          src="https://i.ibb.co/T4hc6gW/Artboard-3-2x.png"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Unraveling the Mysteries of Dark Matter</h2>
        <p>This research project delves into the enigmatic nature of dark matter, a mysterious form of matter that does not emit light or interact through electromagnetic forces. By employing advanced particle physics experiments and cosmological observations, the study aims to identify potential candidates for dark matter particles and investigate their properties. Researchers will analyze data from particle colliders, underground detectors, and astronomical observations to search for elusive interactions between dark matter and regular matter. The outcomes of this research will significantly contribute to our understanding of the universe's composition and evolution.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Research links</button>
        </div>
      </div>
    </div>
        <div className="card card-side bg-base-100 shadow-xl mt-5">
      <figure>
        <img
        className="w-2/3"
          src="https://i.ibb.co/tHNQNHf/Mesa-de-trabajo-1-2x.png"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Unraveling the Mysteries of Dark Matter</h2>
        <p>This research project seeks to advance gene editing technologies, with a specific focus on CRISPR-Cas9 and its potential applications. The study will investigate recent developments in CRISPR-based systems, exploring their precision, efficiency, and limitations. Researchers will also explore other emerging gene editing techniques, such as base editing and prime editing, and compare their efficacy in various genetic modifications. The results of this research will have implications in the fields of medicine, agriculture, and biotechnology.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Research links</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Research;
