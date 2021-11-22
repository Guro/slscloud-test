import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'https://curly-rice-1ib2z.cloud.serverless.com/' : ''

const Loading = () => (
    <div>
        <p>Loading Users...</p>
    </div>
)



const App = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [newUserName, setNewUserName] = useState('');
  const [newUserCompany, setNewUserCompany] = useState('');
 
  const fetchAndSetUsers = async () => {
    try {
        setLoading(true)
        const response = await axios.get('/api/users')
        setUsers(response.data.users)
        setLoading(false)
    } catch (e) {
        console.log(e)
        setLoading(false)
    }
  }

  useEffect(() => {
    fetchAndSetUsers()
  }, [])


const Users = (props) => {
    const { users } = props
    return users.map((user) => {
        return (
            <div key={user.id}>
                <strong>{user.key}</strong>, 
                <span className={user.value.company}>Company: {` ${user.value.company}`} </span>
                <button onClick={async ()=>{
                setLoading(true)
                await axios.post('/api/users/delete',{
                    "name":user.key.replace('user:',''),
                })
                await fetchAndSetUsers();
            }}> Delete</button>
            </div>
        )
    })
}

  return (
    <div className='App' style={{ display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column', height: '100vh' }}>
        <img height={150} width={150} src={logo} className="App-logo" alt="logo" style={{ marginBottom: -50, marginTop: -50 }} />
        <h1>
            Serverless Cloud, API, DataStore + react.js:
        </h1>
        <div>
        {loading
            ? <Loading/>
            : <Users users={users} />
        }
        </div>
        <div>
            <hr />
            <h2>Add User</h2>
            name: <input type="text" onChange={(e)=>{
                setNewUserName(e.target.value)
            }} /> <br/>
            Company: <input type="text" onChange={(e)=>{
                setNewUserCompany(e.target.value)
            }}/> <br/>
            <button onClick={async ()=>{
                await axios.post('/api/users',{
                    "name":newUserName,
                    "data":{
                        "company":newUserCompany
                    }
                })
                await fetchAndSetUsers();
            }}>Add User</button>
        </div>
        
    </div>
  );
}

export default App;
