import { FC } from 'react'
import styles from './Cover.module.scss'

//const h1 = ['hi','my name is Egor']

const Cover:FC = () => {
	return (
		<div className={styles.cover}>
			<h1>
				<span className={styles.effect}>Hi</span><br/>
				my name is <span className={styles.effect}>Egor</span><br/>
				a frontend <span className={styles.effect}>&lt;developer /&gt;</span>
			</h1>
		</div>
	)
}

export default Cover