import React from "react";
import Repodetail from "./repodetail";
import ".././App.css"
const redirect = (url) => {
   
    window.open(url, "_blank");

}
const Card = props => {
    /*const [Repos, setRepos] = React.useState([]);
    React.useEffect(() => {
        
        const fetchData = async () => {
        await fetch(`https://serpapi.com/search.json?q=${props.name}&tbm=isch&ijn=0&api_key=cb7e967d3adf941003751e5a20a076586d48b1723facdef61de1632d60dff8c7
        `)
        .then(resp =>{
            if(resp.status >= 400){
                throw new Error('Bad response from server');
            }
            return resp.json();
        })
        .then(data => {
            setRepos(data.reverse());
        })
    }
        fetchData();
    }, []) */
    //onClick={() => redirect(props.svn_url)}
    return (
    <div  className="cardDetails" >
      <img alt="avatar" style={{ width: '200px' , height : '200px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.created_at}</div>
      </div>
    </div>
    )
    }
export default Card;