import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import girl from "../../img/girl.jpeg"

export default function Settings(){
    return(
        <div className="settings">
        <div className="settingWrapper"></div>
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
                <i class="settingsPPIcon fa-solid fa-circle-user"></i>
                </label>
                <input type="file" id="finleInput" style={{display:"none"}}/>
            </div>
        </form>
        <Sidebar/>
        </div>
    )
}