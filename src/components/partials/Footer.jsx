import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#222",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    width: "100%",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  };

  const sectionStyle = {
    flex: "1",
    minWidth: "250px",
    margin: "10px",
  };

  const titleStyle = {
    color: "#f4a261",
    marginBottom: "10px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const bottomStyle = {
    backgroundColor: "black",
    padding: "10px",
    marginTop: "10px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h5 style={titleStyle}>Navigation</h5>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#" style={linkStyle}>Accueil</a></li>
            <li><a href="#" style={linkStyle}>Profil</a></li>
            <li><a href="#" style={linkStyle}>Formulaire</a></li>
            <li><a href="#" style={linkStyle}>À propos</a></li>
            <li><a href="#" style={linkStyle}>Contact</a></li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h5 style={titleStyle}>Suivez-nous</h5>
          <p><a href="#" style={linkStyle}>Facebook</a></p>
          <p><a href="#" style={linkStyle}>Twitter</a></p>
          <p><a href="#" style={linkStyle}>Instagram</a></p>
        </div>

        <div style={sectionStyle}>
          <h5 style={titleStyle}>Contact</h5>
          <p>Email : contact@monsite.com</p>
          <p>Téléphone : +33 6 12 34 56 78</p>
          <p>Adresse : Paris, France</p>
        </div>
      </div>

      <div style={bottomStyle}>
        &copy; 2025 MonSite | Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
