import { NavBar, Icon } from 'antd-mobile';
import React,{Component} from 'react'
import {Link} from "react-router-dom";


export default class Navbar extends Component{


    render () {
    return(
        <NavBar
            rightContent={[

                <Link to='select'><Icon key="0" type="search" style={{ marginRight: '16px' }}  /></Link>

            ]}>
            老板列表 </NavBar>
)}
}
