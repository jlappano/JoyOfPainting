import React, { PropTypes } from 'react';
import './CellRow.scss';
import _ from 'underscore';
import Cell from './../Cell/Cell';

const propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onHover: PropTypes.func,
    rowIndex: PropTypes.number,
    cells: PropTypes.array
};

const defaultProps = {
    onMouseDown: function(){},
    onMouseUp: function(){},
    onHover: function(){}
};

//CellRow encapuslates only one row of the cell grid. It renders each individual cell within it.
//The method shouldComponentUpdate checks to see whether the incoming state affects it's cells, cancelling it's redender if false.  
class CellRow extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        let indexSize = nextProps.cells.length;
        for(let index = 0; index < indexSize; index++){
            if(nextProps.cells[index] !== this.props.cells[index]){
                return true;
            }
        }

        return false;
    }

    render() {
        let cellArray = [];
        this.props.cells.forEach(function (cell, i) {
            cellArray.push(<Cell
                key={i}
                color={cell}
                onMouseDown={this.props.onMouseDown}
                onMouseUp={this.props.onMouseUp}
                onHover={this.props.onHover}
                firstIndex={this.props.rowIndex}
                secondIndex={i}
            />);
        }.bind(this));

        return (
            <div>
                {cellArray}
            </div>
        );
    }
}

CellRow.propTypes = propTypes;
CellRow.defaultProps = defaultProps;

export default CellRow;