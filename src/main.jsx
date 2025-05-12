import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import Student from './student/student'
import Teacher from './teacher/teacher'
import SplashScreen from './splash'
import Admin from './admin/admin'
import SignUp from './signup/signup'
import AdminPage from './admin/adminPage'


function App() {
  const [ComponentToRender, setComponentToRender] = useState(() => SplashScreen);
  const [componentProps, setComponentProps] = useState({}); 
  const [checkedForLogIn,setCheckedForLogIn] = useState(false);
  useEffect(() => {
    if (checkedForLogIn){
      return
    }else{
      setCheckedForLogIn(true)
    }
    fetch('/api/checkLogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',  // Required if using cookies
    })
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          if (data.student != null) {
            setComponentToRender(() => Student)
            setComponentProps({ name: data.name, enrollment: data.enrollment,email:data.email,photo:data.photo,class:data.class,course:data.course,semester:data.semester,teacherSubject:data.teacherSubject});
          }
          else if (data.teacher != null) {
            setComponentToRender(() => Teacher);
            setComponentProps({"name":data.name,email:data.email,subject:data.subject})
          }
          else setComponentToRender(() => SignUp);
        }, 0);
        // }, 4000);
      })
      .catch(() => setComponentToRender(() => SignUp)); // Handle errors too
  }, []);

  return <ComponentToRender {...componentProps}/>;
}


createRoot(document.body).render(
  // <StrictMode>
  // <AdminPage />
    // <App />
    //  <Student /> 
    // {/* <Teacher /> */}
    // <SignUp />
    // <Admin />
    // {/* <SplashScreen /> */}
  // </StrictMode>,
  
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student" element={<Student  name="Pranay"  enrollment="08529802023" email="pranay@gmail.com" photo="/student-male.png" class="BCA 4 EB" course="Bachelor in Computer Application" semester="IV" teacherSubject={[["pranay","subject 1"],["Mr Don","subject 2"]]} />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/teacher" element={<Teacher name="MR. Teacher Name" email='teacher@gmail.com' subject={[["bca4eb","subject 1","bca"],["BCA1EA","subject 2","bca"],["btech1a","btech 3","btech"]]}/>} />
      </Routes>
    </BrowserRouter>
)
