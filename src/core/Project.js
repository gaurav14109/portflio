import React from 'react';
import {Link} from 'react-router-dom'
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
        className='basic-info jumbotron'>
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
        <div
            className='ecommerce'
            style={{
                padding: '10px 0px 10px 0px'
            }}>
            <h4>Ecommerce App</h4>
            <p>Developed Basic ecommerce App  using react and Nodejs. 
                Link <Link to={{ pathname: "http://165.232.179.49/" }} target="_blank" >/165.232.179.49/</Link>
            </p>
        </div>

    </section>

</div>
)

export default Project;
