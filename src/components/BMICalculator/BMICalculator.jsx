import React, { useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }

  input, select {
    width: 100%;
    padding: 0.8rem;
    margin: 0.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    background: #1e1e1e;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    width: 100%;
    padding: 0.8rem;
    margin: 1rem 0;
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 4px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
  }
`;

const ResultSection = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const BMICalculator = () => {
  const [inputs, setInputs] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
  });
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const calculateBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2);
  };

  const calculateCalories = (weight, height, age, gender) => {
    const heightInCm = height * 100; // Convert height to cm
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * heightInCm - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * heightInCm - 5 * age - 161;
    }
    return {
      sustenance: Math.round(bmr),
      bulk: Math.round(bmr + 500),
      cut: Math.round(bmr - 500),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { weight, height, age, gender } = inputs;
    if (!weight || !height || !age) {
      alert("Please fill in all fields.");
      return;
    }
    const bmi = calculateBMI(parseFloat(weight), parseFloat(height));
    const calories = calculateCalories(
      parseFloat(weight),
      parseFloat(height),
      parseInt(age),
      gender
    );
    setResults({ bmi, ...calories });
  };

  return (
    <CalculatorWrapper>
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={inputs.weight}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="height"
          placeholder="Height (m)"
          value={inputs.height}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age (years)"
          value={inputs.age}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={inputs.gender}
          onChange={handleChange}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      {results && (
        <ResultSection>
          <h3>Results</h3>
          <p><strong>BMI:</strong> {results.bmi}</p>
          <p><strong>Sustenance Calories:</strong> {results.sustenance} kcal</p>
          <p><strong>Bulk Calories:</strong> {results.bulk} kcal</p>
          <p><strong>Cut Calories:</strong> {results.cut} kcal</p>
        </ResultSection>
      )}
    </CalculatorWrapper>
  );
};

export default BMICalculator;