import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
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