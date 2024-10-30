import React from "react";
import { ContactItemBody } from "./ContactItemBody";
import { ContactItemImage } from "./ContactItemImage";
import { DeleteButton } from "./DeleteButton";

function ContactItem({ imageUrl, name, tag, id, onDelete }: { imageUrl: string; name: string; tag: string; id: number; onDelete: (id: number) => void }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export { ContactItem };
