import React from 'react'

const SpecificPage = props => {
  
  console.log(props)
  
  return (
    <div>
      Specific page {props.match.params.id}
    </div>
  )
}

export default SpecificPage