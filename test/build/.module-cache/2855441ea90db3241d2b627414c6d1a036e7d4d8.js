var Counter = React.createClass({displayName: "Counter",
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
			count: parseInt(this.props.initialCount)
		});
	},
	onClick: function() {
		this.setState({
			count: this.state.count + 1
		});
	},
	render: function() {
		return(
			React.createElement("div", null, 
				React.createElement("p", null, this.state.count), 
				React.createElement("button", {onClick: this.onClick}, "Click!!")
			)
		);
	}
});

React.render(React.createElement(Counter, {initialCount: 5}), document.getElementById('app'));
