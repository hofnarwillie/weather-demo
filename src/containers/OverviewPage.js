import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/weatherActions';
import WeatherWidget from '../components/WeatherWidget';
import { Button, Glyphicon, Row, Col } from 'react-bootstrap';

const OverviewPage = (props) => {
    let title = props.weather && props.weather.city ? 'Weather for ' + props.weather.city.name : 'Loading...';
    
    let weatherWidget = null;
    if (props.weather && props.weather.list && props.weather.list.length){
        weatherWidget = <WeatherWidget weather={props.weather.list} />;
    }
    
    return (
        <div>
            <Row>
                <Col>
                    <h2>
                        {title} 
                        <Button className="pull-right" onClick={props.actions.getWeather} bsStyle="primary" bsSize="xsmall">
                            <Glyphicon glyph="refresh" />
                            <span className="sr-only">Refresh data</span>
                        </Button>
                    </h2>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    {weatherWidget}
                </Col>
            </Row>
        </div>
    );
};

OverviewPage.propTypes = {
    actions: PropTypes.object.isRequired,
    weather: PropTypes.object
};

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OverviewPage);
