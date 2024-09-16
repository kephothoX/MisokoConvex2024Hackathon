import { httpRouter } from 'convex/server';
import { httpAction } from './_generated/server';
import { 
  auth,
  signIn
  //githubCallback
} from './auth';

import {
  getUserByEmail,
  getUser,
  updateUser,
  ifUserAuthenticated
} from './users';

import {
  generativeAIContent
} from './misokoAI';

import {
  newAutoMobile,
  getAllAutoMobiles,
  getAutoMobileById,
  getAutoMobiles,
  searchAutoMobiles,
  updateAutoMobile,
  getSimilarAutoMobiles
} from './autoMobiles';


import {
  newENAppliance,
  getAllENAppliances,
  getENApplianceById,
  getENAppliances,
  searchENAppliances,
  updateENAppliance,
  getSimilarENAppliances
} from './eNAppliances';

import {
  newPNAccessory,
  getAllPNAccessories,
  getPNAccessoryById,
  getPNAccessories,
  searchPNAccessories,
  updatePNAccessory,
  getSimilarPNAccessories
} from './pNAccessories';


import {
  newLNProperty,
  getAllLNProperties,
  getLNPropertyById,
  getLNProperties,
  searchLNProperties,
  updateLNProperty,
  getSimilarLNProperties
} from './lNProperties';

import {
  newSNIndustry,
  getAllSNIndustries,
  getSNIndustryById,
  getSNIndustries,
  searchSNIndustries,
  updateSNIndustry,
  getSimilarSNIndustries
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

import {
  newAdComment,
  getCommentsPerAd
} from './adComments';

import {
  UploadFile,
  UploadFiles,
  newAdView,
  countAdViews,
} from './misoko';

const http = httpRouter();

http.route({
  path: '/api/ad/view',
  method: 'POST',
  handler: newAdView
});

http.route({
  path: '/api/ad/views/count',
  method: 'POST',
  handler: countAdViews
});

http.route({
  path: '/api/file/upload',
  method: 'POST',
  handler: UploadFile
});


http.route({
  path: '/api/files/upload',
  method: 'POST',
  handler: UploadFiles
});

http.route({
  path: '/api/users/email',
  method: 'POST',
  handler: getUserByEmail
});

http.route({
  path: '/api/user',
  method: 'POST',
  handler: getUser
});

http.route({
  path: '/api/users/update',
  method: 'POST',
  handler: updateUser
});

http.route({
  path: '/api/users/auth',
  method: 'POST',
  handler: ifUserAuthenticated
});


http.route({
  path: '/api/ai/content',
  method: 'POST',
  handler: generativeAIContent
});


http.route({
  path: '/api/ads/comments/new',
  method: 'POST',
  handler: newAdComment
});

http.route({
  path: '/api/ads/comments',
  method: 'POST',
  handler: getCommentsPerAd
});


http.route({
  path: '/api/canva/auth',
  method: 'GET',
  handler: genAuthURL
});

http.route({
  path: '/api/canva/refreshToken',
  method: 'POST',
  handler: genRefreshToken
});

http.route({
  path: '/api/canva/accessToken',
  method: 'POST',
  handler: genAccessToken
});

http.route({
  path: '/api/canva/inspect/accessToken',
  method: 'POST',
  handler: inspectAccessToken
});

http.route({
  path: '/api/canva/revoke/refreshToken',
  method: 'POST',
  handler: revokeRefreshToken
});

http.route({
  path: '/api/canva/user/profile',
  method: 'POST',
  handler: getUserProfile
});

http.route({
  path: '/api/canva/user/id',
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
  path: '/api/autoMobiles/update',
  method: 'POST',
  handler: updateAutoMobile
});

http.route({
  path: '/api/autoMobiles',
  method: 'GET',
  handler: getAllAutoMobiles
});

http.route({
  path: '/api/autoMobiles/5',
  method: 'GET',
  handler: getAutoMobiles
});


http.route({
  path: '/api/autoMobiles/search',
  method: 'POST',
  handler: searchAutoMobiles
});

http.route({
  path: '/api/autoMobiles/similar',
  method: 'POST',
  handler: getSimilarAutoMobiles
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
  path: '/api/eNAppliances/update',
  method: 'POST',
  handler: updateENAppliance
});

http.route({
  path: '/api/eNAppliances',
  method: 'GET',
  handler: getAllENAppliances
});

http.route({
  path: '/api/eNAppliances/search',
  method: 'POST',
  handler: searchENAppliances
});

http.route({
  path: '/api/eNAppliances/similar',
  method: 'POST',
  handler: getSimilarENAppliances
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
  path: '/api/sNIndustries/update',
  method: 'POST',
  handler: updateSNIndustry
});

http.route({
  path: '/api/sNIndustries',
  method: 'GET',
  handler: getAllSNIndustries
});

http.route({
  path: '/api/sNIndustries/search',
  method: 'POST',
  handler: searchSNIndustries
});

http.route({
  path: '/api/sNIndustries/similar',
  method: 'POST',
  handler: getSimilarSNIndustries
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
  path: '/api/pNAccessories/update',
  method: 'POST',
  handler: updatePNAccessory
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
  path: '/api/pNAccessories/search',
  method: 'POST',
  handler: searchPNAccessories
});

http.route({
  path: '/api/pNAccessories/similar',
  method: 'POST',
  handler: getSimilarPNAccessories
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
  path: '/api/lNProperties/update',
  method: 'POST',
  handler: updateLNProperty
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
  path: '/api/lNProperties/search',
  method: 'POST',
  handler: searchLNProperties
});

http.route({
  path: '/api/lNProperties/similar',
  method: 'POST',
  handler: getSimilarLNProperties
});

http.route({
  path: '/api/lNProperty',
  method: 'POST',
  handler: getLNPropertyById
});


auth.addHttpRoutes(http);

http.route({
  path: '/api/auth/signin',
  method: 'POST',
  handler:  httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    return new Response(JSON.stringify( await signIn(ctx, params )), {
        headers: {
            'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',   
            Vary: 'origin',
        },
        status: 200,
    });
  })
});




// Convex expects the router to be the default export of `convex/http.js`.
export default http;

