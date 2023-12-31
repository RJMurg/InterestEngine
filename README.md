# InterestEngine

InterestEngine is a simple web app form designed for TU DubLAN where potential attendees register their interest in the event. The app is built using SvelteKit, with the Prisma ORM attached to aP Postgres database to store the data.

The app is deployed on my VPS using Docker, with Nginx as a reverse proxy.
At present, the app is not modular and is designed to be used for a single event. In the future, I plan to make the app modular so that it can be used for multiple events.

## Installation

1. Clone the repository
2. Install dependencies using `npm install`
3. Modify the `.envexample` file to `.env` and fill in the required details
4. Run `npm run dev` to start the development server

## Deployment

1. Clone the repository
2. Install dependencies using `npm install`
3. Modify the `.envexample` file to `.env` and fill in the required details
4. Run `docker build -t interestengine .` to build the Docker image
5. Run `docker run -d -p 3000:3000 --name interestengine interestengine` to run the Docker container
6. Configure Nginx to reverse proxy to the app

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details
