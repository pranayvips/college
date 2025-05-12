
function Subject(props){
    return <div className="subject">
        <img src={props.image} alt="" />
        <h1>{props.title}</h1>
        <h2><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
{props.teacher}</h2>
    </div>
}
function Notes(notesProps){
    return <main className="notes">
        <div className="all-subject">
            {notesProps.teacherSubject.map((value,index)=>{
                return <Subject image="/subject.jpg" title={value[1]} teacher={value[0]} key={index} />
            })}
        </div>
        <div className="show-notes">

        </div>
    </main>
}

export default Notes;