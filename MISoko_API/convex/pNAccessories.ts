import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';




export const newPNAccessory = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const pNAccessory = {
    created_by: params['created_by'],
    name: params['name'],
    specifications: params['specifications'],
    location: params['location'],
    price_amount: parseFloat(params['price_amount']),
    video_link: params['video_link'],
    ad_images: params['ad_images'],
    description: params['description'],
    published: true,
    ad_phone_number: params['ad_phone_number'],
    ad_email: params['ad_email'],
    embeddings: await (ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['specifications'] })),
  }

  const response = await ctx.runMutation(api.pNAccessoriesMutations.addNewPNAccessory, pNAccessory);

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



export const getAllPNAccessories = httpAction(async (ctx, request) => {

  const response = await ctx.runQuery(api.pNAccessoriesQueries.getAllPNAccessories);

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

export const getPNAccessoryById = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const response = await ctx.runQuery(api.pNAccessoriesQueries.getPNAccessoryById, params);
  

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



export const getPNAccessories = httpAction(async (ctx, request) => {

  const response = await ctx.runQuery(api.pNAccessoriesQueries.getPNAccessories);

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

export const searchPNAccessories = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const response = await ctx.runQuery(api.pNAccessoriesQueries.searchPNAccessories, { searchTerm: params['searchTerm'] });

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


export const updatePNAccessory = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  console.log(params);

  const pNAccessory = {
    id: params['id'],
    created_by: params['created_by'],
    name: params['name'],
    specifications: params['specifications'],
    location: params['location'],
    price_amount: parseFloat(params['price_amount']),
    video_link: params['video_link'],
    ad_images: params['ad_images'],
    description: params['description'],
    published: true,
    ad_phone_number: params['ad_phone_number'],
    ad_email: params['ad_email'],
    embeddings: await (ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['specifications'] })),
  }

  const response = await ctx.runMutation(api.pNAccessoriesMutations.updatePNAccessories, pNAccessory);

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



export const getSimilarPNAccessories = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
 
  const embeddings = await ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['query']});
  const response = await ctx.runQuery(api.pNAccessoriesQueries.getSimilarPNAccessories, { embeddings: embeddings });

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


