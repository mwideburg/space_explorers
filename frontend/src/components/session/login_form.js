
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "./form.scss"
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/story');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        
        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
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
    demoSubmit() {
        

        let user = {
            email: "hello@gmail.com",
            password: "heynick"
        };

        this.props.login(user);
    }

    render() {
        
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-center">
                        <input type="text"
                            className="input-field"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="password"
                            className="input-field"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="submit" className="submit-button" value="Submit" />
                        {this.renderErrors()}
                
                    </div>
                </form>
                <p>  Don't have an account </p>
                <Link to="/signup" className="signup-button">
                 Sign Up
                </Link>
                or use
                <button className="submit-button" onClick={() => this.demoSubmit()}> Demo User </button>

            </div>
        );
    }
}

export default withRouter(LoginForm);