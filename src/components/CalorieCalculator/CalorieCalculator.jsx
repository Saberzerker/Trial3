import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

const CalorieCalculator = () => {
  const [inputs, setInputs] = useState({
    activityType: "",
    duration: "",
  });
  const [calories, setCalories] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { activityType, duration } = inputs;
    if (!activityType || !duration) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("/api/calculate-calories", {
        activityType,
        duration: parseInt(duration),
      });
      setCalories(response.data.calories);
    } catch (error) {
      console.error("Error calculating calories:", error);
      alert("Failed to calculate calories. Please try again.");
    }
  };

  return (
    <CalculatorWrapper>
      <h2>Calorie Calculator</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="activityType"
          value={inputs.activityType}
          onChange={handleChange}
          required
        >
          <option value="">Select Activity</option>
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
          <option value="walking">Walking</option>
        </select>
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={inputs.duration}
          onChange={handleChange}
          required
        />
        <button type="submit">Calculate</button>
      </form>
      {calories !== null && (
        <ResultSection>
          <h3>Results</h3>
          <p><strong>Calories Burned:</strong> {calories} kcal</p>
        </ResultSection>
      )}
    </CalculatorWrapper>
  );
};

export default CalorieCalculator;