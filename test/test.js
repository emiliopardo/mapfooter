import Mapfooter from 'facade/mapfooter';

const ortofoto2016_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_rgb',
  legend: 'Ortofotografía Color 0,5 metros/pixel (Año 2016)',
  transparent: false,
  tiled: true
}, {
  styles: 'default'
})

const pnoa = new M.layer.WMS({
  url: 'https://www.ign.es/wms-inspire/pnoa-ma?',
  name: 'OI.OrthoimageCoverage',
  legend: 'PNOA',
  transparent: false,
  tiled: true
}, {
  styles: 'default'
})

const map = M.map({
  container: 'mapjs',
  // layers:[pnoa],
  // maxExtent: [100401, 3987100, 621273, 4288700],
});

map.addControls(['scaleline', 'mouse', 'OverviewMap', 'panzoombar', 'layerswitcher']);

const configIECA = {
  open: true,
  htmlCode: '<div id="social"  title="Compartir"> <ul> <li class="no_imprimir"><a id="btnCompartir" href="#"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/compartir24g.png" border="0" alt="Compartir">&nbsp;<span>Compartir</span></a> <ul id="soc_compartir"> <li><a href="https://www.facebook.com/sharer.php?u='+window.location.href+'&amp;t=+Visualizador+IECA&amp;d=" title="Compartir en Facebook" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_facebook.png" border="0" alt="Compartir en Facebook">&nbsp;<span>Facebook</span></a></li><li><a href="https://twitter.com/home?status=Visualizador-'+ window.location.href+'%20v%C3%ADa%20@IECA_Andalucia" title="Compartir en Twitter" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_twitter.png" border="0" alt="Compartir en Twitter">&nbsp;<span>Twitter</span></a></li><li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url='+ window.location.href+'&amp;title=+Visualizador+IECA" title="Compartir en LinkedIn" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_linkedin.png" border="0" alt="Compartir en LinkedIn">&nbsp;<span>LinkedIn</span></a></li><li><a href="mailto:?subject=Compartiendo%20por%20correo%20electr%C3%B3nico&amp;body=%20Visualizador:%0D%0A'+ window.location.href+'" title="Compartir por correo electr&oacute;nico" target="_blank"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_mail.png" border="0" alt="Compartir por correo electr&oacute;nico">&nbsp;<span>e-mail</span></a></li></ul> </li></ul> </div><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/Logo_UE_FEDER.gif" class="feder" alt="Fondos"><div id="footer"> <div id="piea"> <div class="lineacolor fondocolor1">&nbsp;</div><div>&nbsp;</div><div> <div id="piea1"> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/mapaWeb/index.htm" class="enlaces" accesskey="m">Mapa web</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm" class="enlaces" accesskey="l">Aviso legal</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/protecciondedatos/index.html" class="enlaces" accesskey="p">Protecci&oacute;n de datos</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/buzon_web/index.jsp" class="enlaces" accesskey="o">Tu opini&oacute;n</a> | <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/accesibilidad/index.htm" class="enlaces" accesskey="a">Accesibilidad</a> <img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/w3caa.jpg" alt="Logo de w3c" id="logow3caa"> <a href="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm#cc" class="enlaceimg"><img src="https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/cc-by.png" title="Publicado bajo Licencia Creative Commons - Reconocimiento 4.0" alt="CC-BY 4.0" id="logoccby"></a> </div><div id="piea2"> Pabell&oacute;n de Nueva Zelanda. <br>C/ Leonardo Da Vinci, n&deg; 21. Isla de La Cartuja. 41071-SEVILLA.<br>Tlf.: <strong>900 101 407/955 033 800</strong> | Fax: <strong>955 033 816</strong><br></div></div></div></div>',
  cssList: [
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloCabecera2015.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloGenerico.css',
    'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloVisor.css',
  ]
}

const configIDEAndalucia = {
  open: true,
  htmlCode: '<footer id="footer" class=""> <div class="footer-copyright"> <div class="container"> <div class="row"> <div class="region region-footer-bottom"> <div id="block-block-88" class="block block-block"> <div class="content"> <div class="col-md-5"> <img alt="Logo FEDER" src="https://www.ideandalucia.es/portal/sites/default/files/public/logo/feder3.png"> <p class="h2">IDEAndalucía participa en:</p> <a href="http://www.opengeospatial.org/" target="_blank"><img alt="Logo OGC" src="https://www.ideandalucia.es/portal/sites/default/files/public/logo/OGC.png"></a> <a href="http://www.idee.es/es" target="_blank"> <img alt="Logo IDEE" src="https://www.ideandalucia.es/portal/sites/default/files/public/logo/IDEE.png"> </a> <a href="https://inspire.ec.europa.eu/" target="_blank"> <img alt="Logo Inspire" src="https://www.ideandalucia.es/portal/sites/default/files/public/logo/inspire.png"> </a> </div> <div class="col-md-2"> <ul class="list-unstyled"> <li><a href="https://www.ideandalucia.es/portal/mapa-web">Mapa Web</a></li> <li><a href="https://www.ideandalucia.es/portal/aviso-legal">Aviso legal</a></li> <li><a href="https://www.ideandalucia.es/portal/proteccion-de-datos">Protección de datos</a></li> <li><a href="https://www.ideandalucia.es/portal/accesibilidad">Accesibilidad</a> </li> </ul> <img src="https://www.ideandalucia.es/portal/sites/default/files/public/logo/w3caa.jpg" alt="Logo W3CAA"><br> <img src="https://www.ideandalucia.es/portal/sites/default/files/public/logo/cc-by.png" alt="Logo CC-BY"> </div> <div class="col-md-5"> <a href="http://www.juntadeandalucia.es/institutodeestadisticaycartografia/" target="_blank"><img src="https://www.ideandalucia.es/portal/sites/default/files/public/logo/LogoIECA_blanco_p.png" alt="Logo IECA"></a> </div> </div> </div> </div> </div> </div> </div></footer>',
  cssList: [
    'https://www.ideandalucia.es/portal/sites/default/themes/Porto/vendor/bootstrap/css/bootstrap.min.css',
    'https://www.ideandalucia.es/portal/sites/default/themes/Porto/css/theme.css',
    'https://www.ideandalucia.es/portal/sites/default/themes/Porto_sub/css/ieca.css',
  ]
}

const configDiputacionSevilla = {
  open: true,
  htmlCode :'<div class="wrapper"> <div> <div class="container-fluid footer"> <div class="row"> <div class="col-md-4"><a href="#"> <img style="width: 80px;" title="Logotipo Diputación de Sevilla gris" src="https://www.dipusevilla.es/export/sites/diputacion-sevilla-corporativo/.galleries/imagenes-estructura/logo_pie.png" alt="Logotipo Diputación de Sevilla gris"></a> <address class="margin-top-10"><strong>Diputación de Sevilla.</strong><br> Avda. Menéndez y Pelayo, 32. <br> 41071 Sevilla, España. <br><br><abbr title="Phone">T.</abbr> 954 55 00 00</address> </div> <div class="col-md-2 col-lg-3"></div> <div class="col-md-4 col-md-offset-1 col-lg-3 col-lg-offset-1"> <p><strong>Síguenos</strong></p> <ul class="links"> <li><a title="Facebook" href="https://www.dipusevilla.es/.galleries/Galeria-de-Enlaces/facebook" target="_blank"><span class="icon facebook"><span class="sr-only">Icono de Facebook</span></span><span class="sr-only">Facebook de la Diputación de Sevilla</span></a></li> <li><a title="Twitter" href="https://www.dipusevilla.es/.galleries/Galeria-de-Enlaces/twitter" target="_blank"><span class="icon twitter"><span class="sr-only">Icono de Twitter</span></span><span class="sr-only">Twitter de la Diputación de Sevilla</span></a></li> <li><a title="You Tube" href="https://www.dipusevilla.es/.galleries/Galeria-de-Enlaces/youtube" target="_blank"><span class="icon youtube"><span class="sr-only">Icono de Youtube</span></span><span class="sr-only">Canal de Youtube de la Diputación de Sevilla</span></a></li> <li><a title="Flickr" href="https://www.dipusevilla.es/.galleries/Galeria-de-Enlaces/flickr" target="_blank"><span class="fa fa-flickr"><span class="sr-only">Icono de Flickr</span></span><span class="sr-only">Canal de Flickr de la Diputación de Sevilla</span></a></li> <li><a title="Instagram" href="https://www.dipusevilla.es/.galleries/Galeria-de-Enlaces/instagram" target="_blank"><span class="fa fa-instagram"><span class="sr-only">Icono de Instagram</span></span><span class="sr-only">Canal de Instagram de la Diputación de Sevilla</span></a></li> </ul> </div> </div> </div> <div class="container-fluid footer subfooter"> <div class="row"> <div class="col-md-12"> <ul class="links left"> <li><a accesskey="0" href="https://www.dipusevilla.es/otra-informacion/accesibilidad/">Accesibilidad</a></li> <li><a accesskey="8" href="https://www.dipusevilla.es/otra-informacion/politica-de-privacidad-y-aviso-legal/">Aviso legal</a></li> <li><a accesskey="5" href="https://www.dipusevilla.es/otra-informacion/politica-de-privacidad/">Política de privacidad y protección de datos </a></li> <li><a accesskey="9" href="https://www.dipusevilla.es/contacto/">Contacto</a></li> <li><a accesskey="3" href="https://www.dipusevilla.es/otra-informacion/mapa-web/">Mapa web</a></li> <li><a accesskey="4" href="https://www.dipusevilla.es/busqueda/">Búsqueda</a></li> </ul> </div> </div> </div> </div></div>',
  cssList: [
    'https://www.dipusevilla.es/export/system/modules/com.saga.sagasuite.theme.diputacion.sevilla.corporativo/skins/skin-default/css/screen.css',
    'https://www.dipusevilla.es/export/sites/diputacion-sevilla-corporativo/.resources/css/styles.css',
    'https://www.dipusevilla.es/export/system/modules/com.saga.sagasuite.theme.diputacion.sevilla.corporativo/skins/skin-default/css/screen.css'
  ]
}

const configAyuntamientoSevilla = {
  open: true,
  htmlCode: '<footer id="portal-footer-wrapper" class="text-white"> <div class="container" id="portal-footer"> <div class=" portalFooter__row"> <div id="footer-newsletter" class=""> </div> <div class="row bb-1-white bt-1-white border-semi py-4"> <div class="groupActionsRRSS col-xs-12 col-sm-12 hidden-print"> <div id="footer-actions" class=" mb-4 mb-md-0"><nav id="site-actions" class="footerMenu text-center"> <ul id="portal-site_actions" class="list-unstyled text-left h4-size mb-md-0"> <li> <a class="text-white" href="https://www.sevilla.org/"><span>Inicio</span></a> </li> <li> <a class="text-white" href="https://www.sevilla.org/declaracion-de-accesibilidad"><span>Accesibilidad</span></a> </li> <li> <a class="text-white" href="https://www.sevilla.org/sitemap"><span>Mapa Web</span></a> </li> <li> <a class="text-white" href="https://www.sevilla.org/aviso-legal"><span>Aviso legal</span></a> </li> <li> <a class="text-white" href="https://www.sevilla.org/politica-de-privacidad"><span>Polí­tica de privacidad</span></a> </li> </ul> </nav></div> <section id="footer-contact" class=" px-3 mb-4 mb-md-0 ml-md-3"> <h2 class="my-md-0 text-regular mr-2 h4-size">Redes Sociales:</h2> <div id="social-icons"> <ul class="list-unstyled mb-0"> <li class="visible-inline-block ml-1"> <a class="rounded-icon" target="_blank" rel="noopener" href="https://es-es.facebook.com/AyuntamientodeSevilla/" title="Facebook"> <span aria-hidden="true" class="picto-facebook"></span> <span class="sr-only">Facebook</span> </a> </li> <li class="visible-inline-block ml-1"> <a class="rounded-icon" target="_blank" rel="noopener" href="https://twitter.com/ayto_sevilla" title="Twitter"> <span aria-hidden="true" class="picto-twitter"></span> <span class="sr-only">Twitter</span> </a> </li> <li class="visible-inline-block ml-1"> <a class="rounded-icon" target="_blank" rel="noopener" href="https://www.instagram.com/ayto_sevilla" title="Instagram"> <span aria-hidden="true" class="picto-instagram"></span> <span class="sr-only">Instagram</span> </a> </li> <li class="visible-inline-block ml-1"> <a class="rounded-icon" target="_blank" rel="noopener" href="https://www.youtube.com/user/AyuntamientoSevilla" title="YouTube"> <span class="picto-youtube-play" aria-hidden="true"></span> <span class="sr-only">YouTube</span> </a> </li> </ul></div> </section> </div> </div> </div> </div> <div id="portal-contact" class="mt-4"> <div class="container"> <div class="row"> <div class="col-xs-12 col-sm-12"> <p id="contactInfo" class=" text-center">Ayuntamiento de Sevilla. Plaza Nueva, 1 - C.P. 41001 | Teléfono <a class="text-white" href="tel:+34010">010</a> - <a class="text-white" href="tel:+34955010010">955 010 010</a> <!-- | <a class="text-white" href="mailto:webmaster@sevilla.org">webmaster@sevilla.org</a>--></p> <p class="text-center small opacity-66 mb-5 mb-sm-3">Proyecto desarrollado por <a class="text-white" target="_blank" href="https://www.semic.es/" rel="noopener">SEMIC</a> - <a class="text-white" href="https://www.ecityclic.com/es" target="_blank" rel="noopener">eCityclic</a></p> </div> </div> </div> </div> <div id="portal-footer-default" class="container"> <div class="row"><div class="col-xs-12"></div></div> </div> </footer>',
  cssList: [
    'https://www.sevilla.org/++theme++aysevilla/styles/build/plonetheme.aysevilla.min.css'
  ]
}
const mp = new Mapfooter(configIECA);
//const mp = new Mapfooter(configIDEAndalucia);
//const mp = new Mapfooter(configDiputacionSevilla);
//const mp = new Mapfooter(configAyuntamientoSevilla);

map.addPlugin(mp);
