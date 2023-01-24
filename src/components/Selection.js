import React, {useState} from 'react'
import '../styles/Child.css'

export default function Selection(props) {
    let [nextBackground, selectNextBackground] = useState({ background: "" });
  return (
    <div className='fix-box' style={nextBackground} onClick={()=> props.applyColor(selectNextBackground)} >
    <h2 className="subheading"  >Selection</h2>
    </div>
  )
}

