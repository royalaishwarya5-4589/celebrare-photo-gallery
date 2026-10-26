# Celebrare Photo Gallery

A modern, responsive photo gallery built with **React, Vite, and Tailwind CSS**. The application allows users to browse a collection of photographs, search images by author, and save favourite photos with persistent browser storage.

This project demonstrates practical frontend development concepts, including reusable React components, custom hooks, reducer-based state management, API integration, memoization, and responsive UI design.

## Overview

Celebrare Photo Gallery provides a clean and interactive interface for discovering and organizing photographs. It retrieves image data from the Picsum Photos API and presents the results in a responsive grid.

Users can search for photographs by author, mark images as favourites, and revisit their selected favourites after refreshing the page.

The application was developed to demonstrate modern React development practices and the implementation of common frontend application features.

## Key Features

- **Dynamic Photo Gallery:** Fetches and displays photographs using the Picsum Photos API.
- **Author Search:** Filters the loaded collection by author name.
- **Favourite Management:** Add or remove photographs from favourites using an interactive heart control.
- **Persistent Favourites:** Saves favourite photo IDs in browser localStorage so selections remain available after a page refresh.
- **Custom React Hook:** Separates photo-fetching logic and manages loading and error states.
- **Reducer-Based State Management:** Uses `useReducer` to manage favourite selections through defined actions.
- **Optimized Rendering:** Uses `useMemo` for filtered photo results and `useCallback` for selected event handlers.
- **Reusable Components:** Separates photo presentation into reusable React components.
- **Responsive Design:** Adapts the gallery layout to desktop, tablet, and mobile screen sizes.
- **Loading and Error Handling:** Provides handling for data-fetching progress and API failures.

## Technology Stack

| Category | Technology |
|---|---|
| UI Library | React |
| Build Tool and Development Server | Vite |
| Language | JavaScript (ES Modules) |
| Styling | Tailwind CSS |
| Data Source | Picsum Photos API |
| State Management | React `useReducer` |
| React Hooks | `useState`, `useEffect`, `useCallback`, `useMemo`, `useReducer` |
| Browser Storage | localStorage |
| Package Manager | npm |
| Version Control | Git and GitHub |
| Code Quality | ESLint |

## Application Architecture

The application follows a component-based frontend architecture.

- **Presentation Layer:** React components render the gallery, photo cards, search interface, and favourite controls.
- **Data Fetching Layer:** A custom hook retrieves photo data from the Picsum Photos API and manages loading and error states.
- **Application State Layer:** React state and `useReducer` manage user interactions and favourite selections.
- **Persistence Layer:** Browser localStorage stores favourite photo IDs across page refreshes.
- **Styling Layer:** Tailwind CSS provides responsive layout utilities and interface styling.

### Photo Loading Workflow

1. The application requests photo data from the Picsum Photos API.
2. The custom hook manages the loading state while the request is in progress.
3. Retrieved photographs are passed to the gallery interface.
4. The gallery displays the photos using reusable photo card components.
5. Search filters the loaded photographs by author name.

### Favourite Management Workflow

1. The user selects the heart control on a photo.
2. An action is dispatched to the favourites reducer.
3. The reducer adds or removes the photo ID from the favourites collection.
4. An effect synchronizes the updated favourites with localStorage.
5. When the application loads again, saved favourite IDs are restored from localStorage.

## React Concepts Demonstrated

### Custom Hook

The custom photo-fetching hook encapsulates API communication and related loading and error states. This keeps data-fetching logic separate from the main application component.

### useReducer

The favourites reducer centralizes favourite-related state transitions. Actions such as toggling a favourite and loading saved favourites make state changes easier to organize and understand.

### useCallback

`useCallback` memoizes selected event-handler functions between renders when their dependencies remain unchanged.

### useMemo

`useMemo` memoizes the filtered photo collection, avoiding unnecessary recalculation when its dependencies have not changed.

### localStorage

Browser localStorage provides client-side persistence for favourite photo IDs. This implementation does not require a separate database or user account.

## Project Structure

```text
celebrare-photo-gallery/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── PhotoCard.jsx
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── reducers/
│   │   └── favoritesReducer.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Prerequisites

Ensure the following tools are installed:

- Node.js (a current LTS version is recommended)
- npm
- Git
- A modern web browser

An active internet connection is required to retrieve photographs from the external API.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/royalaishwarya5-4589/celebrare-photo-gallery.git
```

### 2. Navigate to the Project Directory

```bash
cd celebrare-photo-gallery
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal. With the default Vite configuration, this is usually:

```text
http://localhost:5173/
```

### 5. Build for Production

```bash
npm run build
```

Vite generates the production-ready files in the `dist/` directory.

### 6. Preview the Production Build

```bash
npm run preview
```

Open the local preview URL shown in the terminal.

## API Integration

The application uses the Picsum Photos API to retrieve photo metadata and image information.

**Endpoint:**

```text
https://picsum.photos/v2/list?limit=30
```

The request retrieves up to 30 photo records. The application uses the returned data to display photographs and their associated author information.

The API is an external dependency. An internet connection and API availability are required for successful photo retrieval.

## Data Persistence

Favourite selections are stored in the browser's localStorage.

- Favourite photo IDs are saved locally.
- Saved selections are restored when the application initializes.
- Removing a favourite updates the stored collection.
- Data is specific to the browser and origin being used.

**Note:** localStorage is not a cloud database. Favourite selections are not automatically synchronized between different browsers or devices.

## Testing Checklist

- [ ] The gallery loads photographs from the API.
- [ ] Loading feedback appears while photo data is being retrieved.
- [ ] API failures are handled appropriately.
- [ ] Searching by author filters the displayed photos.
- [ ] Favourite controls add and remove photos correctly.
- [ ] Favourite selections remain after refreshing the page.
- [ ] The gallery layout adapts to desktop, tablet, and mobile screens.
- [ ] The application starts successfully using `npm run dev`.
- [ ] The production build completes using `npm run build`.

## Future Enhancements

- Dedicated favourites view and favourite count.
- Pagination or infinite scrolling for larger photo collections.
- Sorting by author or photo ID.
- More advanced search and filtering options.
- Improved accessibility and keyboard navigation.
- Automated component and integration tests.
- Deployment to a public hosting platform.
- Optional cloud-based persistence across devices.

## Project Objectives

Celebrare Photo Gallery was developed to apply modern frontend development concepts to a practical web application. It demonstrates API integration, reusable component design, responsive styling, state management, browser storage, and React performance optimization techniques.

## Author

**Jyothi Aiswarya**

GitHub: [@royalaishwarya5-4589](https://github.com/royalaishwarya5-4589)

## Repository

[View Celebrare Photo Gallery on GitHub](https://github.com/royalaishwarya5-4589/celebrare-photo-gallery)

---

**Celebrare Photo Gallery — Discover photos. Find your favourites.**
