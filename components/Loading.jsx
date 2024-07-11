import loading from "./loading.gif"

function Loading(){
    return(
        <center>
            <img src={loading} alt="Loading GIF" />
        </center>
    )
}

export default Loading

// we will use this loading when home page reloads i.e., when fetching users