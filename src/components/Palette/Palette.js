import React, { PropTypes } from 'react';
import ColorChoice from './../ColorChoice/ColorChoice';
import './Palette.scss';

const propTypes = {
    activeColor: PropTypes.string.isRequired,
    colorChoices: PropTypes.array.isRequired
};

const defaultProps = {

};

class Palette extends React.Component {
    render() {
        let colorChoices = [];
        let inlineStyle = {
            backgroundColor: this.props.activeColor
        };
        
        this.props.colorChoices.forEach(function (choice, i) {
            colorChoices.push(<ColorChoice key={i} activeColor={this.props.activeColor} color={choice} actions={this.props.actions}/>);
        }.bind(this));

        return (
            <div className='palette'>
                <div className='colorChoice' style={inlineStyle}></div>
                {colorChoices}
            </div>
        );
    }
}

Palette.propTypes = propTypes;
Palette.defaultProps = defaultProps;

export default Palette;