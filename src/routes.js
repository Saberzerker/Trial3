// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import LoginForm from './components/Auth/LoginForm';
// import RegistrationForm from './components/Auth/RegistrationForm';
// import ExerciseForm from './components/ExerciseLog/ExerciseForm';
// import Dashboard from './components/Dashboard/Dashboard';
// import HomePage from './components/Home/HomePage';
// import ProtectedRoute from './components/Auth/ProtectedRoute';

// const AppRoutes = () => {
//     return (
//         <Routes>
//             <Route path="/login" element={<LoginForm />} />
//             <Route path="/register" element={<RegistrationForm />} />
//             <Route
//                 path="/exercise-log"
//                 element={
//                     <ProtectedRoute>
//                         <ExerciseForm />
//                     </ProtectedRoute>
//                 }
//             />
//             <Route
//                 path="/dashboard"
//                 element={
//                     <ProtectedRoute>
//                         <Dashboard />
//                     </ProtectedRoute>
//                 }
//             />
//             <Route path="/" element={<HomePage />} />
//         </Routes>
//     );
// };

// export default AppRoutes;


const routes = [
    {
      path: "/",
      name: "Dashboard",
      component: "Dashboard",
    },
    {
      path: "/bmi-calculator",
      name: "BMI Calculator",
      component: "BMICalculator",
    },
    {
      path: "/calorie-calculator",
      name: "Calorie Calculator",
      component: "CalorieCalculator",
    },
    {
      path: "/profile",
      name: "Profile",
      component: "ProfileForm",
    },
  ];
  
  export default routes;