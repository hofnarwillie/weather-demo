import React, {PropTypes} from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/scss/InputRange.scss';

class WeatherWidget extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            selectedIndex: 0
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    
    
    handleValueChange(component, value) {
        this.setState({
          selectedIndex: value,
        });
    }
    
    renderCurrentDataGrid(){
        let data = this.props.weather[this.state.selectedIndex];
        
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2">
                            {data.dt_txt}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            Overall
                        </th>
                        <td>
                            {data.weather[0].main} - {data.weather[0].description}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Temperature
                        </th>
                        <td>
                            {data.main.temp} &deg;C
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Wind
                        </th>
                        <td>
                            {data.wind.speed} km/h
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Humidity
                        </th>
                        <td>
                            {data.main.humidity}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
    
    render(){
        return (
            <div>
                <p className="bg-info app-padding">Slide the bar across to change the selected time.</p>
                <InputRange 
                    maxValue={this.props.weather.length-1}
                    minValue={0}
                    value={this.state.selectedIndex}
                    onChange={this.handleValueChange}
                />
                {this.renderCurrentDataGrid()}
            </div>
        );
    }
}
WeatherWidget.propTypes = {
    weather: PropTypes.array.isRequired
};
    
export default WeatherWidget;