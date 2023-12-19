import React from 'react'

const Signin = () => {
    return (
        <section>
            <div className='section'>
                <div className='container main-container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <div className='p-5'>
                                <h1>Welcome back</h1>
                                <p className='paragraph'>Welcome back! Please enter your details.</p>
                                <div className='mb-3'>
                                    <label className='form-label'>Email</label>
                                    <input className='form-control py-2 px-3 rounded-3 input-field' type='email' placeholder='Enter your email' />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Password</label>
                                    <input className='form-control py-2 px-3 rounded-3 input-field' type='password' placeholder='Password' />
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='form-check'>
                                        <input className='form-check-input' type="checkbox" />
                                        <label className='form-check-label commom'>Remember me</label>
                                    </div>
                                    <span className='commom'>Forget Password</span>
                                </div>
                                <div>
                                    <button className='btn btn-danger btn-lg w-100 px-5 my-2'> Sign in</button>
                                    <button className='btn btn-light btn-lg w-100 px-5  my-2'> <img src='Images/google-icon.png' alt='' /> Sign in with Google</button>
                                    <p className='text-center my-2'> don't have an account? <span className='text-danger fw-bold'>Sign up now</span></p>
                                </div>

                            </div>
                        </div>
                        <div className='col-12 col-lg-6 px-0'>
                            <img src='Images/rightside-img.png' className='img-fluid rightside-img' />

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Signin