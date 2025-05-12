function closeAllSidebarOption(){
    let options = document.querySelectorAll(".adminsidebar .option details")
    options.forEach(ele=>{
        ele.removeAttribute("open")
    })
}
function AdminSidebarOption(props) {
  return (
    <details open={props.index == "0"?true:false} onClick={(e)=>{
        if(e.currentTarget.getAttribute("open")==null){
            closeAllSidebarOption()
        }
        document.querySelector(".adminsidebar").setAttribute("class",`adminsidebar ${props.classValue}`)
        document.querySelector(".adminpage").setAttribute("class",`adminpage ${props.classValue}`)
    }}>
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
            d={props.svgPath}
          />
        </svg>
        <h1>{props.title}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="down"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="down"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </summary>
      <article>
        {props.option.map((value, index) => {
          return <p key={index} className={(index==0)?"active":null}>{value}</p>;
        })}
      </article>
    </details>
  );
}

function AdminSidebar() {
  return (
    <aside className="adminsidebar">
      <img src="/vips-logo-dark.png" alt="" />
      <div className="search">
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="option">
        <AdminSidebarOption
          index = "0"
          option={[
            "Add Student",
            "Remove Student",
            "Edit Student",
            "Get Details",
          ]}
          classValue = "student-sidebar"
          title="Student"
          svgPath="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
        <AdminSidebarOption
          option={[
            "Add Teacher",
            "Remove Teacher",
            "Edit Teacher",
            "Get Details",
          ]}
          classValue = "teacher-sidebar"
          title="Teacher"
          svgPath="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
        <AdminSidebarOption
          option={["Add Department", "Remove Department", "Edit Department"]}
          classValue = "department-sidebar"
          title="Department"
          svgPath="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
        <AdminSidebarOption
          option={["Add Class", "Remove Class", "Edit Class"]}
          classValue = "class-sidebar"
          title="Class"
          svgPath="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
        />
        <AdminSidebarOption
          option={["Add TimeTable", "Edit TimeTable"]}
          classValue = "timetable-sidebar"
          title="TimeTable"
          svgPath="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </div>
      <span>All right Reserved</span>
    </aside>
  );
}

export default AdminSidebar;
