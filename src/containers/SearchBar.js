import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			term: ''
		}

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(evt) {
		this.setState({ term: evt.target.value });
	}

	onFormSubmit(evt) {
		evt.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render (){
		return (
			<form onSubmit={this.onFormSubmit} className='form-inline col-xs-12'>
				<div className='form-group col-xs-12'>
					<input
						name='city'
						placeholder='Get forecast from your favorit city'
						className='form-control city-input'
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<button type='submit' className='btn btn-primary'> Submit </button>
				</div>
			</form>
		)
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch )
}

export default connect(null, mapDispatchToProps)(SearchBar);
// null because we don't need any state here
