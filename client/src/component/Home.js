import React from 'react'

function Home() {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center flex-wrap w-100'>
                <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark p-3 my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>End year</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark p-3 my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>Topic</option>
                        <option value="oil">oil</option>
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
                    <select className="form-select-sm bg-warning text-dark p-3 my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>Sector</option>
                        <option value="energy">energy</option>
                        <option value="Environment">Environment</option>
                        <option value="Government">Government</option>
                        <option value="Aerospace & defence">Aerospace & defence</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Retail">Retail</option>
                        <option value="Financial services">Financial services</option>
                    </select>
                </div>

                <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark p-3 my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>Region</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark p-3 my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>Source</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark p-3 my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>Pestle</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className='m-3'>
                    <select className="form-select-sm bg-warning text-dark p-3 my-2 fs-5 fw-normal" aria-label="Default select example">
                        <option selected>Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

            <div className=''>

            </div>
        </>
    )
}

export default Home