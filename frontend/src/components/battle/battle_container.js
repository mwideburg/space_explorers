
import { connect } from 'react-redux';
import { updateRobot, setRobotMissle, setRobotHp, receiveCurrentRobot } from '../../actions/robot_actions';

import Battle from './battle';


const mapStateToProps = (state) => {
    // debugger
    return {
        user: state.session.user,
        robot: state.entities.robot,
        enemies: state.entities.enemy

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateRobot: (robot) => dispatch(updateRobot(robot)),
        updateStats: (robot) => dispatch(receiveCurrentRobot(robot))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Battle);