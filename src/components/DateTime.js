import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DateTime extends Component {

    render() {
        let dateTime;
        let date = new Date(this.props.dateTime);
        if (this.props.timeOnly) {
            dateTime = date.getHours() + ':00';
        }

        return (
            <div>
                {dateTime}
            </div>
        );
    }
}

DateTime.propTypes = {
    dateTime: PropTypes.string.isRequired
};


export default connect(null, {})(DateTime);