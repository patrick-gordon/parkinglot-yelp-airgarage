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
https://parking-lot-yelp-airgarage.vercel.app/

# Video Time

It did take me longer than expected to overcome the CORS issue that came up in my project. I have run into this issue before, but couldn't remember how to solve it. I overcame this issue by looking at many docs and old projects. When encountering the CORS issue I paused my video for about 10 minutes to step away and refresh. I often take breaks throughout my normal workflow when I run into issues, and come back with a fresh mind a few minutes later.

The only part that was not implemented on the video is the if-else statement that is now wrapping the HomePage.js component. The purpose is to check `errorState` and return the correct error message in the case of a bad input. I realize this is not ideal implementation and could be improved, but did not want to compromise the integrity of my project by implementing something extensive off of video. I will also put a more efficient implementation in the future implementation section below.

# Future Implementation

- I would have like to make my errors to the user more efficient in an ideal project. The current method is redundant for only a small bit of code (user input error). I would have implemented this by removing the if-else statement that currently is wrapping the output of the HomePage component. I would create another `useState` hook `const [errorStatus, setErrorStatus] = useState('')` to capture the error and set it to state with `setErrorState(`${err}`)` in the .catch of the search function.
- If I had more time to work on this project, I would have added basic testing to the frontend using cypress.io [cypress docs](https://www.cypress.io/). My normal workflow consists of writing the most basic test first and work the complexity higher from there.
- I also realize it is poor practice to keep an API key inside a component and exposed when in a production environment. In a normal project I would be keeping the `API_KEY` inside of the .gitignore folder and assign it the value `API_KEY` and reference it with `process.ENV.API_KEY`. I kept it inside of the component for time, accessability and testing.
- I would have liked to have deployed my application on the video, but did not have time to do so. The site will be deployed on vercel and the link will be in the github repo for accessability.
