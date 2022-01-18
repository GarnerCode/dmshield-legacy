import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index';
import Sessions from './Sessions';

export default function Campaign() {

    const campName = useSelector((state) => state.campName);
    const campSumm = useSelector((state) => state.campSumm);
    const dispatch = useDispatch();

    const { updateCampName, updateCampSumm } = bindActionCreators(actionCreators, dispatch);

    const [toggleCampInput, setToggleCampInput] = useState(false);

    const handleCampToggle = () => {
        setToggleCampInput(!toggleCampInput);
    }

    return (
        <div className="Campaign">
            {toggleCampInput ? 
                <form className='formCampaign'>
                    <button className="toggleInput" onClick={handleCampToggle}><i className="fas fa-check"></i></button>
                    <input value={campName} onChange={(e) => updateCampName(e)} type="text" placeholder="Campaign Title" className="inputCampName" />
                    <textarea value={campSumm} onChange={(e) => updateCampSumm(e)} className="inputCampSumm" placeholder="Short summary of your campaign" id="" cols="30" rows="10"></textarea>
                </form>
                :
                <div className="campInfo">
                    <button className="toggleInput" onClick={handleCampToggle}><i className="fas fa-edit"></i></button>
                    <h1>{campName}</h1>
                    <p>{campSumm}</p>
                </div>
            }
            <Sessions />
        </div>
    )
}
