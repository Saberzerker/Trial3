import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors?.backgroundLight || '#ffffff'};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RecentActivityList = styled.div`
  background: ${({ theme }) => theme.colors?.backgroundLight || '#ffffff'};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalExercises: 0,
    totalDuration: 0,
    weeklyProgress: 0
  });

  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Add your API calls here to fetch dashboard data
    // For now, using mock data
    setStats({
      totalExercises: 15,
      totalDuration: 450,
      weeklyProgress: 75
    });

    setRecentActivities([
      { id: 1, type: 'Running', duration: 30, date: '2025-04-23' },
      { id: 2, type: 'Cycling', duration: 45, date: '2025-04-22' },
      { id: 3, type: 'Walking', duration: 60, date: '2025-04-21' }
    ]);
  }, []);

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      
      <StatsGrid>
        <StatCard>
          <h3>Total Exercises</h3>
          <p>{stats.totalExercises}</p>
        </StatCard>
        
        <StatCard>
          <h3>Total Duration</h3>
          <p>{stats.totalDuration} minutes</p>
        </StatCard>
        
        <StatCard>
          <h3>Weekly Progress</h3>
          <p>{stats.weeklyProgress}%</p>
        </StatCard>
      </StatsGrid>

      <RecentActivityList>
        <h2>Recent Activities</h2>
        {recentActivities.map(activity => (
          <div key={activity.id}>
            <h4>{activity.type}</h4>
            <p>{activity.duration} minutes on {activity.date}</p>
          </div>
        ))}
      </RecentActivityList>
    </DashboardContainer>
  );
};

export default Dashboard;