import React from 'react';
import './LoadingSpinner.css';
import spinner from './assets/spinner.gif';

export default function LoadingSpinner() {
  return (
    <div className="loading-wrapper">
      <img className="photo" src={spinner} alt="Loading" />
    </div>
  );
}
