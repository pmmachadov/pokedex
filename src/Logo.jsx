import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
    console.log(props);

    return (
        <h1>Welcome to the { props.appName }</h1>
    );
}


Logo.propTypes = {
    appName: PropTypes.string.isRequired
}

export default Logo;