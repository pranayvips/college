function Group(props) {
  return (
    <div className="group">
      <img src={props.image} alt="" />
      <div>
        <h1>{props.name}</h1>
        <h2>09:30</h2>
        <h3>this is the last message...</h3>
        <h4>2</h4>
      </div>
    </div>
  );
}
function Chat() {
  return (
    <main className="messages">
      <aside className="side-panel">
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
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            Messages
          </h1>
          <p>These are your messages from all your class groups.</p>
        </div>
        <div className="chat-container">
            <Group image="/group-icon.png" name="Java 4 Eb" />
            <Group image="/group-icon.png" name="Java 4 Eb" />
            <Group image="/group-icon.png" name="Java 4 Eb" />
            <Group image="/group-icon.png" name="Java 4 Eb" />
            <Group image="/group-icon.png" name="Java 4 Eb" />
            <Group image="/group-icon.png" name="Java 4 Eb" />
            <Group image="/group-icon.png" name="Java 4 Eb" />
        </div>
      </aside>
    </main>
  );
}

export default Chat;
