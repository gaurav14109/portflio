import React, {useState} from 'react';
import SidebarMenu from './SidebarMenu';
import Tech from './Tech';
import Intro from './Intro';
import Academic from './Academic';
import Project from './Project'
import Exp from './Exp';
const Home = () => {
    const [display, setDisplay] = useState('INTRO')

    const displaySection = name => {
        setDisplay(name)
    }
    return <React.Fragment>
        <div
            className='SideBarMenu'>
            <SidebarMenu displaySection={displaySection}/>
        </div>
        <div className = 'main'>
            {
                display === 'INTRO' && <Intro /> }
                 {
                display === 'ACADEMIC' &&  <Academic/>} 
                {
                display === 'PRO' && <Project/>  } 
                {
                display === 'EXP' && <Exp />
            } {
                display === 'TECH' && <Tech /> }
            </div>

    </React.Fragment>
}

export default Home