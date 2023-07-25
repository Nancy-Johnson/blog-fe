import "./header.css"
import flower from "../../img/autum.jpg"

export default function Header(){
    return(
        <div className='header'>
           <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
           </div>
           <img 
           className="headerImg"
            src={flower} 
            alt="no img"
            />
        </div>
    )
}