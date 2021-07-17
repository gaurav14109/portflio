import React from 'react';
import profileimage from '../image/profile-image.jpg'


const SidebarMenu = ({displaySection}) => (
    <div>
        <div
            className='profile'
            style={{
                padding: '5px',
                textAlign: 'center',
                marginTop: '75px'
            }}>
            <img
                src={profileimage}
                alt='profile'
                style={{
                    width: '60%',
                    borderRadius: '50%',
                    height: '150px',
                    marginTop: '20px'
                }}/>

            <div className='info'>
                <h3
                    className='text'
                    style={{
                        marginTop: '5px'
                    }}>Gaurav Gusain</h3>
                <p>
                    <span
                        className='far fa-envelope-open'
                        style={{
                            marginRight: '2px'
                        }}></span>gauravgusain48@gmail.com</p>
                <p>
                    <span
                        className='fal fa-mobile'
                        style={{
                            marginRight: '2px'
                        }}></span>+91-836-987-1855</p>
            </div>

        </div>

        <div className = 'links'
            style={{
                textAlign: 'center',
                marginTop: '15px'
            }}>
            <ul style={{
                    listStyle: 'none'
                }}>
                <li
                    className='profile-link'
                    onClick={() => {
                        displaySection('INTRO')
                    }}>INTRODUCTION</li>
                <li
                    className='profile-link'
                    style={{
                        marginTop: '8px'
                    }}
                    onClick={() => {
                        displaySection('ACADEMIC')
                    }}>ACADEMIC</li>
                <li
                    className='profile-link'
                    style={{
                        marginTop: '8px'
                    }}
                    onClick={() => {
                        displaySection('PRO')
                    }}>PROJECTS</li>
                <li
                    className='profile-link'
                    style={{
                        marginTop: '8px'
                    }}
                    onClick={() => {
                        displaySection('EXP')
                    }}>EXPERIENCE</li>
                <li
                    className='profile-link'
                    style={{
                        marginTop: '8px'
                    }}
                    onClick={() => {
                        displaySection('TECH')
                    }}>TECHNOLOGY</li>
            </ul>

        </div>
        <div
            style={{
                textAlign: 'center',
                marginTop: '15px'
            }}>
            <ul style={{
                    listStyle: 'none'
                }}>
                <li style={{
                        marginTop: '8px'
                    }}>
                    <a
                        href='https://www.linkedin.com/in/gaurav-gusain-847b81139'
                        target="_blank"
                        rel="noopener noreferrer">
                        <span
                            className="fab fa-linkedin"
                            style={{
                                fontSize: '2.0em'
                            }}></span>
                    </a>
                </li>
            </ul>

        </div>

    </div>
)

export default SidebarMenu;