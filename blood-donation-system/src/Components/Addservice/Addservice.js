import React, {useRef } from 'react';
import "./Addservice.css";
import { Button, Form } from 'react-bootstrap';

const Addservice = () => {
  const nameRef = useRef()
  const quanRef = useRef()
  const contactRef = useRef()
  const imgRef = useRef()

  const handleAddService = (e) => {
    const name = nameRef.current.value
    const quan = quanRef.current.value
    const contact = contactRef.current.value
    const img = imgRef.current.value

    const newService = { name, quan, contact, img }

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Data is Successfully added in database')
        }
      })

    e.preventDefault()
  }

  return (
    <div>
      <Form className="Formm" onSubmit={handleAddService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Blood Bank Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Blood Bank Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Blood Bag Quantity</Form.Label>
          <Form.Control
            ref={quanRef}
            type="text"
            placeholder="Enter Blood Bag Quantity"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Blood Bank Contact Number</Form.Label>
          <Form.Control
            ref={contactRef}
            type="text"
            placeholder="Enter Blood Bank Contact Number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Blood Bank Image</Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Enter Blood Bank Image Link"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default Addservice;
