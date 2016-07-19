import React, { PropTypes } from 'react';
import './ColorChoice.scss';

const propTypes = {
    activeColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    key: PropTypes.string
};

const defaultProps = {

};

//colorChoice has a background color from it's given color attribute, 
//and it knows about the current active color to determine whether it is active or not
//onclick colorChoice fires the chooseActiveColor action. 
//on rerender colorChoice will reflect whether is it now active or not. 
class ColorChoice extends React.Component {

    updatedActiveColor(){
        this.props.actions.chooseActiveColor(this.props.color);
    }

    render() {
        let cellStyle = {
            backgroundColor: this.props.color
        };
        let classes = 'colorChoice';
        if(this.props.activeColor == this.props.color){
            classes += ' active';
        }

        return (
            <div onClick={this.updatedActiveColor.bind(this)} className={classes} style={cellStyle}></div>
        );
    }
}

ColorChoice.propTypes = propTypes;
ColorChoice.defaultProps = defaultProps;

export default ColorChoice;