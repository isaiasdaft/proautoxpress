/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';


import '../css/app.css';
import ReactDOM from 'react-dom/client';
import Example from './components/Example';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import First from './components/First';
import Menu from './components/Menu';
import Login from './components/auth/Login';


 ReactDOM.createRoot(document.getElementById('aplication')).render(<Menu />);