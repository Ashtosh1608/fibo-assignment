import React from 'react'
import './Goal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCoffee, faDroplet, faDumbbell, faFireFlameCurved, faHeartPulse, faMoon, faShoePrints, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Goal = ({value, setValue}) => {
    // const [value , setValue] = useState(0);
    const [task1, setTask1] = useState(false);
    const [task2, setTask2] = useState(false);
    const [task3, setTask3] = useState(false);
    const [task4, setTask4] = useState(false);
    const [task5, setTask5] = useState(false);

    const decrease = () => {
        const val = Math.max(value - 20, 0);
        setValue(val);
    };

    const increase = () => {
        const val = Math.min(value + 20, 100);
        setValue(val);
    };
    
    const handleTaskToggle1 = () => {
        setTask1(!task1);
        if (!task1) {
            increase();
        } else {
            decrease();
        }
    };
    const handleTaskToggle2 = () => {
        setTask2(!task2);
        if (!task2) {
            increase();
        } else {
            decrease();
        }
    };
    const handleTaskToggle3 = () => {
        setTask3(!task3);
        if (!task3) {
            increase();
        } else {
            decrease();
        }
    };
    const handleTaskToggle4 = () => {
        setTask4(!task4);
        if (!task4) {
            increase();
        } else {
            decrease();
        }
    };
    const handleTaskToggle5 = () => {
        setTask5(!task5);
        if (!task5) {
            increase();
        } else {
            decrease();
        }
    };

    console.log("cheek  value is ", value)



    return (
        <>
        <div className='g-all'>

            <div className='gl-Heading'>
                <p>Today's Goal</p>
                {/* <p>Icon</p> */}
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-heart-pulse" /> */}
                <FontAwesomeIcon className='icon-heart' icon={faHeartPulse} />
            </div>

            <div className='gl-totaltask'>
                <div className='gl-task'>
                    <FontAwesomeIcon className='icon dumbbell' icon={faDumbbell} />
                    {/* <p>Icon</p> */}
                    <p>Workout for 20 mins</p>
                    {/* <p>Icon</p> */}
                    {/* {check === true ? increase : increase} */}
                    <FontAwesomeIcon onClick={handleTaskToggle1} className='icon square1' icon={faSquareCheck} />
                </div>
                <div className='gl-task'>
                    {/* <p>Icon</p> */}
                    <FontAwesomeIcon className='icon flame' icon={faFireFlameCurved} />
                    <p>Read books for 15 mins</p>
                    <FontAwesomeIcon onClick={handleTaskToggle2} className='icon square2' icon={faSquareCheck} />
                    {/* <p>Icon</p> */}
                </div>
                <div className='gl-task'>
                    {/* <p>Icon</p> */}
                    <FontAwesomeIcon className='icon shoe' icon={faShoePrints} />
                    <p>30 mins walk</p>
                    <FontAwesomeIcon onClick={handleTaskToggle3} className='icon square3' icon={faSquareCheck} />
                    {/* <p>Icon</p> */}
                </div>
                <div className='gl-task'>
                    {/* <p>Icon</p> */}
                    <FontAwesomeIcon className='icon moon' icon={faMoon} />

                    <p>Sleep at 11 sharp</p>
                    <FontAwesomeIcon onClick={handleTaskToggle4} className='icon square4' icon={faSquareCheck} />
                    {/* <p>Icon</p> */}
                </div>
                <div className='gl-task'>
                    {/* <p>Icon</p> */}
                    <FontAwesomeIcon className='icon droplet' icon={faDroplet} />
                    <p>Drink 3L water</p>
                    <FontAwesomeIcon onClick={handleTaskToggle5} className='icon square5' icon={faSquareCheck} />
                    {/* <p>Icon</p> */}
                </div>
            </div>

            <div className='gl-swipe'>
                <div className='gl-track'>
                    <p>Track</p>
                </div>
                <div>
                    <p className='gl-p-swipe'>Swipe to track all</p>
                </div>
                <div className='icon-right'>
                    {/* <p>Icon</p> */}
                    <FontAwesomeIcon className='angleright1' icon={faAngleRight} />
                    <FontAwesomeIcon className='angleright2' icon={faAngleRight} />
                    <FontAwesomeIcon  className='angleright3' icon={faAngleRight} />
                </div>
            </div>

        </div>
        </>
    )
}
