import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sourseActions from '../actions/sourseActions'
import ButtonCom from '../components/ButtonCom'
import ComboBox from '../components/ComboBox'
import NumOvnCom from '../components/NumOvnCom'
import SumCom from '../components/SumCom'
import SumComSum from '../components/SumComSum'
import SoursesList  from '../components/SoursesList'
import SourseCom  from '../components/SourseCom'
import styles from '../css/style.css'
import stylesfont from 'react-fontawesome'


const MainApp = ({sourses,ovn,button, actions}) => ( 
 <div>   
    <NumOvnCom actions={actions} ovn={ovn} sourses={sourses}/>
    <div className={styles.line}/>
    <h1>Введите общую сумму взноса</h1>
    <SumComSum actions={actions} ovn={ovn} sourses={sourses}/>
    <div className={styles.line}/>
    <SoursesList sourses={sourses} ovn={ovn} actions={actions}/>  
    <ButtonCom actions={actions}  button={button} ovn={ovn}/>  
 </div>  
 )

MainApp.propTypes = {
  sourses: PropTypes.array.isRequired, 
  ovn:   PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  button:   PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  sourses: state.sourses,
  ovn : state.ovn,
  button: state.button
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(sourseActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(MainApp)