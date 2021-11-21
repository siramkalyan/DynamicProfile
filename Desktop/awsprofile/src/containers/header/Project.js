/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../../components/Card';
import Repodetail from '../../components/repodetail';
function Project() {
    const [Repos, setRepos] = React.useState([]);
    const [Click, setClick] = React.useState("")
    const [repoName, setrepoName] = React.useState("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => {
        
        const fetchData = async () => {
        await fetch('https://api.github.com/users/siramkalyan/repos?per_page=100')
        .then(resp =>{
            if(resp.status >= 400){
                throw new Error('Bad response from server');
            }
            return resp.json();
        })
        .then(data => {
            setRepos(data);
        })
    }
        fetchData();
    }, [])
    return (
    <div style={{width : "100%" , display : 'flex' , flexDirection : 'row', flexWrap : 'wrap' }}>
           {Repos.map(repo => ( 
               <div>
               <div onClick={() => setClick(repo.name)}>
               <Card key={repo.id} name={repo.name} avatar_url={repo.owner.avatar_url} created_at={repo.created_at} svn_url={repo.svn_url}  />
               </div>
               <div>
               {Click && Click === repo.name && <Repodetail name={repo.name}/>}
               </div>
               </div>
              
           ))}
    </div>
    )
}

export default Project
