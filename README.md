# JIKE Article Management System

## Overview

This project is a web application built with [React](https://reactjs.org/). The application features various pages such as Home, Article, Publish, Login, and Layout, with integrated state management, protected routes, and API utilities.

## Features

- **User Authentication**: Includes login and protected routes.
- **Data Visualization**: Displays data using charts.
- **State Management**: Manages user state, token storage, and API integration.
- **Responsive Design**: Styled using SCSS for a consistent UI.

## Project Structure

The main directories and files in this project are as follows:

### 1. Main App Files

- **`App.js`**: The main application component that configures and renders major page components.
- **`index.js`**: Entry file, rendering the root component into the DOM.

### 2. API Files (`src/apis`)

- **`article.js`**: Provides methods related to article management, such as fetching the article list, deleting, and updating.
- **`user.js`**: Contains user-related API functions, such as user login and fetching user information.

### 3. Components (`src/components`)

- **`AuthRoute.js`**: A higher-order component for route protection. It ensures that only authenticated users can access protected routes by checking the user state in Redux.

### 4. Custom Hooks (`src/hooks`)

- **`useChannel.js`**: A custom React hook to retrieve and handle the channel list data, used across components that display or filter by channels.

### 5. Pages (`src/pages`)

- **`Article/index.js`**: Article management page, which includes:

  - **Article List**: Displays a list of articles in a table format, showing details like cover image, title, status, publication date, view count, comments, and likes.
  - **Filter Function**: Filters articles based on status, channel, and publication date.
  - **Pagination**: Implements pagination for large article lists.
  - **Delete Function**: Allows articles to be deleted via an API call.

- **`Home/index.js`**: Home page, primarily displaying data in charts.

  - **BarChart Component**: Used to show satisfaction and usage metrics for three frameworks.

- **`Home/components/BarChart.js`**: Bar chart component utilizing `echarts` to render charts. It accepts a `title` prop to dynamically set the chart title.

- **`Layout/index.js`**: Layout component that contains the sidebar navigation and header with user information.

  - **Navigation Menu**: Highlights menu items based on the current route.
  - **Logout**: Includes a logout confirmation option that clears user information.

- **`Login/index.js`**: Login page, containing a form with fields for phone number and verification code.

  - **Login Logic**: Submits the form data through `fetchLogin` asynchronous action, and on success, redirects to the home page.

- **`Publish/index.js`**: Article publishing page, allowing for creating or editing an article.
  - **Form Submission**: Collects data like title, content, channel, and cover image type.
  - **Image Upload**: Allows the user to choose the cover type and upload images.
  - **Edit Mode**: In edit mode, it auto-populates article data and cover images for convenience.

### 6. Router (`src/router`)

- **`index.js`**: Configures routing for the app, including routes for Home, Article Management, Publish, and Login pages.
  - **Lazy Loading**: Implements lazy loading for page components using `React.lazy` for performance optimization.
  - **Route Protection**: Wraps protected routes with `AuthRoute`.

### 7. State Management (`src/store`)

- **`index.js`**: Configures the Redux store, integrating user-related modules.
- **`modules/user.js`**: Manages user-related state and operations.
  - **State**: Includes `token` and `userInfo`.
  - **Synchronous Actions**:
    - `setToken`: Sets the user token.
    - `setUserInfo`: Stores user information.
    - `clearUserInfo`: Clears both token and user information.
  - **Asynchronous Actions**:
    - `fetchLogin`: Authenticates the user through an API call and stores the token.
    - `fetchUserInfo`: Retrieves and stores user information.

### 8. Utilities (`src/utils`)

- **`index.js`**: Exports utility modules for easy access and management.
- **`request.js`**: Wraps `axios` with request and response interceptors.
  - **Request Interceptor**: Adds the token to the request headers.
  - **Response Interceptor**: Handles response data, particularly monitoring for 401 errors to manage logouts.
- **`token.js`**: Manages token storage, retrieval, and deletion.
  - `setToken`: Saves the token to `localStorage`.
  - `getToken`: Retrieves the token from `localStorage`.
  - `removeToken`: Deletes the token from `localStorage`.

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the application**:
   ```bash
   npm start
   ```

## Usage

- **Login Credentials**: Use the following credentials to log in:

  - **Phone Number**: `18000000002`
  - **Verification Code**: `246810`

- **Authentication**: User authentication is managed with the `AuthRoute` component.

- **API Requests**: The `request.js` file manages API calls and includes methods for handling tokens and error responses.

- **Custom Hooks**: `useChannel` custom hook is used for real-time data management, such as WebSocket connections.

## Contributing

Feel free to submit issues or pull requests to improve the project.
