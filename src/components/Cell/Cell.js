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

//Cell has a cellstyle made if it's given color
//it has been passed the actions onClick, onMouseDown, and onMouseUp which have been defined 
//in Canvas.js
//On mouseDown painting is initiated and subsequent hovering results in coloring. 
//On mouseUp painting is cancelled and subsequent hovering results in no action. 
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