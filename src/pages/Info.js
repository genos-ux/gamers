import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Nav from '../components/Nav'

function GridBasicExample() {
  return (
    <>
    <Nav/>
    <Form style={{textAlign:"center",padding:"15px"}}>
      <h1 style={{marginBottom:"40px"}}>Confirm Account Info</h1>
      <Row style={{marginBottom:"30px"}}>
        <Col>
          <Form.Control placeholder="Gabriel" />
          <Form.Text className="text-muted">
          The name is obtained from your mobile provider.
        </Form.Text>
        </Col>
        <Col>
          <Form.Control placeholder="Kyeremateng" />
        </Col>
      </Row>
      <Row style={{marginBottom:"40px"}}>
        <Col>
          <Form.Select aria-label="Default select example">
          <option>Select a country</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Select ID card</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
      <Row style={{marginBottom:"40px"}}>
        <Col>
          <Form.Control placeholder="Full ID Number" />
          
        </Col>
        <Col>
          <Form.Control placeholder="Date of Birth" />
        </Col>
      </Row>

      <Row style={{marginBottom:"40px"}}>
        <Col>
          <Form.Control placeholder="Email" />
          
        </Col>
        <Col>
          <Form.Control placeholder="Residential Address" />
        </Col>
      </Row>
      <Button type="submit"  style={{width:"40%"}}>Submit form</Button>
    </Form>
    </>
  );
}

export default GridBasicExample;