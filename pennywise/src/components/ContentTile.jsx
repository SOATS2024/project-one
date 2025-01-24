import PropTypes from "prop-types";

const ContentTile = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col items-center sm:items-start gap-4">
        {Icon && (
          <div className="text-primary dark:text-dark_primary rounded-lg">
            <Icon className="h-10 w-10" strokeWidth={1.5} />
          </div>
        )}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-white dark:text-gray-200">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

ContentTile.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export { ContentTile };
