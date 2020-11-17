import React from 'react';
import './Spinner.scss';

const SpinnerComponent = () => {
    return (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default SpinnerComponent;