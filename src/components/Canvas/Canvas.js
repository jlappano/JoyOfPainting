import React, { PropTypes } from 'react';
import _ from 'underscore';
import Cell from './../Cell/Cell';
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
            activeColor: props.activeColor
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.cellGrid) {
            this.setState({
                cellGrid: nextProps.cellGrid
            });

        }
    }

    handleCellMouseDown(){
        if(!this.state.isPainting){
            console.log('mouseDown');
            this.setState({
                isPainting: true
            });
        }
    }

    handleCellHover(x, y){
        if(this.state.isPainting){
            let updatedCellGrid = _.clone(this.state.cellGrid);
            updatedCellGrid[x][y] = this.state.activeColor;
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
        }
    }

    handleCellPaint(x, y){
        this.props.actions.updateCanvas(this.props.activeColor, x, y);
    }



    render() {
        let cells = [];
        let key = 0;
        let firstIndex = 0;
        let secondIndex = 0;
        
        this.state.cellGrid.forEach(function (row, i) {
            row.forEach(function (color, j) {
                firstIndex = i;
                secondIndex = j;

                cells.push(<Cell 
                    key={key} 
                    color={color}
                    firstIndex={firstIndex}
                    secondIndex={secondIndex}
                    identifier={key}
                    onMouseDown={this.handleCellMouseDown.bind(this)}
                    onMouseUp={this.handleCellMouseUp.bind(this)}
                    onHover={this.handleCellHover.bind(this)}
                />);
                key++;
            }.bind(this));
            key++;
        }.bind(this));

        return (
            <div className='canvas'>
                {cells}
            </div>
        );
    }
}

Canvas.propTypes = propTypes;
Canvas.defaultProps = defaultProps;

export default Canvas;