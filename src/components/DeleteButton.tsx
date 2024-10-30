import React from "react";

function DeleteButton({ id, onDelete }: { id: number; onDelete: (id: number) => void }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export { DeleteButton };
