import React from 'react';
const Project = ()=>(
    <div
    className='intro'
    style={{
        height: '100vh'
    }}>

    <h3
        style={{
            marginLeft: '50px',
            paddingTop: '100px'
        }}>PROJECTS</h3>

    <section
        className='basic-info jumbotron'
        style={{
            margin: '0px 50px',
            padding: '32px'
        }}>
        <div
            className='Retail-Rtgs'
            style={{
                padding: '10px 0px 10px 0px'
            }}>
            <h4>RETAIL-RTGS</h4>
            <p>Company Project: Implemented Retail Rtgs Script for Digital Net-Banking</p>
        </div>
        <div
            className='twelveth'
            style={{
                padding: '10px 0px 10px 0px'
            }}>
            <h4>Table Tennis Robot</h4>
            <p>Engineering Project: Developed Table Tennis Robot controlled with Android APK
                for Final Year Project</p>
        </div>

    </section>

</div>
)

export default Project;