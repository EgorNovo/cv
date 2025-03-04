import Cube from '../../Components/Cube/Cube'
import styles from './About.module.scss'

const About = () => {
  return (
    <section className={styles.about} id='about'>
			<Cube />
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
        necessitatibus assumenda deleniti! Nemo distinctio vitae asperiores quo
        velit officia quod aut natus et voluptatem, consequuntur vel eligendi
        laudantium minus animi molestiae voluptas unde odit magnam reiciendis
        deserunt voluptates sapiente amet! Quia explicabo doloremque similique
        aperiam, ratione amet nisi unde natus.
      </article>
    </section>
  );
};

export default About;
