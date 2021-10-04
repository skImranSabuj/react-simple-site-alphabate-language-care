import React from 'react';

const NotFound = () => {
    const notFound_style = {
        width: '100%',
        borderRadius: '15px'

    }
    return (
        <div className="container">
            <h2 className="text-center">Page not found</h2>
            <img style={notFound_style} src="https://www.impactbnd.com/hubfs/404-error-page-examples-best.jpg" alt="" />

        </div>
    );
};

export default NotFound;