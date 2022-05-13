import React from 'react'

const teamMembers = () => {
return (
    <div>
        <div className='team-members'>
            <h1 className='heading'>Team Members</h1>
            <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
            <div className='cards2'>
                <div className='tm-1'>
                    <img alt="tm-1" />
                    <h4>Hans Desjarlais</h4>
                    <p>FOUNDER & CEO</p>
                    <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
                </div>
                <div className='tm-2'>
                    <img alt="tm-2" />
                    <h4>Janelle Brandon</h4>
                    <p>MARKETING DIRECTOR</p>
                    <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
                </div>
                <div className='tm-3'>
                    <img alt="tm-3" />
                    <h4>Eric Kelly</h4>
                    <p>SENIOR PROGRAMMER</p>
                    <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default teamMembers
