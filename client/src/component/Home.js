import React, { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';

Chart.register(CategoryScale);

function Home() {

    // ------------ For the CARDS section --------------
    const [topic, setTopic] = useState('oil');
    const [sector, setSector] = useState('Energy');
    const [region, setRegion] = useState('Northern America');
    const [getData, setGetData] = useState({
        intensity: 0,
        relevance: 0,
        likelihood: 0
    });

    useEffect(() => {
        const getDataOfCards = async () => {
            try {
                const res = await fetch('/getCardData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        topic, sector, region
                    })
                });
                const data = await res.json();
                if (!data || res.status !== 201) window.alert(`${data.error}`);
                else {
                    let intensity = 0;
                    let relevance = 0;
                    let likelihood = 0;
                    data.map((data) => {
                        intensity += data?.intensity
                        relevance += data?.relevance
                        likelihood += data?.likelihood
                    });

                    if (data.length !== 0) {
                        intensity = (intensity / data.length).toFixed(2);
                        relevance = (relevance / data.length).toFixed(2);
                        likelihood = (likelihood / data.length).toFixed(2);
                    }

                    setGetData({ intensity, relevance, likelihood });
                }

            } catch (error) {
                console.log(error);
            }
        }

        getDataOfCards();
    }, [topic, sector, region]);



    const [pestle, setPestle] = useState('Industries');
    const [chartData, setChartData] = useState({labels:[],datasets:[]});

    const getPestleData = async () => {
        try {
            const res = await fetch('/getPestle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pestle,topic,sector
                })
            });

            const data = await res.json();
            if (!data || res.status !== 201) {
                window.alert(`${data.error}`);
            }
            else {
                console.log(data);
                setChartData({
                    labels: data?.map((data) => data?.region !== "" ? data?.region : null).filter(label => label !== null),
                    datasets: [
                        {
                            label: 'Intensity',
                            backgroundColor: ['rgba(75,192,192,0.2)', , "#50AF95", "#f3ba2f", "#2a71d0"],
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                            hoverBorderColor: 'rgba(75,192,192,1)',
                            data: data?.map((data) => data?.intensity),
                        },
                    ],
                });
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPestleData();
    }, [pestle, topic,sector]);



    return (
        <>
            <div>
                <div className='d-flex align-items-center justify-content-center flex-wrap w-100'>

                    <div className='m-3'>
                        <select className="form-select-sm bg-warning text-dark my-2 fs-5 fw-normal" aria-label="Default select example" onChange={(e) => setTopic(e.target.value)}>
                            {/* <option selected>Topic</option> */}
                            <option selected value="oil">oil</option>
                            <option value="consumption">consumption</option>
                            <option value="market">market</option>
                            <option value="gdp">gdp</option>
                            <option value="war">war</option>
                            <option value="production">production</option>
                            <option value="export">export</option>
                            <option value="battery">battery</option>
                            <option value="biofuel">biofuel</option>
                            <option value="policy">policy</option>
                            <option value="economy">economy</option>
                            <option value="strategy">strategy</option>
                            <option value="gas">gas</option>
                            <option value="robot">robot</option>
                            <option value="growth">growth</option>
                            <option value="energy">energy</option>
                        </select>
                    </div>

                    <div className='m-3'>
                        <select className="form-select-sm bg-warning text-dark my-2 fs-5 fw-normal" aria-label="Default select example" onChange={(e) => setSector(e.target.value)}>
                            {/* <option selected>Sector</option> */}
                            <option selected value="Energy">Energy</option>
                            <option value="Environment">Environment</option>
                            <option value="Government">Government</option>
                            <option value="Aerospace & defence">Aerospace & defence</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Retail">Retail</option>
                            <option value="Financial services">Financial services</option>
                        </select>
                    </div>

                    <div className='m-3'>
                        <select className="form-select-sm bg-warning text-dark my-2 fs-5 fw-normal" aria-label="Default select example" onChange={(e) => setRegion(e.target.value)}>
                            {/* <option selected>Region</option> */}
                            <option selected value="Northern America">Northern America</option>
                            <option value="Central America">Central America</option>
                            <option value="World">World</option>
                            <option value="Western Africa">Western Africa</option>
                            <option value="Western Asia">Western Asia</option>
                            <option value="Eastern Europe">Eastern Europe</option>
                            <option value="Central Africa">Central Africa</option>
                            <option value="Northern Africa">Northern Africa</option>
                            <option value="Southern Africa">Southern Africa</option>
                            <option value="Southern Asia">Southern Asia</option>
                            <option value="Central Asia">Central Asia</option>
                        </select>
                    </div>

                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    <div className="card text-dark bg-light mb-3 mx-3 w-25 bg-dark">
                        <div className="card-body text-center">
                            <h5 className="card-title text-white">Avg. Intensity</h5>
                            <p className="card-text text-info fs-3 fw-bolder">{getData?.intensity || 0}</p>
                        </div>
                    </div>

                    <div className="card text-dark bg-light mb-3 mx-3 w-25 bg-dark">
                        <div className="card-body text-center">
                            <h5 className="card-title text-white">Avg. Relevance</h5>
                            <p className="card-text text-info fs-3 fw-bolder">{getData?.relevance || 0}</p>
                        </div>
                    </div>

                    <div className="card text-dark bg-light mb-3 mx-3 w-25 bg-dark">
                        <div className="card-body text-center">
                            <h5 className="card-title text-white">Avg. Likelihood</h5>
                            <p className="card-text text-info fs-3 fw-bolder">{getData?.likelihood || 0}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark my-2 fs-5 fw-normal" aria-label="Default select example" onChange={e => setPestle(e.target.value)}>
                        {/* <option selected>Pestle</option> */}
                        <option selected value="Industries">Industries</option>
                        <option value="Environmental">Environmental</option>
                        <option value="Economic">Economic</option>
                        <option value="Political">Political</option>
                        <option value="Technological">Technological</option>
                        <option value="Organization">Organization</option>
                    </select>
                </div>

                <BarChart chartData={chartData} pestle={pestle} topic={topic} sector={sector} />

                <div style={{width:'50vw', textAlign:'center', margin:'auto', marginTop:'150px'}}>
                    <PieChart chartData={chartData} pestle={pestle} topic={topic} sector={sector} />
                </div>
            </div>
        </>
    )
}

export default Home