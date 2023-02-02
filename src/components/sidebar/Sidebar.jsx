import "./sidebar.css"
import flower from "../../img/chef.jpg"

export default function Sidebar(){
    return(
        <div  className="Sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                className="sidebarImg"
                 src={flower}
                alt="nothing"
                />
                <p>hello welcome to our website let's check it out here are more details you want to know more</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">life</li>
                    <li className="sidebarListItem">music</li>
                    <li className="sidebarListItem">style</li>
                    <li className="sidebarListItem">sport</li>
                    <li className="sidebarListItem">tech</li>
                    <li className="sidebarListItem">cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
            </div>
        </div>
    );
}
