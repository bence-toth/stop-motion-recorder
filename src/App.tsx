import "./App.css";

const App = () => (
  <div className="app">
    <header className="header">
      <h1>Stop Motion Recorder</h1>
      <span className="by-line">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/bence-toth/stop-motion-recorder"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bence A. Tóth
        </a>
      </span>
    </header>
    <main className="main"></main>
    <aside className="sidebar"></aside>
    <footer className="toolbar">
      <div>
        <button>Capture</button>
      </div>
      <div>
        <button>Preview</button>
      </div>
    </footer>
  </div>
);

export default App;
