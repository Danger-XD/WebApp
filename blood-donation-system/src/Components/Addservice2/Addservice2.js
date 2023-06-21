import React, {useRef } from 'react';
import "./Addservice2.css";
import { Button, Form } from 'react-bootstrap';

const Addservice2 = () => {
  const nameRef = useRef()
  const groupRef = useRef()
  const numberRef = useRef()
  const imgRef = useRef()

  const handleAddService = (e) => {
    const name = nameRef.current.value
    const group = groupRef.current.value
    const number = numberRef.current.value
    const img = imgRef.current.value

    const newService = { name, group, number, img }

    fetch('http://localhost:5000/donors', {
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
          <Form.Label>Donor Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Donor Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Blood Group</Form.Label>
          <Form.Control
            ref={groupRef}
            type="text"
            placeholder="Enter Blood Group"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Donor Contact Number</Form.Label>
          <Form.Control
            ref={numberRef}
            type="text"
            placeholder="Enter Donor Contact Number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Donor Image</Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Enter Donor Image Link"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default Addservice2;
