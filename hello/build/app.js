var React = require('react');

var Hello = React.createClass({displayName: "Hello",
	render: function() {
		return(
			React.createElement("div", {className: "container"}, "Hello ", this.props.name)
		);
	}
});

React.render(React.createElement(Hello, {name: "React"}), document.getElementById('app'));
