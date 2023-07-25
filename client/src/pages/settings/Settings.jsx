import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import girl from "../../img/autum.jpg"

export default function Settings(){
    return(
        <div className="settings">
        <div className="settingWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">update your account</span>
            <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form  className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img
                src={girl}
                alt=""
                />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                </label>
                <input type="file" id="finleInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="safak"/>
            <label>Email</label>
            <input type="email" placeholder="safak@gmail.com"/>
            <label>password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
        </form>
        </div>
        <div className="settingsSide"> <Sidebar/></div>
        </div>
        
    )
}