import React from "react";

const Snackbar = ({ message, open, onClose, type = "error" }) => {
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded shadow-lg text-white ${
        type === "error" ? "bg-red-600" : "bg-green-600"
      } animate-fade-in`}
      style={{ minWidth: 200, textAlign: "center" }}
    >
      {message}
    </div>
  );
};

export default Snackbar;
