# 🧠 Smart Cloud Kitchen

An IoT‑driven cloud‑enabled smart kitchen system designed to streamline inventory tracking, resource monitoring, alerting, and shopping automation—enhancing convenience, safety, and efficiency in modern kitchens.

---

## 📝 Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Installation & Setup](#installation--setup)  
5. [Usage](#usage)  
6. [Screenshots / Demo](#screenshots--demo)  
7. [Future Enhancements](#future-enhancements)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Project Overview

Smart Cloud Kitchen integrates IoT devices with cloud services to automate and manage kitchen operations. Features include:

- Real-time monitoring of groceries, utilities (gas, water, electricity), and environmental conditions.
- Automated low-stock notifications and weekly shopping list generation.
- Price-matching service with alerts to help users shop smart.
- Safety alerts for gas leaks or high temperatures.
- Data visualization via cloud dashboards.

---

## Features

- **Inventory Tracking**: Monitor the quantity of key items (e.g., eggs, milk, vegetables).
- **Utility Usage Monitoring**: Track daily water, gas, and electricity consumption.
- **Grocery Notifications**: Alerts via email/app when stocks fall below thresholds.
- **Shopping List Generator**: Weekly breakdown of needed items.
- **Price Comparison**: Checks local/supported online store prices and alerts the best deal.
- **Safety Monitoring**: Temperature and gas-sensor-based alerts to prevent hazards.
- **Cloud Dashboard**: Real-time dashboards powered by IoT cloud services.

---

## Tech Stack

| Layer        | Technology        |
|--------------|-------------------|
| **Frontend** | React.js          |
| **Backend**  | Node.js + Express |
| **Database** | MongoDB           |
| **Runtime**  | Node.js           |

> 🔁 MERN = **MongoDB**, **Express.js**, **React.js**, **Node.js**

---

## Installation & Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/ss-infotech2024/Smart_Cloud_Kitchen.git
   cd Smart_Cloud_Kitchen
   ```

2. **Set up Backend**  
   ```bash
   cd backend
   npm install
   npm run start
   ```

3. **Set up Frontend**  
   ```bash
   cd ../frontend
   npm install
   npm run start
   # App will be live at http://localhost:3000
   ```

4. **Configure Environment Variables**  
   Create a `.env` file in the backend folder with the following keys:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

---

## Usage

- Monitor real-time kitchen data from the dashboard.
- Get notified when stock is low or anomalies are detected.
- Automatically generate and download shopping lists.
- Visualize usage trends and resource consumption.

---

## Screenshots / Demo

*Add dashboard UI, alert examples, and sample graphs here.*

---

## Future Enhancements

- Mobile app support using React Native.
- Integration with smart assistants (Alexa/Google Home).
- OCR-based invoice scanning for inventory updates.
- ML-based demand prediction and analytics.

---

## Contributing

1. Fork the project  
2. Create a feature branch (`git checkout -b feature/name`)  
3. Commit your changes (`git commit -m "Add feature"`)  
4. Push to PR (`git push origin feature/name`)  
5. Create a Pull Request

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

*Made with ❤️ by SS Infotech 2024.*
