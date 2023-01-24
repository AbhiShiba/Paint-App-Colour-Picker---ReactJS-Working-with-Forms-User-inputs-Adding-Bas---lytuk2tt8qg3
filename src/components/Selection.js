import React, {useState} from 'react'

export default function Selection(props) {
    let [nextBackground, selectNextBackground] = useState({ background: "" });
  return (
    <div style={nextBackground} onClick={()=> props.applyColor(selectNextBackground)} >
    <h2 className="subheading"  >Selection</h2>
    </div>
  )
}

