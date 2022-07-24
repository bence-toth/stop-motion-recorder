import "./Header.css";

const Header = () => (
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
);

export default Header;
