import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useLoading, useCurrentUser, useUserAttempted } from '../../hooks/AuthProvider';
import ProgressBar from '../ProgressBar/ProgressBar';
import SuccessChart from '../Charts/SuccessChart';
import PassedByCategoryChart from '../Charts/PassedByCategoryChart';
import styles from './Dashboard.css';

// break code into components can help remove some conditional rendering in the
// main component
const DashboardHeader = ({ firstName, cohort, attempted }) => (
  <section className={styles.userProgress}>
    <section className={styles.textContainer}>
      <h2>{firstName}'s Dashboard!</h2>
      {(cohort && cohort !== 'N/A') && <h3>Cohort: {cohort}</h3>}
    </section>
    {attempted && <ProgressBar />}
  </section>
);

const DashboardAnalytics = () => (
  <section className={styles.charts}>
    <SuccessChart />
    <PassedByCategoryChart />
  </section>
);

const Dashboard = () => {
  const user = useCurrentUser();
  const loading = useLoading();
  const attempted = useUserAttempted();

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <main className={styles.Dashboard}>
      <DashboardHeader firstName={user.firstName} cohort={user.cohort} attempted={attempted} />

      {attempted && <DashboardAnalytics />}

      <section className={styles.buttons}>
        <Link to="/challenges">
          <Button buttonStyle="primary" backgroundColor="green" buttonSize="large" buttonText="Find a Challenge" />
        </Link>
        <Link to="/history">
          <Button buttonStyle="primary" backgroundColor="mainBlue" buttonSize="large" buttonText="View Completed Challenges" />
        </Link>
      </section>
    </main>
  );
};

export default Dashboard;
