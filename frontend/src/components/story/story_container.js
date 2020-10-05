import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Story from './story';

const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    
    return {
        signup: user => dispatch(signup(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Story);