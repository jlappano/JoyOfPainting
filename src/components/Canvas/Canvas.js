import React, { PropTypes } from 'react';
import _ from 'underscore';
import Cell from './../Cell/Cell';
import CellRow from './../CellRow/CellRow';
import './Canvas.scss';

const propTypes = {
    activeColor: PropTypes.string.isRequired,
    cellGrid: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const defaultProps = {

};

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cellGrid: props.cellGrid,
            isPainting: false,
            activeColor: props.activeColor,
            updatedCells: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.cellGrid || nextProps.activeColor) {
            this.setState({
                cellGrid: nextProps.cellGrid,
                activeColor: nextProps.activeColor
            });

        }
    }

    handleCellMouseDown(){
        if(!this.state.isPainting){
            this.setState({
                isPainting: true
            });
        }
    }

    handleCellHover(x, y){

        if(this.state.isPainting){
            let updatedCellRow = _.clone(this.state.cellGrid[x]);
            updatedCellRow[y] = this.state.activeColor;

            let updatedCellGrid = _.clone(this.state.cellGrid);
            updatedCellGrid[x] = updatedCellRow

            this.setState({
                cellGrid: updatedCellGrid
            });
        }
    }

    handleCellMouseUp(){
        if(this.state.isPainting){
            this.setState({
                isPainting: false
            });
            this.props.actions.updateCanvas(this.state.cellGrid);
        }
    }

    render() {
        let cellRows = [];
        
        this.state.cellGrid.forEach(function (row, rowIndex) {
            cellRows.push(<CellRow
                rowIndex={rowIndex}
                key={rowIndex}
                cells={row}
                onMouseDown={this.handleCellMouseDown.bind(this)}
                onMouseUp={this.handleCellMouseUp.bind(this)}
                onHover={this.handleCellHover.bind(this)}
            />);
        }.bind(this));

        return (
            <div className='canvas'>
                {cellRows}
            </div>
        );
    }
}

Canvas.propTypes = propTypes;
Canvas.defaultProps = defaultProps;

export default Canvas;