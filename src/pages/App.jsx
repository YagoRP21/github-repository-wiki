import { useEffect, useState } from 'react'
import '../styles/main.css'
import gitLogo from '../assets/icon-github.png'
import Input from '../components/Input'
import ItemRepo from '../components/RepoApi'
import Button from '../components/Button'
import { api } from '../services/api'

function App() {

  const[currentRepo, setCurrentRepo] = useState('')
  const[repo, setRepo] = useState([])

  const handdleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

      if(data.id){
        const repoExists = repo.find(repo => repo.id === data.id)

        if(!repoExists){
          setRepo(prev => [...prev, data])
          setCurrentRepo('')
          return
        }
      } 
    }
  
  const handdleRemoveRepo = (id) => {
    
    let newRepo = [...repo]
    newRepo = newRepo.filter(repo => repo.id ==! id)
    setRepo([...newRepo])

  }

  return (

    <div className="App base-container">
      <img src={gitLogo} className='w-16 h-16 mb-2' alt='GitHub logo'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handdleSearchRepo} />
      {repo.map( repos => <ItemRepo repo={repos} handdleRemoveRepo={handdleRemoveRepo} />)}
      
    </div>
)
}

export default App
