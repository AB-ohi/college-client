import React from "react";

const Apply = () => {
    const handelToApply = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const date = form.date.value;
        const picture = form.picture.value;
        const applier = {name, subject, email, phone, address, date, picture};
        console.log(applier)
        fetch('https://colloge-booking-server.vercel.app/applier',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(applier)
        })

    }
  return (
    <div>
      <form onSubmit={handelToApply}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Candidate Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Candidate Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                     required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Candidate Phone number</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date of birth</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    placeholder="birth"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image link</span>
                  </label>
                  <input
                    type="text"
                    name="picture"
                    placeholder="picture"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Apply;
