import React, { Component } from 'react'
import Footer from './screen/Footer'
import Images from './screen/Images'
import Rowdata from './screen/Rowdata'
import Titlebar from './screen/Titlebar'
import Usernav from './screen/Usernav'

export default class Home extends Component {
    render() {
        return (
            <div>
               
                <Images/>
                <Titlebar name='Our Products'/>
                <Rowdata/>
                <Footer/>
                

            </div>
        )
    }
}

