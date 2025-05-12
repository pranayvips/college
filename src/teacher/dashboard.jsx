import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Default styles
function Events(props){
  return <details open>
  <summary>
    <p>From</p><p>To</p><p>Course</p><p>Class</p><button className="showmore">Show More</button><button className="showless">Show Less</button>
    <span>10:00 AM</span><span>11:00 AM</span><span className="course">BCA</span><span className="class">4 EB | 805</span>
  </summary>
  <div className="bottom">

  <p className="studentCount"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
60</p>
<div>
  <button className="cancel">Cancel</button>
  <button className="reshedule">Reshedule</button>
  <button className="attend">Attendance</button>
</div>
  </div>
</details>
}
function Dashboard(){
    const [date, setDate] = useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date:", newDate);
  };
    return <main className="dashboard">
      <div className="top">

              <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>Your Schedule
              </h1>
              <button className="addClass"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg><span>Add Class</span>
</button>
<div className="left">
  <button className="active">Today</button>
  <button>Yesterday</button>
  <button>Other</button>
</div>
<button className="chooseDate"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg><span>Choose Date  </span>
<div className="caldiv">
<Calendar
        onChange={handleChange}
        value={date}
        className="rounded-lg shadow-md"
      /> </div></button>
      </div>
      <p className="scheduleDate">12 May 2025</p>

      
      <div className="events">
        <Events />
        <Events />
        <Events />
        <Events />
        <Events />
        <Events />
        <Events />
      </div>

    </main>
}

export default Dashboard;