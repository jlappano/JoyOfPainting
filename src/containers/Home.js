import React, { PropTypes } from 'react';
import Canvas from './../components/Canvas/Canvas';
import Palette from './../components/Palette/Palette';
import Header from './../components/Header/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import './Home.scss';

//React is imported as a whole, so component method must be called from it
class Home extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header
                    title = 'The Joy of Painting'
                />
                <div className='canvasContainer'>
                <Palette
                    activeColor = {this.props.pallete.activeColor}
                    colorChoices = {this.props.pallete.colorChoices}
                    actions = {this.props.actions}
                />
                <Canvas
                    activeColor = {this.props.pallete.activeColor}
                    cellGrid = {this.props.canvas.cellGrid}
                    actions = {this.props.actions}
                />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)