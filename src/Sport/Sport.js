import React from 'react';
import './Sport.css'

const Sport = ({sport, addListBtnHandle}) => {
    const {img, name, body, age, minute } = sport;
    return (
        <div>
            <div>
                <div className='col'>
                    <div className='card'>
                    <img src={img} className='card-img-top' alt="" />
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>
                        <p className='card-text'>{body.slice(0, 75)} ...</p>
                        <h6>Age: {age}</h6>
                        <h6>Time required: {minute} min</h6>
                        <button onClick={() => addListBtnHandle(minute)} className='add-to-list-btn'>Add to list</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sport;