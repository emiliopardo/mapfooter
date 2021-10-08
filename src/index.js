import M$plugin$Mapfooter from '/home/epardo/proyectos/mapfooter/src/facade/js/mapfooter';
import M$control$MapfooterControl from '/home/epardo/proyectos/mapfooter/src/facade/js/mapfootercontrol';
import M$impl$control$MapfooterControl from '/home/epardo/proyectos/mapfooter/src/impl/ol/js/mapfootercontrol';

if (!window.M.plugin) window.M.plugin = {};
if (!window.M.control) window.M.control = {};
if (!window.M.impl) window.M.impl = {};
if (!window.M.impl.control) window.M.impl.control = {};
window.M.plugin.Mapfooter = M$plugin$Mapfooter;
window.M.control.MapfooterControl = M$control$MapfooterControl;
window.M.impl.control.MapfooterControl = M$impl$control$MapfooterControl;
