import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, signInGoogle, signInGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user.metadata.lastSignInTime);
        const user = {
          email,
          lastLoggedAt: result.user.metadata.lastSignInTime,
        };

        //update/patch
        fetch("https://coffee-store-server-two-henna.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn=()=>{
    signInGoogle()
    .then((result) => {
      // console.log(result.user.metadata.lastSignInTime);
      console.log(result.user);
      const user = {
        email:result.user.email,
        lastLoggedAt: result.user.metadata.lastSignInTime,
      };

      //update/patch
      fetch("https://coffee-store-server-two-henna.vercel.app/users", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => console.log(error));
  }
  const handleGithubSignIn=()=>{
    signInGithub()
    .then((result) => {
      // console.log(result.user.metadata.lastSignInTime);
      console.log(result.user);
      const user = {
        email:result.user.email,
        lastLoggedAt: result.user.metadata.lastSignInTime,
      };

      //update/patch
      fetch("https://coffee-store-server-two-henna.vercel.app/users", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => console.log(error));
  }

  return (
    <div>
      <Helmet>
        <title>Happy Tours | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:w-3/4 lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center">
            <div className="flex gap-3 mx-auto justify-around">
              <button onClick={handleGoogleSignIn} className="btn btn-outline">
                <FaGoogle />
                Google
              </button>
              <button onClick={handleGithubSignIn} className="btn btn-outline">
                <FaGithub />
                Github
              </button>
            </div>
              <p>
                New here? please
                <Link to="/register">
                  <button className="btn text-blue-600 btn-link">
                    Register
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
