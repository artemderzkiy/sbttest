import React from 'react'
import { render } from 'react-dom'
import {Provider}  from 'react-redux'
import MainApp  from './containers/MainApp'
import configureStore from './store/configureStore'
import {toogleBut} from './actions/sourseActions'

const store = configureStore();

//console.log(store.getState())


// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )


//store.dispatch(setSum(50))
//store.dispatch(setSumOvn(500));
//store.dispatch(toogleBut(true));
//store.dispatch(toogleBut());

//unsubscribe()

render(
	<Provider store={store}>
	<MainApp/>	
	</Provider>,
	document.getElementById('root')
	)