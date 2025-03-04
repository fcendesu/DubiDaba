# DubiDaba - Moon Phase Calculator

DubiDaba is a mobile application that calculates and displays the moon phase based on a person's birth date. Users can enter their name and birth date to discover their birth moon phase, then share the personalized result with others.

## Features

- 🌙 Accurate moon phase calculation based on birth dates
- 👤 Personalized display with user's name
- 📱 Clean and intuitive user interface
- 📷 Capture and share functionality for social media
- 🔄 Interactive animations during loading

## Technology Stack

- **Framework**: [Expo](https://expo.dev/) and React Native
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) with file-based routing
- **Styling**: [NativeWind/TailwindCSS](https://www.nativewind.dev/)
- **Graphics**: [@shopify/react-native-skia](https://github.com/Shopify/react-native-skia) for image capture
- **Animations**: [Lottie](https://github.com/lottie-react-native/lottie-react-native)

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/DubiDaba.git
   cd DubiDaba
   ```

2. Install dependencies
   ```bash
   npm install
   ```
3. Start the app
   ```bash
   npx expo start
   ```
   In the output, you'll find options to open the app in a:

Development build
Android emulator
iOS simulator
Expo Go

App Structure and Flow
DubiDaba features a simple and intuitive user flow:

1. Home Screen (app/index.tsx): Users are welcomed and can start the experience with the "BAŞLA" button
2. Form Screen (app/form-fill.tsx): Users enter their name, surname, and birth date
3. Loading Screen (app/loading.tsx): Displays engaging animations while calculating the moon phase
4. Result Screen (app/share.tsx): Shows the calculated moon phase along with the user's name and provides sharing options

Key Components
Moon Phase Calculation: Utilizes astronomical algorithms to determine the precise moon phase for any given date
Dynamic Visualization: Renders the appropriate moon phase image based on calculation results
Social Sharing: Allows users to capture and share their personalized moon phase to Instagram or save to gallery
Theme: Dark theme with custom colors optimized for moon visualization

Development
You can start developing by editing the files inside the app directory. This project uses file-based routing through Expo Router.

For a fresh start with this project template:

```bash
npm run reset-project
```

Screenshots

![result](https://github.com/user-attachments/assets/c1d74605-cb6b-497f-938a-10c613cca3aa)
![loading](https://github.com/user-attachments/assets/13b4a37f-6900-472b-8dd3-59d6381f1c37)
![Home](https://github.com/user-attachments/assets/a03d33c1-be40-4233-a4ec-d369aa8b9ba3)
![form](https://github.com/user-attachments/assets/dca7340a-21a1-44b4-ba69-664cf968e257)

