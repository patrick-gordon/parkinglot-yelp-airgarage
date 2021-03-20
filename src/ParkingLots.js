import React from 'react';
import { Card, Container, CardTitle, CardText } from 'reactstrap';
import './ParkingLots.css';

export default function ParkingLots(props) {
  // score = ( number of reviews * rating ) / (number of reviews + 1)
  const review_count = props.data.review_count;
  const rating = props.data.rating;
  const parkingScore = (review_count * rating) / (review_count + 1);
  console.log(props);
  return (
    <div>
      <Card className='parkinglots-cards'>
        <CardTitle className='parkinglots-cards-title'>
          Lot Name:{props.data.name}
        </CardTitle>
        <CardText className='parkinglots-cards-text'>
          Address: {props.data.location.display_address}
          <br></br>
          <a
            href={props.data.image_url}
            style={{ textDecoration: 'underline', color: 'white' }}
            target='_blank'
            rel='noreferrer'
            alt='Picture of the parking lot'
          >
            See Lot IMG
          </a>
          <br></br>
          Star Rating: {props.data.rating}
          <br></br>
          Review Count: {props.data.review_count}
          <br></br>
          <a
            href={props.data.url}
            style={{ textDecoration: 'underline', color: 'white' }}
            target='_blank'
            rel='noreferrer'
          >
            Go To Yelp Page{' '}
          </a>
          <br></br>
          Parking Lot Score: {parkingScore}
        </CardText>
      </Card>
    </div>
  );
}
