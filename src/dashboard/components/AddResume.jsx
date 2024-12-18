import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';


function AddResume() {
    const [ openDialog, setOpenDialog ] = useState(false);
    const [ resumeTitle, setResumeTitle ] = useState();
    const { user } = useUser();
    const [ loading, setLoading ] = useState(false)
    const navigation = useNavigate();

    const onCreate = () => {
        setLoading(true);
        const uuid = uuidv4();
        const data = {
            data: {
                title: resumeTitle,
                resumeId: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        }
        GlobalApi.CreateNewResume(data).then(resp => {
            console.log(resp.data.data.documentId);
            if(resp){
                setLoading(false)
                navigation('/dashboard/resume/'+resp.data.data.documentId+'/edit')
            }
        }, (error) => {
            setLoading(false)
        })
        
    }

    return (
        <div>
            <div 
                className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] w-[250px] cursor-pointer border-dashed hover:scale-105 transition-all hover:shadow-md'
                onClick={() => setOpenDialog(true)}    
            >
                <PlusSquare />
            </div>

            <Dialog open={openDialog}>
                {/* <DialogTrigger>Open</DialogTrigger> */}
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Your New Resume</DialogTitle>
                        <DialogDescription>
                            <p>Add A Title For Your New Resume</p>
                            <Input 
                                className='my-2'
                                onChange={(e) => setResumeTitle(e.target.value)} 
                                placeholder='Ex. Full Stack Developer' 
                            />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button onClick={() => setOpenDialog(false)} variant='ghost'>Cancel</Button>
                            <Button disabled={!resumeTitle || loading } onClick={() => onCreate()}>
                                {loading? 
                                    <Loader2 className='animate-spin' />
                                :
                                    'Create'
                                }
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddResume
