var Counter = React.createClass({
	getInitialState: function() {
		return({
			count: 0
		});
	},
	onClick: function() {
		this.setState({count: this.state.count + 1});
	},
	render: function() {
		return(
			<div>
				<div>count: {this.state.count}</div>
				<button onClick={this.onClick}>Click!!</button>
			</div>
		);
	}
});

React.render(<Counter />, document.getElementById('app'));
