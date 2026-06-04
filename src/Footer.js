// ...existing code...
import './Footer.css'
import instaIcon from './images/insta.png'   
import emailIcon from './images/email.png'       

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a
          href="https://instagram.com/mrbonez.graveyard"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src={instaIcon} alt="Instagram" />
        </a>

        <a
          href="mailto:email@example.com" 
          aria-label="Email"
        >
          <img src={emailIcon} alt="Email" />
        </a>
      </div>

      <div className="footer-rights">
        <p>© 2026 Seth. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
