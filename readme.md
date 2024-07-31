# SahyadriCanteen

## Project Overview

SahyadriCanteen is a comprehensive web application designed for managing canteen operations. It provides functionalities for browsing menu items, placing orders, viewing order history, and providing feedback. The application includes user authentication, admin dashboards, and various user interfaces to enhance the user experience.

## Features

- **Home Page:** Welcomes users and showcases featured items.
- **Menu Page:** Displays menu items with filtering options based on categories.
- **Order History:** Allows users to view their previous orders.
- **Feedback Page:** Enables users to submit feedback on menu items.
- **Login and Registration:** Allows users to log in and register an account.
- **Admin Dashboard:** (Restricted to admin users) Provides administrative functionalities.

## Components

### **Home Page**
- Displays a welcome message and a carousel of featured items.

### **Menu Page**
- Shows a list of menu items.
- Includes filtering options by category.
- Features a responsive design with dropdowns for smaller screens.

### **Order History**
- Lists past orders with details like item name, date, and status.

### **Feedback Page**
- Allows users to submit feedback for menu items.
- Includes form validation and error handling.

### **LoginModal**
- Provides a login form for users to authenticate.

### **RegisterModal**
- Allows new users to register an account.
- Includes form validation and feedback messages.

### **OrderCard**
- Displays details of an individual order.
- Includes a "View Details" button (functionality to be implemented).

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/advaithsshetty/SahyadriCanteen.git
   ```
   
2. **Navigate to the project directory:**
   ```bash
   cd SahyadriCanteen
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm start
   ```

5. **Access the application in your browser:**
   ```
   http://localhost:3000
   ```

## Status

- **Home Page:** Completed
- **Menu Page:** Completed (Filter functionality needs to be improved)
- **Order History:** Completed
- **Feedback Page:** Completed
- **LoginModal:** Completed
- **RegisterModal:** Completed
- **OrderCard:** Completed (View Details functionality pending)

## Upcoming Plans

1. **Improve Menu Filtering:**
   - Enhance filtering functionality to support multiple categories.

2. **View Details for Orders:**
   - Implement the "View Details" button in the `OrderCard` to show detailed information about each order.

3. **Admin Dashboard:**
   - Develop the admin dashboard for managing users, orders, and menu items.

4. **Error Handling:**
   - Implement more robust error handling and validation across all forms.

5. **Responsive Design:**
   - Further optimize the design for various screen sizes and devices.

6. **User Experience Enhancements:**
   - Add user notifications and improve the overall user experience based on feedback.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Please follow the coding guidelines and provide clear descriptions of your changes.
