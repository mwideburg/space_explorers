
import { connect } from 'react-redux';

import RobotSelection from './robot_selection';
import {makeRobot} from '../../actions/robot_actions';

const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        robot: state.session.robot
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        makeRobot: (user, robot) => dispatch(makeRobot(user, robot))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RobotSelection);