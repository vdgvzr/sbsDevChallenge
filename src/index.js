import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './assets/scss/style.scss';
import './assets/js/main.js'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);