import React, { useState } from 'react'
import Projects from './Projects'
import { motion,AnimatePresence } from "framer-motion"
function Education() {
    const education =  ['SSLC','HSLC','COLLEGE']
    const [selectedEdu,setSelectedEdu] = useState('SSLC')
    const educationDatils = 
        {
            SSLC: {
                school: '36 Grama Senai Thaliver Higher Secondary School',
                location: 'Sankarankovil',
                year: '2018 - 2019',
              },
              HSLC: {
                school: 'Gomathi Ambal Government Boys Higher Secondary School',
                location: 'Sankarankovil',
                department: 'General Machinist',
                year: '2019 - 2021',
              },
              COLLEGE: {
                school: 'Government Arts & Science College',
                location: 'Sankarankovil',
                department: 'BA. English',
                year: '2021 - 2024',
              },
        }
    
  return <>
  <h1 id='education' className='education-det heading'>Education Deatils</h1>
  <div className='education-wrapper'>
    <ul className='education-list'>
        {
            education.map((educ,i)=>{
               return <li key={i}
                style={{cursor:'pointer'}}
                onClick={()=>setSelectedEdu(educ)}
                className={`${selectedEdu === educ ? 'active':''}`}
                >{educ}</li>
            })
        }

    </ul>
    <div className="education-deatils">
        {
            selectedEdu === 'SSLC'&& (
                <>
                <p><b>SSLC from  </b>{educationDatils.HSLC.school}</p>
                <p><b>Location : </b>{educationDatils.SSLC.location}</p>
                <p><b>Year : {educationDatils.SSLC.year}</b></p>
                </>
            )
        }
         {selectedEdu === 'HSLC' && (
            <>
              <p><b>HSLC from </b>{educationDatils.HSLC.school}</p>
              <p><b>Location: </b>{educationDatils.HSLC.location}</p>
              <p><b>Department: </b>{educationDatils.HSLC.department}</p>
              <p><b>Year: </b>{educationDatils.HSLC.year}</p>
            </>
          )}
          
          {selectedEdu === 'COLLEGE' && (
            <>
              <p><b>College from </b> {educationDatils.COLLEGE.school}</p>
              <p><b>Location: </b> {educationDatils.COLLEGE.location}</p>
              <p><b>Department: </b>{educationDatils.COLLEGE.department}</p>
              <p><b>Year: </b>{educationDatils.COLLEGE.year}</p>
            </>
          )}
    </div>
  </div>
  <Projects/>
  
  </>
}

export default Education
