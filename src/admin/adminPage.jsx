import { useEffect, useState } from "react";
import "./adminpage.css";
import AdminSidebar from "./adminsidebar";
function addStudentBackend() {
  let value = document.querySelectorAll(".admin-studentAdd-data");
  const data = {
    gender: value[0].value,
    name: value[1].value,
    enrollment: value[2].value,
    email: value[3].value,
    password: value[4].value,
    course: value[5].value,
    semester: value[6].value,
    className: value[7].value,
  };
  console.log(data);
}

function AdminPage() {
  useEffect(() => {
    fetch("http://localhost:5000/getDepartment")
      .then((response) => response.json())
      .then((data) => {
        delete data.code;
        setclassDept((prev) => data);
        console.log(data);
      })
      .then(() => {
        fetch("http://localhost:5000/getClass")
          .then((response) => response.json())
          .then((data) => {
            delete data.code;
            setallclassname((prev) => data);
            console.log(data);
          });
      });
  }, []);

  const [allclassname, setallclassname] = useState({});
  const [classDept, setclassDept] = useState({});

  const [studentDeptSelected, setstudentDeptSelected] = useState([]);
  const [studentyear, setstudentyear] = useState("");

  // for teacher || adding new teacher
  const [teacherAddClassSubject, setTeacherAddClassSubject] = useState([]);
  const [teacherSelectedClassSubject, setTeacherSelectedClassSubject] =
    useState([]);
  const [teacherSelectionFilter, setTeacherSelectionFilter] = useState({
    sem: "",
    class: "",
  });
  const [teacherAddDeptSelected,setTeacherAddDeptSelected] = useState("")
  const [teacherAddClassFilter,setTeacherAddClassFilter] = useState([])

  function checkTeacherSemesterFilter(semester) {
    return teacherSelectionFilter["sem"] != "" &&
      teacherSelectionFilter["sem"] != semester
      ? false
      : true;
  }
  function checkTeacherClassFilter(classname) {
    return teacherSelectionFilter["class"] != "" &&
      teacherSelectionFilter["class"] != classname
      ? false
      : true;
  }

  function MakeTeacherSubject(props) {
    return (
      <div className={`teacherSubject`}>
        <p>{props.department}</p>
        <p>{props.semester}</p>
        <p>{props.classname}</p>
        <p>{props.subject}</p>
        {props.type ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              // let indexNumber = e.currentTarget.getAttribute("data")
              setTeacherAddClassSubject((oldData) =>
                oldData.filter((_, index) => index !== props.valueAt)
              );
              setTeacherSelectedClassSubject((prev) => [
                ...prev,
                [
                  props.department,
                  props.semester,
                  props.classname,
                  props.subject,
                  props.valueAt,
                ],
              ]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>Add</span>
          </button>
        ) : (
          <button
            style={{ backgroundColor: "#f03e3e" }}
            onClick={(e) => {
              e.preventDefault();
              // let indexNumber = e.currentTarget.getAttribute("data")
              setTeacherSelectedClassSubject((oldData) =>
                oldData.filter((_, index) => index !== props.valueAt)
              );
              // setTeacherAddClassSubject(prev=>[...prev,[props.department,props.semester,props.classname,props.subject]])
              let newData = [];
              teacherAddClassSubject.forEach((value, index) => {
                if (index == props.insertPos) {
                  newData.push([
                    props.department,
                    props.semester,
                    props.classname,
                    props.subject,
                  ]);
                }
                newData.push(value);
              });
              setTeacherAddClassSubject((prev) => newData);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <span>Remove</span>
          </button>
        )}
      </div>
    );
  }
  return (
    <main className="adminpage student-sidebar" id="adminpage">
      <AdminSidebar />
      <div className="right">
        <div className="admin-student">
          <h1>Student</h1>
          <h2>
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <span>Manage</span> |
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
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
              />
            </svg>
            <span>Add</span> |
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
                d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            <span>Remove</span> |
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
            <span>Edit</span> |
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span>View</span>
          </h2>
          <div className="addStudent">
            <h1>Add a Student</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addStudentBackend();
              }}
            >
              <div className="gender">
                <label htmlFor="gender-student-0">
                  <img src="/student-male.png" alt="" />
                </label>
                <input
                  type="radio"
                  id="gender-student-0"
                  name="student-gender"
                  className="admin-studentAdd-data"
                  // hidden
                  required
                />

                <label htmlFor="gender-student-1">
                  <img src="/student-female.png" alt="" />
                </label>
                <input
                  type="radio"
                  id="gender-student-1"
                  name="student-gender"
                  // hidden
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Enter  Name"
                className="admin-studentAdd-data"
                required
              />
              <input
                type="number"
                placeholder="Enter Enrollment Number"
                className="admin-studentAdd-data"
                required
              />
              <input
                type="email"
                placeholder="Enter Email Id"
                className="admin-studentAdd-data"
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="admin-studentAdd-data"
                required
              />
              <div className="info">
                <select
                  name=""
                  className="admin-studentAdd-data"
                  id="admin-studentAdd-course"
                  required
                  onChange={() => {
                    let value = document.getElementById(
                      "admin-studentAdd-course"
                    ).value;
                    if (value == "") {
                      setstudentDeptSelected((prev = []));
                    } else {
                      setstudentDeptSelected((prev) =>
                        Object.keys(classDept[value])
                      );
                    }
                  }}
                >
                  <option value="" defaultChecked>
                    Select Course
                  </option>
                  {Object.entries(classDept).map(([key, value]) => (
                    <option value={key} key={key}>
                      {key}
                    </option>
                  ))}
                </select>
                <select
                  name=""
                  className="admin-studentAdd-data"
                  id="admin-studentAdd-semester"
                  required
                  onChange={() => {
                    let value = document.getElementById(
                      "admin-studentAdd-semester"
                    ).value;
                    if (value == "") {
                      setstudentyear((prev) => "");
                    } else {
                      setstudentyear((prev) => value);
                    }
                  }}
                >
                  <option value="" defaultChecked>
                    Select Semester
                  </option>
                  {studentDeptSelected.map((value, index) => {
                    return (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    );
                  })}
                </select>
                <select
                  name=""
                  id=""
                  required
                  className="admin-studentAdd-data"
                >
                  <option value="" defaultChecked>
                    Select Class
                  </option>
                  {studentyear != "" &&
                  document.getElementById("admin-studentAdd-course").value !=
                    "select" &&
                  studentyear in
                    allclassname[
                      document.getElementById("admin-studentAdd-course").value
                    ]
                    ? allclassname[
                        document.getElementById("admin-studentAdd-course").value
                      ][studentyear].map((value, index) => {
                        return (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
              <button type="reset">
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Reset Data
              </button>
              <button type="submit">
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
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Save Student
              </button>
            </form>
          </div>
        </div>
        <div className="admin-teacher">
          <h1>Teacher</h1>
          <h2>
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <span>Manage</span> |
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
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
              />
            </svg>
            <span>Add</span> |
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
                d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            <span>Remove</span> |
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
            <span>Edit</span> |
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span>View</span>
          </h2>
          <div className="admin-teacheradd">
            <h1>Add Teacher</h1>
            <form action="">
              <div className="teacheraddimg">
                <img src="/person.png" alt="" />
                <input type="file" hidden id="admin-teacheradd-image" />
                <label htmlFor="admin-teacheradd-image">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                      />
                    </svg>
                    <span>Upload An Image</span>
                  </p>
                </label>
              </div>
              <input type="text" placeholder="Enter Teacher Name" />
              <input type="email" placeholder="Enter Gmail Id" />
              <input type="password" placeholder="Password" />
              <select
                name=""
                id="admin-teacherAdd-department"
                onChange={() => {
                  let departmentSelected = document.getElementById(
                    "admin-teacherAdd-department"
                  ).value;
                  if (departmentSelected == "") {
                    return;
                  }
                  setTeacherAddDeptSelected(prev=>departmentSelected)
                  let data = [];
                  let semData = []
                  Object.keys(allclassname[departmentSelected]).map(
                    (semester) => {
                      allclassname[departmentSelected][semester].map(
                        (classname) => {
                          semData.push(classname)
                          classDept[departmentSelected][semester].map(
                            (subjectName) => {
                              data.push([
                                departmentSelected,
                                semester,
                                classname,
                                subjectName,
                              ]);
                            }
                          );
                        }
                      );
                    }
                  );
                  setTeacherAddClassFilter(prev=>semData)
                  setTeacherAddClassSubject((prev) => data);
                }}
              >
                <option value="">Select Department</option>
                {Object.keys(allclassname).map((value, index) => {
                  return (
                    <option value={value} key={index}>
                      {value}
                    </option>
                  );
                })}
              </select>
              <div className="filter">
                <span>All Subject's</span>
                <select
                  name=""
                  id="admin-teacherAdd-filter-semester"
                  onChange={() => {
                    let value = document.getElementById(
                      "admin-teacherAdd-filter-semester"
                    ).value;
                    if(value==""){
                      setTeacherSelectionFilter((prev) => ({
                      ...prev,
                      sem: '',
                    }));
                    let allClassData = []
                    Object.keys(allclassname[teacherAddDeptSelected]).map((semester)=>{
                      allclassname[teacherAddDeptSelected][semester].forEach((classList)=>{
                        allClassData.push(classList)
                      })
                      // allClassData.push[...allclassname[teacherAddDeptSelected]]
                    })
                    setTeacherAddClassFilter(prev=>allClassData)
                      return;
                    }
                    setTeacherAddClassFilter(prev=>allclassname[teacherAddDeptSelected][value])
                    setTeacherSelectionFilter((prev) => ({
                      ...prev,
                      sem: value,
                    }));
                  }}
                >
                  <option value="">Semester</option>
                  {(teacherAddDeptSelected!="") ? Object.keys(allclassname[teacherAddDeptSelected]).map((semester,index)=>{
                    return <option value={semester} key={index}>{semester}</option>
                  }):null}
                </select>
                <select name="" id="">
                  <option value="">Class</option>
                  {teacherAddClassFilter.map((value,index)=>{
                    return <option value={value} key={index}>{value}</option>
                  })}
                </select>
              </div>
              <h3>Selected Subject's</h3>
              <div className="selectSubject">
                <div className="teacherSubject top">
                  <p>Department</p>
                  <p>Semester</p>
                  <p>Class</p>
                  <p>Subject</p>
                  <p>Option</p>
                </div>
                {teacherAddClassSubject.map((value, index) => {
                  return checkTeacherSemesterFilter(value[1]) &&
                    checkTeacherClassFilter(value[2]) ? (
                    <MakeTeacherSubject
                      department={value[0]}
                      semester={value[1]}
                      classname={value[2]}
                      subject={value[3]}
                      key={index}
                      valueAt={index}
                      type={true}
                    />
                  ) : null;
                })}
                {/* <MakeTeacherSubject department="BCA" semester="2" classname="Bca3ea" subject="Hindi"/>
                      <MakeTeacherSubject department="BCA" semester="2" classname="Bca3ea" subject="Hindi"/>
                      <MakeTeacherSubject department="BCA" semester="2" classname="Bca3ea" subject="Hindi"/>
                      <MakeTeacherSubject department="BCA" semester="2" classname="Bca3ea" subject="Hindi"/>
                      <MakeTeacherSubject department="BCA" semester="2" classname="Bca3ea" subject="Hindi"/> */}
              </div>
              <div className="displaySelectSubject">
                <div className="teacherSubject top">
                  <p>Department</p>
                  <p>Semester</p>
                  <p>Class</p>
                  <p>Subject</p>
                  <p>Option</p>
                </div>
                {teacherSelectedClassSubject.map((value, index) => {
                  return (
                    <MakeTeacherSubject
                      department={value[0]}
                      semester={value[1]}
                      classname={value[2]}
                      subject={value[3]}
                      insertPos={value[4]}
                      key={index}
                      type={false}
                      valueAt={index}
                    />
                  );
                })}
              </div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
                Clear Data
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                  />
                </svg>
                Add Record
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminPage;

// design from here

// https://www.figma.com/design/L7uU5bNajTY3mhz22nx3qN/Free-Dark-Admin-Dashboards--Community-?node-id=5401-1157&p=f&t=sChJppnmXUOA5rRs-0
