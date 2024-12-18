import React, { useState } from 'react'
import PersonalDetail from './form/PersonalDetail'
import { ArrowRight, LayoutGrid, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Summary from './form/Summary';

function FormSection() {
  const [ activeFormIndex, setActiveFormIndex ] = useState(1);
  const [ enableNext, setEnableNext ] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant='outline' size='sm' className='flex gap-2'> <LayoutGrid /> Theme</Button>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && <Button className='' size='sm' onClick={() => setActiveFormIndex(activeFormIndex - 1) } > <ArrowLeft /> </Button>}
          <Button disabled={!enableNext} className='flex gap-2' size='sm' onClick={() => setActiveFormIndex(activeFormIndex + 1) } >Next <ArrowRight /> </Button>
        </div>
      </div>
      {/* personal details */}
        { activeFormIndex==1? 
          <PersonalDetail enableNext={(v) => setEnableNext(v)} /> : 
          activeFormIndex==2 ?
          <Summary enableNext={(v) => setEnableNext(v)} />:
          null
        }
      
      {/* experience */}

      {/* educational detail */}

      {/* skills */}
    </div>
  )
}

export default FormSection
