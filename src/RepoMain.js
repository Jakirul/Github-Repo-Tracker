
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

  const repositories = (repos) => {
    return (
      <div>
        <ul>
          {repos.map((repo) => (
            <li>
              <h1>{repo.name}</h1>
              <h3>Number of forks: {repo.forks}</h3>
              <aside>
              <h3>{repo.stargazers_count}</h3>
              </aside>
              {console.log(repo)}
              <button onClick={() => navigate(`/${repo.id}`)}>Click here to go to repo page</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="user" />
        <input type="submit" />
      </form>

      {repositories(repos)}

    </div>
  );
}

export default RepoMain;
