
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './RepoMain.css'

function RepoMain() {
  const [username, setUsername] = useState()
  const [warning, setWarning] = useState()
  const [userData, setUserData] = useState([])
  const [repos, setRepos] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    if (username === undefined) return

    async function fetchData() {
      const user = await fetch(`https://api.github.com/users/${username}/repos`)
      const data = await user.json();

      if (data.length) {
        setRepos(data)
        setWarning("")
      }
      else {
        setWarning(`No account with the username ${username} has found`)
      }
    }

    async function fetchUserData() {
      const user = await fetch(`https://api.github.com/users/${username}`)
      const data = await user.json();

      setUserData(data)
    }

    fetchData()
    fetchUserData()

  }, [username])

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.user.value)
  }

<<<<<<< HEAD
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
=======
  const repositories = repos.map((repo, i) => {
    return (
      <div key={i}>
        <h2>{repo.name}</h2>
        <button onClick={() => navigate(`/${repo.id}`)}>Repo page</button>
>>>>>>> 2ce85b8af62dcda00aa4a12b131650f502c24593
      </div>
    );
  }

  return (
    <div className="RepoMain">
      <form onSubmit={handleSubmit}>
        <input name="user" required placeholder="Enter GitHub username" />
        <input type="submit" />
      </form>
      {warning}

<<<<<<< HEAD
      {repositories(repos)}
=======
      {Object.keys(userData).length && !warning ?
        <div className="user-info">
          <h1>{userData.login}</h1>
          <img src={userData.avatar_url} />
        </div>
        :
        null
      }
>>>>>>> 2ce85b8af62dcda00aa4a12b131650f502c24593

      <p>{userData.bio}</p>

      <div className="inner-repo">
        {repositories}
      </div>
    </div>
  );
}

export default RepoMain;
