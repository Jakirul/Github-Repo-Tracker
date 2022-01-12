import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './RepoData.css'

const RepoData = () => {

    const [data, setData] = useState([])
    const [repoName, setRepoName] = useState("")
    const [languageList, setLanguageList] = useState([])
    const {username, id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const repo = await fetch(`https://api.github.com/repositories/${id}`)
            const repoData = await repo.json();
            setData(repoData)
            setRepoName(repoData.name)
        }

        fetchData()
    }, [id])

    useEffect(() => {
        if (repoName === "") return
        async function fetchLanguages() {
            const language = await fetch(`https://api.github.com/repos/${username}/${repoName}/languages`)
            const data = await language.json();
            setLanguageList(data)
        }

        fetchLanguages()
    }, [repoName])

  
    const {name, html_url, description, forks, stargazers_count, watchers, created_at} = data
    const date = new Date(created_at).toDateString()

    const languageMap = Object.entries(languageList).map(([key, val]) => <p key={key}>{key}</p> )
   
    return (
        
        <div>
            <h1><a href={html_url} target="__blank">{name}</a></h1>
            
            <button className="back" onClick={() => navigate('/', {state: 'Jakirul'})} >Go back</button>
            <p className="description">{description}</p>
            <p className="date">Created at: <b>{date}</b></p>
            
            <hr />

            <div className="counts">
                <p>Forks &#127860;: {forks}</p>
                <p>Stargazers &#9734;: {stargazers_count}</p>
                <p>Watchers &#128065;: {watchers}</p>
            </div>

            <div className="languages">
                {languageMap}
            </div>
        </div>
    )
}

export default RepoData