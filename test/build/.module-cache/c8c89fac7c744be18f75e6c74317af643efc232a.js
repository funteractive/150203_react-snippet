var Text = React.createClass({displayName: "Text",
	getInitialState:function() {
		return {
			text: ''
		};
	},
	render:function() {
		return(
			React.createElement("div", null, 
				React.createElement("input", {type: "text", value: this.state.text}), 
				React.createElement("span", null, this.state.text)
			)
		);
	}
});
