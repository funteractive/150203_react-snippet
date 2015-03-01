var Text = React.createClass({displayName: "Text",
	getInitialState:function() {
		return {
			text: ''
		};
	},
	onChange:function(e) {
		this.setState({
			text: e.target.value
		});
	},
	render:function() {
		return(
			React.createElement("div", null, 
				React.createElement("input", {type: "text", value: this.state.text, onChange: this.onChange}), 
				React.createElement("span", null, this.state.text)
			)
		);
	}
});
