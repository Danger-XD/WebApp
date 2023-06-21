import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Service = (props) => {
  const { _id, name, img, quan, contact } = props.realService
  const { handleDeleteService } = props
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Bank Name: {name}</Card.Title>
          <Card.Text>Blood Quantity: {quan} Bags</Card.Text>
          <Card.Text>Contact Number: {contact}</Card.Text>

          
          <Link to={`/updateService/${_id}`}>
            <Button variant="primary" className="ms-4">
              Update
            </Button>
          </Link>
          <Button
            onClick={() => handleDeleteService(_id)}
            variant="primary"
            className="ms-4"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Service
