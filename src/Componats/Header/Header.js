import React from 'react'
import { NavLink } from 'react-router-dom'

function Header(props) {
    return (
        <>
            <header className='bg-dark mb-3' style={{height: "75px"}}>
                <div className='container'>
                    <div className='row align-item-center'>
                        <div className='logo col-2'>
                            <a className="m-0" href="index.html">
                                <img src={props.logo} alt="Unicorn horse" width="100" style={{height: "75px" , width: "150px"}} />
                            </a>
                        </div>
                        <nav className='col'>
                            <ul className='list-unstyled d-flex justify-content-center '>
                                <li className='p-2 m-3'>
                                    <NavLink to='/' className='text-decoration-none text-white'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='p-2 m-3'>
                                    <NavLink to='/createStory' className='text-decoration-none text-white'>
                                        CreatStory
                                    </NavLink>
                                </li>
                                <li className='p-2 m-3'>
                                    <NavLink to='/updateStory' className='text-decoration-none text-white'>
                                        UpdateStory
                                    </NavLink>
                                </li>
                                <li className='p-2 m-3'>
                                    <NavLink className='text-decoration-none text-white'>
                                        Reviews
                                    </NavLink>
                                </li>
                                <li className='p-2 m-3'>
                                    <NavLink className='text-decoration-none text-white'>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header