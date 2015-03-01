var Text = React.createClass({
	getInitialState() {
		return {
			text: ''
		};
	},
	onChange(e) {
		this.setState({
			text: e.target.value
		});
	},
	render() {
		return(
			<div>
				<input type="text" value={this.state.text} onChange={this.onChange} />
				<span>{this.state.text}</span>
			</div>
		);
	}
});

React.render(<Text />, document.getElementById('text'));

var Textarea = React.createClass({
	getInitialState() {
		return {
			text: ''
		};
	},
	onChange(e) {
		this.setState({
			text: e.target.value
		});
	},
	render() {
		return(
			<div>
				<textarea onChange={this.onChange}>{this.state.text}</textarea>
				<p>{this.state.text}</p>
			</div>
		);
	}
});

React.render(<Textarea />, document.getElementById('textArea'));

var Select = React.createClass({
	getInitialState() {
		return {
			selectedValue: ''
		};
	},
	onChange(e) {
		this.setState({
			selectedValue: e.target.querySelector('option:selected').value
		});
		console.log(e.target.querySelector('option:selected').value);
	},
	render() {
		return(
			<div>
				<textarea onChange={this.onChange}>{this.state.text}</textarea>
				<p>{this.state.text}</p>
			</div>
		);
	}
});
