import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './Sidebar.css'

const Sidebar = ({minute}) => {
    const [breakTime, setBreakTime] = useState(0);

    return (
        <div>
            <div className="profile-info mt-4">
                <div className='d-flex align-items-center justify-content-center'>
                    <img className='me-3' src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg=" alt="" />
                    <div>
                        <h5 className='text-primary'>Shakib Al Hasan</h5>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        <span className='ms-2'>Dhaka, Bangladesh</span>
                    </div>
                </div>
                <div className='award d-flex justify-content-evenly text-center my-4 py-3'>
                    <div>
                        <h4 className='text-second'>90</h4>
                        <span>Participate</span>
                    </div>
                    <div>
                        <h4 className='text-second'>55</h4>
                        <span>Award</span>
                    </div>
                    <div>
                        <h4 className='text-second'>35</h4>
                        <span>Lost</span>
                    </div>
                </div>
                <div>
                    <h5 className='text-center'>Add A Break</h5>
                    <div className='break'>
                        <button onClick={() => setBreakTime(10)}>10</button>
                        <button onClick={() => setBreakTime(20)}>20</button>
                        <button onClick={() => setBreakTime(30)}>30</button>
                        <button onClick={() => setBreakTime(40)}>40</button>
                        <button onClick={() => setBreakTime(50)}>50</button>
                    </div>
                </div>
                <div className='mt-5 mx-3'>
                    <h5>Exercise Details</h5>
                    <h6>Exercise time: {minute} Minutes</h6>
                    <h6>Break time: {breakTime} Minutes</h6>
                    <button className='add-to-list-btn'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;