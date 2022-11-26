import React from 'react'

const Box = ({ img, mainHeading, description, courseNo, lessons, durationHour, durationMinutes }) => {
    return (

        <div className="container p-4 flex">
            <div className="block max-w-lg p-5 bg-white rounded-lg">
                <div className="image">
                    <img src={img} className="rounded-2xl" alt="" />
                </div>
                <div className="textData-top py-5 flex items-center justify-between">
                    <span className="text-2xl font-bold ">{mainHeading}</span>
                    <div className="iconSmall text-xl">
                        <i class="fa-solid fa-share-nodes mr-5 text-green-700"></i>
                        <i class="fa-solid fa-bookmark text-green-700"></i>
                    </div>
                </div>
                <div className="textData-bottom">
                    <p className="text-xl pb-5 border-b border-black">
                        {description}
                    </p>
                    <div className="textThree flex items-center justify-between py-3 text-lg">
                        <p><span className="text-green-700">{courseNo}</span> Courses</p>
                        <p><span className="text-green-700">{lessons}</span> Lessons</p>
                        <p><span className="text-green-700">{durationHour}</span> hr, <span className="text-green-700">{durationMinutes}</span> minutes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box