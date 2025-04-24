// import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { GlobalStyles } from './styles/GlobalStyles';
// import { theme } from './styles/theme';
// import Navbar from './components/Navigation/Navbar';
// import AppRoutes from './routes';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//     return (
//         <Router>
//             <ThemeProvider theme={theme}>
//                 <GlobalStyles />
//                 <Navbar />
//                 <div className="container">
//                     <AppRoutes />
//                 </div>
//                 <ToastContainer
//                     position="top-right"
//                     autoClose={5000}
//                     hideProgressBar={false}
//                     newestOnTop
//                     closeOnClick
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                 />
//             </ThemeProvider>
//         </Router>
//     );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import CalorieCalculator from "./components/CalorieCalculator/CalorieCalculator";
import Dashboard from "./components/Dashboard/Dashboard";
import ProfileForm from "./components/Profile/ProfileForm";
import ExerciseTracker from "./components/Tracking/ExerciseTracker";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/exercise-tracker" element={<ExerciseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;