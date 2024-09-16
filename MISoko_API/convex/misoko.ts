
import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';



export const UploadFile = httpAction(async (ctx, request) => {
  const bl = await request.blob();
  const blob = new Blob([bl], { type: bl.type});

  const storageId = await ctx.storage.store(blob);
  const storageURL = await ctx.storage.getUrl(storageId);

  return new Response(JSON.stringify({ fileStorageID: storageId, fileURL: storageURL }), {
    headers: new Headers({
      'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Digest',
      'Access-Control-Max-Age': '86400',
      Vary: 'origin',
    }),
    status: 200,
  });
});

export const UploadFiles = httpAction(async (ctx, request) => {
  const blobs = await request.blob();
 
  /*const bl = await request.blob();
  const blob = new Blob([bl], { type: bl.type});

  const storageId = await ctx.storage.store(blob);
  const storageURL = await ctx.storage.getUrl(storageId);*/

  return new Response(`JSON.stringify({ fileStorageID: storageId, fileURL: storageURL })`, {
    headers: new Headers({
      'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Digest',
      'Access-Control-Max-Age': '86400',
      Vary: 'origin',
    }),
    status: 200,
  });
});

export const newAdView = httpAction(async (ctx, request) => {
  const values = JSON.parse(await request.text());
  let response;

  const check = await ctx.runQuery(api.misokoQueries.checkIfAdIsViewed, values);

  if (check.length <= 0) {
    response = await ctx.runMutation(api.misokoMutations.newPostView, values);
  }

  return new Response(JSON.stringify(response), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});


export const countAdViews = httpAction(async (ctx, request) => {
  const values = JSON.parse(await request.text());

  const result = await ctx.runQuery(api.misokoQueries.countAdViews, values);


  return new Response(JSON.stringify(result.length), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});

/*

export const newAccessToken = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const response = await ctx.runMutation(api.MISokoMutations.addNewAccessToken, params);

  return new Response(JSON.stringify(response), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});

export const getImage = httpAction(async (ctx, request) => {
  const { searchParams } = new URL(request.url);

  const storageId = searchParams.get("storageId")!;
  const blob = await ctx.storage.get(storageId);
  if (blob === null) {
    return new Response("File not found", {
      status: 404,
    });
  }
  return new Response(blob);

});

export const search = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const response = await ctx.runQuery(api.MISokoPNAccessoriesQueries.searchPNAccessories, params)
  return new Response(JSON.stringify(response), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});


*/
