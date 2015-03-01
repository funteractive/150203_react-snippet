var User = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		id: React.PropTypes.number.isRequired
	},
	render: function() {
		return(
			<div>{this.props.id}:{this.props.name}</div>
		);
	}
});

var Users = React.createClass({
	getInitialState: function() {
		return({
			users: [
				{id: 1, name: 'foo'},
				{id: 2, name: 'bar'}
			]
		});
	},
	componentDidMount: function() {
		var get = getUrlVars();
		if(get['name'] && get['id']) {
			this.setState({
				users: [
					{id: get['id'], name: get['name']}
				]
			});
		}
	},
	render: function() {
		var users = this.state.users.map(function(user){
			return <User id={user.id} name={user.name} key={user.id}/>
		});
		return(
			<div>
				<p>ユーザー一覧</p>
				{users}
			</div>
		);
	}
});

React.render(<Users />, document.getElementById('app'));

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
