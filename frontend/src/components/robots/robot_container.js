

import{connect} from 'react-redux'
import { makeRobot, getRobot } from '../../actions/robot_actions';
import UserRobot from './user_robot';
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
)(UserRobot);