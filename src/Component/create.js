import React from 'react'
import { Button } from 'reactstrap'
function BtnCreate(props) {
    return (
        <div className='btnCreate'>
        <Button onClick={()=>props.Btncreate("rdam")} color="success">Create</Button>    
        </div>
        

    )
}

export default BtnCreate;
