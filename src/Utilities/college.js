export const collegeLoader = async () => {
    const res = await fetch('http://localhost:5000/college');
    const data = await res.json();
    console.log(data)
    return data;
  };