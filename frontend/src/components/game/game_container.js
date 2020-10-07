
import { connect } from 'react-redux';
import { updateRobot} from '../../actions/robot_actions';
import { getEnemies} from '../../actions/enemy_actions';

import Game from './game';


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
        getEnemies: (robot) => dispatch(getEnemies(robot))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);