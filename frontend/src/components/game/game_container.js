
import { connect } from 'react-redux';

import Game from './game';


const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        robot: state.session.robot

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