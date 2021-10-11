/**
 * @module M/plugin/Mapfooter
 */
import 'assets/css/mapfooter';
import MapfooterControl from './mapfootercontrol';
import api from '../../api.json';

export default class Mapfooter extends M.Plugin {
  /**
   * @classdesc
   * Main facade plugin object. This class creates a plugin
   * object which has an implementation Object
   *
   * @constructor
   * @extends {M.Plugin}
   * @param {Object} impl implementation object
   * @api stable
   */
  constructor(config) {
    super();
    /**
     * Facade of the map
     * @private
     * @type {M.Map}
     */
     this.map_ = null;
     this.config=config;
     this.open = config.open

    /**
     * Array of controls
     * @private
     * @type {Array<M.Control>}
     */
    this.controls_ = [];

    /**
     * Metadata from api.json
     * @private
     * @type {Object}
     */
    this.metadata_ = api.metadata;
  }

  /**
   * This function adds this plugin into the map
   *
   * @public
   * @function
   * @param {M.Map} map the map to add the plugin
   * @api stable
   */
  addTo(map) {
    this.control_ = new MapfooterControl(this.config)
    this.controls_.push(this.control_);
    this.map_ = map;
     // panel para agregar control - no obligatorio
     this.panel_ = new M.ui.Panel('panelMapfooter', {
      collapsible: true,
      className: 'm-mapfooter',
      position: M.ui.position.BL,
      collapsedButtonClass: 'mapfooter-abrir',
    });
    this.panel_.addControls(this.controls_);
    map.addPanels(this.panel_);
    if(this.open){
     this.panel_.open();
    }

    this.control_.on(M.evt.ADDED_TO_MAP, () => {
      this.fire(M.evt.ADDED_TO_MAP);
    });
  }

  /**
   * This function gets metadata plugin
   *
   * @public
   * @function
   * @api stable
   */
  getMetadata(){
    return this.metadata_;
  }
}
