import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const text = (
  <p>
    Tech <span className="text-emerald-600">Stack</span>
  </p>
);

const Skills = () => {
  return (
    <section className="pt-20 align-element scroll-mt-20" id="skills">
      <SectionTitle text={text} />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
