import "./write.css"

export default function Write(){
    return(
        <div className="write">
          <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileinput">  
                <i class="fa-solid fa-plus"></i>  
                </label>
                <input type="File" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea
                placeholder="Tell your story......."
                type="text"
                className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">publish</button>
          </form>
        </div>
    )
}