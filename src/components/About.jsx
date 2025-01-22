import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20 scroll-mt-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          alt="image of two persons with a computer "
          className="w-full h-64"
        />
        <article>
          <SectionTitle text="code and games" />
          <p className="text-slate-600 mt-8 leading-loose">
            With an unwavering passion for coding, I find joy in transforming
            complex problems into elegant, functional solutions. The thrill of
            building interactive applications mirrors my love for games—both
            involve creativity, strategy, and a constant drive to level up.
            Games have fueled my curiosity for technology, inspiring me to
            create immersive experiences and explore the limitless possibilities
            of code.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
