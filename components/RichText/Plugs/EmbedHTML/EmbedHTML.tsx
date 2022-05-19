import type { PlugProps } from "@lib/SanityPageBuilder/lib/RichText";
import React, { useEffect, useState } from "react";

interface IEmbedHTMLProps {
  html?: string | null;
}

const EmbedHTML: React.FC<PlugProps<IEmbedHTMLProps>> = (props) => {
  const { html } = props.node;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, [setReady]);
  if (!html) return null;

  return <>{ready && <div dangerouslySetInnerHTML={{ __html: html }} />}</>;
};

export default EmbedHTML;
