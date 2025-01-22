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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            labore, quo beatae animi doloribus odio aut magnam a voluptatem
            debitis numquam? Explicabo molestias quas minima sint adipisci unde,
            possimus iusto?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
