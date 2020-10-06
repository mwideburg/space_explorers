
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "./form.scss"
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="signup-form form-center">
                <br />
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                  className="input-field"
                />
                <br />
                <input
                  type="text"
                  value={this.state.handle}
                  onChange={this.update("handle")}
                  placeholder="Handle"
                  className="input-field"
                />
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                  className="input-field"
                />
                <br />
                <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                  className="input-field"
                />
                <br />
                <input type="submit" className="submit-button" value="Submit" />
                {this.renderErrors()}
              </div>
            </form>
            <p> Have an account?</p>
              <Link to="/login" className="login-button">
                Log in
              </Link>
          </div>
        );
    }
}

export default withRouter(SignupForm);