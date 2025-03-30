import './Card.css'
export default function Card({ imgsrc, heading, description, buttonText }) {
  return (
    <div className="user-container">
      <img src={imgsrc} className="img1" alt="Dynamic content" />
      <h1>{heading}</h1>
      <p>{description}</p>
      <a href="#">See Terms.</a>
      <button>{buttonText}</button>
    </div>
  );
}