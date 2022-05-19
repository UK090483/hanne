import { useAppContext } from "@components/AppContext";
import Grid, { GridItem } from "@components/generic/Grid";
import SanityImage from "@lib/SanityImage";

const Logos: React.FC = (props) => {
  const { data } = useAppContext();

  const items = data?.footer?.logos;
  return (
    <Grid className=" grid-cols-2 gap-12 ">
      {items &&
        items.map((i, index) => (
          <GridItem key={i._key} className={`relative  `}>
            {i.text && <div className=" text-sm pb-4 ">{i.text}</div>}
            <SanityImage image={i.image} width={500} />
          </GridItem>
        ))}
    </Grid>
  );
};

export default Logos;
