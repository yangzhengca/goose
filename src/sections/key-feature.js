/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";
import FeatureCard from "components/feature-card";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Development",
    title: "Fast Development",
    text:
      "A company landing page website takes less than two weeks from development to deployment.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Modular Development",
    title: "Modular Development",
    text:
      "We have a variety of functional modules for you to choose. Also priovide customized development according to your needs.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "One-stop Service",
    title: "One-stop Service",
    text:
      "We provide a full set of solutions, from development, deployment to maintenance.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text:
      "Your needs are our priority. We provide 7 x 24 customer support for our valued custormers. ",
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant: "section.keyFeature" }}>
      <Container>
        <SectionHeader
          slogan="Your needs are our priority"
          title="Meet the feature of our product"
        />
        <Grid sx={styles.grid}>
          {data.map((item)=>(
            <FeatureCardColumn 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}

        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
