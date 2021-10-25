/* eslint-disable no-console */
/**
 * @module M/control/MapfooterControl
 */

import MapfooterImplControl from 'impl/mapfootercontrol';
import template from 'templates/mapfooter';

export default class MapfooterControl extends M.Control {
  /**
   * @classdesc
   * Main constructor of the class. Creates a PluginControl
   * control
   *
   * @constructor
   * @extends {M.Control}
   * @api stable
   */
  constructor(config) {
    // 1. checks if the implementation can create PluginControl
    if (M.utils.isUndefined(MapfooterImplControl)) {
      M.exception('La implementación usada no puede crear controles MapfooterControl');
    }
    // 2. implementation of this control
    const impl = new MapfooterImplControl();
    super(impl, 'Mapfooter');
    this.config = config;
    this.htmlCode = this.config.htmlCode
    this.cssList = this.config.cssList
    this.injectCSS(this.cssList)
    this.panelHeight;
    this.opened = this.config.open;
    this.templateVars = { vars: { htmlCode: this.htmlCode } };
    this.setBottomMargin(this.opened)
  }

  /**
   * This function creates the view
   *
   * @public
   * @function
   * @param {M.Map} map to add the control
   * @api stable
   */
  createView(map) {
    return new Promise((success, fail) => {
      const html = M.template.compileSync(template, this.templateVars);
      this.html_ = html;
      // Añadir código dependiente del DOM     
      this.addEvents(html);
      success(html);
    });
  }
  addEvents(html) {
    this.panelHeight = this.checkFooterheight(html);
    // Selectores de Elementos
    let btnMapFooterClosed = document.querySelectorAll('button.m-panel-btn.mapfooter-abrir')[0]
    let btnMapFooterOpened = document.querySelectorAll('button.m-panel-btn.g-cartografia-flecha-izquierda')[0]
    btnMapFooterOpened.title = 'Ocultar pie de página';
    btnMapFooterClosed.title = 'Ocultar pie de página';
    // EventListener
    btnMapFooterClosed.addEventListener('click', () => {
      let btnMapFooterOpened = document.querySelectorAll('button.m-panel-btn.g-cartografia-flecha-izquierda')[0]
      if (event.target.parentElement.classList.contains('opened')) {
        btnMapFooterOpened.title = 'Ocultar pie de página';
        btnMapFooterClosed.title = 'Ocultar pie de página';
        this.opened = true;
        this.checkFooterheight(html);
        this.setBottomMargin(this.opened);
      } else {
        btnMapFooterOpened.title = 'Mostrar pie de página';
        btnMapFooterClosed.title = 'Mostrar pie de página';
        this.opened = false;
        this.checkFooterheight(html);
        this.setBottomMargin(this.opened);
      }
    })
  }

  /**
   * This function is called on the control activation
   *
   * @public
   * @function
   * @api stable
   */
  activate() {
    // calls super to manage de/activation
    super.activate();
  }
  /**
   * This function is called on the control deactivation
   *
   * @public
   * @function
   * @api stable
   */
  deactivate() {
    // calls super to manage de/activation
    super.deactivate();
  }
  /**
   * This function gets activation button
   *
   * @public
   * @function
   * @param {HTML} html of control
   * @api stable
   */
  getActivationButton(html) {
    return html.querySelector('.m-mapfooter button');
  }

  /**
   * This function compares controls
   *
   * @public
   * @function
   * @param {M.Control} control to compare
   * @api stable
   */
  equals(control) {
    return control instanceof MapfooterControl;
  }

  // Add your own functions
  injectCSS(cssList) {
    for (let index = 0; index < cssList.length; index++) {
      const cssFile = cssList[index];
      let link = document.createElement("link");
      link.href = cssFile;
      //link.type = "text/css";
      link.rel = "stylesheet";
      link.addEventListener('load', () => {
        // console.log('se cargo el enlace: ' + cssList[index])
        this.checkFooterheight()
        // console.log(this.panelHeight)
      })
      link.media = "screen";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
  }

  checkFooterheight() {
    let bottomElements = document.querySelectorAll('div.m-bottom');
    if (document.querySelectorAll('div.m-panel.m-mapfooter').length > 0) {
      this.panelHeight = document.querySelectorAll('div.m-panel.m-mapfooter')[0].clientHeight;

    }
    let button = document.querySelectorAll('div.m-panel.m-mapfooter>button')[0];
    if (button) {
      button.style.setProperty('bottom', this.panelHeight + 'px', 'important');
    }
    for (let index = 0; index < bottomElements.length; index++) {
      const element = bottomElements[index];
      if (element.classList.contains('m-right')) {
        element.style.marginBottom = this.panelHeight + 10 + "px";
      }
    }
    bottomElements = document.querySelectorAll('div.m-bottom.m-left')[0].childNodes;

    for (let index = 0; index < bottomElements.length; index++) {
      const element = bottomElements[index];
      if (!element.classList.contains('m-mapfooter')) {
        if (element.classList.contains('m-scaleline')) {
          element.style.setProperty('margin-left', '100px', 'important');
          element.style.setProperty('margin-bottom', this.panelHeight + 10 + 'px', 'important');
        } else {

          element.style.setProperty('margin-bottom', this.panelHeight + 30 + 'px', 'important');
        }
      }
    }
  }

  setBottomMargin(opened) {
    let bottomElements = document.querySelectorAll('div.m-bottom');

    for (let index = 0; index < bottomElements.length; index++) {
      const element = bottomElements[index];
      if (element.classList.contains('m-right')) {
        if (opened) {
          element.style.marginBottom = this.panelHeight + 10 + "px";
        } else {
          element.style.marginBottom = 10 + "px";
        }
      }
    }
  }
}