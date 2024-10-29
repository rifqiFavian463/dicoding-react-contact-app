import React from "react";
import { ContactItemBody } from "./ContactItemBody";
import { ContactItemImage } from "./ContactItemImage";

function ContactItem({ imageUrl, name, tag }: { imageUrl: string; name: string; tag: string }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
}

export { ContactItem };
