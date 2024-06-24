import logo from './logo.svg';
import React, { useEffect, useRef } from 'react';
import './App.css';
import initializeGraph from '@quality_miao/knowledgegraph';
import jQuery from 'jquery';

function App() {
  // const containerRef = useRef(null);

  useEffect(() => {
    const onLoad = () => {
      // Initialize your library with a test graph ID
      initializeGraph({ tip_use: false ,use_dict: true,dict_data:{"nodes":[{"name":"author","id":1},{"name":"software","id":2},{"name":"application","id":3}],"links":[{"source":1,"target":2,"label":"write"},{"source":2,"target":3,"label":"apply"}]}});
      
    }
      

    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);
  return (
      <div class="quality_miao_graph">
          <div id="notification" className="notification"></div>

          <div id="chart-container" style={{ display: 'none',position:'absolute'}}>
              <canvas id="pie-graph" width="400" height="300" style={{display:'none'}}></canvas>
              <canvas id="bar-grapha" width="400" height="300" ></canvas>
          </div>

          <div id="loading" className="loading-overlay">
              <div className="loader"></div>
          </div>

          <svg id="container">
              <g id="network-graph"></g>
              <g id="bar-graph"></g>
          </svg>

          <div id="top-tool-bar">
          </div>

          <div id="left-tool-bar"></div>

          <div id="info-layout">
          </div>
          
          <div id="nodeDataPopup" className="node-data-popup"></div>

          <div id="labels-bar">
              <ul></ul>
          </div>

          <div id="updatemodal" className="modal-overlay">
          </div>

          <div id="modal" className="modal-overlay">
          </div>

          <div id="upload-layout">
          </div>

          <div id="route-box" className="right-box">
          </div>
          
          <div id="relationship-input" className="relationship-input">
          </div>

          <div id="setting-box" className="right-box">
          </div>
          
          <div id="setting-box5" className="right-box">
          </div>

          <div id="menu_paint">
          </div>

      </div>
  );
};
  


export default App;
