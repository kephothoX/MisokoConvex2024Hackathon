import { httpRouter } from 'convex/server';

import { 
  auth,
  githubCallback
} from './auth';

import {
  newENAppliance,
  getAllENAppliances,
  getENApplianceById,
  getENAppliances
} from './eNAppliances';


import {
  newLNProperty,
  getAllLNProperties,
  getLNPropertyById,
  getLNProperties
} from './lNProperties'

import { 
  genAuthURL,
  genRefreshToken,
  genAccessToken,
  inspectAccessToken,
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
  deleteCanvaAsset

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

