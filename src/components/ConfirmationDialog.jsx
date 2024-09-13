import React from "react";

const ConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">Are you sure you want to submit the survey?</h3>
        <div className="flex justify-between">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={onConfirm}>
            Confirm
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
