import "./post.css"
import feather from "../../img/feather.jpeg"

export default function post(){
    return(
        <div className="post">
            <img 
            className="postImg"
            src={feather}
            alt="nothing"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod similique voluptatem optio numquam ratione dolorum id eaque, 
            placeat pariatur adipisci sit odit, voluptatum quia ea nam,
             commodi ullam quas! Corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod similique voluptatem optio numquam ratione dolorum id eaque, 
            placeat pariatur adipisci sit odit, voluptatum quia ea nam,
             commodi ullam quas! CorruptiLorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod similique voluptatem optio numquam ratione dolorum id eaque, 
            placeat pariatur adipisci sit odit, voluptatum quia ea nam,
             commodi ullam quas! Corrupti</p>
        </div>
    )
}
