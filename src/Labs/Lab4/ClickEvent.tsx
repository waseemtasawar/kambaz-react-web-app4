export default function ClickEvent() {
    const hello = () => {
      alert("Hello World!");
    };
    return (
      <div id="wd-click-event">
        <h2>Click Event</h2>
        <button onClick={hello} id="wd-hello-world-click">Hello World!</button>
      </div>
    );
  }