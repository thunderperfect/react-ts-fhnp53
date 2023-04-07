import * as React from 'react';
import './style.css';
import DateInput from './DateInput';
import DatePicker from 'react-date-picker';
export default function App() {
  return (
    <div>
      <DateInput />
      <DatePicker />
    </div>
  );
}
