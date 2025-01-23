import propTypes from "prop-types";

const ContentTile = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row relative p-4 w-full">
      {Icon && (
        <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
          <Icon
            className="text-primary h-16 w-16 sm:h-20 sm:w-20"
            strokeWidth={1.5}
          />
        </div>
      )}
      <div className="flex flex-col sm:pl-6 space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold font-header text-center sm:text-left">
          {title}
        </h3>
        <p className="font-content text-center sm:text-left">{description}</p>
      </div>
    </div>
  );
};

ContentTile.propTypes = {
  icon: propTypes.elementType,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default ContentTile;
