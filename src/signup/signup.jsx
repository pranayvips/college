import { useEffect, useState } from "react";
import "./signup.css";
function mailOtpChecker(inputElement) {
  inputElement = inputElement.target;
  // checking and validating otp here
  const allowedotp = "abcdefghijklmnopqrstuvwxyz1234567890";
  if (inputElement.value.length > 1) {
    inputElement.value = inputElement.value.length
      ? inputElement.value[inputElement.value.length - 1]
      : "";
  }
  if (
    inputElement.value.length == 1 &&
    allowedotp.includes(inputElement.value)
  ) {
    inputElement.style.borderColor = "lightgreen";
    try {
      inputElement.nextElementSibling.focus();
    } catch {
      document.querySelector(".next").focus();
    }
  } else {
    inputElement.style.borderColor = "red";
  }
}
function SignUp() {
  const [whichPage, setWhichPage] = useState("choose-signup");

  const [studentTab, setStudentTab] = useState(0);
  const [studentOtpPage, setStudentOtpPage] = useState(false);
  const [studentOtpView, setStudentOtpView] = useState(false);

  return (
    <main id="signupPage" className={`signupPage ${whichPage}`}>
      <button
        id="page-back"
        onClick={() => setWhichPage((prev) => "choose-signup")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <span>Account Type</span>
      </button>

      <svg
        viewBox="0 0 32 32"
        focusable="false"
        stroke="none"
        strokeWidth="0"
        aria-hidden="true"
        className="choose-bg-circle"
      >
        <path d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"></path>
      </svg>
      <svg
        viewBox="0 0 18 18"
        focusable="false"
        stroke="none"
        strokeWidth="0"
        aria-hidden="true"
        className="choose-bg-rect"
      >
        <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z"></path>
      </svg>
      <section id="choose">
        <div
          className="choose-box"
          style={{ backgroundColor: "#1368CE" }}
          onClick={() => setWhichPage((prev) => "admin-signup")}
        >
          <svg
            viewBox="0 0 32 32"
            focusable="false"
            stroke="none"
            strokeWidth="0"
            aria-hidden="true"
            className="inner-shape"
            style={{ top: "20%", right: 0 }}
          >
            <path
              d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
              style={{ fill: "rgba(5, 66, 185, 0.6)" }}
            ></path>
          </svg>
          <div className="circle" style={{ backgroundColor: "#00419F" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
              />
            </svg>
          </div>
          <h1 bg="#0542B9">
            <span style={{ backgroundColor: "#0542B9" }}></span>
            <p>Admin</p>
          </h1>
        </div>
        <div
          className="choose-box"
          style={{ backgroundColor: "#E21B3C" }}
          onClick={() => setWhichPage((prev) => "teacher-signup")}
        >
          <svg
            viewBox="0 0 32 32"
            focusable="false"
            stroke="none"
            strokeWidth="0"
            aria-hidden="true"
            className="inner-shape"
            style={{ top: 0, right: 0}}
          >
            <path
              d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
              style={{ fill: "rgba(198, 9, 41, 0.6)" }}
            ></path>
          </svg>
          <div className="circle" style={{ backgroundColor: "#AB0018" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <h1 bg="#0542B9">
            <span style={{ backgroundColor: " #C60929" }}></span>
            <p>Teacher</p>
          </h1>
        </div>
        <div
          className="choose-box"
          style={{ backgroundColor: "#FFA602" }}
          onClick={() => setWhichPage((prev) => "student-signup")}
        >
          <svg
            viewBox="0 0 32 32"
            focusable="false"
            stroke="none"
            strokeWidth="0"
            aria-hidden="true"
            className="inner-shape"
            style={{ top: 0, right: 0 }}
          >
            <path
              d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
              style={{ fill: "rgba(235, 103, 15, 0.3)" }}
            ></path>
          </svg>
          <div className="circle" style={{ backgroundColor: "#C97900" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <h1 bg="#0542B9">
            <span style={{ backgroundColor: "#EB670F" }}></span>
            <p>Student</p>
          </h1>
        </div>
      </section>
      <section id="student">
        <div className="left">
          <h1>Login</h1>
          <p>Login to Access your account!</p>
          <div className="tabs">
            <h2
              onClick={() => {
                setStudentTab((prev) => 0);
              }}
              className={studentTab == 0 ? "active" : null}
              tab="mail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
              College Mail Id
            </h2>
            <h2
              onClick={() => {
                setStudentTab((prev) => 1);
              }}
              className={studentTab == 1 ? "active" : null}
              tab="enrollment"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
              Enrollment no.
            </h2>
          </div>
          <div
            className="enrollment"
            style={{ display: studentTab == 0 ? "none" : "block" }}
          >
            <div className="input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <input
                type="number"
                placeholder="Enter your enrollment number"
                id="student-enrollment"
              />
            </div>
            <div className="input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                id="enrollment-view"
                className="hide"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <input
                type="password"
                placeholder="Enter your password"
                id="student-password"
              />
            </div>
          </div>

          <div
            className="mail"
            style={{ display: studentTab == 1 ? "none" : "block" }}
          >
            <h4
              className="infoMail"
              style={{ display: !studentOtpPage ? "block" : "none" }}
            >
              If an university email has not been issued, please log in using
              your enrollment number.
            </h4>
            <div
              className="input input-mail"
              style={{ display: !studentOtpPage ? "flex" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter your college email"
                id="student-college-mail"
              />
              <button data="Please provide the email address assigned by the university.">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </button>
            </div>

            <h4
              className="editMail"
              style={{ display: studentOtpPage ? "flex" : "none" }}
            >
              <p id="student-edit-mail">Prasadpranay2005@gmail.com</p>
              <span
                onClick={() => {
                  setStudentOtpPage((prev) => false);
                  setStudentOtpView((prev) => false);
                  document
                    .getElementById("mail-otp-view")
                    .children[0].setAttribute(
                      "d",
                      "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    );
                }}
              >
                Edit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </span>
            </h4>
            <div
              className="input-otp"
              style={{ display: studentOtpPage ? "flex" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                id="mail-otp-view"
                className="hide"
                onClick={(e) => {
                  if (!studentOtpView) {
                    e.currentTarget.children[0].setAttribute(
                      "d",
                      "M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    );
                    setStudentOtpView((prev) => true);
                  } else {
                    e.currentTarget.children[0].setAttribute(
                      "d",
                      "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    );
                    setStudentOtpView((prev) => false);
                  }
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <div>
                <input
                  type={!studentOtpView ? "password" : "text"}
                  onChange={mailOtpChecker}
                  onKeyUp={mailOtpChecker}
                />
                <input
                  type={!studentOtpView ? "password" : "text"}
                  onChange={mailOtpChecker}
                  onKeyUp={mailOtpChecker}
                />
                <input
                  type={!studentOtpView ? "password" : "text"}
                  onChange={mailOtpChecker}
                  onKeyUp={mailOtpChecker}
                />
                <input
                  type={!studentOtpView ? "password" : "text"}
                  onChange={mailOtpChecker}
                  onKeyUp={mailOtpChecker}
                />
                <input
                  type={!studentOtpView ? "password" : "text"}
                  onChange={mailOtpChecker}
                  onKeyUp={mailOtpChecker}
                />
                <input
                  type={!studentOtpView ? "password" : "text"}
                  onChange={mailOtpChecker}
                  onKeyUp={mailOtpChecker}
                />
              </div>
            </div>
          </div>
          <button
            className="next"
            onClick={() => {
              if (studentTab == 0) {
                let value = document.getElementById(
                  "student-college-mail"
                ).value;
                if (value.length < 5) {
                  console.log("invalid mail cant be less than 5 letters");
                  return;
                }
                setStudentOtpPage((prev) => 1);
                document.getElementById("student-edit-mail").textContent =
                  value;
              } else {
                let enrollment =
                  document.getElementById("student-enrollment").value;
                let password =
                  document.getElementById("student-password").value;
                if (enrollment.length < 5 || password.length < 2) {
                  alert("invalid values");
                }
                let data = {
                  enrollment: enrollment,
                  password: password,
                };
                fetch("/api/loginStudent", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                  .then((response) => response.status)
                  .then((data) => {
                    console.log(data);
                  });
                // .then(data=>{
                //     if(data["code"]=="0"){
                //         console.log(data["message"])
                //         alert("An error occurred! check console for details")
                //     }else if(data["code"]=="2"){
                //       alert(data["message"])
                //     }else{
                //         alert("login succesffull")
                //         console.log(data["message"])
                //       }
                // })
              }
            }}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 402 342"
            fill="none"
            style={{ top: 0, right: 0, height: "25%" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M246.183 -104.329C312.639 -116.256 371.52 -62.0773 418.718 -13.7965C465.269 33.8225 509.63 92.4428 503.349 158.738C497.371 221.846 441.486 266.079 388.857 301.412C346.913 329.57 296.568 327.713 246.183 331.386C189.06 335.551 127.863 356.88 81.0708 323.851C29.1946 287.233 -8.32216 221.457 1.5951 158.738C10.9568 99.5328 85.3425 82.6115 126.157 38.7128C170.216 -8.67467 182.496 -92.898 246.183 -104.329Z"
              fill="#9C6FE4"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 422 389"
            fill="none"
            style={{ top: "25%", left: "-5%", height: "35%" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M205.374 8.7358C261.752 10.383 323.63 -4.11215 366.368 32.694C410.935 71.0758 425.47 135.114 420.133 193.688C415.212 247.692 379.683 291.403 339.479 327.793C301.705 361.983 256.206 384.623 205.374 388.072C150.424 391.8 91.4587 385.477 51.7483 347.313C11.4882 308.621 6.04585 249.45 3.1127 193.688C-0.0469032 133.622 -9.70002 63.5939 34.6891 23.0034C78.4897 -17.0489 146.047 7.00245 205.374 8.7358Z"
              fill="#9C6FE4"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 763 616"
            fill="none"
            style={{ bottom: 0, right: 0, height: "50%" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M467.006 132.596C583.471 80.0015 685.35 -14.6835 812.005 2.31091C960.633 22.2536 1115.18 93.6591 1181.01 228.4C1246.57 362.608 1189.14 518.749 1131.66 656.613C1079.22 782.362 998.913 894.871 877.418 956.524C755.024 1018.63 617.337 1011.37 482.441 986.056C317.591 955.124 116.62 945.835 36.1559 798.67C-45.1052 650.048 24.3375 458.696 116.336 316.471C190.857 201.265 341.959 189.067 467.006 132.596Z"
              fill="#9C6FE4"
            />
          </svg>
          <h1>
            <strong>Welcome To </strong>
            <br /> student Portal
          </h1>
          <img src="/signup-student.png" alt="" />
        </div>
      </section>
      <section id="teacher">
        <div className="left">
          <h1>Teacher's Portal</h1>
          <h2>Welcome Back</h2>
          <div className="top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="315"
              height="317"
              viewBox="0 0 315 317"
              fill="none"
            >
              <path
                d="M87.0922 89.6713L103.994 73.8709C136.826 43.1782 186.659 39.6514 223.487 65.4144L226.152 67.2793C252.568 85.7584 267.011 117.01 263.967 149.104C260.973 180.681 241.497 208.318 212.766 221.757L198.53 228.417L180.911 235.671C136.016 254.155 84.6233 232.883 65.9257 188.076C51.7366 154.073 60.177 114.833 87.0922 89.6713Z"
                fill="#030047"
                fillOpacity="0.06"
              />
            </svg>
            <img src="/teachersignup.png" alt="" />
          </div>
          <div className="bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 375 200"
              fill="none"
            >
              <path
                d="M0 37C119.079 -11.1453 252.117 -11.6346 371.547 35.6333L375 37V243H0V37Z"
                fill="#030047"
              />
            </svg>
          </div>
        </div>
        <div className="right">
          <h1>Login</h1>
          <h2>To access Your Account</h2>
          <label htmlFor="">Enter Your Gmail</label>
          <div className="input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <input type="text" placeholder="Enter Your Gmail" id="signup-teacher-email" />
          </div>
          <label htmlFor="">Enter Your Password</label>
          <div className="input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>

            <input type="password" placeholder="Enter Your Password" id="signup-teacher-password" />
          </div>
          <p>Forgot Password</p>
          <button onClick={()=>{
            let email = document.getElementById("signup-teacher-email").value
            let password = document.getElementById("signup-teacher-password").value
            if(email.length < 3 || password.length < 2){
              return alert("Invalid values")
            }
            let data = {
                  email: email,
                  password: password,
                };
                fetch("/api/loginTeacher", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                  });
          }}>Login</button>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
