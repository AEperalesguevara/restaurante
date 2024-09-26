import './ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>Contáctanos</h3>
      <p>Teléfono: +51 123 456 789</p>
      <p>Email: contacto@restaurante.com</p>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
