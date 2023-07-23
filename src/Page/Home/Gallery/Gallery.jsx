import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryPics, setGalleryPics] = useState([]);
  console.log(galleryPics)

  useEffect(()=>{
    fetch('gallery.json')
    .then(res => res.json())
    .then(data => {
        setGalleryPics(data)
    })
  },[])
  return (
    <div className="mt-10">
      <h1 className="text-center md:text-5xl text-2xl font-bold">graduation celebration</h1>
      <div className="grid md:grid-cols-4 mt-5">
        {
            galleryPics.map(galleryPic=><div
            key={galleryPic.length}
            >
                <img className="" src={galleryPic.pic} alt="" />
                </div>
                )
        }
      </div>
    </div>
  );
};

export default Gallery;
