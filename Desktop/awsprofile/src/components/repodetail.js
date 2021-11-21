import React from 'react'
import ReactMarkdown from 'react-markdown'
import {marked} from 'marked'
import ".././App.css"
//import ReactHtmlParser from 'react-html-parser';
 
function Repodetail(props) {
    const [Repos, setRepos] = React.useState(marked(" marked.parse('# Marked in the browser\n\nRendered by **marked**.')"));
    React.useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://raw.githubusercontent.com/siramkalyan/${props.name}/master/README.md`)
            .then(resp =>{  if(resp.status >= 400){
                console.log(resp.status)
            }   return resp.text()})
            .then(data => {
                setRepos(marked(data));
            })
        }
        fetchData();
        console.log(Repos);
    }, [])
    return (
        <div className="repoDetails">
            <div style={{backgroundColor : "#eeeeee"}}>
            <section >
      <article  dangerouslySetInnerHTML={{__html: Repos}}></article>
      <ReactMarkdown source={Repos} />
    </section>
            </div>
        </div>
    )
}

export default Repodetail
