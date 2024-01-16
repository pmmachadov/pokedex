import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
    return (
        <div>
            <h1>Welcome to the { props.appName }</h1>
            <button onClick={ props.handleClick } className="logo-button">
                <img
                    src={ props.imageUrl }
                    alt={ props.altText }
                    className={ props.className }
                />
            </button>
        </div>
    );
}

Logo.propTypes = {
    appName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Logo;
