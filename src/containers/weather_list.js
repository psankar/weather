import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)

        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
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
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }
    // { weather } in param is equivalent of `(state) { const weather = state.weather }`
    // The { weather } in return is the equivalent of { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);