import { httpRouter } from 'convex/server';

import { 
  auth,
  githubCallback
} from './auth';

import {
  newAutoMobile,
  getAllAutoMobiles,
  getAutoMobileById,
  getAutoMobiles
} from './autoMobiles';


import {
  newENAppliance,
  getAllENAppliances,
  getENApplianceById,
  getENAppliances
} from './eNAppliances';

import {
  newPNAccessory,
  getAllPNAccessories,
  getPNAccessoryById,
  getPNAccessories
} from './pNAccessories';


import {
  newLNProperty,
  getAllLNProperties,
  getLNPropertyById,
  getLNProperties
} from './lNProperties';

import {
  newSNIndustry,
  getAllSNIndustries,
  getSNIndustryById,
  getSNIndustries
} from './sNIndustries';

import { 
  genAuthURL,
  genRefreshToken,
  genAccessToken,
  inspectAccessToken,
  revokeRefreshToken,
  getUserProfile,
  getUserID,
  getCanvaBrandTemplates,
  createNewCanvaFolder,
  getCanvaFolders,
  updateCanvaFolder,
  deleteCanvaFolder,
  getCanvaFolder,
  getCanvaDesign,
  getCanvaDesigns,
  newCanvaAsset,
  getCanvaFolderItems,
  getCanvaAssets,
  getCanvaAsset,
  updateCanvaAsset,
  deleteCanvaAsset,
  newCanvaDesign

} from './canva';

const http = httpRouter();

auth.addHttpRoutes(http);

http.route({
  path: '/api/auth-url',
  method: 'GET',
  handler: genAuthURL
});

http.route({
  path: '/api/refresh-token',
  method: 'POST',
  handler: genRefreshToken
});

http.route({
  path: '/api/access-token',
  method: 'POST',
  handler: genAccessToken
});

http.route({
  path: '/api/inspect-access-token',
  method: 'POST',
  handler: inspectAccessToken
});

http.route({
  path: '/api/revoke-refresh-token',
  method: 'POST',
  handler: revokeRefreshToken
});

http.route({
  path: '/api/get-user-profile',
  method: 'POST',
  handler: getUserProfile
});

http.route({
  path: '/api/get-user-id',
  method: 'POST',
  handler: getUserID
});

http.route({
  path: '/api/templates',
  method: 'POST',
  handler: getCanvaBrandTemplates
});

http.route({
  path: '/api/assets',
  method: 'POST',
  handler: getCanvaAssets
});

http.route({
  path: '/api/asset/update',
  method: 'POST',
  handler: updateCanvaAsset
});

http.route({
  path: '/api/asset/delete',
  method: 'POST',
  handler: deleteCanvaAsset
});

http.route({
  path: '/api/asset',
  method: 'POST',
  handler: getCanvaAsset
});

http.route({
  path: '/api/folders/new',
  method: 'POST',
  handler: createNewCanvaFolder
});

http.route({
  path: '/api/folders',
  method: 'POST',
  handler: getCanvaFolders
});

http.route({
  path: '/api/folders/update',
  method: 'POST',
  handler: updateCanvaFolder
});

http.route({
  path: '/api/folders/delete',
  method: 'POST',
  handler: deleteCanvaFolder
});

http.route({
  path: '/api/folder',
  method: 'POST',
  handler: getCanvaFolder
});


http.route({
  path: '/api/folder/items',
  method: 'POST',
  handler: getCanvaFolderItems
});



http.route({
  path: '/api/designs',
  method: 'POST',
  handler: getCanvaDesigns
});

http.route({
  path: '/api/designs/new',
  method: 'POST',
  handler: newCanvaDesign
});

http.route({
  path: '/api/design',
  method: 'POST',
  handler: getCanvaDesign
});


http.route({
  path: '/api/assets/new',
  method: 'POST',
  handler: newCanvaAsset
});

http.route({
  path: '/api/autoMobiles/new',
  method: 'POST',
  handler: newAutoMobile
});

http.route({
  path: '/api/autoMobile',
  method: 'GET',
  handler: getAllAutoMobiles
});

http.route({
  path: '/api/autoMobiles/5',
  method: 'GET',
  handler: getAutoMobiles
});

http.route({
  path: '/api/autoMobile',
  method: 'POST',
  handler: getAutoMobileById
});


http.route({
  path: '/api/eNAppliances/new',
  method: 'POST',
  handler: newENAppliance
});

http.route({
  path: '/api/eNAppliances',
  method: 'GET',
  handler: getAllENAppliances
});

http.route({
  path: '/api/eNAppliances/5',
  method: 'GET',
  handler: getENAppliances
});

http.route({
  path: '/api/eNAppliance',
  method: 'POST',
  handler: getENApplianceById
});


http.route({
  path: '/api/sNIndustries/new',
  method: 'POST',
  handler: newSNIndustry
});

http.route({
  path: '/api/sNIndustries',
  method: 'GET',
  handler: getAllSNIndustries
});

http.route({
  path: '/api/sNIndustries/5',
  method: 'GET',
  handler: getSNIndustries
});

http.route({
  path: '/api/sNIndustry',
  method: 'POST',
  handler: getSNIndustryById
});


http.route({
  path: '/api/pNAccessories/new',
  method: 'POST',
  handler: newPNAccessory
});

http.route({
  path: '/api/pNAccessories',
  method: 'GET',
  handler: getAllPNAccessories
});

http.route({
  path: '/api/pNAccessories/5',
  method: 'GET',
  handler: getPNAccessories
});

http.route({
  path: '/api/pNAccessory',
  method: 'POST',
  handler: getPNAccessoryById
});


http.route({
  path: '/api/lNProperties/new',
  method: 'POST',
  handler: newLNProperty
});

http.route({
  path: '/api/lNProperties',
  method: 'GET',
  handler: getAllLNProperties
});

http.route({
  path: '/api/lNProperties/5',
  method: 'GET',
  handler: getLNProperties
});

http.route({
  path: '/api/lNProperty',
  method: 'POST',
  handler: getLNPropertyById
});





// Convex expects the router to be the default export of `convex/http.js`.
export default http;

