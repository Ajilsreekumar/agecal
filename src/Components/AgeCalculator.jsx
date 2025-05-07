import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += 30;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  useEffect(() => {
    calculateAge();
  }, [dob]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ padding: '30px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Age Calculator</h2>
        <TextField
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={calculateAge}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          Calculate Age
        </Button>
        {age && (
          <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
            You are {age.years} years, {age.months} months, and {age.days} days old.
          </div>
        )}
      </div>
    </div>
  );
}

export default AgeCalculator;
