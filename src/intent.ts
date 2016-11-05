function intent(domSource) {
	return {
		inputEvent$: domSource.select('.field')
			.events('input')
			.map(ev => ev.target.value),
		buttonEvent$: domSource.select('.inc')
			.events('click')
	}
}

export default intent;