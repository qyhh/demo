import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProvinceCity from '../../components/nav-header/nav-header'


import {getSelectDashen } from '../../redux/actions'
import SelectList from '../../components/select-list/select-list'


class SelectDashen extends Component{
    constructor(props) {
        super(props)
        this.state = {
            province: '',
            city: '',
            poat:''
        }
    }

    handleParentAction(value) {
        value.city
            ? this.setState({city: value.city})
            : this.setState({province: value.province})
    }

    handlePost(e){
        this.setState({post:e.target.value})
    }

    handleclick=()=>{
        this.props.getSelectDashen('dashen',this.state.city,this.state.post)
        console.log(this.state.province,this.state.city,this.state.post)
    }

    render () {

        return (
            <div>

                <ProvinceCity parentAction={this.handleParentAction.bind(this)}/>
                <input onChange={this.handlePost.bind(this)}/>
                <button style={{width:'30%',color:'lightgreen'}} onClick={this.handleclick.bind(this)}>搜索</button>
                {this.props.selectDashen.length===0?<h1><b>很抱歉，没有相应大神</b></h1>:<SelectList selectList={this.props.selectDashen}/>}
            </div>
        )
    }

}
export default connect(  state => ({selectDashen: state.selectDashen}),
    {getSelectDashen})(SelectDashen)
//
