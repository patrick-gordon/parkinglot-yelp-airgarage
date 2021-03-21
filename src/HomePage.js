import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import ParkingLots from './ParkingLots';
import './HomePage.css'

export default function HomePage() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');
  let token =
    'mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx';

  const search = (e) => {
    axios
      .get(
        'https://nameless-ocean-28397.herokuapp.com/https://api.yelp.com/v3/businesses/search',
        {
          params: {
            location,
            term: 'parking lot',
            sort_by: 'rating',
          },
          headers: {
            Authorization: `bearer ${token}`,
            'Content-type': 'application/json',
          },
        }
      )
      .then((res) => {
        // console.log(res.data.businesses);
        // setData(res.data.businesses);
        let newData = (res.data.businesses)
        console.log(newData)
        let newData1 = [...newData].reverse()
        console.log(newData1)
        setData(newData1)

      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleChange = (e) => {
    console.log(location);
    setLocation(e.target.value);
  };
  return (
    <Container className='homepage-container' >
    <h2>Search for Parking Lots</h2>
    <div className='homepage-content'> 
      <input
        className='homepage-input'
        type='text'
        name='location'
        onChange={handleChange}
        placeholder='Where would you like to search?'
        size='30'
      ></input>
      <Button onClick={search}>Search</Button>
    </div>
    <div className='homepage-card-container'>    
    {data.map((data) => {
        console.log(data)
        return <ParkingLots key={data.id} data={data} />
    })}
    </div>
    </Container>
      
  );
}

// UseState
// data,setData = []
// location, setLocation = ''

// search function
// AXIOS
//setData(res.data)

//TITLE
// Input
// Button

//ParkingLots
//cards
//address, rating, review_count, img, yelp link, score**
