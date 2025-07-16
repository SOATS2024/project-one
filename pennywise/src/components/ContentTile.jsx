import PropTypes from "prop-types";

const ContentTile = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-4 md:p-6 bg-background dark:bg-dark_background bg-opacity-50 dark:bg-opacity-50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center sm:items-start gap-4">
        {Icon && (
          <div className="text-secondary dark:text-dark_secondary rounded-lg p-2 bg-white dark:bg-slate-800 shadow-sm">
            <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.5} />
          </div>
        )}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-dark_primary mb-2">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{description}</p>
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
