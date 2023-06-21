import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Service2 = (props) => {
  const { _id, name, img, group, number } = props.realService
  const { handleDeleteService } = props
  return (
    <div>
      <Card className='cardd'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Donor Name: {name}</Card.Title>
          <Card.Text>Blood Group: "{group}"</Card.Text>
          <Card.Text>Contact Number: {number}</Card.Text>

          
          <Link to={`/updateService2/${_id}`}>
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

export default Service2
