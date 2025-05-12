import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    ArcElement,
    Legend,
  } from "chart.js";
  import { Bar, Pie } from "react-chartjs-2";
  
  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
  );
  

function Timetablerow(props) {
  return (
    <div className="tablerow">
      <h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 {props.timeStart} - 
{props.timeEnd}
      </h1>
      <p>
 {props.subject}</p>
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
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <span>{props.teacher}</span>
      </h2>
      <div>
      <PieChart  data={[10, 3]} color="#ffc9c9" />
      <h4>12/15</h4>
      <h5>40%</h5>
      </div>
      <h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
</svg>
{props.classes}</h3>
    </div>
  );
}


function LoaderAnimation(){
  return <div className="loader">
  <hr />
  <hr />
  <hr />
</div>
}

function PieChart(props) {
  const data = {
    labels: ["Attended", "Skipped"],
    datasets: [
      {
        label: "Lectures",
        data: props.data,
        backgroundColor: [props.color, "#adb5bd"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        display: false,
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const label = data.labels[index];
        const value = data.datasets[0].data[index];
        alert(`You clicked on ${label}: ${value}`);
      }
    },
  };

  return <Pie data={data} options={options} />;
}
function StudentDashboard() {
  return (
    <main className="dashboard">
      {/* <figure className="attendance all-subject">
        <div className="top">
          <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>
Attendance</h1>
<select id="">
  <option value="all">All Subject</option>
  <option value="each">Each Subject</option>
</select>
        </div>
        <div className="left">
          <Barchart />
        </div>
        <div className="subjects">
          <div className="subject">
            <PieChart data={[10, 3]} color="#ffc9c9" />
            <Subject />
          </div>
          <div className="subject">
            <PieChart data={[10, 5]} color="#a5d8ff" />
            <Subject />
          </div>
          <div className="subject">
            <PieChart data={[10, 1]} color="#ffec99" />
            <Subject />
          </div>
          <div className="subject">
            <PieChart data={[10, 8]} color="#b2f2bb" />
            <Subject />
          </div>
          <div className="subject">
            <PieChart data={[10, 4]} color="#ffd8a8" />
            <Subject />
          </div>
        </div>
      </figure> */}
      <article className="middle">
        <div className="total ">
          <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
</svg>
Total Attendance</h1>
<LoaderAnimation />
          <p>78%</p>
        </div>
        <div className="announcement ">
          <h1>
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
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
              />
            </svg>
            Announcement
          </h1>
          <LoaderAnimation />
          <p>No new announcement as of now</p>
        </div>
      </article>
      <article className="timetable ">
        <div className="top">
          <h1>
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            Schedules
          </h1>
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
          <input type="date" />
        </div>
        <LoaderAnimation />
        <Timetablerow
          timeStart="09:00"
          timeEnd="10:00"
          subject="Subject Name 0"
          teacher="Dr. Teacher Name 1"
          classes="805"
        />
        <Timetablerow
          timeStart="10:00"
          timeEnd="11:00"
          subject="Subject Name 1"
          teacher="Dr. Teacher Name 2"
          classes="805"
        />
        <Timetablerow
          timeStart="11:00"
          timeEnd="12:00"
          subject="Subject Name 2"
          teacher="Dr. Teacher Name 3"
          classes="805"
        />
        <Timetablerow
          timeStart="12:30"
          timeEnd="01:30"
          subject="Subject Name 2"
          teacher="Dr. Teacher Name 3"
          classes="805"
        />
        <Timetablerow
          timeStart="01:30"
          timeEnd="02:30"
          subject="Subject Name 2"
          teacher="Dr. Teacher Name 3"
          classes="805"
        />
        <Timetablerow
          timeStart="02:30"
          timeEnd="03:30"
          subject="Subject Name 2"
          teacher="Dr. Teacher Name 3"
          classes="805"
        />
        <Timetablerow
          timeStart="03:30"
          timeEnd="04:30"
          subject="Subject Name 2"
          teacher="Dr. Teacher Name 3"
          classes="805"
        />
      </article>
    </main>
  );
}


export default StudentDashboard;