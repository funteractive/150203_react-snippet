var User = React.createClass({displayName: "User",
	propTypes: {
		name: React.PropTypes.string.isRequired,
		id: React.PropTypes.number.isRequired
	},
	render: function() {
		return(
			React.createElement("div", null, this.props.id, ":", this.props.name)
		);
	}
});

var Users = React.createClass({displayName: "Users",
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
		console.log(get);
		if(get['user']) {
			this.setState({users: get['user'].user});
		}
	},
	render: function() {
		console.log(this.state.users);
		var users = this.state.users.map(function(user){
			return React.createElement(User, {id: user.id, name: user.name, key: user.id})
		});
		return(
			React.createElement("div", null, 
				React.createElement("p", null, "ユーザー一覧"), 
				users
			)
		);
	}
});

React.render(React.createElement(Users, null), document.getElementById('app'));

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
