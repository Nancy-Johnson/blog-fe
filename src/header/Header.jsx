import "./header.css"

export default function Header(){
    return(
        <div className='header'>
           <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
           </div>
           <img className="headerImg" src="/home/nancy/blog/blog-fe/marguerite-729510__340.jpg" alt="no img"/>
        </div>
    )
}