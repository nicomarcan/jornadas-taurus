import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../logo.png";
import Banner from "../banner.png";

import VonFranken from "../logosPrincipal/vonfrank.png";
import Over from "../logosPrincipal/over.png";
import Zoovet from "../logosPrincipal/zoovet.png";
import ProAgro from "../logosPrincipal/proagro.png";


import Calier from "../logosPrincipal/calier.jpg";
import Vetanco from "../logosPrincipal/vetanco.png";
import AllVet from "../logosPrincipal/allvet.jpg";
import Ciale from "../logosPrincipal/ciale.png";
import CDV from "../logosPrincipal/cdv.png";
import Phibro from "../logosPrincipal/phibro.png";
import Arsa from "../logosPrincipal/arsa.png";
import Zoetis from "../logosPrincipal/zoetis.png";

import Programa from "../programa.png";
import Disertantes from "../disertantes.png";

const useStyles = makeStyles({
  root: {
    background: '#f29175 ',
    margin: '0px 0px',
    minWidth: 275,
    borderRadius: 0,
    marginTop: '-6px',
    paddingTop: '6px',
  },
  title: {
    fontFamily: 'Oswald',
    color: 'black',
    fontSize: '18px',
    paddingLeft: '45px',
    paddingRight: '45px',
    textAlign: 'center',
    lineHeight: '25px'
  },
  content: {
    paddingTop: '12px !important',
    paddingBottom: '2px !important',
  },
  inscription: {
    marginTop: '25px',
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    width: '100%',
    height: '81px',
    position: 'absolute',
    left: 0
  },
  sponsors: {
    marginLeft: '50px',
    width: '390px',
    margin: '0px 0px',
    borderRadius: 0,
  },
  sponsor: {
    width: '170px', marginTop: '15px'
  },
  sponsorsSec: {
    background: '#add8e6 ',
    margin: '0px 0px',
    minWidth: 275,
    borderRadius: 0,
    marginTop: '20px',
    paddingTop: '6px',
    paddingBottom: '10px'
  },
  sponsorSec: {
    background: 'white',
    marginLeft: '25px',
    width: '130px',
    height: '125px',
    borderRadius: '120px',
    textAlign: 'center',
    '&:hover': {
      cursor: 'pointer'
    }

  },
  sponsorSecImg: {
    width: '110px'
  },
  schedule: {
    width: '100%',
  },
  speakers: {
    width: '100%',
  },
  sponsorsText: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: '9px',
    fontWeight: 'bold'
  },
  sponsorsSecTitle: {
    width: '125px',
    fontFamily: 'Oswald',
    fontSize: '20px',
    fontWeight: 'bold',
    borderBottom: 'solid rgba(0, 0, 0, .3) 1px',
    marginBottom: '15px'
  },
  sponsorsTitle: {
    textAlign: 'center',
    fontSize: '38px',
    fontFamily: 'Oswald',
    fontWeight: 'bold',
    color: '#585858',
    paddingBottom: '7px',
    width: '237px',
    lineHeight: '36px',
    borderBottom: 'solid rgb(88,88,88,0.9) 1px',
    marginLeft: '62px',
    marginBottom: 0
  },
  sponsorsDivPrincipal: {
    borderBottom: 'solid rgb(88,88,88,0.9) 1px',
    textAlign: 'center',
    width: '237px',
    marginLeft: '63px',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

const taurusPage = () => {
  window.location.href = 'https://www.revistataurus.com.ar/';
}

const goToSponsor = (sponsor) => {
  window.location.href = './#/sponsors/' + sponsor;
}

const goToRef = (ref) => {
  ref.current.scrollIntoView();
};

const Home = () => {
  const classes = useStyles();

  const schedule = useRef(null)
  const speakers = useRef(null)
  const sponsorsRef = useRef(null)

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ color: 'black', backgroundColor: '#f29175' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            <img style={{ width: '170px', marginTop: '15px' }} src={Logo}></img>
          </Typography>
          <Button color="inherit" onClick={() => goToRef(sponsorsRef)}><strong>Patrocinantes</strong></Button>
          <Button color="inherit" onClick={() => goToRef(schedule)}><strong>Programa</strong></Button>
          <Button color="inherit" onClick={() => goToRef(speakers)}><strong>Disertantes</strong></Button>
          <Button color="inherit" onClick={taurusPage}><strong>Web Taurus</strong></Button>
        </Toolbar>
      </AppBar>
      <div >
        <img style={{ width: '100%' }} src={Banner}></img>
      </div>
      <Card className={classes.root} variant="outlined" >
        <CardContent className={classes.content}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Nacieron en 2002 como complemento de la revista. Dirigidas a profesionales que trabajan en reproducción bovina y estudiantes de carreras afines. Participan destacados especialistas del país y del exterior, quienes abordan aquellos temas que son clave para el trabajo diario como asesores, siempre teniendo como eje el rol profesional. Cuentan con el apoyo de las principales empresas del sector.
          </Typography>
        </CardContent>
      </Card>

      <Typography className={classes.inscription} color="textSecondary" gutterBottom>
        <a href="https://us02web.zoom.us/webinar/register/WN_XrQ33tcCTZCsTNVAXXuJjg"> Inscríbase aquí</a>
      </Typography>


      <div style={{  marginTop: '20px', display: 'flex', alignItems: 'center',  justifyContent: 'center' }} ref={sponsorsRef}>
        <iframe style={{ marginLeft: '35px' , marginTop: '40px'}} align="middle" width="800" height="425" src="https://www.youtube.com/embed/WMq9kWEm2qM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <Card className={classes.sponsors} style={{border:'none', boxShadow:'none'}} >
          <CardContent className={classes.content}>
            <Typography gutterBottom className={classes.sponsorsTitle}>
              PATROCINANTES PRINCIPALES
          </Typography>
            <div className={classes.sponsorsDivPrincipal} onClick={() => goToSponsor('vonfranken')}>
              <img className={classes.sponsor} src={VonFranken}></img>
            </div>
            <div className={classes.sponsorsDivPrincipal} onClick={() => goToSponsor('over')}>
              <img className={classes.sponsor} style={{ width: '120px', marginTop: '20px', marginBottom: '15px' }} src={Over}></img>
            </div>
            <div className={classes.sponsorsDivPrincipal} onClick={() => goToSponsor('zoovet')}>
              <img className={classes.sponsor} src={Zoovet} style={{marginTop: '0px'}}></img>
            </div>
            <div className={classes.sponsorsDivPrincipal} onClick={() => goToSponsor('proagro')}>
              <img style={{ width: '120px', marginTop:'5px'  }} className={classes.sponsor} src={ProAgro}></img>
            </div>

          </CardContent>
        </Card>
      </div>


      <Card className={classes.sponsorsSec} variant="outlined" >
        <CardContent className={classes.content} style={{textAlign:'center'}}>
          <Typography gutterBottom className={classes.sponsorsSecTitle}>
            PATROCINANTES
          </Typography>
          <div style={{ display: 'inline-flex' }}>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('calier')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', left: '3px', top: '28px', width: '90px' }} src={Calier}></img>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('vetanco')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', width: '140px', right: '4px', top: '22px', paddingTop: '10px', paddingBottom: '3px' }} src={Vetanco}></img>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('allvet')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '41px', left: '4px', width:'115px' }} src={AllVet}></img>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('ciale')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '39px' }} src={Ciale}></img>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('cdv')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '39px' }} src={CDV}></img>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('phibro')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '41px' }} src={Phibro}></img>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('arsa')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '35px', width: '150px' }} src={Arsa}></img>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('zoetis')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '2px', left: '3px' }} src={Zoetis}></img>
            </div>
          </div>
        </CardContent>
      </Card>

      <img className={classes.schedule} ref={schedule} src={Programa}></img>
      <img className={classes.speakers} ref={speakers} src={Disertantes}></img>


      <Typography className={classes.footer} color="textSecondary" gutterBottom>
        <a target="_blank" style={{ textDecoration: 'none', color: 'black', fontSize: 18, display: 'block' }} href="mailto:edicionestaurus@gmail.com"> edicionestaurus@gmail.com</a>
        <a target="_blank" style={{ textDecoration: 'none', color: 'black', fontSize: 18, display: 'block' }} href="https://www.revistataurus.com.ar/"> www.revistataurus.com.ar</a>
      </Typography>


    </div>
  )
}

export default Home;