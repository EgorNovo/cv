import { FC } from 'react'
import Cover from '../../Components/Cover/Cover'
import { Avatar } from '../../Components/Avatar/Avatar'
import styles from './Introduce.module.scss'

const Introduce:FC = () => {
	return (
		<section className={styles.introduce}>
			<Cover />
			<Avatar fill={'white'} width='300' height='300'/>
		</section>
	)
}

export default Introduce