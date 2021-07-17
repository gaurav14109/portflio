import React from 'react';

const Tech = () => (
    <div className='tech' style={{
            height: '100vh'
        }}>

        <h3
            style={{
                marginLeft: '50px',
                paddingTop: '100px'
            }}>TECHNOLOGY</h3>

        <section
            className='basic-info jumbotron'
            style={{
                margin: '0px 50px',
                padding: '32px'
            }}>

            <div className='row'>

                <div className='col-md-3'>
                    <div
                        style={{
                            margin: '0px 10px 10px 0px',
                            borderRadius: '15px',
                            border: '0.5px solid gray'
                        }}>
                        <div
                            style={{
                                borderRadius: '15px',
                                backgroundColor: 'green',
                                width: '80%'
                            }}>
                            <span
                                style={{
                                    marginLeft: '15px'
                                }}>NodeJs</span>
                        </div>
                    </div>

                    <div
                        style={{
                            margin: '0px 10px 10px 0px',
                            borderRadius: '15px',
                            border: '0.5px solid gray'
                        }}>

                        <div
                            style={{
                                borderRadius: '15px',
                                backgroundColor: 'lightblue',
                                width: '70%'
                            }}>
                            <span
                                style={{
                                    marginLeft: '15px'
                                }}>React-Js</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div
                        style={{
                            margin: '0px 10px 10px 0px',
                            borderRadius: '15px',
                            border: '0.5px solid gray'
                        }}>
                        <div
                            style={{
                                borderRadius: '15px',
                                backgroundColor: 'yellow',
                                width: '80%'
                            }}>
                            <span
                                style={{
                                    marginLeft: '15px'
                                }}>Python</span>
                        </div>
                    </div>

                    <div
                        style={{
                            margin: '0px 10px 10px 0px',
                            borderRadius: '15px',
                            border: '0.5px solid gray'
                        }}>

                        <div
                            style={{
                                borderRadius: '15px',
                                backgroundColor: 'red',
                                width: '70%'
                            }}>
                            <span
                                style={{
                                    marginLeft: '15px'
                                }}>Java</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div
                        style={{
                            margin: '0px 10px 10px 0px',
                            borderRadius: '15px',
                            border: '0.5px solid gray'
                        }}>
                        <div
                            style={{
                                borderRadius: '15px',
                                backgroundColor: 'yellow',
                                width: '90%'
                            }}>
                            <span
                                style={{
                                    marginLeft: '15px'
                                }}>Javascript</span>
                        </div>
                    </div>

                    <div
                        style={{
                            margin: '0px 10px 10px 0px',
                            borderRadius: '15px',
                            border: '0.5px solid gray'
                        }}>

                        <div
                            style={{
                                borderRadius: '15px',
                                backgroundColor: 'lightblue',
                                width: '85%'
                            }}>
                            <span
                                style={{
                                    marginLeft: '15px'
                                }}>Linux</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div
                        style={{
                            margin: '0px 10px 10px 0px',
                            borderRadius: '15px',
                            border: '0.5px solid gray'
                        }}>
                        <div
                            style={{
                                borderRadius: '15px',
                                backgroundColor: 'lightblue',
                                width: '95%'
                            }}>
                            <span
                                style={{
                                    marginLeft: '15px'
                                }}>Sql</span>
                        </div>
                    </div>

                    <div
                        style={{
                            margin: '0px 10px 10px 0px',
                            borderRadius: '15px',
                            border: '0.5px solid gray'
                        }}>

                        <div
                            style={{
                                borderRadius: '15px',
                                backgroundColor: 'lightblue',
                                width: '75%'
                            }}>
                            <span
                                style={{
                                    marginLeft: '15px'
                                }}>Jquery</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div>
            <h3 className = 'tools'>TOOLS</h3>
            <section
                className='basic-info jumbotron'
                style={{
                    margin: '0px 50px',
                    padding: '32px'
                }}>
                <ul className='list-unstyle'>

                    <li
                        style={{
                            marginLeft: '20px'
                        }}>MS Office</li>
                    <li
                        style={{
                            marginLeft: '20px'
                        }}>
                        Sql Developer </li>
                        <li
                        style={{
                            marginLeft: '20px'
                        }}>
                        Putty </li>
                        <li
                        style={{
                            marginLeft: '20px'
                        }}>
                        Visual Studio </li>
                </ul>
            </section>
        </div>
    </div>
)

export default Tech;