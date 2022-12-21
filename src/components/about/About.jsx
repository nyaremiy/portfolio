import s from './about.module.css';
import me from './../../assets/img/me.jpg';

export const About = () => {
  return (
    <section className={s.about} id='about'>
      <div className={`container ${s.wrapper}`}>
        <div className={s.info}>
          <div className='subtitle'>{`//`} about</div>
          <div className={s.text}>
            Developer, Artist, and Lifelong Learner with a passion for putting
            people first. I have a background in fine art, psychology,
            biopharmaceuticals, and crowdfunding, which have equipped me with
            creativity, forward planning, and thoughtful attention to people's
            needs.<br/><br/>I'm an advocate for inclusion and diversity, and I'm
            dedicated to empowering and amplifying underserved voices. <br/><br/>You can
            find me at the local dog cafe with my two rescue pups, Coco and
            Dottie.
          </div>
        </div>
        <div className={s['photo-block']}>
          <img src={me} alt='me' className={s.photo} />
        </div>
      </div>
    </section>
  );
};
