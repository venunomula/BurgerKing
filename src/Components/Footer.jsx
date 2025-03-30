import React,{Component} from 'react'
import './Footer.css'
export default class Footer extends React.Component{
    render(){
        return(
            <>
            
            
            <footer className='foot'>
            <i class="bi bi-house-door-fill"></i>
            <p className='p1'>Home</p>
            <i class="bi bi-menu-app"></i>
            <p className='p2'>Menu</p>
            <i class="bi bi-tag"></i>
            <p className='p3'>Offers</p>
            <i class="bi bi-box2-heart-fill"></i>
            <p className='p4'>Rewards</p>
            </footer>
            </>
    
           
        )
    }
}