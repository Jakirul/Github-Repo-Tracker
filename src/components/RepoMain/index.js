
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './RepoMain.css'

function RepoMain() {
  const [username, setUsername] = useState("github")
  const [warning, setWarning] = useState()
  const [userData, setUserData] = useState([])
  const [repos, setRepos] = useState([])
  const navigate = useNavigate()

  const state = useLocation()

  useEffect(() => {
    if (state.state == 'null' || !state.state) {
      setUsername("github")
    } else {
      setUsername(state.state);
    }
  }, [])


  useEffect(() => {
    async function fetchData() {
      const user = await fetch(`https://api.github.com/users/${username}/repos`)
      const data = await user.json();
      if (data.length) {
        setRepos(data)
        setWarning("")
      }
      else {
        setRepos([])
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

  const repositories = repos.map((repo, i) => {
    return (
      <div key={i}>
        <h2>{repo.name}</h2>
        <button onClick={() => navigate(`/${username}/${repo.id}`)}>Repo page</button>
      </div>
    );
  })

  console.log(repos)

  return (
    <div className="RepoMain">
      <form onSubmit={handleSubmit}>
        <input name="user" required placeholder="Enter GitHub username" />
        <input type="submit" />
      </form>
      {warning}

      {Object.keys(userData).length && !warning ?
        <div className="user-info">
          <h1>{userData.login}</h1>
          <img src={userData.avatar_url} alt='avatar' />
        </div>
        :
        null
      }

      <p>{userData.bio}</p>

      <div className="inner-repo">
        {repositories}
      </div>
    </div>
  );
}

export default RepoMain;
