## TV Networks APP | Front End

This project is a Next.js frontend application encompasing two main functionalities. An admin pannel for manging programs, channels, etc and a customer pages to display and stream movies, sports and etc.

It uses Material-UI for the UI components, Victory and Material React Table for data visualization, Zod for input validation and Axios/fetch for API requests.

The application fetches data from the backend and listens for real-time updates using Socket.IO.

### Setup Instructions
- Clone the repository

- Install dependencies

- Start the application

The application will run on http://localhost:3000.

### Project Structure
- app - Contains the source code.
- Components/ - Contains reusable components
- dashboard - Admin panel
- channel - channels and programs for customers
- favorites - user favorite lists
- watchlater - user watch later lists
- actions - server actions

### Features

- **Dashboard**
- **Programs Management** 
- **Channels Management** 
- **Real-time Updates** 
- **Customer Pages** 

## Fetching Data
The dashboard and other components fetch data from the backend API when the components mount and/or on the server.

### Real-time Updates

The frontend listens for the database-changed event from the backend to refetch the data.

### Dependencies
- Next.js (App Router)
- Material-UI
- Socket.IO client
- Victory
- Material React Table 
- Zod

### Additional
You can get the backend of this app [here](https://github.com/Uwancha/TV-APP-Backend)