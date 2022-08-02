import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AuthProvider} from "./context/auth";
import {Playground} from "./components/playground";

function App() {
  return (
    <AuthProvider>
      <Playground />
    </AuthProvider>
  );
}

export default App;
