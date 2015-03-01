var Counter = React.createClass({
	propTypes: {
		initialCount: React.PropTypes.number
	},
	getDefaultProps: function() {
		return({
			initialCount: 0
		});
	},
	getInitialState: function() {
		return({
			count: this.props.initialCount
		});
	},
	onClick: function() {
		this.setState({
			count: this.state.count + 1
		});
	},
	render() {
		return(
			<div>
				<p>{this.state.count}</p>
				<button onClick={this.onClick}>Click!!</button>
			</div>
		);
	}
});

React.render(<Counter initialCount={5} />, document.getElementById('app'));
