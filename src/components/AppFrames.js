import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrames = ({header, body}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header} />
                <div>{body}</div>
                <div>Example Footer</div>
            </div>
        </div>
    );
};

AppFrames.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrames;