import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCardItem({resume}) {
  return (
    <Link to={'/dashboard/resume/'+resume.resumeId+'/edit'}>
      <div className='p-14 bg-secondary flex items-center justify-center h-[280px] w-[250px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary'>
        <Notebook />
      </div>

      <h2 className='text-start m-1'>{resume.title}</h2>
    </Link>
  )
}

export default ResumeCardItem
