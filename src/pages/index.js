import React, { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import Contact from 'components/contact'
import Map from '../sections/map'

export default function IndexPage() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <ThemeProvider theme={theme}>
        <Layout handleClickOpen={handleClickOpen}>
          <SEO title="Goose Software - Website Solutions" description='Website development service' />
          <Contact handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} />
          <Banner />
          <KeyFeature />
          {/* <ServiceSection /> */}
          {/* <Feature /> */}
          <CoreFeature />
          <WorkFlow />
          <Package />
          {/* <TeamSection /> */}
          {/* <TestimonialCard /> */}
          {/* <Map /> */}
        </Layout>
    </ThemeProvider>
  );
}
