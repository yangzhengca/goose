import React from "react";

import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

import FeatureThumb from "assets/core-feature.png";
import shapePattern from "assets/shape-pattern2.png";

const Map = () => {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle='Find us'
            title='Location'
            // description={data.description}
            // btnName={data.btnName}
            // btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Vyo5Tp0EhOhvrIHTmN0qo1yYRTPsrK6p"
            width="540"
            height="360"
          ></iframe>
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Map;

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  image: {
    borderRadius: "10px",
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
