# Socket Hub (Node.js)

A real-time chat application implemented in Node.js, using WebSockets for real-time communication. The application supports running via direct code execution or using Docker Compose for containerized deployment.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Running the Application from Code](#running-the-application-from-code)
- [Running the Application with Docker Compose](#running-the-application-with-docker-compose)


## Prerequisites
- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Docker**: [Download and install Docker](https://www.docker.com/products/docker-desktop)

## Running the Application from Code
1. **Clone the repository**:
    ```sh
    git clone https://github.com/andrelcunha/socket-hub-nodejs.git
    cd socket-hub-nodejs
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the server**:
    ```sh
    npm start
    ```

4. **Open the client**:
    - Open a browser and navigate to `http://localhost:8080`

## Running the Application with Docker Compose
1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/socket-hub-nodejs.git
    cd socket-hub-nodejs
    ```

2. **Build and start the containers**:
    ```sh
    docker-compose up --build
    ```

3. **Open the client**:
    - Open a browser and navigate to `http://localhost:8080`
