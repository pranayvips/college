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
  

function Barchart() {
  const data = {
    labels: ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 23, 6],
        backgroundColor: [
          "#ffc9c9",
          "#a5d8ff",
          "#ffec99",
          "#b2f2bb",
          "#ffd8a8",
        ],
      },
    ],
  };

  const options = {
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const label = data.labels[index];
        const value = data.datasets[0].data[index];
        alert(`You clicked on ${label}: ${value}`);
      }
    },
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

function Subject() {
    return (
      <div className="right">
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
        <p>Subject name</p>
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
        <p>teacher Name</p>
      </div>
    );
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

function Attendance(){
    return <main className="attendance all" id="attendance">
         <div className="top">
          <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>
Attendance</h1>
<select id="student-attendance-select" onChange={()=>{
    let value = document.getElementById("student-attendance-select").value;
    if(value == "all"){
        document.querySelector(".student main[id='attendance']").setAttribute("class","attendance all")
    }else{
        document.querySelector(".student main[id='attendance']").setAttribute("class","attendance each")
    }
}}>
  <option value="all">All Subject</option>
  <option value="each">Each Subject</option>
</select>
        </div>
        <div className="allsubject">
          <Barchart />
        </div>
        <div className="eachsubject">
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
    </main>
}

export default Attendance;