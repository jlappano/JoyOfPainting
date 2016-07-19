import React, { PropTypes } from 'react';
import './Header.scss';

const propTypes = {
    title: PropTypes.string.isRequired,
};

//Header only renders the given title, it knows no actions
class Header extends React.Component {
    render() {
        return (
            <span>
                <div className='header'>{this.props.title}</div>
            </span>
        );
    }
}

Header.propTypes = propTypes;

export default Header;