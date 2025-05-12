import { useEffect, useState } from "react";
import "./admin.css";

function MakeSem(props) {
  return (
    <div className="sem">
      <p>Semester {props.sem}</p>
      <textarea
        placeholder="Enter Subject name in new lines"
        sem={props.sem}
      ></textarea>
    </div>
  );
}


function Admin() {
    useEffect(() => {
      fetch("http://localhost:5000/getDepartment").then(response=>response.json()).then(data=>{
        delete data.code
        setclassDept(prev=>data);
      }).then(()=>{
          fetch("http://localhost:5000/getClass").then(response=>response.json()).then(data=>{
              delete data.code
              setallclassname(prev=>data);
            })

        })
    }, [])
    
    function createDepartment() {
        let subjects = {};
        let departmentName = document.querySelector(
          ".admin .department-page .dept-name"
        ).value;
        for (let i of document.querySelectorAll(
          ".admin .department-page .sem-info .sem textarea"
        )) {
          subjects[i.getAttribute("sem")] = i.value.split("\n");
        }
        semCountSetter(prev=>0)
        const data={
            "deptName" : departmentName,
            "semValue" : subjects
        }
        fetch('http://localhost:5000/newDepartment', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(response=>response.json()).then(data=>{
            if(data["code"]=="0"){
                console.log(data["message"])
                alert("An error occurred! check console for details")
            }
            document.querySelector(".admin .department-page form").reset();
        })
      
    }

    function createClass(){
        let className = document.querySelector(".admin .class-page input").value;
        let departmentValue = document.getElementById("class-department-select").value;
        let semesterValue = document.getElementById("class-department-semester").value;
        let subject = classDept[departmentValue][semesterValue]
        if(departmentValue=="select" || semesterValue =="select" || className.length<2){
            return;
        }
        let data = {
            "name":className,
            "dept":departmentValue,
            "subject":subject,
            "semester":semesterValue
        }
          fetch('http://localhost:5000/newClass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(response=>response.json()).then(data=>{
              if(data["code"]=="0"){
                  console.log(data["message"])
                  alert("An error occurred! check console for details")
              }
              document.querySelector(".admin .class-page form").reset();
          })
    }

    function createNewStudent(){
      let alldata = document.querySelectorAll(".student-page-data")
      let data = {
        "enrollment": alldata[0].value,
        "gmail": alldata[1].value,
        "name": alldata[2].value,
        "password": alldata[3].value,
        "course": alldata[4].value,
        "semester": alldata[5].value,
        "class": alldata[6].value,
      }

      fetch('http://localhost:5000/addStudent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response=>response.json()).then(data=>{
          if(data["code"]=="0"){
              console.log(data["message"])
              alert("An error occurred! check console for details")
          }
          document.getElementById("student-add-form").reset();
      })
    }

    function createTeacher(){
      let alldata = document.querySelectorAll(".teacher-page-data")
      let data = {
        "name": alldata[0].value,
        "email": alldata[1].value,
        "password": alldata[2].value,
        "department": teacherDept,
        "subjects": teacherAddedSubject
      }

      fetch('http://localhost:5000/addTeacher', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response=>response.json()).then(data=>{
          if(data["code"]=="0"){
              console.log(data["message"])
              alert("An error occurred! check console for details")
          }
          document.getElementById("teacher-add-form").reset();
      })
    }


  const [semCount, semCountSetter] = useState(0);
  
  const [studentimageSrc, setstudentImageSrc] = useState(null);

  const [teacherDept,setTeacherDept] = useState("select")
  const [teacherClass,setTeacherClass] = useState([])
  const [teachersubject,setteachersubject] = useState([])
  const [teacherAddedSubject,setTeacherAddedSubject] = useState([])

  const [allclassname,setallclassname] = useState({});
  
  const [studentyear,setstudentyear] = useState("");

  const [classDept,setclassDept] = useState({});
  const [studentDeptSelected,setstudentDeptSelected] = useState([]);
  const [classDeptSelected,setclassDeptSelected] = useState([]);

  const handleStudentImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = () => {
        setstudentImageSrc(reader.result); // sets base64 image data
      };

      reader.readAsDataURL(file); // convert image to base64
    }
  };
  
  // create table department (departmentName varchar(30), semesterCount int)
  //                         actually no need for below one
  // create table department+"_"+${department} (semesterNumber int,subjects varchar(200))
  //                        what we can do instead is,, there will be multiple rows for it
  // create table department (departmentName varchar(30), semester int, subject varchar(50))


  // create table teacher (name varchar(30), email varchar(50), password varchar(30), photo varchar(40),dept varchar(20))
  // create table teacher_subject (name varchar(30),class varchar(20), subject varchar(30), department varchar(30), semester int)
  // create table student (enrollment varchar(15), email varchar(50), password varchar(30), name varchar(30), photo  varchar(40), class varchar(20), course varchar(20))
  // create table class (classname varchar(30), department varchar(30), semester int)

  // create table ${class} (announcement varchar(250),exam varchar(50), results varchar(50))
  // create table ${class}+"_"+${subject-name} (notes varchar(40), pyq varchar(40), image varchar(40))
  // create table ${class}+"_"+${subject-name}+"_"+attendance ( ```student name are column names &&& date with present or absent will be the row with every student marked as 'a' or 'p' respectively```)
  // create table ${class}+"_"+timetable (timing varchar(20), mon varchar(20),tue varchar(20),wed  varchar(20), thu varchar(20), fri varchar(20))
  
  return (
    <main className="admin student-show" id="admin">
      <div className="tabs">
        <p className="student-tab" onClick={()=>{
            document.getElementById("admin").setAttribute("class","admin student-show")
        }}>Students</p>
        <p className="teacher-tab" onClick={()=>{
            document.getElementById("admin").setAttribute("class","admin teacher-show")
        }}>Teachers</p>
        <p className="department-tab" onClick={()=>{
            document.getElementById("admin").setAttribute("class","admin department-show")
        }}>Department</p>
        <p className="class-tab" onClick={()=>{
            document.getElementById("admin").setAttribute("class","admin class-show")
        }}>Class</p>
      </div>
      <div className="student-page page">
        <details open>
          <summary>
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
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            <h1>Add a student</h1>
          </summary>
          <form id="student-add-form" onSubmit={(e)=>{
            e.preventDefault()
            createNewStudent()
          }}>
            <nav>
            {studentimageSrc && (
        <img src={studentimageSrc} alt="Preview" style={{ maxWidth: '300px', marginTop: '10px' }} />
      )}
            <input type="file" accept="image/*" onChange={handleStudentImage}/>
            </nav>
            <input type="text" placeholder="Enter enrollment number" className="student-page-data" required />
            <input type="email" placeholder="Enter gmail id" className="student-page-data" required />
            <input type="text" placeholder="Enter Student Name" className="student-page-data" required />
            <input type="text" placeholder="Enter the password" className="student-page-data" required />
            <select name="" id="student-course" className="student-page-data" required onChange={()=>{
                let value = document.getElementById("student-course").value;
                if (value=="select"){
                    setstudentDeptSelected(prev=[])
                }else{
                    setstudentDeptSelected(prev=>Object.keys(classDept[value]))
                }
            }}>
              <option value="select" defaultValue>
                Select Course 
              </option>
              {Object.entries(classDept).map(([key, value]) => (
                <option value={key} key={key}>{key}</option>
              ))}
            </select>
            <select name="" id="student-year" className="student-page-data" required onChange={()=>{
                let value = document.getElementById("student-year").value;
                if (value=="select"){
                    setstudentyear(prev="")
                }else{
                    setstudentyear(prev=>value)
                }
            }}>
              <option value="select" defaultValue>
                Select Semester
              </option>
              {studentDeptSelected.map((value,index)=>{
                return <option value={value} key={index}>{value}</option>
              })}
            </select>
            <select name="" id="" className="student-page-data">
                <option value="select" defaultChecked>Select Class</option>
                {(studentyear!="" && document.getElementById("student-course").value!="select" && studentyear in allclassname[document.getElementById("student-course").value])?allclassname[document.getElementById("student-course").value][studentyear].map((value,index)=>{
                    return <option value={value} key={index}>{value}</option>
              }):null}
            </select>
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
              <span>Reset All Data</span>
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span>Add Student</span>
            </button>
          </form>
        </details>
      </div>
      <div className="teacher-page page">
        <details open>
          <summary>
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
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            <h1>Add a Teacher</h1>
          </summary>
          <form id="teacher-add-form" onSubmit={(e)=>{
            e.preventDefault()
            console.log("hey world")
            createTeacher();
          }} >
            <input type="file" />
            <article>
                <table>
                    <thead>
                    <tr>
                        <th>Department</th>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Semester</th>
                    </tr>
                    </thead>
                    <tbody>
                    {teacherAddedSubject.map((value,index)=>{
                      return <tr key={index}>
                        <td>{value[0]}</td>
                        <td>{value[1]}</td>
                        <td>{value[2]}</td>
                        <td>{value[3]}</td>
                      </tr>
                    })}
                </tbody>
                </table>
                
            </article>
            <input type="text" placeholder="Enter Teacher Name" className="teacher-page-data" />
            <input type="text" placeholder="Enter gmail id" className="teacher-page-data"  />
            <input type="text" placeholder="Enter the password" className="teacher-page-data"  />
            <select id="teacher-course" onChange={()=>{
              let value = document.getElementById("teacher-course").value;
              if (value == "select"){
                setTeacherDept(prev=>"select")
                setTeacherClass(prev=>[])
                setteachersubject(prev=>[])
                return;
              }
              setTeacherDept(prev=>value)

            }}>
              <option value="none" defaultValue>
                Select Department
              </option>
              {Object.entries(classDept).map(([key, value]) => (
                <option value={key} key={key}>{key}</option>
              ))}
            </select>
            <div>
              <select name="" id="teacher-semester" onChange={()=>{
                let value = document.getElementById("teacher-semester").value;
                if(value=="select"){
                  setTeacherClass(prev=>[])
                  setteachersubject(prev=>[])
                  return;
                }
                setTeacherClass(prev=>allclassname[teacherDept][value])
                setteachersubject(prev=>classDept[teacherDept][value])
              }}>
                <option value="select">Semester</option>
                {(teacherDept!="select")?Object.keys(allclassname[teacherDept]).map((value,index)=>{
                  return <option value={value} key={index}>{value}</option>
                }):null}
              </select>
                <select name="" id="teacher-classname">
                    <option value="select" defaultChecked>Class</option>
                    {teacherClass.map((value,index)=>{
                      return <option value={value} key={index}>{value}</option>
                    })}
                </select>
                <select name="" id="teacher-subject">
                    <option value="select" defaultChecked>Subject</option>
                    {teachersubject.map((value,index)=>{
                      return <option value={value} key={index}>{value}</option>
                    })}
                </select>
                <button onClick={(e)=>{
                  e.preventDefault();
                  let className = document.getElementById("teacher-classname").value;
                  let subjectName = document.getElementById("teacher-subject").value;
                  let semester = document.getElementById("teacher-semester").value;
                  if(className=="select" || subjectName == "select"){
                    return;
                  }
                  setTeacherAddedSubject(prev=>[...prev,[document.getElementById("teacher-course").value,className,subjectName,semester]])
                  setteachersubject(prev=>[])
                  setTeacherClass(prev=>[])
                  document.getElementById("teacher-semester").selectedIndex = 0;
                }}>Add<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>
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
              <span>Reset All Data</span>
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span>Add Teacher</span>
            </button>
          </form>
        </details>
      </div>
      <div className="department-page page">
        <details open>
          <summary>
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
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>
            <h1>Department</h1>
          </summary>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createDepartment();
            }}
          >
            <input
              type="text"
              placeholder="Enter New Department Name"
              className="dept-name"
            />
            <select
              id="sem-count"
              onChange={(value) => {
                semCountSetter((prev) =>
                  parseInt(document.getElementById("sem-count").value)
                );
              }}
            >
              <option value="select">Select No. of Sem</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            {(semCount>0)?<h2>Semester Subject's</h2>:null}
            <aside className="sem-info">
              {Array.from({ length: semCount }).map((_, index) => (
                <MakeSem sem={index + 1} key={index} />
              ))}
            </aside>
            <button
              type="reset"
              onClick={() => {
                semCountSetter((prev) => 0);
              }}
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <span>Reset All Data</span>
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span>Create Department</span>
            </button>
          </form>
        </details>
      </div>
      <div className="class-page page">
        <details open>
          <summary>
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
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
              />
            </svg>
            <h1>Create a class</h1>
          </summary>
          <form onSubmit={(e)=>{
            e.preventDefault();
            createClass()
          }}>
            <input type="text" placeholder="Enter Class Name" />
            <select id="class-department-select" onChange={()=>{
                let value = document.getElementById("class-department-select").value;
                if (value=="select"){
                    setclassDeptSelected(prev=[])
                }else{
                    setclassDeptSelected(prev=>Object.keys(classDept[value]))
                }
            }}>
              <option value="select" defaultChecked>
                Select Course / Department
              </option>
              {Object.entries(classDept).map(([key, value]) => (
                <option value={key} key={key}>{key}</option>
              ))}
            </select>
            <select id="class-department-semester">
              <option value="select" defaultChecked>
                Select Semester
              </option>
              {classDeptSelected.map((value,index)=>{
                return <option value={value} key={index}>{value}</option>
              })}
            </select>
            <button
              type="reset"
              onClick={() => {
                semCountSetter((prev) => 0);
              }}
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <span>Reset All Data</span>
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span>Create Class</span>
            </button>
          </form>
        </details>
      </div>
    </main>
  );
}

export default Admin;
