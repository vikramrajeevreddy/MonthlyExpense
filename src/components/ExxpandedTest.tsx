import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';



interface Props{
    children: string
    maxChars ?: number 
}


const ExxpandedTest = ({ children, maxChars = 50 }: Props) => {

    const [isExpanded, setExpanded] = useState(false);

   
    if (children.length <= maxChars) return <p>{children}</p>
    
    let text = isExpanded ? children : children.substring(0, maxChars).concat('...');

    return <p>{text}<button onClick={() => setExpanded(!isExpanded)}>{ isExpanded ? 'Less' : 'More'}</button></p>
  
};

export default ExxpandedTest