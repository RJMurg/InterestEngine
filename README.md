# InterestEngine

InterestEngine is a SvelteKit Web App designed to gauge interest for TU DubLAN, a massive weekend-long event run by CS++, E-Sports, Games and other societies. It uses the Prisma ORM to attach to a Postgres database. InterestEngine is currently designed only for this purpose, though will be re-tooled for built-in data analysis.

InterestEngine will be deployed on my VPS through Docker, with Nginx providing a reverse proxy.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/RJMurg/InterestEngine
```
2. Install dependencies using `npm install`.
3. Modify the `.envexample` file to `.env` and fill in the Database URL.
4. Run `npm run dev` to start the development server, it will be available on `localhost:5173`.

## Deployment

1. Clone the repository:
```bash
git clone https://github.com/RJMurg/InterestEngine
```
2. Install dependencies using `npm install`.
3. Modify the `.envexample` file to `.env` and fill in the Database URL.
4. Run `docker build -t interestengine .` to build the Docker image.
5. Run `docker run -d -p 3000:3000 --name interestengine interestengine` to run the Docker container.
6. Configure your web server to reverse proxy to this container.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details
