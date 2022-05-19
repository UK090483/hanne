import Button from "./Button";
import Spacer from "./Spacer";
import ImagPlug from "./ImagePlug";
import ImageGallery from "./ImageGallery/index";
import PlayerPlug from "./PlayerPlug";
import AutoGallery from "./AutoGallery";
import SeoText from "./SeoText";
import Table from "./Table";
import Embed from "./Embed";

const Plugs = [
  Embed,
  Table,
  Button,
  Spacer,
  ImagPlug,
  ...ImageGallery,
  ...AutoGallery,
  PlayerPlug,
  SeoText,
];

export default Plugs;
