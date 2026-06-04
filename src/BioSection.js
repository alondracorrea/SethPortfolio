import './About.css'; 

function BioSection({ greeting, secondGreeting,  description, imageSrc, altText }) {
  return (
    <div className="about-container">
      <div className="about-text-block">
        <p className="about-heading">{greeting}</p>
        <h2 className="about-heading2">{secondGreeting}</h2>
        <p className="about-description">{description}</p>
      </div>
      <img src={imageSrc} className="about-selfie" alt={altText} />
    </div>
  );
}

export default BioSection;