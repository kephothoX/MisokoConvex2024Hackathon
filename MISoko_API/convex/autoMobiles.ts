import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';



export const newAutoMobile = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

      const autoMobile = {
        created_by: params['created_by'],
        make: params['make'],
        model: params['model'],
        chassis_number: params['chassis_number'],
        category: params['category'],
        engine: params['engine'],
        yom: params['yom'],
        transmission: params['transmission_data'],
        body_color: params['body_color'],
        interior: params['interior'],
        key_features: params['key_features'],
        description: params['description'],
        video_link: params['video_link'],
        ad_images: params['ad_images'],
        published: true,
        ad_phone_number: params['ad_phone_number'],
        ad_email: params['ad_email'],
        transaction_type: params['transaction_type'],
        embeddings: await (ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['description'] }))
      }

      const response = await ctx.runMutation(api.autoMobilesMutations.newAutoMobile, autoMobile);

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


export const getAllAutoMobiles = httpAction(async (ctx, request) => {

  const response = await ctx.runQuery(api.autoMobilesQueries.getAllAutoMobiles);

  return new Response(JSON.stringify(response), {
    headers: {
      'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'origin',
    },
    status: 200,
  });
});

export const getAutoMobiles = httpAction(async (ctx, request) => {
  const response = await ctx.runQuery(api.autoMobilesQueries.getAutoMobiles);


  return new Response(JSON.stringify(response), {
    headers: {
      'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'origin',
    },
    status: 200,
  });
});

export const searchAutoMobiles = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  

  const response = await ctx.runQuery(api.autoMobilesQueries.searchAutoMobiles, { searchTerm: params['searchTerm']});


  return new Response(JSON.stringify(response), {
    headers: {
      'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'origin',
    },
    status: 200,
  });
});



export const getAutoMobileById = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const response = await ctx.runQuery(api.autoMobilesQueries.getAutoMobileById, params);

  return new Response(JSON.stringify(response), {
    headers: {
      'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'origin',
    },
    status: 200,
  });
});

export const updateAutoMobile = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

      const autoMobile = {
        id: params['id'],
        price_amount: params['price_amount'],   
        location: params['location'],
        created_by: params['created_by'],
        make: params['make'],
        model: params['model'],
        chassis_number: params['chassis_number'],
        category: params['category'],
        engine: params['engine'],
        yom: params['yom'],
        transmission: params['transmission_data'],
        body_color: params['body_color'],
        interior: params['interior'],
        key_features: params['key_features'],
        description: params['description'],
        video_link: params['video_link'],
        ad_images: params['ad_images'],
        published: true,
        ad_phone_number: params['ad_phone_number'],
        ad_email: params['ad_email'],
        transaction_type: params['transaction_type'],
        embeddings: await (ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['description'] }))
        
      }

      const response = await ctx.runMutation(api.autoMobilesMutations.updateAutoMobile, autoMobile);


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


export const getSimilarAutoMobiles = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
 
  const embeddings = await ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['query']});
  const response = await ctx.runQuery(api.autoMobilesQueries.getSimilarAutoMobiles, { embeddings: embeddings });

  return new Response(JSON.stringify(response), {
    headers: new Headers({
      'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Digest',
      'Access-Control-Max-Age': '86400',
      Vary: 'origin',
    }),
    status: 200,
  });
});



