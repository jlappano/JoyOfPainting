import React, { PropTypes } from 'react';
import './Cell.scss';

const propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onHover: PropTypes.func,
    firstIndex: PropTypes.number,
    secondIndex: PropTypes.number
};

const defaultProps = {
    onClick: function(){},
    onMouseDown: function(){},
    onMouseUp: function(){},
    onHover: function(){}
};

class Cell extends React.Component {

    handleClick(event) {
        this.props.onClick(this.props.firstIndex, this.props.secondIndex);
    }

    handleMouseDown(event) {
        this.props.onMouseDown(this.props.firstIndex, this.props.secondIndex);
    }

    handleMouseUp(event) {
        this.props.onMouseUp(this.props.firstIndex, this.props.secondIndex);
    }

    handleHover(event) {
        this.props.onHover(this.props.firstIndex, this.props.secondIndex);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.color !== this.props.color){
            return true;
        }
        return false;
    }

    render() {
        console.log('rendering cell');
        let cellStyle = {
            backgroundColor: this.props.color
        };
        return (
            <div 
                onClick={this.handleClick.bind(this)} 
                className="cell" 
                style={cellStyle}
                onMouseDown={this.handleMouseDown.bind(this)}
                onMouseUp={this.handleMouseUp.bind(this)}
                onMouseOver={this.handleHover.bind(this)}
            >
            </div>
        );
    }
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;