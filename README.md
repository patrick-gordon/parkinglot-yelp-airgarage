# Parking_Lot_Yelp

# Framework

- [React.js](https://reactjs.org/)

# Packages

- [react-router](https://reactrouter.com/)
- [reactstrap](https://reactstrap.github.io/)
- [axios](https://axios-http.com/)

# Installation

To run this application only three steps are needed.

- Clone this repo with `git clone https://github.com/patrick-gordon/parking-lot-yelp.git`
- `cd parking-lot-yelp`
- Run `npm i` in root of project

# Deployment
My application is deployed at this address for accesability. 
https://parking-lot-yelp-airgarage-emt8d6bxx-patrickgordon42.vercel.app/

# Video Time

It did take me longer than expected to overcome the CORS issue that came up in my project. I overcame this issue by looking at docs and old projects, since I have encountered this problem before. While working to resolve the CORS issue I paused my video for about 10 minutes to step away and refresh. I often take breaks throughout my normal workflow when I run into issues, and come back with a fresh perspective.

The only part that was not implemented on the video is the if-else statement that is now wrapping the HomePage.js component. The purpose is to check `errorState` and return the correct error message in the case of a bad user input. I realize this is not ideal implementation and could be improved, but did not want to compromise the integrity of my project by implementing something extensive off video. I will detail how I would improve this feature in the future implementation section below.

# Future Implementation

- I would have liked to make my error messages to the user more efficient with more time. The current method is redundant for only a small bit of code (user input error). I would have modified this by removing the if-else statement that currently is wrapping the output of the HomePage component. I would use the same `useState` hook `const [errorStatus, setErrorStatus ] = useState('')` and to capture the error and set it to state with `setErrorStatus(`${err}`)` in the .catch() of the search function.
- With more time, I would also have added basic testing to the frontend using cypress.io [cypress docs](https://www.cypress.io/). My normal workflow consists of writing the most basic test first and then elevating the complexity from there throughout the project. 
- I also realize it is poor practice to keep an API key inside a component and exposed when in a production environment. In a normal project I would be keeping the `API_KEY` inside of the .gitignore folder and assign it the value `API_KEY` and reference it with `process.ENV.API_KEY`. I kept it inside of the component for time, accessability, and testing.
- I would have liked to have deployed my application on the video, but did not have time to do so. The site will be deployed on vercel and the link will be in the READ.ME.
