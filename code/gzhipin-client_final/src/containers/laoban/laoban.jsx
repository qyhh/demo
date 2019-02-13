/*
老板主界面路由容器组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/actions'

import UserList from '../../components/user-list/user-list'
import {Link} from "react-router-dom";
import {Icon, NavBar} from "antd-mobile";


class Laoban extends Component {
  componentDidMount () {
    // 获取获取userList
    this.props.getUserList('dashen')
  }
  render () {
    return (
        <div>
          <NavBar
              rightContent={[

                <Link to='selectdashen'><Icon key="0" type="search" style={{ marginRight: '16px' }}  /></Link>

              ]}>
            老板列表 </NavBar>
          <UserList userList={this.props.userList}/>
        </div>
    )
  }
}

export default connect(
  state => ({userList: state.userList}),
  {getUserList}
)(Laoban)
