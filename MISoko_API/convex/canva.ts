
import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';


export const genAuthURL = httpAction(async (ctx, request) => {
  const result = await ctx.runAction(api.canvaActions.genAuthURL);

  console.log(result);

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});


export const genRefreshToken = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  const result = await ctx.runAction(api.canvaActions.genRefreshToken, params);

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});



export const genAccessToken = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  const result = await ctx.runAction(api.canvaActions.genAccessToken, params);

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});


export const inspectAccessToken = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  const result = await ctx.runAction(api.canvaActions.inspectAccessToken, params);

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});

export const getUserProfile = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  const result = await ctx.runAction(api.canvaActions.getUserProfile, params);

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});


export const getUserID = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  const result = await ctx.runAction(api.canvaActions.getUserID, params);

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});



export const getCanvaBrandTemplates = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  const result = await ctx.runAction(api.canvaActions.getCanvaBrandTemplates, params);

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});

export const deleteCanvaAsset = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  
  const result = await ctx.runAction(api.canvaActions.deleteCanvaAsset, params );


  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});

export const updateCanvaAsset = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  
  const result = await ctx.runAction(api.canvaActions.updateCanvaAsset, params );


  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});


export const getCanvaAsset = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  
  const result = await ctx.runAction(api.canvaActions.getCanvaAsset, params );


  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});

export const getCanvaAssets = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  
  const result = await ctx.runQuery(api.canvaQueries.getCanvaAssets, params );


  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});



export const createNewCanvaFolder = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  console.log(params);
  
  const result = await ctx.runAction(api.canvaActions.createNewCanvaFolder, params);

  console.log(result)

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });

});

export const getCanvaFolders = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  console.log(params);
  
  const result = await ctx.runQuery(api.canvaQueries.getCanvaFolders, params );

  console.log(result)

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});

export const getCanvaFolder = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  
  const result = await ctx.runAction(api.canvaActions.getCanvaFolder, params );


  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});

export const getCanvaFolderItems = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  console.log(params);
  
  const result = await ctx.runAction(api.canvaActions.getCanvaFolderItems, params );

  console.log(result)

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});


export const updateCanvaFolder = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  console.log(params);
  
  const result = await ctx.runAction(api.canvaActions.updateCanvaFolder, params );

  console.log(result)

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});

export const deleteCanvaFolder = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  
  const result = await ctx.runAction(api.canvaActions.deleteCanvaFolder, params );

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});


export const getCanvaDesigns = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  
  const result = await ctx.runAction(api.canvaActions.getCanvaDesigns, params );

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});

export const getCanvaDesign = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  
  const result = await ctx.runAction(api.canvaActions.getCanvaDesign, params );

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});

export const newCanvaDesign = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  
  const result = await ctx.runAction(api.canvaActions.newCanvaDesign, params );

  return new Response(JSON.stringify(result), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});

export const newCanvaAsset = httpAction(async (ctx, request) => {
  let response;

  await request.formData().then(async (data: any) => {
    const storageId = await ctx.storage.store(data.get('canvaAsset') as Blob);
    console.log(storageId);


    const storageURL = await ctx.storage.getUrl(storageId);

    const params = {
      accessToken: data.get('accessToken'),
      canvaAssetName: data.get('canvaAssetName'),
      canvaAsset:storageURL,
      storageId: storageId,
      canvaUserID: data.get('canvaUserID'),
      canvaTeamID: data.get('canvaTeamID')
    }
  

    response = await ctx.runAction(api.canvaActions.uploadAsset, params);

  });

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