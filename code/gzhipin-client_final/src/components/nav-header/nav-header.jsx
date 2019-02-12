import React, {Component} from 'react'

import pro from './province'





export default class ProvinceCity extends Component {
    constructor(props) {
        super(props)
        this.state =pro()
    }

    handleProvinceChange(e) {
        this.setState({provinceSelected: e.target.value})

    }

    handleCityChange(e) {
        this.setState({citySelected: e.target.value})
    }
    handleProvinceBlur(e) {
        this.props.parentAction({province: e.target.value})
    }


    handleCityBlur(e) {
        this.props.parentAction({city: e.target.value})
    }

    render() {
        return (
            <div>
                <select
                    style={{width:'50%'}}
                    onChange={this
                        .handleProvinceChange
                        .bind(this)}
                    onBlur={this
                        .handleProvinceBlur
                        .bind(this)}>
                    {this
                        .state
                        .priciList
                        .map((item, key) => (
                            <option value={item.province} key={key}>{item.province}</option>
                        ))}
                </select>
                <select
                    style={{width:'50%'}}
                    onChange={this
                        .handleCityChange
                        .bind(this)}
                    onBlur={this
                        .handleCityBlur
                        .bind(this)}>
                    {this
                        .state
                        .priciList
                        .find((item, key) => (item.province === this.state.provinceSelected))
                        .cities
                        .map((item, key) => (
                            <option value={item} key={key}>{item}</option>
                        ))}
                </select>
            </div>
        )
    }
}

