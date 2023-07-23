import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OtherLogin from "../OtherLogin/OtherLogin";
const SingUp = () => {

    const {createUser} = useContext(AuthContext)

  const handelToSingUp = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const user = {name, email, password, photo};
    console.log(user)

    createUser(email,password)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .then(error =>{
        console.log(error)
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200  background-img">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-violet-500">Sing UP!</h1>
              <form onSubmit={handelToSingUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Picture Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo Url"
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="text-center mt-3">Or Sign In with</p>
              <OtherLogin></OtherLogin>
              <p className="text-center mt-3">Already have an account? <Link to='/login' className="text-violet-500">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;