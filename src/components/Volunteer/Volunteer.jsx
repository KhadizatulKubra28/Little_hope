import React from 'react'
import FirstSectionContact from '../Volunteer/Sections/firstSectionContact/firstSectionContact'
import SecondSectionContact from '../Volunteer/Sections/secondSectionContact/secondSectionContact'
import '../Volunteer/volunteer.css'
const volunteer = () => {
  return (
    <div className='contact-page-container'>
        <FirstSectionContact/>
        <SecondSectionContact/>
    </div>
  )
}

export default volunteer