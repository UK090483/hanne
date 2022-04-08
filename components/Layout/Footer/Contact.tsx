import { useAppContext } from "@components/AppContext/AppContext";
import Icon from "@components/Icon";

import React from "react";

const Contact: React.FunctionComponent = (props) => {
  const { data } = useAppContext();

  return (
    <div className="flex flex-wrap pb-24 md:flex-nowrap text-white">
      <div className="w-full ">
        <p className="pb-6 font-bold">Kontakt</p>
        <div className="flex items-center pb-6">
          <Icon size="s" icon="phone" className="mr-6" />
          {data?.footer?.contact?.kontaktTel || " "}
        </div>

        <div className="flex items-center pb-6">
          <Icon size="s" icon="email" className="mr-6" />{" "}
          {data?.footer?.contact?.kontaktMail || " "}
        </div>
        <div className="flex items-center pb-6 whitespace-pre">
          <Icon size="s" icon="map" className="mr-6" />{" "}
          {data?.footer?.contact?.kontaktAdress || " "}
        </div>
      </div>
      {/* <div className="w-full">
        <Icon size="l" icon="facebook" />
      </div> */}
    </div>
  );
};

export default Contact;
