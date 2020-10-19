import React from 'react';
import PropTypes from 'prop-types';

class Default extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Page is not found
            </div>
        );
    }
}

Default.propTypes = {};

export default Default;
