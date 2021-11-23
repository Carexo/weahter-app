import React from "react";
import Hightlight from "../../molecules/hightlight/Hightlight";
import HightlightsProps from "./Hightlights.types";
import classes from "./Hightlights.module.scss";
import Typography from "../../atoms/typography/Typography";

const Hightlights: React.FC<HightlightsProps> = ({
  windStatus,
  humidity,
  visibility,
  airPressure,
}) => {
  return (
    <section className={classes.hightlights}>
      <Typography el={"p"} size={24} weight={700}>
        Today's Hightlights
      </Typography>
      <Hightlight title={"Wind Status"} value={windStatus} unit={"mph"} />
      <Hightlight title={"Humidity"} value={humidity} unit={"%"} />
      <Hightlight title={"Visibility"} value={visibility} unit={"miles"} />
      <Hightlight title={"Air Pressure"} value={airPressure} unit={"mb"} />
    </section>
  );
};

export default Hightlights;
