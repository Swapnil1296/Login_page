import {useState} from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import UserView from './component/cards/UserView';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import FormValidation from './component/fromValidation/FormValidation';

function App() {
  return (
    <div>
      <FormValidation />
    </div>
  );
}

export default App;
