import "./login.css"

export default function Login() {
    return(
        <div className="login">
            <form className="loginForm">
                <label>Email</label>
                <input type="text" placeholder="Enter your email......" />
                <label>Password</label>
                <input type="text" placeholder="Enter your password......" />
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">Register</button>
            </form>
        </div>
    )
}