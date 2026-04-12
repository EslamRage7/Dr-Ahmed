import "../styles/Preloader.css";

export default function Preloader() {
  return (
    <div className="preloader" role="status" aria-live="polite">
      <div className="preloader-card">
        <div className="preloader-ring" aria-hidden="true"></div>
        <div className="preloader-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="preloader-text">Loading your smile...</p>
      </div>
    </div>
  );
}
