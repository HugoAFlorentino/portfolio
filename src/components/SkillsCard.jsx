const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="group relative flex flex-col items-center space-y-2 transition-all duration-300">
      <span className="transition-all duration-300 group-hover:scale-110 group-hover:translate-x-2 group-hover:animate-bounce">
        {icon}
      </span>

      <h4 className="mt-6 font-bold">{title}</h4>

      <p className="mt-2 text-slate-500 md:opacity-0 md:invisible lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        {text}
      </p>
    </article>
  );
};

export default SkillsCard;
