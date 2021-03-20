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

# Video Time

It did take me longer than expected to overcome the CORS issue that came up in my project. I have run into this issue before, but couldn't remember how to solve it. I overcame this issue by looking at many docs and old projects. When encountering the CORS issue I paused my video for about 10 minutes to step away and refresh. I often take breaks throughout my normal workflow when I run into issues, and come back with a fresh mind a few minutes later.

# Future Implementation

- If I had more time to work on this project, I would have added basic testing to the frontend using cypress.io [cypress docs](https://www.cypress.io/). My normal workflow consists of writing the most basic test first and work the complexity higher from there.
- I also realize it is poor practice to keep an API key inside a component and exposed when in a production environment. In a normal project I would be keeping the `API_KEY` inside of the .gitignore folder and assign it the value `API_KEY` and reference it with `process.ENV.API_KEY`. I kept it inside of the component for time, accessability and testing.
- I would have liked to have deployed my application on the video, but did not have time to do so. The site will be deployed on vercel and the link will be in the github repo for accessability.
