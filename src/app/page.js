'use client'
import React, { useState, useEffect } from 'react';
import { analizar } from './module/generator.js';
import './ZScript.css';

const HomePage = () => {
  const [codigo, setCodigo] = useState("");
  const [impresiones, setImpresiones] = useState([]);
  const [resultado, setResultado] = useState("");
  const [errores, setErrores] = useState([]);
  const [numeroLineas, setNumeroLineas] = useState(1);
  
  const handleChange = (event) => {
    setCodigo(event.target.value);
    setErrores([]);
    setImpresiones([]);
  };

  useEffect(() => {
    // Contar el número total de líneas en el texto después de que el estado 'codigo' se ha actualizado
    const numLineas = codigo.split('\n').length;
    setNumeroLineas(numLineas)
  }, [codigo]);

  const handleAnalizar = () => {
    const [errores, resultado, impresiones] = analizar(codigo);
    setResultado(resultado);
    console.log(errores);
    setErrores(errores);
    setImpresiones(impresiones);
  };

  const generarNumerosLinea = () => {
    const numerosLinea = [];
    for (let i = 1; i <= numeroLineas; i++) {
      numerosLinea.push(<div key={i} className="numero-linea">{i}</div>);
    }
    return numerosLinea;
  };

  return (
    <div className="editor-container">
      <h1 className="editor-title">ZUNNISCRIPT</h1>
      <p className="instrucciones">Este es un simulador para el lenguaje ZunniScript.</p>
      <div className="editor-wrapper">
        <div className="numero-lineas">
          {generarNumerosLinea()}
        </div>
        <textarea
          value={codigo}
          onChange={handleChange}
          placeholder='Codigo..'
          className="codigo-editor"
          rows={10}
        />
      </div>
      <div className='button-container'>
      <button onClick={handleAnalizar} className="analizar-button">Compilar</button>
      <button onClick={()=>handleChange({target: {value: ""}})} className="analizar-button">Limpiar</button>
      </div>
      <div className="resultado-container">
        {/* <h2 className="resultado-title">Salida del código:</h2>
        <div className="resultado-editor">
          <pre>{resultado}</pre>
        </div> */}
        <div className='errores'>
          <ul>
            {errores.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
        <div className='impresiones'>
          <ul>
            {impresiones.map((impresion, index) => (
              <li key={index}>{impresion}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage