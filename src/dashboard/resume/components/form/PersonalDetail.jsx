import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'

function PersonalDetail() {
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
    const handleInputChange = (e) => {}
    const onSave = (e) => {}
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Detail</h2>
      <p>Get Started With The Basic Information</p>

      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
            <div>
                <label className='text-sm'>First Name</label>
                <Input name='firstName' required onChane={handleInputChange} />
            </div>
            <div>
                <label className='text-sm'>Last Name</label>
                <Input name='lastName' required onChane={handleInputChange} />
            </div>
            <div className='col-span-2'>
                <label className='text-sm'>Job Title</label>
                <Input name='jobTitle' required onChane={handleInputChange} />
            </div>
            <div className='col-span-2'>
                <label className='text-sm'>Address</label>
                <Input name='address' required onChane={handleInputChange} />
            </div>
            <div>
                <label className='text-sm'>Phone</label>
                <Input name='phone' required onChane={handleInputChange} />
            </div>
            <div>
                <label className='text-sm'>Email</label>
                <Input name='email' type='email' required onChane={handleInputChange} />
                
            </div>
        </div>

        <div className='mt-3 flex justify-end'>
            <Button type='submit'>Save</Button>
        </div>
      </form>
    </div>
  )
}

export default PersonalDetail
