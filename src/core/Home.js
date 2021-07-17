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
        console.log(display)

    }
    return <React.Fragment>
        <div
            className='SideBarMenu'
            style={{
                width: '20%',
                height: '100%',
                float: 'left',
                backgroundColor: '#F0F0F0'
            }}>
            <SidebarMenu displaySection={displaySection}/>
        </div>
        <div
            style={{
                width: '80%',
                float: 'left'
            }}>
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