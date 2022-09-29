import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyball } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Home.css';
import Sport from '../Sport/Sport';
import Sidebar from '../Sidebar/Sidebar';
import Question from '../Question/Question';


const Home = () => {

    const [sports, setSports] = useState([]);
    const [minute, setMinute] = useState(0);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, [])

    const addListBtnHandle = (addMinute) => {
        const updateMinute = minute + addMinute;
        setMinute(updateMinute)
    } 

    return (
        <div>
            <div className="home-container">
                <div className="sports-container">
                    <div className="logo">
                        <FontAwesomeIcon icon={faVolleyball} className="logo-icon"></FontAwesomeIcon>
                        <span className='logo-text'>Pro Sports Club</span>
                    </div>
                    <div className="sports">
                        <h4>Select today’s exercise</h4>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-2 g-4'>
                            {
                            sports.map(sport => <Sport sport={sport} key={sport.id} addListBtnHandle={addListBtnHandle}></Sport>)
                            }
                        </div>
                    </div>
                    <Question></Question>
                </div>
                <div className="side-bar">
                    <Sidebar minute={minute}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;