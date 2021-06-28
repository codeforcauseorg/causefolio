import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles(() => ({
  root: {
    background: '#CCD2E3',
    borderRadius: '20px',
    padding: '2vw 6vw',
    fontFamily: 'Montserrat'
  },
  header: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '10px'
  },
  project: {
    background: 'white',
    borderRadius: '20px',
    padding: '20px',
    color: '#576886'
  },
  projectTech: {
    fontWeight: '700',
    fontSize: '17px',
    color: '#B20000'
  },
  projectTitle: {
    fontWeight: '800',
    fontSize: '28px',
    color: '#291757'
  },
  ratingStar: {
    marginRight: '3.5px',
    '& > div:not(:last-child)': {
      marginRight: '3.5px'
    }
  },
  starButton: {
    background: 'white',
    color: '#291757',
    fontWeight: '800',
    borderRadius: '10px',
    padding: '10px 18px',
    marginRight: '10px'
  },
  forkButton: {
    background: '#291757',
    color: 'white',
    fontWeight: '800',
    borderRadius: '10px',
    padding: '10px 18px'
  },
  contribText: {
    fontSize: '17px',
    fontWeight: '700'
  }
}));

function ProjectsCarousel() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 918,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Grid className={classes.header}>PROJECTS</Grid>
      <Grid className={classes.root}>
        <Slider {...settings}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Slider>
      </Grid>
    </>
  );
}

const ProjectCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid xs className={classes.project} style={{ margin: 'auto 8px' }}>
          <Typography className={classes.projectTech}>REACT</Typography>
          <Typography className={classes.projectTitle}>Causefolio</Typography>
          <Grid container style={{ padding: '2px' }}>
            <img
              className={classes.ratingStar}
              src=".././static/images/icons/rating_star_red.svg"
              alt="rating"
            />
            <img
              className={classes.ratingStar}
              src=".././static/images/icons/rating_star_red.svg"
              alt="rating"
            />
            <img
              className={classes.ratingStar}
              src=".././static/images/icons/rating_star_red.svg"
              alt="rating"
            />
            <img
              className={classes.ratingStar}
              src=".././static/images/icons/rating_star_red.svg"
              alt="rating"
            />
            <img
              className={classes.ratingStar}
              src=".././static/images/icons/rating_star_white.svg"
              alt="rating"
            />
          </Grid>
          <Typography style={{ padding: '5px 0px' }}>
            This is a simple react project which uses Firebase for backend and
            it is a demo pro...
          </Typography>
          <Grid container style={{ padding: '5px', alignItems: 'center' }}>
            <div style={{ display: 'flex', marginRight: '10px' }}>
              <img src=".././static/images/avatar-1.png" alt="contributor" />
              <img
                src=".././static/images/avatar-2.png"
                style={{ marginLeft: '-15px' }}
                alt="contributor"
              />
              <img
                src=".././static/images/avatar-3.png"
                style={{ marginLeft: '-15px' }}
                alt="contributor"
              />
            </div>
            <Grid className={classes.contribText}>4 Contributors</Grid>
          </Grid>
          <Grid
            container
            style={{ justifyContent: 'center', marginTop: '5px' }}
          >
            <Grid>
              <Button variant="outlined" className={classes.starButton}>
                <img
                  src=".././static/images/icons/star_button.svg"
                  style={{ marginRight: '5px' }}
                  alt="star"
                />
                Star
              </Button>
            </Grid>
            <Grid>
              <Button
                className={classes.forkButton}
                style={{ backgroundColor: '#291757' }}
              >
                <img
                  src=".././static/images/icons/fork_button.svg"
                  style={{ marginRight: '5px' }}
                  alt="fork"
                />
                Fork
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsCarousel;
