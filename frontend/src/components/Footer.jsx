import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Alpha Tech &copy; {currentYear}</p>
          </Col>
          <Col className="text-center py-3">
            <p>Powered by DevOkla&copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
