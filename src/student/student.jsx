import { useEffect, useState } from "react";
import Academics from "./academics";
import Assignement from "./assignment";
import Attendance from "./attendance";
import StudentDashboard from "./dashboard";
import TopHeader from "./header";
import Leave from "./leave";
import Library from "./library";
import Manage from "./manage";
import Messages from "./message";
import Notes from "./notes";
import StudentSidebar from "./sidebar";
import "./student.css";


function Student(studentprop) {
  console.log(studentprop.teacherSubject)
  return (
    <section className="student dashboard">
      <StudentSidebar name={studentprop.name} semester={studentprop.semester} />
      <TopHeader course={studentprop.course} class={studentprop.class} enrollment={studentprop.enrollment} />
      <StudentDashboard />
      <Messages teacherSubject={studentprop.teacherSubject}/>
      <Library />
      <Notes teacherSubject={studentprop.teacherSubject} />
      <Assignement />
      <Attendance />
      <Academics />
      <Leave />
      <Manage />
    </section>
  );
}

export default Student;
