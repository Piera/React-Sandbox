var React = require("react");
var people = [{
	"name": "One Person",
	"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
	"id": 0
	},
	{
	"name": "Another Person",
	"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg",
	"id": 1
	},
	{
	"name": "Person Three",
	"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/annapickard/128.jpg",
	"id": 2
}]

var Card = React.createClass({

	render: function() {
		return (
			<div>
				<h2>{this.props.name}</h2>
				<img src={this.props.avatar} alt=""/>
			<div></div>
			<button onClick={this.props.onClick}>Delete Me</button>
			</div>
		)
	}
})

var App = React.createClass({

	deletePerson: function (person) {
		this.state.people.splice(this.state.people.indexOf(person), 1);
		this.setState({people: this.state.people});
	},

	getInitialState: function () {
		return {
			people: this.props.people.splice(0)
		}
	},

	render: function (){
		var that = this;
		return (
			<div>
				{this.state.people.map(function (person) {
					return (
						<Card onClick={that.deletePerson.bind(null, person)} name={person.name} avatar={person.avatar}></Card>
					)
				})}
			</div>
		)
	}
})

React.render(<App people={people}></App>, document.body);