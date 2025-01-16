const CT = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-row relative px-1 py-4">
      {Icon && (
        <Icon
          className="text-primary h-20 w-20 mr-5 absolute inset-y-0 pl-2"
          stroke-width={1.5}
        />
      )}
      <div className="flex flex-col pl-24 pr-8">
        <h3 className="text-2xl font-bold font-header">{title}</h3>
        <p className="font-content">{description}</p>
      </div>
    </div>
  );
};

export default CT;
