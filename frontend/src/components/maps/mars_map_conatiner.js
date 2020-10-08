
import { connect } from 'react-redux';
import { updateRobot, setRobotLocation} from '../../actions/robot_actions';
import { getEnemies} from '../../actions/enemy_actions';

import MarsMap from './mars_map';


const mapStateToProps = (state) => {
    // debugger
    return {
        user: state.session.user,
        robot: state.entities.robot

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
        updateRobot: (robot) => dispatch(updateRobot(robot))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarsMap);