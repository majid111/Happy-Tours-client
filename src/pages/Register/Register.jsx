import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password length should be 6 or more");
      return;
    } else if (
      !/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/.test(
        password
      )
    ) {
      setRegisterError(
        "Password should have atleast one Upper Case caracter, one number and one spetial character."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile({ name, photoUrl })
          .then((result) => console.log(result))
          .catch((error) => console.error(error));

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been Created",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:w-3/4 lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="font-bold text-red-600 mt-6">{registerError}</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo-Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo-Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
                <span className="absolute right-5 top-4" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="text-center">
              <p>
                Already have account? please
                <Link to="/login">
                  <button className="btn text-blue-600 btn-link">Log In</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;