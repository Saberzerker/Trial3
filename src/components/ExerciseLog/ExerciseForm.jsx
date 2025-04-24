import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors?.backgroundLight || '#ffffff'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors?.primary || '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ExerciseForm = () => {
  const [exercise, setExercise] = useState({
    type: '',
    duration: '',
    intensity: 'medium',
    date: new Date().toISOString().split('T')[0]
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add your API call here
      toast.success('Exercise logged successfully!');
      setExercise({
        type: '',
        duration: '',
        intensity: 'medium',
        date: new Date().toISOString().split('T')[0]
      });
    } catch (error) {
      toast.error(error.message || 'Failed to log exercise');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <h2>Log Exercise</h2>
      <Form onSubmit={handleSubmit}>
        <Select
          name="type"
          value={exercise.type}
          onChange={handleChange}
          required
          disabled={loading}
        >
          <option value="">Select Exercise Type</option>
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
          <option value="walking">Walking</option>
          <option value="swimming">Swimming</option>
          <option value="gym">Gym Workout</option>
        </Select>

        <Input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={exercise.duration}
          onChange={handleChange}
          required
          disabled={loading}
          min="1"
        />

        <Select
          name="intensity"
          value={exercise.intensity}
          onChange={handleChange}
          required
          disabled={loading}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>

        <Input
          type="date"
          name="date"
          value={exercise.date}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <Button type="submit" disabled={loading}>
          {loading ? 'Logging...' : 'Log Exercise'}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ExerciseForm;