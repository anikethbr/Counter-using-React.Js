import React,{useState} from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/styles.css";

function Counter(){
    const[count,setCount] = useState(0);
    return (
        <section id="counter">
        <div className="counter-block">
          <span className="counter-text">{count}</span>
          <div className="break"></div>
          <button id="btn1" className="counter-btn btn btn-lg btn-primary" onClick={()=>setCount(count+1)}>
            +
          </button>
          <button id="btn2" className="counter-btn btn btn-lg btn-secondary" onClick={()=>setCount(count-1)}>
            -
          </button>
        </div>
      </section>
    )
}

export default Counter;
