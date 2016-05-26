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

class CellRow extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps.cells);
        // console.log(this.props.cells);
        let indexSize = nextProps.cells.length;
        for(let index = 0; index < indexSize; index++){
            // console.log(nextProps.cells[index] + '; ' + this.props.cells[index]);
            if(nextProps.cells[index] !== this.props.cells[index]){
                // console.log('true!!');
                return true;
            }
        }
        // let a = _.intersection(nextProps.cells, this.props.cells);
        // console.log(a.length);

        // console.log('logged difference ' + nextProps));
        // if(_.difference(nextProps.cells, this.props.cells).length > 1){
            // return true;
        // }
        return false;
        // return false;
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