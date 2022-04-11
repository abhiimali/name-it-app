import React from 'react'

import './NameCard.css'

const nameCheapURL = "https://www.namecheap.com/domains/registration/results/?domain="
const NameCard = ({ SuggestedName }) => {
  
    return (

        <>
        <a  className='card-link'  href={`${nameCheapURL}${SuggestedName}`} >

          <div className='result-name-card'>

          <p className='result-name'>
              {SuggestedName}
          </p>

         </div>

        </a>
        
        </>
    )


}

export default NameCard ;