import { connect } from 'react-redux';
import { updateRobot, receiveCurrentRobot } from '../../actions/robot_actions';


import GameStore from './game_store';
import './game-style.scss'

const mapStateToProps = (state) => {
    // debugger
    return {
        user: state.session.user,
        robot: state.entities.robot

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateRobot: (robot) => dispatch(updateRobot(robot)),
        updateStats: (robot) => dispatch(receiveCurrentRobot(robot)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameStore);