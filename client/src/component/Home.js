import React, { useEffect, useState } from 'react'

function Home() {

    const [topic, setTopic] = useState('oil');
    const [sector, setSector] = useState('Energy');
    const [region, setRegion] = useState('Northern America');
    const [getData, setGetData] = useState({});

    useEffect(() => {
        const getDataOfCards = async () => {
            try {
                const res = await fetch('/getCardData', {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        topic,sector,region
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

                    intensity = intensity / data.length;
                    relevance = relevance / data.length;
                    likelihood = likelihood / data.length;

                    setGetData({intensity, relevance, likelihood});
                }

            } catch (error) {
                console.log(error);
            }
        }

        getDataOfCards();
    }, [topic, sector, region]);

    return (
        <>
            <div className='d-flex align-items-center justify-content-center flex-wrap w-100'>
                {/* <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>End year</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div> */}

                <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark my-2 fs-5 fw-normal" aria-label="Default select example" onChange={(e)=>setTopic(e.target.value)}>
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

                {/* <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>Pestle</option>
                        <option value="Industries">Industries</option>
                        <option value="Environmental">Environmental</option>
                        <option value="Economic">Economic</option>
                        <option value="Political">Political</option>
                        <option value="Technological">Technological</option>
                        <option value="Organization">Organization</option>
                    </select>
                </div> */}

                {/* <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>Source</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div> */}

                {/* <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div> */}
            </div>

            <div className='d-flex align-items-center justify-content-center'>
                <div className="card text-dark bg-light mb-3 mx-3 w-25 bg-dark">
                    <div className="card-body text-center">
                        <h5 className="card-title text-white">Avg. Intensity</h5>
                        <p className="card-text text-info fs-4">{getData?.intensity || 0}</p>
                    </div>
                </div>

                <div className="card text-dark bg-light mb-3 mx-3 w-25 bg-dark">
                    <div className="card-body text-center">
                        <h5 className="card-title text-white">Avg. Relevance</h5>
                        <p className="card-text text-info fs-4">{getData?.relevance || 0}</p>
                    </div>
                </div>

                <div className="card text-dark bg-light mb-3 mx-3 w-25 bg-dark">
                    <div className="card-body text-center">
                        <h5 className="card-title text-white">Avg. Likelihood</h5>
                        <p className="card-text text-info fs-4">{getData?.likelihood || 0}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home