import React,{Component} from 'react'
import {Button, InputItem, TextareaItem} from "antd-mobile";
import {connect} from "react-redux";
import {updateU} from "../../redux/actions";
import {Redirect} from "react-router-dom";


class UpdateDashen extends Component{
   constructor(props){
       super(props)
       this.state={
           salary:this.props.user.salary,
           company:this.props.user.company,
           header:this.props.user.header,
               post: this.props.user.post,
               info:  this.props.user.info,
               province: this.props.user.province,
               city: this.props.user.city
           }
       }



    handleChange = (name, value) => {
        // debugger
        this.setState({
            [name]: value
        })
    }

    save = () => {
        this.props.updateU(this.state)


    }
    cancel = () => {
        this.props.history.replace('/personal')
    }


    render() {
        return (
            <div>
                {this.props.user.company?<InputItem value={this.state.company} onChange={val => {this.handleChange('company', val)}}>公司名称:</InputItem>:null}
                {this.props.user.salary?<InputItem value={this.state.salary} onChange={val => {this.handleChange('salary', val)}}>职位薪资:</InputItem>:null}
                <InputItem value={this.state.post} onChange={val => {this.handleChange('post', val)}}>岗位:</InputItem>
                <p><InputItem value={this.state.province} onChange={val => {this.handleChange('province', val)}}>省份:</InputItem>
                    <InputItem value={this.state.city} onChange={val => {this.handleChange('city', val)}}>城市:</InputItem></p>
                <TextareaItem title="个人介绍:"
                    value={this.state.info}          rows={3} onChange={val => {this.handleChange('info', val)}}/>
                <Button type='primary' onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button>
                <Button type='primary' onClick={this.cancel}>反&nbsp;&nbsp;&nbsp;回</Button>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {updateU}
)(UpdateDashen)
