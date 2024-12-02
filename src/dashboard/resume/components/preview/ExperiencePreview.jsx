import React from 'react'

function ExperiencePreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2' style={{ color: resumeInfo?.themeColor }}>Professional Experience</h2>

        <hr className='border-[1.5px] my-2' style={{ borderColor: resumeInfo?.themeColor }} />

        {resumeInfo?.experience.map((experience, index) => (
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold' style={{ color: resumeInfo?.themeColor }}> {experience?.title} </h2>
                <h2 className='text-xs flex justify-between'> {experience?.companyName}, {experience?.city}, {experience?.state} <span> {experience?.startDate} - {experience?.currentlyWorking?'Present':experience?.endDate} </span> </h2>
                <p className='text-xs my-2'> {experience?.workSummary} </p>
            </div>
        ))}
    </div>
  )
}

export default ExperiencePreview