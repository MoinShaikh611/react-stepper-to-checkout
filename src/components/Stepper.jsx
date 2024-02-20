import React, { useRef, useState } from 'react'
import { STEPS_TO_CHECKOUT } from '../data/stepperConfig';
import StepInfo from './StepInfo';

function Stepper() {
    const [currentIndex,setcurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
      });
    const stepRef = useRef([]);

    useEffect(() => {
        setMargins({
          marginLeft: stepRef.current[0].offsetWidth / 2,
          marginRight: stepRef.current[STEPS_TO_CHECKOUT.length - 1].offsetWidth / 2,
        });
      }, [stepRef, STEPS_TO_CHECKOUT.length]);
    
    const handleNext = () =>{
        setcurrentIndex((prevIndex) => {
            if(prevIndex === STEPS_TO_CHECKOUT.length-1){
                setIsComplete(true);
                return prevIndex
            }else{
                return prevIndex + 1
            }
        })
    }

    const calculateProgressWidth = ()=>{
        return (currentIndex  / STEPS_TO_CHECKOUT.length) *100;
    }
   
  return (
    <>
        <div ref={(el) => (stepRef.current[index+1] = el)} className="stepper-container">
            {
                STEPS_TO_CHECKOUT.map((step,i)=>(
                    <div className='step'>
                    <div className="step-count">{
                        (currentIndex > i || isComplete) ? <span>&#10003;</span> : i+1
                    }</div>
                    <div className="step-name">{step.name}</div>
                    </div>
                ))
            }
            <div className="progress-bar"
              style={{
                width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
                marginLeft: margins.marginLeft,
                marginRight: margins.marginRight,
              }}>
                <div className="progress" style={{width:`${calculateProgressWidth()}%`}}></div>
            </div>
        </div>
        <StepInfo data={STEPS_TO_CHECKOUT} index={currentIndex}/>
        {
            !isComplete && 
            <button onClick={handleNext}>
                {currentIndex === STEPS_TO_CHECKOUT.length-1 ? "Finish" : "Next"}
            </button>
            
        }
      
           
        
    </>
  )
}

export default Stepper