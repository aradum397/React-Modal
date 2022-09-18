import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [users, setUsers] = useState([])
  const handleAddUser = (newUser) => {
    setUsers((users) => [...users, newUser])
  }
  return (
    <div className="App">
      <AddUser handleAddUser={handleAddUser} />
      <UsersList users={users} />
    </div>
  )
}

export default App