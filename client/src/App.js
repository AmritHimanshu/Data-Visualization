import React, { useState } from 'react';
import './App.css';

function App() {

  const [dataInput,setDataInput] = useState({
    end_year: '',
    intensity: '',
    sector: '',
    topic: '',
    insight: '',
    url: '',
    region: '',
    start_year: '',
    impact: '',
    country: '',
    relevance: '',
    pestle: '',
    source: '',
    title: '',
    likelihood: ''
  });

  const handleOnChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    setDataInput({ ...dataInput, [name]: value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { end_year, start_year, intensity, sector, topic, insight, url, region, impact, country, relevance, pestle, source, title, likelihood } = dataInput;

    // console.log(end_year, start_year, intensity, sector, topic, insight, url, region, impact, country, relevance, pestle, source, title, likelihood);

    const res = await fetch('/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

      
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <div style={{margin:'10px'}}>
          <label style={{fontSize:'20px', marginRight:'10px'}}>end_year : </label>
          <input type="text" name='end_year' value={dataInput.end_year} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange}/>
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>start_year : </label>
          <input type="text" name='start_year' value={dataInput.start_year} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>intensity : </label>
          <input type="text" name='intensity' value={dataInput.intensity} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>sector : </label>
          <input type="text" name='sector' value={dataInput.sector} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>topic : </label>
          <input type="text" name='topic' value={dataInput.topic} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>insight : </label>
          <input type="text" name='insight' value={dataInput.insight} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>url : </label>
          <input type="text" name='url' value={dataInput.url} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>region : </label>
          <input type="text" name='region' value={dataInput.region} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>impact : </label>
          <input type="text" name='impact' value={dataInput.impact} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>country : </label>
          <input type="text" name='country' value={dataInput.country} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>relevance : </label>
          <input type="text" name='relevance' value={dataInput.relevance} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>pestle : </label>
          <input type="text" name='pestle' value={dataInput.pestle} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>source : </label>
          <input type="text" name='source' value={dataInput.source} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>title : </label>
          <input type="text" name='title' value={dataInput.title} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <div style={{ margin: '10px' }}>
          <label style={{ fontSize: '20px', marginRight: '10px' }}>likelihood : </label>
          <input type="text" name='likelihood' value={dataInput.likelihood} style={{ padding: '2px', fontSize: '20px' }} onChange={handleOnChange} />
        </div>

        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;
