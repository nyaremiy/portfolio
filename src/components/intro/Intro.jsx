import s from './intro.module.css';

export const Intro = () => {
  return (
    <div className={s.intro}>
      <div className={`container ${s.wrapper}`}>
        <div className={s.subtitle}>// Hello World</div>
        <h1 className={s.title}>I am Nazar Yaremiy, <br/>and I'm full stack<br/> developer. ^_^</h1>
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
      </div>
    </div>
  )
}
