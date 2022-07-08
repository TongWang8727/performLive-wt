import "./style.css";
import PerformanceModuleTitle from "../PerformanceModuleTitle";
import PerformanceItemTitle from "../PerformanceItemTitle/index";
import { useState } from "react";
export default function PerformanceFirstStep() {
    const [name,setName]=useState('2020 DJ Equipment Review')
    const [description,setDescription]=useState('')
    const [length,setlength]=useState(0)


    const handleChange=(e)=>{
        setDescription(e.target.value);
        setlength(e.target.value.length);

    }
  return (
    <>
      <div className="performance-first-step-frame">
        <div className="performance-module-frame">
            <div className="performance-module-context">
              <PerformanceModuleTitle title='Details'/>
              <PerformanceItemTitle title='Performance Name'/>
              <div className="performance-module-input-name">
                  <input value={name} />
              </div>
              <PerformanceItemTitle title='Description'/>
              <div className="performance-module-input-description">
                  <div className="description-length">{length}/400</div>
                  <input value={description} placeholder='Provide a summary of your performance' onChange={handleChange}/>
              </div>
            </div>
        </div>
        <div className="performance-module-frame"></div>
        <div className="performance-module-frame"></div>
      </div>
    </>
  );
}
