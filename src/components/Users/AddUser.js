import { useState } from 'react'
import Wrapper from '../Helpers/Wrapper'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import styles from './AddUser.module.css'

const AddUser = props => {
	const [user, setUser] = useState({
		title: '',
		body: ''
	})

	const [error, setError] = useState({
		title: '',
		body: ''
	})

	const handleUsername = e => {
		setUser(user => {
			return { ...user, username: e.target.value }
		})
	}

	const handleAge = e => {
		setUser(user => {
			return { ...user, age: e.target.value }
		})
	}

	const addUserHandler = e => {
		e.preventDefault()
		if (
			e.target.username.value.trim().length === 0 ||
			e.target.age.value.length === 0
		) {
			setError({
				title: 'Invalid entry',
				body: 'Name and age cannot be empty!'
			})
			return
		}
		const newUser = {
			id: Date.now().toString(),
			...user
		}
		props.handleAddUser(newUser)
		setUser({
			username: '',
			age: ''
		})
		e.target.username.value = ''
		e.target.age.value = ''
	}

	const dismissError = () => {
		setError({
			title: '',
			body: ''
		})
	}

	return (
		<Wrapper>
			{error.title && (
				<ErrorModal
					title={error.title}
					body={error.body}
					dismissError={dismissError}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						id='username'
						onChange={handleUsername}
					/>
					<label htmlFor='age'>Age</label>
					<input
						type='number'
						name='age'
						id='age'
						min='18'
						max='100'
						onChange={handleAge}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	)
}

export default AddUser
