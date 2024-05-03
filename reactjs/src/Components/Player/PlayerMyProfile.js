import './Player.css';

export default () => {
    return <>
        <div className='container p-5'>
            <div className='text text-center'><h3>Player</h3></div>
            <div className='d-flex justify-content-between mt-5'>
                <div className='img mt-3 w-25'></div>
                <div className="form-outline mb-3 col-md-6">
                    <label className="form-label" htmlFor="form3Example4">First Name</label>
                    <input type="password" id="form3Example4" className="form-control form-control-md"
                        placeholder="Enter First Name" />
                    <label className="form-label" htmlFor="form3Example4">Last Name</label>
                    <input type="password" id="form3Example4" className="form-control form-control-md"
                        placeholder="Enter Last Name" />

                    <label className="form-label" htmlFor="form3Example4">Email</label>
                    <input type="password" id="form3Example4" className="form-control form-control-md"
                        placeholder="Enter Email" />

                    <label className="form-label" htmlFor="form3Example4">Phone</label>
                    <input type="password" id="form3Example4" className="form-control form-control-md"
                        placeholder="Enter Phone" />
                </div>
            </div>
            <div>
                <div className='d-flex justify-content-between '>
                    <div className='col-md-5'>
                        <label className="form-label" htmlFor="form3Example4">Gender</label>
                        <input type="password" id="form3Example4" className="form-control form-control-md"
                            placeholder="Enter Gender" />
                    </div>
                    <div className='col-md-6'>
                        <label className="form-label" htmlFor="form3Example4">Age</label>
                        <input type="password" id="form3Example4" className="form-control form-control-md"
                            placeholder="Enter Age" />
                    </div>
                </div>
                <div className='d-flex justify-content-between '>
                    <div className='col-md-5'>
                        <label className="form-label" htmlFor="form3Example4">Height</label>
                        <input type="password" id="form3Example4" className="form-control form-control-md"
                            placeholder="Enter Height" />
                    </div>
                    <div className='col-md-6'>
                        <label className="form-label" htmlFor="form3Example4">Number of Match</label>
                        <input type="password" id="form3Example4" className="form-control form-control-md"
                            placeholder="Enter Number of Match" />
                    </div>
                </div>
                <label className="form-label" htmlFor="form3Example4">Role</label>
                <input type="password" id="form3Example4" className="form-control form-control-md"
                    placeholder="Enter Role" />
                <label className="form-label" htmlFor="form3Example4">Address</label>
                <input type="password" id="form3Example4" className="form-control form-control-md"
                    placeholder="Enter Address" />

                <label className="form-label" htmlFor="form3Example4">Description</label>
                <input type="password" id="form3Example4" className="form-control form-control-md" style={{ height: "100px" }}
                    placeholder="Enter Description" />

                <div id='button' className=' mt-5 mb-4 d-flex justify-content-between'>
                    <button type="button" className="btn btn-secondary">EDIT</button>
                    <button type="button" className="btn btn-light">Back</button>
                </div>
            </div>
        </div>
    </>
}

/*
    export default function PlayerProfile() {
        return <>
            <div className='container p-5'>
                <div className='text text-center'><h3>Player</h3></div>
                <div className='d-flex justify-content-between mt-5'>
                    <div className='img mt-3 w-25'></div>
                    <div className="form-outline mb-3 col-md-6">
                        <label className="form-label" htmlFor="form3Example4">First Name</label>
                        <input type="password" id="form3Example4" className="form-control form-control-md"
                            placeholder="Enter First Name" />
                        <label className="form-label" htmlFor="form3Example4">Last Name</label>
                        <input type="password" id="form3Example4" className="form-control form-control-md"
                            placeholder="Enter Last Name" />

                        <label className="form-label" htmlFor="form3Example4">Email</label>
                        <input type="password" id="form3Example4" className="form-control form-control-md"
                            placeholder="Enter Email" />

                        <label className="form-label" htmlFor="form3Example4">Phone</label>
                        <input type="password" id="form3Example4" className="form-control form-control-md"
                            placeholder="Enter Phone" />
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-between '>
                        <div className='col-md-5'>
                            <label className="form-label" htmlFor="form3Example4">Gender</label>
                            <input type="password" id="form3Example4" className="form-control form-control-md"
                                placeholder="Enter Gender" />
                        </div>
                        <div className='col-md-6'>
                            <label className="form-label" htmlFor="form3Example4">Age</label>
                            <input type="password" id="form3Example4" className="form-control form-control-md"
                                placeholder="Enter Age" />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <div className='col-md-5'>
                            <label className="form-label" htmlFor="form3Example4">Height</label>
                            <input type="password" id="form3Example4" className="form-control form-control-md"
                                placeholder="Enter Height" />
                        </div>
                        <div className='col-md-6'>
                            <label className="form-label" htmlFor="form3Example4">Number of Match</label>
                            <input type="password" id="form3Example4" className="form-control form-control-md"
                                placeholder="Enter Number of Match" />
                        </div>
                    </div>
                    <label className="form-label" htmlFor="form3Example4">Role</label>
                    <input type="password" id="form3Example4" className="form-control form-control-md"
                        placeholder="Enter Role" />
                    <label className="form-label" htmlFor="form3Example4">Address</label>
                    <input type="password" id="form3Example4" className="form-control form-control-md"
                        placeholder="Enter Address" />

                    <label className="form-label" htmlFor="form3Example4">Description</label>
                    <input type="password" id="form3Example4" className="form-control form-control-md" style={{ height: "100px" }}
                        placeholder="Enter Description" />

                    <div id='button' className=' mt-5 mb-4 d-flex justify-content-between'>
                        <button type="button" className="btn btn-secondary">EDIT</button>
                        <button type="button" className="btn btn-light">Back</button>
                    </div>
                </div>
            </div >
        </>
    }
*/