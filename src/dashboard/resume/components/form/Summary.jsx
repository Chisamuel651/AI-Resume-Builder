import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi';
import { LoaderCircle } from 'lucide-react'

function Summary({enableNext}) {
    const params = useParams();
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState()
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        summary && setResumeInfo({
            ...resumeInfo,
            summary: summary
        })
    }, [summary])

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true)
        const data = {
            data:{
                summary: summary
            }
        }
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(resp => {
            console.log(resp)
            enableNext(true)
            setLoading(false)
            toast("Details updated.")
        }, (error) => {
            setLoading(false)
        })
    }

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Summary</h2>
                <p>Add Summary For Your Job Title</p>

                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex items-end justify-between'>
                        <label>Add Summary</label>
                        <Button className='border-primary text-primary' size='sm' variant='outline'>Generate From ResumeAI</Button>
                    </div>
                    <Textarea className='mt-5' required onChange={(e) => setSummary(e.target.value)} />

                    <div className='mt-2 flex justify-end'>
                        <Button type='submit' disabled={loading}>
                            {loading ? <LoaderCircle className='animate-spin' />: 'Save'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Summary
