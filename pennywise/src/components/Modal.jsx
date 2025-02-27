import { X } from "lucide-react";
import PropTypes from "prop-types";

const Modal = ({
  isOpen,
  onClose,
  title,
  message,
  buttonText,
  onButtonClick,
  buttonClassName = "w-full bg-secondary text-white font-medium rounded-md py-2 hover:bg-hover_secondary font-header",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-header font-semibold text-text">
            {title}
          </h2>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        <p className="text-text font-content mb-6">{message}</p>
        <button onClick={onButtonClick || onClose} className={buttonClassName}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  buttonClassName: PropTypes.string,
};

export default Modal;
