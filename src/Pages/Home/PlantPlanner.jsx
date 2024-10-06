import React from 'react'
import { X } from 'lucide-react'

function PlantPlanner({closeModal}) {
    return (
        <div className="fixed inset-0 bg-bg bg-opacity-75 justify-center items-center"> 
            <div className="flex box-content container mx-auto modalContainer flex-col justify-center rounded-lg my-10 lg:w-2/3 lg:h-3/4 overflow-auto">
                <div>
                    <button onClick={() => closeModal(false)}><X className='flex w-10 h-10 my-6 text-purple hover:text-ice transition-colors duration-300'/></button>
                </div>
                {/* IMAGE */}
                <div className="flex lg:w-full lg:h-4/6 justify-evenly my-4">
                    <img className="rounded-lg" src={"/img/plant-planner.png"} alt="Plant Planner" />
                </div>
                <div className="text-center text-purple">
                    <h1 className='text-5xl'>Plant Planner</h1>
                </div>
                {/* BODY */}
                <div className="py-10">
                    <h4>- Through the program ACM Projects, I developed a mobile app with a collaborative team of 4 students that provides efficiency in plant care by allowing users to input plant details and generate a specialized watering and fertilizing schedule which can be exported to Google Calendar.</h4>
                    <h4>- I developed the plant search page algorithm by integrating Perenual REST API with our MySQL database to allow our app to efficiently showcase 10,000+ plants for users to select.</h4>
                    <h4>- I also created and maintained the user-authentication system using Google Sign-In and integrated with MySQL database.</h4>
                    <h4>- This project  was presented to a panel of 8 judges, recruiters, and an audience of over 400 people.</h4>
                </div>
                <div>
                    <h3>Dates: Sep 2023- Dec 2023</h3>
                    <h3>Technologies Used: Java, MySQL, Git, Android Studio, Perenual API</h3>
                </div>

                <button>
                    GitHub
                    </button>

            </div>
        </div>
    )
}

export default PlantPlanner