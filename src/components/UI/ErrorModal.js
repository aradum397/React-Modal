import Card from './Card'
import Button from './Button'
import ReactDOM from 'react-dom'
import styles from './ErrorModal.module.css'

const Backdrop = props => {
	return <div className={styles.backdrop} />
}

const ModalOverlay = props => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.body}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.dismissError}>Okay</Button>
			</footer>
		</Card>
	)
}

const ErrorModal = props => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					body={props.body}
					dismissError={props.dismissError}
				/>,
				document.getElementById('modal-root')
			)}
		</>
	)
}

export default ErrorModal
