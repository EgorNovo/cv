import styles from './Cube.module.scss'
import clsx from 'clsx';

const Cube = () => {
	return (
	<div className={styles.container}>
		<div className={clsx(styles.back, styles.side)}></div>
		<div className={clsx(styles.left, styles.side)}></div>
		<div className={clsx(styles.right, styles.side)}></div>
		<div className={clsx(styles.top, styles.side)}></div>
		<div className={clsx(styles.bottom, styles.side)}></div>
		<div className={clsx(styles.front, styles.side)}></div>
	</div>
	)
}

export default Cube