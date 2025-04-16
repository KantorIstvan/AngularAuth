# Angular Authentication System

A complete authentication system built with Angular, Express, Node.js, and PostgreSQL, containerized with Docker.

## Project Overview

This project implements a secure user authentication system with login/registration flows and a protected dashboard. It consists of:

- **Frontend**: Angular application with authentication forms and dashboard
- **Backend**: Express.js API with JWT authentication
- **Database**: PostgreSQL for user data storage
- **Docker**: Containerized setup for easy deployment

## System Architecture

The system uses a three-tier architecture:

1. **Frontend**: Angular 19 SPA with authentication forms and protected routes
2. **Backend**: RESTful API built with Express.js providing authentication endpoints
3. **Database**: PostgreSQL database for storing user credentials

## Features

- User registration with email and password
- User login with JWT authentication
- Protected dashboard route requiring authentication
- Route guards for protected and public routes
- Docker containerization for production deployment

## Technologies Used

- **Frontend**:
  - Angular 19
  - RxJS
  - Angular Router with Guards
  - Angular Forms (Reactive)
- **Backend**:
  - Node.js
  - Express.js
  - bcryptjs (password hashing)
  - jsonwebtoken (JWT authentication)
  - pg (PostgreSQL client)
- **Database**:
  - PostgreSQL 17
- **DevOps**:
  - Docker & Docker Compose
  - Nginx (for frontend serving)

## Setup & Installation

### Prerequisites

- Docker and Docker Compose
- Node.js and npm (for local development)

### Environment Setup

1. Clone the repository
2. Configure environment variables

- Review the `.env` file in the root directory
- Update database credentials and JWT secret as needed

### Running with Docker

Start all services (frontend, backend, database):

```bash
docker-compose up
```

The application will be available at:

- Frontend: http://localhost:4200
- Backend API: http://localhost:3000/api

### Local Development Setup

- Backend

```bash
cd auth-backend
npm install
npm start
```

- Frontend

```bash
cd auth-frontend
npm install
ng serve
```
