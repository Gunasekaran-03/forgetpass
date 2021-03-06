import { useState } from "react";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="row justify-content-center mt-5">
        <h3 style={{ color: "blue", fontFamily: "serif" }}>
          Register yourself here
        </h3>
      </div>
      <div className="row">
        <div className="col-md-9 col-lg-8 mx-auto">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              // console.log(firstName,lastName,email,password);

              setFirstName("");
              setLastName("");
              setEmail("");
              setPassword("");

              await fetch(
                "https://resetpasswordserver.herokuapp.com/auth/register",
                {
                  method: "POST",
                  body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                  }),
                  headers: {
                    "content-type": "application/json",
                  },
                }
              );
            }}
          >
            <div className="form-label-group">
              <input
                type="firstName"
                id="inputFirstName"
                className="form-control"
                placeholder="First Name"
                required
                autofocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label for="inputFirstName">First Name</label>
            </div>
            <div className="form-label-group">
              <input
                type="lastName"
                id="inputLastName"
                className="form-control"
                placeholder="Last Name"
                required
                autofocus
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label for="inputLastName">Last Name</label>
            </div>
            <div className="form-label-group">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required
                autofocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="inputEmail">Email address</label>
            </div>

            <div className="form-label-group">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="inputPassword">Password</label>
            </div>
            <button
              className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
