import { PlugProps } from "@lib/SanityPageBuilder/lib/RichText";
import React from "react";

interface ITalePlugProps {
  url?: string | null;
  customWidth?: "1/4" | "1/3" | "1/2" | "2/3" | "full";
  items?: {
    rows?: { _key: string; cells: string[] }[];
  };
}
const firstRowIsHeader = true;
const TalePlug: React.FC<PlugProps<ITalePlugProps>> = (props) => {
  const { items } = props.node;

  if (!items || !items.rows) return null;

  const rows = firstRowIsHeader ? items.rows.slice(1) : items.rows;
  const headRow = firstRowIsHeader ? items.rows[0] : null;

  return (
    <table className="w-full table-fixed">
      {headRow && (
        <thead className="hidden md:table-header-group  ">
          <tr>
            {headRow.cells.map((cell, index) => (
              <th className="flex md:table-cell  " key={index}>
                {cell}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row) => (
          <tr key={row._key} className=" h-12 w-full  border-b-2 ">
            {row.cells.map((cell, index) => (
              <td
                className="flex flex-wrap md:table-cell justify-between  p-3"
                key={index}
              >
                <div className="md:hidden font-bold whitespace-nowrap">
                  {headRow?.cells[index]}
                </div>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TalePlug;
