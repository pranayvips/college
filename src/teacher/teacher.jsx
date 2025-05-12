import Chat from "./chat";
import Classes from "./classes";
import Dashboard from "./dashboard";
import FileView from "./fileview";
import TopHeader from "./header";
import Sidebar from "./sidebar";
import "./teacher.css"
function Teacher(teacherProps){
    return <main className="teacher dashboard">
        <TopHeader name={teacherProps.name} email={teacherProps.email} />
        <Sidebar />
        <Dashboard />
        <Classes subject={teacherProps.subject}/>
        <Chat />
        <FileView />
    </main>
}
export default Teacher;