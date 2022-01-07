import React from 'react'
import Image from 'react-bootstrap/Image'
import '../../App.css'
const styles = {
    height:'500px' ,
    width:'100%'
}

export default function Images() {
    return (
        <div>
            {/* style={{height:'500px',width:'100%'}} */}
            {/* style={styles}  */}
            <Image src='./images//1.jpg' id='slider'/>
        </div>
    )
}
