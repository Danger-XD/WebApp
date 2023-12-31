import React, { useEffect, useState } from 'react'
import Service from '../Service2/Service2'
import './Services2.css'

const Services2 = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/donors')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [services])

  const handleDeleteService = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?')
    if (proceed) {
      fetch(`http://localhost:5000/donors/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('deleted successfully')
            const remainingServices = services.filter(
              (service) => service._id !== id,
            )
            setServices(remainingServices)
          }
        })
    }
  }

  return (
    <div className="services">
      {services.map((service) => (
        <Service
          realService={service}
          handleDeleteService={handleDeleteService}
        ></Service>
      ))}
    </div>
  )
}

export default Services2
