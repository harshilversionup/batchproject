import React from 'react'
import {Form,Button} from 'react-bootstrap'

export default function Contact() {
    return (
        <div className='container'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control type="text" placeholder="Message" />
  </Form.Group>

 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
