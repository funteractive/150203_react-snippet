var Counter = React.createClass({displayName: "Counter",
	getInitialState: function() {
		return({
			count: 0
		});
	},
	onClick: function() {
		this.setState({count: this.setState.count + 1});
	},
	render: function() {
		return(
			React.createElement("div", null, 
				React.createElement("div", null, "count: ", this.static.count), 
				React.createElement("button", {onClick: "{this.onClick}"}, "Click!!")
			)
		);
	}
});

React.render(React.createElement(Counter, null), document.getElementById('app'));
