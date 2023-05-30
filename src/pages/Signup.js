import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

export function Signup () {
    return (
        <Container fluid className="mt-4">
            <Row>
                <Col className="head" md={{span: 4, offset: 4}}>
                <form>
                    <h3>Sign Up for an Account</h3>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="you@domain.com"
                        onChange={(evt) => console.log(evt.target.value) }
                        />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="minimum 8 characters"/>
                        
                    </Form.Group>
                    <Button variant="primary" type="submit" className="my-2 w-100" size="lg">
                        Sign Up
                    </Button>

                </form>
                </Col>
            </Row>

        </Container>
        
    )
}