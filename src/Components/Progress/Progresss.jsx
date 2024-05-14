import React, { useEffect, useState } from 'react'
import "./Progress.css"
import {
    Progress,
    ButtonGroup,
    Button
} from "rsuite";
import "rsuite/dist/rsuite.min.css";



export const Progresss = ({value}) => {
    const [percent, setPercent] = useState(0);
    // setPercent(value);
    
    useEffect(() => {
        setPercent(value);
    }, [value]);
    // console.log("progreess wala value ," ,value);
    

    const status =
        percent === 100 ? "success" : null;
    const color =
        percent === 100 ? "#03D613" : "#02749C";

    return (
        <>
            <div className='p-full'>
                <div className='p-left'>
                    <div className='p-inner4'>
                        <div className='p-inner3'>
                            <div className='p-inner2'>
                                <div className='p-inner1'>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='p-right'>
                    <p className='p-daily'>Your Daily Goal Almost Done</p>
                    <p>{value/20} of 5 Completed</p>
                    {/* <div className='p-bar'></div> */}
                    {/* <p>80%</p> */}
                    <Progress.Line
                        className='prog'
                        percent={percent}
                        strokeColor={color}
                        status={status}
                    />

                </div>

            </div>
        </>
    )
}
