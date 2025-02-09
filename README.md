# Travel Advisor 🌍✈️

Welcome to the **Travel Advisor** project! This application is designed to help travelers explore and discover amazing places to visit, stay, and enjoy. Whether you're looking for hotels, bars, museums, or cultural landmarks, this app has got you covered! 

## Table of Contents 📚

1. [Features](#features-)
2. [**Try on WEB** 🌍](#try-on-web-)
3. [Tech Stack](#tech-stack-)
4. [Getting Started](#getting-started-)
5. [Usage](#usage-)
6. [Contributing](#contributing-)
7. [License](#license-)

## Features 🚀

- **Interactive Map**: Utilizes a large Yandex Map to visually explore locations.
- **OpenTripMap API Integration**: Fetches a variety of places to relax, stay, and explore, including hotels, bars, and cultural sites (museums and attractions).
- **Yandex Geocoder**: Easily search for locations using a search bar to find your desired spots quickly.
- **Favorites Management**: Add and remove your favorite places to keep track of your must-visit spots.
- **Downloadable Itinerary**: Once you're finished planning, you can download your selected places as an `.xls` file to keep your travel plans handy!

## Try on WEB 🌍

### [**Try on netlify!**](https://yermaka-travel-advisor.netlify.app/)

## Screenshots 📸
  <details>
        <summary>Click to see</summary>
        <img src="https://github.com/user-attachments/assets/3673065d-b71e-4bdd-a0b0-174d7d78ab38" alt="travel-advisor-map">
        <img src="https://github.com/user-attachments/assets/66c3f0d0-a2b2-49b2-a142-a67858ad2ab2" alt="travel-advisor-list">
    </details>
    
## Tech Stack 🛠️

The **Travel Advisor** application is built using the following technologies:

- **React** with TypeScript: For building a responsive and interactive user interface.
- **Yarn**: For package management.
- **Husky**: To manage Git hooks for better code quality.
- **React Yandex Maps**: For embedding and customizing Yandex Maps in the application.
- **Material-UI (MUI)**: To create a sleek and modern design with ready-to-use components.
- **Axios**: For making API requests to fetch data from OpenTripMap.
- **XLSX**: To handle the download functionality for exporting the itinerary.
- **Zustand**: As a state management solution to keep track of user favorites and other app states.
- **Vite**: For fast development and build processes.

## Getting Started ⚙️

To get started with the Travel Advisor project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/travel-advisor.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd travel-advisor
   ```

3. **Install Dependencies**:
   ```bash
   yarn install
   ```
4. Configure `.env` file
 
5. **Run the Development Server**:
   ```bash
   yarn dev
   ```

6. **Open Your Browser**: 
   Visit `http://localhost:5173/` to view the application in action!

## Usage 🗺️

- **Searching for Places**: Use the search bar to find specific locations. The Yandex Geocoder will help you locate your desired spots.
- **Exploring the Map**: Zoom in and out of the Yandex Map to discover various places. Click on markers to get more information.
- **Managing Favorites**: Click the heart icon to add places to your favorites. You can easily remove them as well.
- **Download Your Itinerary**: Once you've selected your favorite places, click the download button to save your itinerary as an `.xls` file.

## Contributing 🤝

We welcome contributions to enhance the Travel Advisor project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

## License 📄

This project is open-source and available under the MIT License.
