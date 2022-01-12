import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const RepoData = () => {

    const [data, setData] = useState([])
    const {id} = useParams();

    useEffect(() => {
        async function fetchData() {
            const repo = await fetch(`https://api.github.com/repositories/${id}`)
            const repoData = await repo.json();
            setData(repoData)
        }

        fetchData()
    }, [id])


    return (
        <div>
            <h1>Repo data</h1>
            <h2>{data.name}</h2>
        </div>
    )
}

export default RepoData