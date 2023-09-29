import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>AlphaTech &copy; {currentYear} By DevOkla</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
