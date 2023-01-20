import "./topbar.css"

export default function TopBar(){
    return (
        <div className="top">
           <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
           <i className="topIcon fa-brands fa-square-pinterest"></i>
           <i className="topIcon fa-brands fa-square-instagram"></i>
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
            <img
                ClassName="topImg"
                src="C:\Users\NANCY JOHNSON\Downloads\marguerite-729510__340.jpg"
                alt="not working "
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
           
           </div>
        </div>
    )
}
