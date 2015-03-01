var Box = React.createClass({displayName: "Box",
	getInitialState:function() {
		return {
			windowWidth: window.innerWidth
		};
	},
	handleResize:function(e) {
		this.setState({
			windowWidth: window.innerWidth
		});
	},
	componentDidMount:function() {
		window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount:function() {
		window.removeEventListener('resize', this.handleResize);
	},
	render:function() {
		return React.createElement("div", null, "Current window width: ", this.state.windowWidth)
	}
});

React.render(React.createElement(Box, null), getElementById('app'));
