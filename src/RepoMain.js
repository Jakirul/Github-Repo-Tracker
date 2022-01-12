
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function RepoMain() {
  const [username, setUsername] = useState()
  const [repos, setRepos] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    async function fetchData() {
      const user = await fetch(`https://api.github.com/users/${username}/repos`)
      const data = await user.json();
      setRepos(data)
    }
    
    fetchData()

  }, [username])

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.user.value)
  }

  const repositories = repos.map(repo => {
    return (
      <div>
        <h1>{repo.name}</h1>
        <button onClick={() => navigate(`/${repo.id}`)}>Click here to go to repo page</button>
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="user" />
        <input type="submit" />
      </form>

      {repositories}

    </div>
  );
}

export default RepoMain;
