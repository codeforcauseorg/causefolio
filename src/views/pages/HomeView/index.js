import { makeStyles } from '@material-ui/core';
import React from 'react';
import Page from 'src/components/Page';
import { experience, mentors } from '../../../data/HomeViewData/HomeViewData';
import Footer from '../common/Footer';
import Team from './Team';
import CTA from './CTA';
import Events from './Events';
import Hero from './Hero';
import MentorExperience from './MentorExperience';


const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Code for Cause">
      <Hero />
      <MentorExperience experience={experience} />
      <Events id="events" />
      <Team id="team" mentors={mentors} />
      <CTA id="actions" />
      <Footer />
    </Page>
  );
}

export default HomeView;
