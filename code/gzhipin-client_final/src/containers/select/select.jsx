import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProvinceCity from '../../components/nav-header/nav-header'


import {getSelectList, getUserList} from '../../redux/actions'
import SelectList from '../../components/select-list/select-list'


class Select extends Component{
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
        this.props.getSelectList('laoban',this.state.city,this.state.post)
        console.log(this.state.province,this.state.city,this.state.post)
    }

    render () {

        return (
                <div>

                    <ProvinceCity parentAction={this.handleParentAction.bind(this)}/>
                    <input onChange={this.handlePost.bind(this)}/>
                    <button style={{width:'30%',color:'lightgreen'}} onClick={this.handleclick.bind(this)}>搜索</button>
                    {this.props.selectList.length===0?<h1><b>很抱歉，没有相应职位</b></h1>:<SelectList selectList={this.props.selectList}/>}
                </div>
        )
    }

}
export default connect(  state => ({selectList: state.selectList}),
    {getSelectList})(Select)
//
