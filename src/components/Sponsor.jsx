import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import { AppBar, Typography, Toolbar, Card, CardContent, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Zoetis from "../logos/zoetis.png";
import Over from "../logos/over.jpg";
import Vetanco from "../logos/vetanco.jpg";
import Ciale from "../logos/ciale.jpg";
import Proagro from "../logos/proagro.jpg";
import Calier from "../logos/calier.jpg";
import Zoovet from "../logos/zoovet.jpg";
import Phibro from "../logos/phibro.jpg";
import Allvet from "../logos/allvet.jpg";
import VonFranken from "../logos/vonfranken.png";

import OverFoto from "../fotosSponsor/over.jpg";
import VetancoFoto from "../fotosSponsor/vetanco.jpg";
import CialeFoto from "../fotosSponsor/ciale.jpeg";
import ProagroFoto from "../fotosSponsor/proagro.jpg";
import CalierFoto from "../fotosSponsor/calier.jpg";
import ZoovetFoto from "../fotosSponsor/zoovet.jpg";
import PhibroFoto from "../fotosSponsor/phibro.png";
import AllvetFoto from "../fotosSponsor/allvet.jpg";

import Logo from "../logo.png";


const sponsorsData = {
  'zoetis': {
    info: 'Zoetis es una compañía global de salud animal dedicada a apoyar a sus clientes y sus negocios en la mejor forma posible. Basados en 60 años de experiencia, entregamos medicamentos y vacunas de calidad, apoyo y educación.Estamos trabajando cada día para comprender y atender mejor los desafíos del mundo real que enfrentan aquellos que crían y cuidan de los animales en formas que ellos consideren verdaderamente relevantes.',
    mail: 'zoetis@gmail.com',
    videoUrl: 'https://www.youtube.com/embed/ZxXKNR12MuQ',
    zoomUrl: 'https://www.google.com',
    webUrl: 'https://ar.zoetis.com/',
    logo: Zoetis,
  },
  'pfizer': {
    info: 'En Pfizer Trabajamos para desarrollar innovaciones que cambien la vida de los pacientes. La salud es un valor esencial para todos nosotros, por eso aplicamos la ciencia y nuestros recursos globales para brindar terapias que ayudan a extender y mejorar sustancialmente la vida de las personas en todas las etapas de la vida. Contamos con opciones terapéuticas de vanguardia para la prevención y el tratamiento de enfermedades a través de una amplia gama de áreas terapéuticas. Además, contamos con una línea de investigación líder en la industria para el desarrollo de nuevos productos con un potencial prometedor para desafiar algunas de las enfermedades más temidas de nuestro tiempo.',
    mail: 'pfizer@gmail.com',
    videoUrl: 'https://www.youtube.com/embed/ZxXKNR12MuQ',
    zoomUrl: 'https://www.google.com',
    webUrl: 'https://www.pfizer.com.ar/'
  },
  'over': {
    info: 'OVER es una empresa argentina especializada en la elaboración, comercialización y distribución de productos de alta calidad para uso en medicina veterinaria.\nOfrece al mercado uno de los vademécums más completos, con más de 200 productos, cubriendo aproximadamente el 90% de las necesidades del profesional veterinario.\nSus instalaciones están equipadas con tecnología de última generación para la producción de medicamentos bajo normas internacionales de calidad BPFPV/GMP, el tratamiento de efluentes, la preservación del medio ambiente y la protección del personal.\nOVER, Ciencia para la salud.',
    mail: 'marketing@over.com.ar',
    videoUrl: 'https://www.youtube.com/embed/hZd9fDOKYoM',
    zoomUrl: 'https://www.google.com',
    webUrl: 'http://www.over.com.ar',
    photo: OverFoto,
    logo: Over
  },
  'calier': {
    info: 'Calier es la compañía del Grupo Indukern dedicada a la investigación, desarrollo, fabricación y comercialización de productos farmacológicos y biológicos para uso veterinario en animales de producción.\nPonemos a disposición de veterinarios y distribuidores de todo el mundo una amplia oferta terapéutica que incluye acidificantes, antibióticos, antiinflamatorios, antimamíticos, antiparasitarios, biológicos, cardíacos, dermatológicos, desinfectantes, hormonales, premezclas medicamentosas, sedantes y analgésicos, complementos nutricionales y reguladores del sistema digestivo y respiratorio.',
    mail: 'plopez@calier.com.ar',
    videoUrl: 'https://www.youtube.com/embed/68NfFFnzmv8',
    zoomUrl: 'https://us04web.zoom.us/j/9150652935?pwd=c09ydmt0YS9uM0tlQ0M5QnQ5TnVtZz09',
    webUrl: 'http://www.calier.com.ar',
    photo: CalierFoto,
    logo: Calier
  },
  'vetanco': {
    info: 'Vetanco es un laboratorio veterinario internacional que desde hace 30 años desarrolla, elabora y comercializa productos innovadores para la salud y la producción animal.\nPresente en más de 40 países ofrece productos internacionalmente probados, controlados y seguros.\nComo referente internacional en aditivos y especialidades para la agroindustria su portafolio de productos es amplio y diversificado.\nVetanco cuenta con proyectos de investigación de la más avanzada tecnología, tanto en sus laboratorios de I+D como en colaboración con centros de excelencia en todo el mundo. ',
    mail: 'vetanco@vetanco.com',
    videoUrl: 'https://www.youtube.com/embed/rx2Nfr-eA_k',
    zoomUrl: 'https://www.google.com',
    webUrl: 'https://www.vetanco.com/',
    photo: VetancoFoto,
    logo: Vetanco
  },
  'ciale': {
    info: 'CIALE Alta existe para más que producir y comercializar semen de toros de alto calibre. CIALE Alta trabaja con sus clientes para crear valor para ellos esforzándose por comprender y estar a la altura de sus necesidades y objetivos individuales. La diferencia la marcan los programas innovadores y los servicios reproductivos. Proveer programas personalizados que sean específicos para las necesidades individuales de cada cliente, esa es la promesa detrás de la marca de CIALE Alta, promesa que busca mejorar de manera tangible la rentabilidad individual de cada rodeo.',
    mail: 'info@ciale.com',
    videoUrl: 'https://www.youtube.com/embed/La_NQRlzA-Q',
    zoomUrl: 'https://www.google.com',
    webUrl: 'https://www.ciale.com',
    photo: CialeFoto,
    logo: Ciale
  },
  'proagro': {
    info: 'Proagro es un laboratorio de medicamentos veterinarios para grandes y pequeños animales avalado por 50 años de trayectoria en el mercado. Con una expansión cada vez mayor a nivel mundial, se asienta como una de las empresas con mayor solidez en la ciudad de Rosario.\nDesde 2008, cuenta con la certificación GMP, asegurando la incorporación de productos confiables, trazables y seguros al mercado nacional e internacional.\nLa empresa tiene un fuerte compromiso social: colabora habitualmente con distintas fundaciones, instituciones, escuelas, hospitales y diversas organizaciones afines.',
    mail: 'info@proagrolab.com.ar',
    videoUrl: 'https://www.youtube.com/embed/JVpscsITY3s',
    zoomUrl: 'https://www.google.com',
    webUrl: 'https://www.proagrolab.com.ar',
    photo: ProagroFoto,
    logo: Proagro
  },
  'zoovet': {
    info: 'En Zoovet tenemos como misión, brindar el mejor servicio y ofrecer productos de calidad, agregando valor a través del asesoramiento comercial de nuestros representantes, asumiendo el compromiso de jerarquizar la labor del Médico Veterinario como profesional de la sanidad. Creamos productos mejoradores de la producción y bienestar animal. NUESTRA RECETA, LA MEJOR RECETA.',
    mail: 'marketing@zoovet.com.ar',
    videoUrl: 'https://www.youtube.com/embed/ATQBjDgL-OQ',
    zoomUrl: 'https://zoom.us/j/97498298362?pwd=NDQxZjYvZHlLMVpYTHNzaHZrc3NQdz09',
    webUrl: 'https://www.zoovet.com.ar',
    photo: ZoovetFoto,
    logo: Zoovet
  },
  'phibro': {
    info: 'Fundada en 1970, Minitube International es líder mundial en tecnologías de reproducción asistida.\nComo líder de la industria, Minitube es consciente de la importancia de proporcionar productos de calidad y seguridad. Por esta razón, todos los productos patentados se fabrican en sus propias instalaciones con certificación ISO. Con sede en Tiefenbach, Alemania, Minitube International atiende a clientes de todo el mundo con soporte local a través de filiales y distribuidores altamente cualificados.\nPhibro Salud Animal es el representante exclusivo de Minitube Internacional en Argentina. ',
    mail: 'ana.donovan@pahc.com',
    videoUrl: 'https://www.youtube.com/embed/fKRAH2iu81E',
    zoomUrl: 'https://us02web.zoom.us/j/84124551180',
    webUrl: 'https://phibrosaludanimal.com/consulta-tecnica',
    photo: PhibroFoto,
    logo: Phibro
  },
  'vonfranken': {
    info: 'Somos una empresa de familia que crece y se profesionaliza con vocación de acompañar al veterinario en su tarea diaria y comprometidos con la sanidad animal.\nFatro, laboratorio líder en Europa, forma parte de nuestra sociedad.\nDesde hace más de 60 años, iniciamos un camino de crecimiento sostenido tanto en áreas productivas, líneas terapéuticas y en los países donde estamos presentes.\nHoy somos más de 100 personas trabajando juntos, contamos con más de 100 productos y estamos presentes en 16 países, en muchos, con posiciones de liderazgo.\nFuimos de los primeros laboratorios en Argentina en obtener la certificación GMP lo que garantiza la máxima seguridad y confiabilidad de nuestros productos.\nDesde siempre, promovemos los valores de compromiso, respeto y mejora continua, reflejados en la calidad de nuestros productos y en el profesionalismo comercial.',
    mail: 'consultas@fatrovonfranken.com.ar',
    videoUrl: 'https://www.youtube.com/embed/oEPVQy1Tv5I',
    zoomUrl: 'https://www.google.com',
    webUrl: 'https://www.fatrovonfranken.com/',
    logo: VonFranken
  },
  'allvet': {
    info: 'Allvet Tecnología Veterinaria, fundada en 2007, es uno de los principales referentes en el mercado argentino de equipos de ultrasonido en veterinaria. Tiene como objetivo seleccionar y adquirir productos por su tecnología y prestación aplicada en grandes animales, tanto en el área reproductiva como en producción animal. Distribuidor exclusivo en Argentina de BCF Technology, introduciendo la tecnología de Easi-scan en Argentina. Nuestra posición en el mercado se basa en un alto nivel de conocimiento técnico focalizando en las áreas de: Asesoramiento Técnico, Servicio de ventas, Servicio de Post Venta, Aplicación de productos y Servicio Técnico.',
    mail: 'marcelo.perilli@allvet-tv.com.ar',
    videoUrl: 'https://www.youtube.com/embed/3osKqFZr5X4',
    webUrl: 'http://www.allvet-tv.com.ar/',
    photo: AllvetFoto,
    logo: Allvet
  },


}

const useStyles = makeStyles({
  root: {
    background: '#f29175 ',
    margin: '0px 0px',
    minWidth: 275,
    borderRadius: 0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    paddingBottom: '0px !important',
  },
  sponsorBtn: {
    width: '220px',
    background: 'rgb(242, 145, 117)',
    padding: '3px 25px',
    fontWeight: 'bold',
    fontSize: '18px',
    textTransform: 'none'
  },
  logoImg: {
    width: '150px',
    float: 'right',
    position: 'relative',
    top: '3px',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

const goToHome = () => {
  window.location.href = './#/';
}

const Sponsor = () => {
  let { sponsorId } = useParams();
  const classes = useStyles();

  if (!sponsorId || !sponsorsData[sponsorId]) {
    return <Redirect to="/" />
  }

  const sponsor = sponsorsData[sponsorId];
  return (
    <React.Fragment >
      <AppBar position="static" style={{ gridAutoFlow: 'column', display: 'inline-grid', color: '#7d7d7d', backgroundColor: '#f9f9f9', padding: '10px' }}>
        <Toolbar variant="dense" style={{ width: '240px', color: 'black', }}>
          <Typography variant="h6" color="inherit" style={{ fontWeight: 'bold', lineHeight: '20px' }} >
            10as Jornadas Taurus de Reproducción Bovina
          </Typography>
        </Toolbar>
        <div style={{ textAlign: 'center' }}>
          <img style={{ height: '50px', display: 'inline-block' }} src={sponsor.logo}></img>
        </div>
        <div >
          <img className={classes.logoImg} onClick={goToHome} src={Logo}></img>
          <Typography variant="body2" color="black" style={{ color: 'black', fontWeight: 'bold', float: 'right', marginTop: '15px' }}>
            Regresá a las jornadas ->
          </Typography>
        </div>
      </AppBar>
      <div style={{ textAlign: 'center', paddingTop: '25px', paddingBottom: '25px' }}>
        <iframe width="1080" height="540" align="middle" src={sponsor.videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div style={{ display: 'table', margin: '0 auto', paddingBottom: '45px' }}>
        <Button className={classes.sponsorBtn} style={{ position: 'relative', right: '10px' }} target="_blank" href={sponsor.webUrl} size="small" variant="contained" >Web institucional</Button>
        {sponsor.zoomUrl ? <Button className={classes.sponsorBtn} style={{ position: 'relative', left: '10px' }} target="_blank" href={sponsor.zoomUrl} size="small" >Link al zoom</Button> : null }
      </div>

      <div style={{ textAlign: 'center' , marginBottom: '45px'}}>
        <img style={{ width: '1080px', display: 'inline-block' }} src={sponsor.photo}></img>
      </div>

      <Card className={classes.root} variant="outlined" style={{ paddingLeft: '15px', paddingTop: '0px' }} >
        <CardContent className={classes.content} style={{ color: 'black', }}>
          <Typography className={classes.title} gutterBottom style={{ fontWeight: 'bold', fontSize: '18px' }}>
            Acerca de
          </Typography>
          <Typography className={classes.pos} style={{ marginLeft: '15px' }} component="p">
            {sponsor.info}
          </Typography>
          <Typography style={{ fontWeight: 'bold', fontSize: '18px' }}>
            Contacto:
          </Typography>
          <Typography style={{ marginLeft: '5px' }} className={classes.pos} >
            {sponsor.mail}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default Sponsor;