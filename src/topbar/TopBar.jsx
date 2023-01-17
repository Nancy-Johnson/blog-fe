import "./topbar.css"

export default function TopBar(){
    return (
        <div className="top">
           <div className="topLeft">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
           <i class="fa-brands fa-square-pinterest"></i>
           <i class="fa-brands fa-square-instagram"></i>
            </div>
           <div className="topCenter">
            <ul ClassName="toplist">
                <li ClassName="topListItem">HOME</li>
                <li ClassName="topListItem">ABOUT</li>
                <li ClassName="topListItem">CONTACT</li>
                <li ClassName="topListItem">WRITE</li>
                <li ClassName="topListItem">LOGOUT</li>
            </ul>
           
           </div>
           <div className="topRight">
           
           </div>
        </div>
    )
}
