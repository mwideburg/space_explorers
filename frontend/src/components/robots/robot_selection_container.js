
import { connect } from 'react-redux';

import RobotSelection from './robot_selection';
import {makeRobot, getRobot} from '../../actions/robot_actions';

const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        robot: state.entities.robot
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        makeRobot: (user, robot) => dispatch(makeRobot(user, robot)),
        getRobot: (user) => dispatch(getRobot(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RobotSelection);