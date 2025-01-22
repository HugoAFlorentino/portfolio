import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-emerald-100 py-24 scroll-mt-20" id="home">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wide">
            I&apos;m <span className="text-emerald-600">Hugo</span>
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wider">
            Junior Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wider">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/HugoAFlorentino">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-emerald-600 hover:scale-110 transform transition duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-emerald-600 hover:scale-110 transform transition duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block pt-10">
          <img
            ref={ref}
            src={heroImg}
            alt="two persons and a phone"
            className={`h-80 lg:h-96 transition-all duration-500 transform ${
              inView
                ? 'scale-110 rotate-2 translate-x-2 translate-y-2 shadow-lg opacity-90'
                : 'opacity-0'
            }`}
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
