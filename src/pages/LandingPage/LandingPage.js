// export default LandingPage;
import React, { useState } from "react";
import Index from "../../routes/Index";

import {
  InputContainer,
  Wrapper,
  Card,
  LandingPageContainer,
} from "./LandingPage.styles";

const LandingPage = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [first, setFirst] = useState(false);

  const handleLogin = () => {
    setLogin((prevLogin) => !prevLogin);
    setSignup(false);
    setFirst(true);
  };

  const handleSignup = () => {
    setSignup((prevSignup) => !prevSignup);
    setLogin(false);
    setFirst(true);
  };

  const [Department, setDepartment] = useState("");
  const [EmpType, setEmpType] = useState("");

  const depChange = (event) => {
    setDepartment(event.target.value);
  };

  const typeChange = (event) => {
    setEmpType(event.target.value);
  };

  const [data, setData] = useState("");
  const childToParent = (childdata) => {
    setData(childdata);
  };

  const [Error, setError] = useState("Create Account");
  const [logError, setlogError] = useState("Log in with your Google account");
  const [DBsign, setDBsign] = useState({}); // What goes into the databse
  const [DBlog, setDBlog] = useState({}); // querying database wiht email and name

  const sign = () => {
    if (!Department || !EmpType) {
      return setError("Enter All Fields");
    } else if (!data.email) {
      return setError("Select Account");
    } else if (!data.email_verified) {
      return setError("Unverified a Account");
    } else {
      setError("Welcome " + data.name + "! Click Sign Up");
      setDBsign({
        Department: Department,
        employeeType: EmpType,
        email: data.email,
        Name: data.given_name,
        Surname: data.family_name,
      });
      // FETCH POST REQUEST TO DATABASE USE LOG
      // PUT dbsign IN A BODY FRO YOUR REQUEST
    }
    console.log(DBsign);
  };
  const log = () => {
    if (!data.email) {
      return setlogError("Select Account");
    } else if (!data.email_verified) {
      return setlogError("Unverified a Account");
    } else {
      setlogError("Waiting for " + data.name + "! Click Login");
      setDBlog({
        email: data.email,
        Name: data.given_name,
      });

    }

    console.log(DBlog);
  };

  return (
    <>
      <LandingPageContainer>
        <Wrapper>
          <Card>
            <section className="top">
              <img src={require("./logo.png")} alt="Logo" />
              <h1>SYNERGY</h1>
            </section>
            <section className="bottom">
              {login ? (
                <>
                  <article className="secLog">
                    <h2>{logError}</h2>
                    {first ? <Index child={childToParent} /> : null}
                    <button className="log" onClick={log}>
                      Login
                    </button>
                  </article>
                  <button className="login" onClick={handleSignup}>
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <button className="login" onClick={handleLogin}>
                    Login
                  </button>
                  {" "}
                  <article className="secSign">
                    <h2>{Error}</h2>
                    <InputContainer>
                      <img src={require("./profile.png")}></img>
                      <input
                        type="text"
                        placeholder="Department"
                        value={Department}
                        onChange={depChange}
                      />
                    </InputContainer>
                    <InputContainer>
                      <img src={require("./profile.png")}></img>
                      {/* <input type='text' placeholder='Employee Type' value={EmpType} onChange={typeChange} /> */}
                      <select
                        value={EmpType}
                        onChange={typeChange}
                        placeholder="Employee type"
                      >
                        <option value="" disabled hidden>
                          Select Employee Type
                        </option>

                        <option value="Staff">Staff</option>
                        <option value="Manager">Manager</option>
                        <option value="HR">HR</option>
                      </select>
                    </InputContainer>
                    <Index child={childToParent}/>
                    <button className="sign" onClick={sign}>
                      Sign Up
                    </button>
                  </article>
                </>
              )}
            </section>
          </Card>
        </Wrapper>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
