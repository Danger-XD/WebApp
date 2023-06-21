import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { json, useParams } from 'react-router-dom'
import './UpdateService2.css'

const UpdateService2 = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/donors/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [])

  const handleNameChange = (e) => {
    const updatedName = e.target.value
    const updatedService = {
      name: updatedName,
      group: service.group,
      img: service.img,
      number: service.number,
    }
    setService(updatedService)
  }
  const handlegroupChange = (e) => {
    const updatedgroup = e.target.value
    const updatedService = {
      name: service.name,
      group: updatedgroup,
      img: service.img,
      number: service.number,
    }
    setService(updatedService)
  }
  const handlenumberChange = (e) => {
    const updatednumber = e.target.value
    const updatedService = {
      name: service.name,
      group: service.group,
      img: service.img,
      number: updatednumber,
    }
    setService(updatedService)
  }
  const handleImageChange = (e) => {
    const updatedImg = e.target.value
    const updatedService = {
      name: service.name,
      group: service.group,
      img: updatedImg,
      number: service.number,
    }
    setService(updatedService)
  }

  const handleUpdateService = (e) => {
    fetch(`http://localhost:5000/donors/${serviceId}`, {
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
      <Form className="foramm" onSubmit={handleUpdateService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Donor Name</Form.Label>
          <Form.Control
            type="text"
            value={service.name || ''}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Donor Blood Group</Form.Label>
          <Form.Control
            type="text"
            value={service.group || ''}
            onChange={handlegroupChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Donor Contact Number</Form.Label>
          <Form.Control
            type="text"
            value={service.number || ''}
            onChange={handlenumberChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Donor Image Link</Form.Label>
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

export default UpdateService2
