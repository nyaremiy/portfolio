import { Circles } from '../circles/Circles';
import s from './intro.module.css';

export const Intro = () => {
  return (
    <section className={s.intro}>
      <div className={`container ${s.wrapper}`}>
        <div className={s.info}>
          <div className={s.subtitle}>// Hello World</div>
          <h1 className={s.title}>I am Nazar Yaremiy, <br/>and I'm full stack<br/> developer. ^_^</h1>
        </div>
        <div className={s['intro-social']}>
          <ul className={s['social-list']}>
            <li className={s['social-item']}>
              <a href='https://www.linkedin.com/in/nazar-yaremii-4558b5252/' className={s['social-link']}>linkedin</a>
            </li>
            <li className={s['social-item']}>
              <a href='https://github.com/nyaremiy' className={s['social-link']}>github</a>
            </li>
            <li className={s['social-item']}>
              <a href='https://twitter.com/n_yaremiy' className={s['social-link']}>twitter</a>
            </li>
            <li className={s['social-item']}>
              <a href='https://instagram.com' className={s['social-link']}>instagram</a>
            </li>
          </ul>
        </div>
        <div className={s.arrow}>
          <a href="#about" className={s['arrow-link']}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
            <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"></path> 
          </svg>
          </a>
        </div>
        <Circles/>
      </div>
    </section>
  )
}
