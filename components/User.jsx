import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "./Loading"
// this User.jsx component is rendered in path <Route path = "/user/:uname"element = {<User toRepos={toRepos} fetchUser={fetchUser} user={user} repos={repos} loading={loading}/>}/>
// if we click on click profile tab then we go the page of this path and in this path the name of user is there 
function User({ toRepos, fetchUser, user, repos, loading }) {
    const { uname } = useParams() // useParams are able to extract the value :uname from the user path 
    useEffect(() => { // we are using useeffect for this functions bcoz when the page of this path loads (mounts) this fething of data should be done
        toRepos(uname) // toReops function fetch data of repos of a provided user(uname)
        fetchUser(uname) // // fetchUser function fetch data of user image,other info of a provided user(uname)
    }, [])
    return (
        <>
            {loading && <Loading />}
            {!loading && <div className="container">
                <div className="card">
                    <img src={user.avatar_url} style={{ width: "100%" }} />
                    <h1>{user.name}</h1>
                    <div className="info">
                        <p>{user.bio}</p>
                    </div>
                    <div className="description">
                        {user.twitter_username && <p>
                            Twitter : <span><a href={`https://twitter.com/${user.twitter_username}`} target="_blank"> <i className="fa-brands fa-twitter">{" " + user.twitter_username}</i> </a></span>
                        </p>}
                        {user.blog && <p>
                            Website : <span> <a href={`https://${user.blog}`} target="_blank"> <i className="fa-solid fa-blog"> {user.blog} </i> </a> </span>
                        </p>}

                        {user.location && <p>
                            Location : <span><i className="fa-solid fa-location-dot">{user.location}</i>
                            </span>
                        </p>}

                        <p>
                            Public Repos: <span>  <i className="fa-regular fa-flag"> </i> {user.public_repos}</span>
                        </p>
                        <p>
                            Public Gists: <span><i className="fa-solid fa-flag"></i> {user.public_gists} </span>
                        </p>
                        <p>
                            Followers:  <span> <i className="fa-solid fa-person"></i> {user.followers}</span>
                        </p>
                        <p>
                            Following: <span> <i className="fa-solid fa-person"> </i> {user.following} </span>
                        </p>
                    </div>
                </div>
                <div className="card2">
                    <ol>
                        {repos.map((ele,i)=>{
                            return (
                                <div key={i}>
                                    <h1>{ele.name}</h1>
                                    <p>{ele.description}</p>
                                    <a href={ele.html_url} target="_blank"> Github Repo {i+1}</a>
                                </div>
                            )
                        })}
                    </ol>

                </div>
            </div>}
        </>
    )
}

export default User