import React, {useState} from 'react'

export default function Selection(props) {
    let [nextBackground, selectNextBackground] = useState({ background: "" });
  return (
    <div>
    <h2 className="subheading" style={nextBackground} onClick={()=> props.applyColor(selectNextBackground)}>titls</h2>
    </div>
  )
}

