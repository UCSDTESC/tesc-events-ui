import "../index.css";
import "../assets/css/LoginPage.css"

const LoginPage = (): JSX.Element => {

    return (
        <div className="container">
            <div className="main-content">
                    <div className='one-column outset'>
                        
                        <h5 className="login-text">tesc.events</h5>

                        <form>
                            <input type="text" placeholder="Email" className="text-input inset"/>
                            <br></br>
                            <input type="text" placeholder="Password" className="text-input inset"/>
                        </form>

                        <div className="Login-button">
                            <button className="button">Login</button>
                        </div>

                        <a href="" className="Register-Link">Register</a>

                    </div>
            </div>
        </div>
    )
}

export default LoginPage;