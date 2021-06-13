import React from 'react'

export const Dashboard = () => {
    return (
        <>
            <div className='p-sm-4 px-1 py-2 bg-dark text-light w-100'>
                <div className="row m-2">
                    <div className="col-md-2 col-sm-1 col-0">
                    </div>
                    <div className="col-md-6 col-sm-8 col-12 text-info">
                        <div className="input-group">
                            <span className=" input-group-text">Username</span>
                            <input type="text" className=" form-control" />
                        </div>
                    </div>
                    <button className=" col-md-2 col-sm-2 col-6 my-sm-0 my-2 mx-auto btn btn-success btn-block p-1">Validate</button>
                    <div className="col-md-2 col-sm-1 col-0"></div>
                </div>
            </div>

            <div className="p-sm-5 p-4 container-fluid border w-50 justify-content-center my-5 shadow mb-5 bg-white rounded">
                <div className="row py-2">
                    <div className="col-md-7 col-sm-12 px-0">
                        <div className="dropdown h-100">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Room Size</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="3">Four</option>
                                <option value="3">Five</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-1 col-sm-0"></div>
                    <div className="col-md-4 col-sm-12 px-0 mx-sm-auto my-md-0 my-2">
                        <button className="w-100 btn btn-primary">Create A Room</button>
                    </div>
                </div>
                <hr />
                <div className="row px-0 py-2">
                    <div className="col-md-7 col-sm-12 px-0">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-1 col-sm-0"></div>
                    <div className="col-md-4 col-sm-12 px-0 mx-sm-auto my-md-0 my-2">
                        <button className="w-100 btn btn-danger">Join A Room</button>
                    </div>
                </div>
            </div>
        </>
    )
}
