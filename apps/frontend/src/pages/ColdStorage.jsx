import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, InputGroup } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaPhone, FaStar, FaFilter } from 'react-icons/fa';
import './ColdStorage.css';
import img from "../assets/images/map-placeholder.jpg";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ColdStorage = () => {
   useEffect(() => {
    const map = L.map("map").setView([18.5204, 73.8567], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);


      L.marker([18.5204, 73.8567]).addTo(map)
  .bindPopup("Pune, Maharashtra").openPopup();

   L.marker([12.9716, 77.5946]).addTo(map)
  .bindPopup("Bengaluru, Karnataka").openPopup();

 L.marker([17.3850, 78.4867]).addTo(map)
  .bindPopup("Hyderabad, Telangana")
.openPopup();


    return () => map.remove();
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    capacity: '',
    distance: '10km',
    location: '',
    rating: '3+'
  });

  // Mock data (replace with API calls)
  const coldStorages = [
    {
      id: 1,
      name: "GreenCold Storage",
      location: "Pune, Maharashtra",
      distance: "5km",
      capacity: "50 tonnes",
      contact: "+91 9876543210",
      rating: 4.5,
      price: "₹200/tonne/day"
    },
    {
      id: 2,
      name: "AgriFresh Solutions",
      location: "Bengaluru, Karnataka",
      distance: "12km",
      capacity: "120 tonnes",
      contact: "+91 8765432109",
      rating: 4.2,
      price: "₹180/tonne/day"
    },
    {
      id: 3,
      name: "FarmToMarket Cold Chain",
      location: "Hyderabad, Telangana",
      distance: "8km",
      capacity: "80 tonnes",
      contact: "+91 7654321098",
      rating: 3.8,
      price: "₹220/tonne/day"
    },
    {
      id: 4,
      name: "Rakesh Cold Chain",
      location: "Bengaluru, Karnataka",
      distance: "3km",
      capacity: "20 tonnes",
      contact: "+91 7654321098",
      rating: 3.8,
      price: "₹225/tonne/day"
    },
    {
      id: 5,
      name: "Modern Cold Chain",
      location: "Hyderabad, Telangana",
      distance: "7km",
      capacity: "20 tonnes",
      contact: "+91 6543210567",
      rating: 3.8,
      price: "₹211/tonne/day"
    },
    {
      id: 6,
      name: "FarmToMarket Cold Chain",
      location: "Hyderabad, Telangana",
      distance: "8km",
      capacity: "80 tonnes",
      contact: "+91 7654321098",
      rating: 3.8,
      price: "₹220/tonne/day"
    }
  ];

 const filteredStorages = coldStorages.filter(storage => {
  const searchMatch =
    storage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    storage.location.toLowerCase().includes(searchTerm.toLowerCase());

  const ratingMatch =
    filters.rating === '' || storage.rating >= parseInt(filters.rating);

  const locationMatch =
    filters.location === '' || storage.location.toLowerCase().includes(filters.location.toLowerCase());

  return searchMatch && ratingMatch && locationMatch;
});


  return (
    <Container className="cold-storage-page my-5" id='cold-storage'>
      <h2 className="text-center mb-4">❄️ Find Nearby Cold Storages</h2>
      <p className="text-center mb-5">Locate and book storage for your produce to minimize post-harvest losses</p>

      {/* Search and Filters */}
      <Row className="mb-4">
        <Col md={8}>
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control 
              type="text" 
              placeholder="Search by location or storage name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Button variant="outline-success" className="w-100">
            <FaFilter className="me-2" />
            Filters
          </Button>
        </Col>
      </Row>

      <Row>
        {/* Map Section */}
        <Col lg={6} className="mb-4  mt-4 mb-lg-0">
          <div className="map-container">
             <div  id="map"></div>
            <div className="map-overlay">
              <Button variant="success" size="sm">
                <FaMapMarkerAlt className="me-1" />
                View in Full Map
              </Button>
            </div>
          </div>
        </Col>

        {/* Results List */}
        <Col lg={6} className='overflow-auto' style={{ maxHeight: '60vh' }}>
          {filteredStorages.length > 0 ? (
            filteredStorages.map(storage => (
              <Card key={storage.id} className="mb-3 storage-card">
                <Card.Body>
                  <Row>
                    <Col xs={8}>
                      <h5>{storage.name}</h5>
                      <p className="text-muted mb-2">
                        <FaMapMarkerAlt className="text-success me-2" />
                        {storage.location} ({storage.distance} away)
                      </p>
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        <span className="badge bg-light text-dark">
                          Capacity: {storage.capacity}
                        </span>
                        <span className="badge bg-light text-dark">
                          {storage.price}
                        </span>
                      </div>
                    </Col>
                    <Col xs={4} className="text-end">
                      <div className="rating mb-2">
                        <FaStar className="text-warning" />
                        <span className="ms-1">{storage.rating}</span>
                      </div>
                      <Button variant="success" size="sm">
                        <FaPhone className="me-1" />
                        Contact
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div className="text-center py-4">
              <p>No cold storages found matching your criteria</p>
              <Button variant="outline-success" onClick={() => {
                setSearchTerm('');
                setFilters({...filters, rating: ''});
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ColdStorage;