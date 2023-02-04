import "./singlePost.css"
import tajmahal from "../../img/tajmahal.jpg" 

export default function SinglePost(){
        return(
            <div className="singlePost">
               <div className="singlePostWrapper">
                <img
                src={tajmahal}
                alt="nothing"
                className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                    <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Safak</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Unde eaque minima nihil sunt voluptatum. Quisquam cupiditate officiis sit. 
                     Dolores magni sapiente provident quo,
                     dolorem dignissimos? Cumque ullam ratione sint explicabo!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Unde eaque minima nihil sunt voluptatum. Quisquam cupiditate officiis sit. 
                     Dolores magni sapiente provident quo,
                     dolorem dignissimos? Cumque ullam ratione sint explicabo!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Unde eaque minima nihil sunt voluptatum. Quisquam cupiditate officiis sit. 
                     Dolores magni sapiente provident quo,
                     dolorem dignissimos? Cumque ullam ratione sint explicabo!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Unde eaque minima nihil sunt voluptatum. Quisquam cupiditate officiis sit. 
                     Dolores magni sapiente provident quo,
                     dolorem dignissimos? Cumque ullam ratione sint explicabo!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Unde eaque minima nihil sunt voluptatum. Quisquam cupiditate officiis sit. 
                     Dolores magni sapiente provident quo,
                     dolorem dignissimos? Cumque ullam ratione sint explicabo!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Unde eaque minima nihil sunt voluptatum. Quisquam cupiditate officiis sit. 
                     Dolores magni sapiente provident quo,
                     dolorem dignissimos? Cumque ullam ratione sint explicabo!
                </p>
              </div> 
            </div>
        ); 
}