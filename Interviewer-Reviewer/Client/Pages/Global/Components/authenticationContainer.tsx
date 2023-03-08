const AuthContainer = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-card-header">
                    <h1 className="auth-card-header-text">
                        Interviewer Reviewer
                    </h1>
                </div>
                <div className="auth-card-body">
                    <div className="auth-card-body-content">
                        <div className="auth-card-body-content-header">
                            <h1 className="auth-card-body-content-header-text">
                                Sign Up
                            </h1>
                        </div>
                        <div className="auth-card-body-content-body">
                            <form autoComplete="" className="auth-card-body-content-body-form">
                                <div className="auth-card-body-content-body-form-group">
                                    <label htmlFor="email" className="auth-card-body-content-body-form-group-label">
                                        Email
                                    </label>
                                    <input type="email" name="email" id="email" className="auth-card-body-content-body-form-group-input" />
                                </div>
                                <div className="auth-card-body-content-body-form-group">
                                    <label htmlFor="password" className="auth-card-body-content-body-form-group-label">
                                        Password
                                    </label>
                                    <input required type="password" name="password" id="password" className="auth-card-body-content-body-form-group-input" />
                                </div>
                                <div className="auth-card-body-content-body-form-group">
                                    <label htmlFor="confirmPassword" className="auth-card-body-content-body-form-group-label">
                                        Confirm Password
                                    </label>
                                    <input required type="password" name="confirmPassword" id="confirmPassword" className="auth-card-body-content-body-form-group-input" />
                                </div>
                                <div className="auth-card-body-content-body-form-group">
                                    <button className="auth-card-body-content-body-form-group-button">
                                        Sign Up
                                    </button>
                                    <button className="auth-card-body-content-form-group-button">
                                        Sign Up with Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="auth-card-footer">
                    <div className="auth-card-footer-content">
                        <div className="auth-card-footer-content-text">
                            <p>
                                Already have an account?
                            </p>
                        </div>
                        <div className="auth-card-footer-content-button">
                            <a href="." className="auth-card-footer-content-button-link">
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthContainer;