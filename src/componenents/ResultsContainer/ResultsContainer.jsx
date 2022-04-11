import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'
const ResultsContainer = ( { SuggestedNames }) =>
{const SuggestedNamesJSX = SuggestedNames.map(SuggestedName => 
    {
             return <NameCard key={SuggestedName}  SuggestedName ={SuggestedName}/>
    })
return (
    <>
     <div className='results-container'>
    {SuggestedNamesJSX}
     </div>
    
    </>
)

}

export default ResultsContainer ;