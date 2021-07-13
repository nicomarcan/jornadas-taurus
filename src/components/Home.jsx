import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../logo.png";
import Banner from "../banner.png";
import Click from "../click.png";

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
    width: '150px',
    fontFamily: 'Oswald',
    fontSize: '20px',
    fontWeight: 'bold',
    borderBottom: 'solid rgba(0, 0, 0, .3) 1px',
    marginBottom: '15px',
    marginLeft: '3%'
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
  ,
  sponsorsTitleMob: {
    textAlign: 'center',
    fontSize: '38px',
    fontFamily: 'Oswald',
    fontWeight: 'bold',
    color: '#585858',
    paddingBottom: '7px',
    lineHeight: '36px',
    borderBottom: 'solid rgb(88,88,88,0.9) 1px',
    marginBottom: 0
  },

  sponsorsDivPrincipalMob: {
    borderBottom: 'solid rgb(88,88,88,0.9) 1px',
    textAlign: 'center',
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

  const resolution = window.innerWidth;
  const isMobile = resolution >= 320 && resolution <= 480;

  const zoomEmbed = 'https://www.youtube.com/embed/VbuzWhZtuoE'
  let content = (
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


      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} ref={sponsorsRef}>
        <iframe style={{ marginLeft: '35px', marginTop: '40px' }} align="middle" width="800" height="425" src={zoomEmbed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <Card className={classes.sponsors} style={{ border: 'none', boxShadow: 'none' }} >
          <CardContent className={classes.content}>
            <Typography gutterBottom className={classes.sponsorsTitle}>
              PATROCINANTES PRINCIPALES
          </Typography>
            <div className={classes.sponsorsDivPrincipal} onClick={() => goToSponsor('vonfranken')}>
              <img src={Click} style={{ position: 'relative', top: '-19px' }} width="40" />
              <img className={classes.sponsor} src={VonFranken}></img>
            </div>
            <div className={classes.sponsorsDivPrincipal} onClick={() => goToSponsor('over')}>
              <img src={Click} style={{ position: 'relative', left: '-21px', top: '-22px' }} width="40" />
              <img className={classes.sponsor} style={{ position: 'relative', left: '-10px', width: '120px', marginTop: '20px', marginBottom: '15px' }} src={Over}></img>
            </div>
            <div className={classes.sponsorsDivPrincipal} onClick={() => goToSponsor('zoovet')}>
              <img src={Click} style={{ position: 'relative', left: '6px', top: '-13px' }} width="40" />
              <img className={classes.sponsor} src={Zoovet} style={{ marginTop: '0px' }}></img>
            </div>
            <div className={classes.sponsorsDivPrincipal} onClick={() => goToSponsor('proagro')}>
              <img src={Click} style={{ position: 'relative', left: '-12px', top: '-34px' }} width="40" />
              <img style={{ width: '120px', marginTop: '5px', position: 'relative', left: '-16px' }} className={classes.sponsor} src={ProAgro}></img>
            </div>

          </CardContent>
        </Card>
      </div>


      <Card className={classes.sponsorsSec} variant="outlined" >
        <CardContent className={classes.content} style={{ textAlign: 'center' }}>
          <Typography gutterBottom className={classes.sponsorsSecTitle}>
            PATROCINANTES
        </Typography>
          <div style={{ display: 'inline-flex' }}>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('calier')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', left: '3px', top: '28px', width: '90px' }} src={Calier}></img>
              <div style={{ position: 'relative', top: '21px' }}>
                <img src={Click} style={{ position: 'relative', top: '3px', left: '3px' }} width="30" />
              </div>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('vetanco')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', width: '140px', right: '4px', top: '22px', paddingTop: '10px', paddingBottom: '3px' }} src={Vetanco}></img>
              <div style={{ position: 'relative', top: '11px' }}>
                <img src={Click} style={{ position: 'relative', top: '3px', left: '3px' }} width="30" />
              </div>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('allvet')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '41px', left: '4px', width: '115px' }} src={AllVet}></img>
              <div style={{ position: 'relative', top: '45px' }}>
                <img src={Click} style={{ position: 'relative', top: '3px', left: '3px' }} width="30" />
              </div>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('ciale')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '39px' }} src={Ciale}></img>
              <div style={{ position: 'relative', top: '40px' }}>
                <img src={Click} style={{ position: 'relative', top: '3px', left: '3px' }} width="30" />
              </div>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('cdv')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '39px' }} src={CDV}></img>
              <div style={{ position: 'relative', top: '32px' }}>
                <img src={Click} style={{ position: 'relative', top: '3px', left: '3px' }} width="30" />
              </div>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('phibro')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '30px', width: '105px', left: '4px' }} src={Phibro}></img>
              <div style={{ position: 'relative', top: '20px' }}>
                <img src={Click} style={{ position: 'relative', top: '3px', left: '3px' }} width="30" />
              </div>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('arsa')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '35px', width: '150px' }} src={Arsa}></img>
              <div style={{ position: 'relative', top: '31px' }}>
                <img src={Click} style={{ position: 'relative', top: '3px', left: '3px' }} width="30" />
              </div>
            </div>
            <div className={classes.sponsorSec} onClick={() => goToSponsor('zoetis')}>
              <img className={classes.sponsorSecImg} style={{ position: 'relative', top: '2px', left: '3px' }} src={Zoetis}></img>
              <div style={{ position: 'relative', top: '-37px' }}>
                <img src={Click} style={{ position: 'relative', top: '3px', left: '3px' }} width="30" />
              </div>
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
  );



  if (isMobile) {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ color: 'black', backgroundColor: '#f29175' }}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              <img style={{ width: '170px', marginTop: '15px' }} src={Logo}></img>
            </Typography>
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


        <div style={{ marginTop: '20px', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} ref={sponsorsRef}>
          <iframe style={{ margin: '40px', maxWidth: '100%', height: 'auto' }} align="middle" src={zoomEmbed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Typography gutterBottom className={classes.sponsorsTitleMob}>
            PATROCINANTES PRINCIPALES
          </Typography>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('vonfranken')}>
            <img src={Click} style={{ position: 'relative', top: '-19px' }} width="40" />
            <img className={classes.sponsor} src={VonFranken}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('over')}>
            <img src={Click} style={{ position: 'relative', left: '-21px', top: '-22px' }} width="40" />
            <img className={classes.sponsor} style={{ position: 'relative', left: '-10px', width: '120px', marginTop: '20px', marginBottom: '15px' }} src={Over}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('zoovet')}>
            <img src={Click} style={{ position: 'relative', left: '6px', top: '-13px' }} width="40" />
            <img className={classes.sponsor} src={Zoovet} style={{ marginTop: '0px' }}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('proagro')}>
            <img src={Click} style={{ position: 'relative', left: '-15px', top: '-34px' }} width="40" />
            <img style={{ width: '120px', marginTop: '5px', position: 'relative', left: '-16px' }} className={classes.sponsor} src={ProAgro}></img>
          </div>
        </div>


        <div style={{ marginTop: '20px' ,  paddingTop: '25px'}}>
          <Typography gutterBottom className={classes.sponsorsTitleMob} >
            PATROCINANTES
          </Typography>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('calier')}>
            <img src={Click} style={{ position: 'relative', top: '-19px', left:'-18px' }} width="40" />
            <img className={classes.sponsor} style={{width:'100px', position: 'relative', left: '-15px'}} src={Calier}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('vetanco')}>
            <img src={Click} style={{ position: 'relative', left: '17px', top: '-28px' }} width="40" />
            <img className={classes.sponsor} style={{ position: 'relative', left: '-14px', width: '160px', marginTop: '20px', marginBottom: '15px' }} src={Vetanco}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('allvet')}>
            <img src={Click} style={{ position: 'relative', left: '16px', top: '-15px' }} width="40" />
            <img className={classes.sponsor}  src={AllVet} style={{  width:'150px', marginBottom:'15px', position:'relative', left:'20px' }}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('ciale')}>
            <img src={Click} style={{ position: 'relative', left: '16px', top: '-19px' }} width="40" />
            <img style={{ width: '140px', marginTop: '15px', marginBottom:'15px' }} className={classes.sponsor} src={Ciale}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('cdv')}>
            <img src={Click} style={{ position: 'relative', top: '-26px', left:'25px' }} width="40" />
            <img className={classes.sponsor} style={{width:'150px', position:'relative', left:'5px'}} src={CDV}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('phibro')}>
            <img src={Click} style={{ position: 'relative', left: '13px', top: '-17px' }} width="40" />
            <img className={classes.sponsor} style={{ position: 'relative', left: '10px', width: '120px', marginTop: '10px' }} src={Phibro}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('arsa')}>
            <img src={Click} style={{ position: 'relative', left: '40px', top: '-21px' }} width="40" />
            <img className={classes.sponsor} src={Arsa} style={{ marginTop: '10px', marginBottom: '10px', position:'relative', left:'20px' }}></img>
          </div>
          <div className={classes.sponsorsDivPrincipalMob} onClick={() => goToSponsor('zoetis')}>
            <img src={Click} style={{ position: 'relative', left: '22px', top: '-43px' }} width="40" />
            <img style={{ width: '120px', marginTop: '5px', position: 'relative', left: '15px' }} className={classes.sponsor} src={Zoetis}></img>
          </div>
        </div>

        <img className={classes.schedule} ref={schedule} src={Programa}></img>
        <img className={classes.speakers} ref={speakers} src={Disertantes}></img>


        <Typography className={classes.footer} color="textSecondary" gutterBottom>
          <a target="_blank" style={{ textDecoration: 'none', color: 'black', fontSize: 18, display: 'block' }} href="mailto:edicionestaurus@gmail.com"> edicionestaurus@gmail.com</a>
          <a target="_blank" style={{ textDecoration: 'none', color: 'black', fontSize: 18, display: 'block' }} href="https://www.revistataurus.com.ar/"> www.revistataurus.com.ar</a>
        </Typography>


      </div>
    )
  }
  return content;
}

export default Home;