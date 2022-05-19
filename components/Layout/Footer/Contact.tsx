import { useAppContext } from "@components/AppContext/AppContext";
import Icon, { IconProps } from "@components/Icon";

import React from "react";

const Contact: React.FunctionComponent = (props) => {
  const { data } = useAppContext();

  return (
    <div className="flex flex-wrap pb-2 md:flex-nowrap text-white  ">
      <div className="w-full ">
        <p className="pb-6 font-bold">Kontakt</p>

        <ContactItem text={data?.footer?.contact?.kontaktTel} type="phone" />
        <ContactItem text={data?.footer?.contact?.kontaktMail} type="email" />
        <ContactItem
          text={data?.footer?.contact?.kontaktAdress}
          type="address"
        />
      </div>
    </div>
  );
};

export default Contact;

type ContactItemProps = {
  type?: "phone" | "email" | "address";
  text?: string | null;
};

const ContactItem: React.FC<ContactItemProps> = (props) => {
  const { type, text } = props;
  const icon = type === "address" ? "map" : type;

  return (
    <div className="flex items-center pb-4">
      {icon && <Icon size="s" icon={icon} className="mr-6" />}
      {text || " "}
    </div>
  );
};
