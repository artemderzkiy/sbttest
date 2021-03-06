import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class TextField extends Component {
	render()
	{
		return (
			<input
			id={this.props.idInp} 
			className={styles.input__simple}
			type="Number" 
			onChange={e => this.props.onChange(e)}
			onKeyUp={e => this.props.onKeyUp(e)} 
			value={this.props.myValue}  
			disabled={this.props.disabledVal}/>			
			)
		}
	}



