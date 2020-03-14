import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) =>{
    return(
        <div>
            <nav>
                <div className='nav-wrapper light-blue darken-2'>
                    <a className='brand-logo'>{props.tittle}</a>
                </div>
            </nav>
        </div>
    )
}

Header.propTypes = {
    tittle: PropTypes.string.isRequired
}
export default Header;