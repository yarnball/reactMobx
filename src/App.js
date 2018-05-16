import React from "react"
import { observer } from "mobx-react"
import store from "./store.js"

const Counter = () => (
	<div>
		<span>{store.counter}</span>
		<br />
		<button onClick={() => store.decrement()}>-1</button>

		<button onClick={() => store.increment()}>+1</button>
	</div>
)

export default observer(Counter)
