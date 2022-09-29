import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import { getLocalDb, setLocalDb } from '../utilities/fakeDb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({minute}) => {
    const [breakTime, setBreakTime] = useState(0);

    useEffect( () => {
        const getStored = getLocalDb();
        if(getStored) {
            setBreakTime(getStored)
        }
    }, [breakTime])

    const addBreakBtnHandle = (minute) => {
        setBreakTime(minute)
        setLocalDb(minute)
    }

    const notify = () => toast("Great!");

    return (
        <div className='sidebar-info mt-4'>
            <div>
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
                        <button onClick={(e) => addBreakBtnHandle(e.target.innerText)}>10</button>
                        <button onClick={(e) => addBreakBtnHandle(e.target.innerText)}>20</button>
                        <button onClick={(e) => addBreakBtnHandle(e.target.innerText)}>30</button>
                        <button onClick={(e) => addBreakBtnHandle(e.target.innerText)}>40</button>
                        <button onClick={(e) => addBreakBtnHandle(e.target.innerText)}>50</button>
                    </div>
                </div>
                <div className='mt-5 mx-3'>
                    <h5 className='text-center'>Exercise Details</h5>
                    <h6 className='exercise-time'>Exercise time: {minute} Minutes</h6>
                    <h6 className='break-time'>Break time: {breakTime} Minutes</h6>
                    <button onClick={notify} className='add-to-list-btn'>Activity Completed</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;