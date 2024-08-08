import React from 'react'
import { X } from 'lucide-react'

function PlantPlanner({closeModal}) {
    return (
        <div className="fullscreen-overlay"> 
            <div className="modalContainer">
                <div className="modalCloseBtn">
                <button onClick={() => closeModal(false)}><X/></button>
                </div>
                <div className="modal-img">
                <img src={"./assets/images/plant-planner.png"} alt="Plant Planner" />
                </div>
                <div className="modal-title">
                    <h1>Plant Planner</h1>
                </div>
                <div className="modal-body">
                    <h2>The next pg is great!</h2>
                </div>
                <div className="modal-footer">
                    <button>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default PlantPlanner