import React,{Component} from 'react'
import x from "../Assets/Images/d1a04a0a0db55143075e1b32875de7e6ff27adad-2100x1050.avif"
import "./Home.css"
export default class Home extends React.Component{
    render(){
        return(
            <div id="home">
                <div className="home-side1">
                    <h1>Start your <br/>BK® order.</h1>
                    <button className='btn1'><i className="bi bi-handbag "></i>Order Pickup</button><br/>
                    <button className='btn2'><i class="bi bi-scooter"></i>Order Delivery</button>
                </div>
                <img src={x} className='side-img'/>
            </div>
            
        )
    }
}