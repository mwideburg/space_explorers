
import { connect } from 'react-redux';

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
    
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);