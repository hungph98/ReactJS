import React from 'react';

const HeaderComponent = () =>{
    console.log('Header component đã được render ra');

    return(
        <div>
            <h1>
                This is header
            </h1>
        </div>
    )
}
export default React.memo(HeaderComponent);