import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieDisplay from '../src/MovieDisplay.mjs';
import Form from '../src/Form.mjs';

export default function App() {
  return (
    <div className="App">
      <Form />
      <MovieDisplay />
    </div>
  );
}

export default App
