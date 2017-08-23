import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'
import GoogleMap from '../components/Map'

class WeatherList extends Component {
	renderWeather(cityData) {
		const { id, name } = cityData.city
		const temps = cityData.list.map(weather => weather.main.temp)
		const humidity = cityData.list.map(weather => weather.main.humidity)
		const press = cityData.list.map(weather => weather.main.pressure)
		const { lat, lon } = cityData.city.coord

		return (
			<tr key={id}>
				<td> <GoogleMap lat={lat} lon={lon} /> </td>
				<td>
					<Chart data={temps} color='red' units='Celsius' />
				</td>
				<td>
					<Chart data={humidity} color='blue' units='hPa'/>
				</td>
				<td>
					<Chart data={press} color='green' units='%' />
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className='table table-hover'>
			  <thead>
			  	<tr>
			  		<th>City</th>
			  		<th>Temperature</th>
			  		<th>Pressure</th>
			  		<th>Humidity</th>
			  	</tr>
			  </thead>
			  <tbody>
			  	{this.props.weather.map(this.renderWeather)}
			  </tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {
	return {
		weather
	}
}

// mapDispatchToProps
export default connect(mapStateToProps)(WeatherList)
