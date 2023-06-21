import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { json, useParams } from 'react-router-dom'
import './UpdateService.css'

const UpdateService = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [])

  const handleNameChange = (e) => {
    const updatedName = e.target.value
    const updatedService = {
      name: updatedName,
      quan: service.quan,
      img: service.img,
      contact: service.contact,
    }
    setService(updatedService)
  }
  const handlequanChange = (e) => {
    const updatedquan = e.target.value
    const updatedService = {
      name: service.name,
      quan: updatedquan,
      img: service.img,
      contact: service.contact,
    }
    setService(updatedService)
  }
  const handlecontactChange = (e) => {
    const updatedcontact = e.target.value
    const updatedService = {
      name: service.name,
      quan: service.quan,
      img: service.img,
      contact: updatedcontact,
    }
    setService(updatedService)
  }
  const handleImageChange = (e) => {
    const updatedImg = e.target.value
    const updatedService = {
      name: service.name,
      quan: service.quan,
      img: updatedImg,
      contact: service.contact,
    }
    setService(updatedService)
  }

  const handleUpdateService = (e) => {
    fetch(`http://localhost:5000/services/${serviceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Update Successful')
          setService({})
        }
      })

    e.preventDefault()
  }

  return (
    <div>
      <Form className="foram" onSubmit={handleUpdateService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Blood Bank Name</Form.Label>
          <Form.Control
            type="text"
            value={service.name || ''}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Blood Bag Quantity</Form.Label>
          <Form.Control
            type="text"
            value={service.quan || ''}
            onChange={handlequanChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Blood Bank Contact Number</Form.Label>
          <Form.Control
            type="text"
            value={service.contact || ''}
            onChange={handlecontactChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Blood Bank Image Link</Form.Label>
          <Form.Control
            type="text"
            value={service.img || ''}
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  )
}

export default UpdateService
