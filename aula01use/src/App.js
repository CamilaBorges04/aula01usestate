import React, { useState } from 'react';
import './App.css';
import CalculadoraDeSoma from './components/soma';
import CalculadoraDeSubtracao from './components/subtracao';

function App() {


  return (
    <div className="App">
      <h1>Minha primeira calculadora em React</h1>
      <h2>Calcular a Soma</h2>
      <CalculadoraDeSoma/>
      <h2>Calcular Subtração</h2>
      <CalculadoraDeSubtracao/>
    </div>
}

export default App;
