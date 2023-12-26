// CoursePreferenceComponent.jsx
import React, { useState } from 'react';
import styles from './CoursePreferenceComponent.module.css';

const CoursePreferenceComponent = () => {
  const [preferences, setPreferences] = useState(Array(8).fill(''));
  const courses = ['Course A', 'Course B', 'Course C', 'Course D', 'Course E'];

  const handlePreferenceChange = (index, value) => {
    const updatedPreferences = [...preferences];
    updatedPreferences[index] = value;
    setPreferences(updatedPreferences);
  };

  return (
    <div className={styles.preferenceContainer}>
      <h2>Choose your courses</h2>
      {preferences.map((preference, index) => (
        <div key={index} className={styles.preferenceRow}>
          <label>Preference {index + 1}:</label>
          <select
            value={preference}
            onChange={(e) => handlePreferenceChange(index, e.target.value)}
          >
            <option value="" disabled>Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default CoursePreferenceComponent;
