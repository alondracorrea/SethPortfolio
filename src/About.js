
import BioSection from './BioSection';
import sethPic from './images/seth-pic.png';
import harleyPic from './images/harley-pic.png'; 

function About() {
  return (
    <div className="about-page-wrapper">
      
     
      <BioSection 
        greeting=""
        description="Hey, I'm Seth. I like Spiderman and Harley."
        imageSrc={sethPic}
        altText="selfie"
      />

      <BioSection 
        greeting="This is Harley"
        secondGreeting="Full Name: Harley Party Charlie Morgan Mac Jack Jake John McGinnis Amanda Scar Nosferatu Renfield Townsley"
        description="He's my bestfriend, he is my pal, he is my homebody, my rotten soldier, my sweet cheese, my good time boy."
        imageSrc={harleyPic}
        altText="harley selfie"
      />

    </div>
  );
}

export default About;