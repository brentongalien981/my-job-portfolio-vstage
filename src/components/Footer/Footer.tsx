import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-1 mt-auto" style={{ borderTop: "1px solid #ddd" }}>
      <Container>
        <span style={{ fontSize: "0.8rem", fontWeight: "400" }}>&copy; 2024 Bren Baga</span>
      </Container>
    </footer>
  );
};

export default Footer;
