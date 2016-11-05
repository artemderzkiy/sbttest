import React, {Component} from 'react'
import TextField from './TextField'
import {connect} from 'react-redux'
import styles from '../css/style.css'


class SumCom extends Component {
	render() {
	//var fullSum= this.props.fullSum;
		return (<div className={styles.SumGroup}>	
		         <div>	
					<label>Сумма</label>
					<TextField/>
					</div>
					<label className={styles.label__rubl}>рубль РФ</label>	
					</div>
				)	
	}
	
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(SumCom)