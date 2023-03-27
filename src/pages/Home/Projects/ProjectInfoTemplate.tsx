type Props = {
  h2: string;
};

const ProjectInfoTemplate = ({ h2 }: Props) => {
  return (
    <section
      className="relative mx-auto mt-60 flex  w-4/6
  flex-col 
  justify-between sm:flex-row"
    >
      <h2 className="text-color-white">{h2}</h2>
    </section>
  );
};

export default ProjectInfoTemplate;
