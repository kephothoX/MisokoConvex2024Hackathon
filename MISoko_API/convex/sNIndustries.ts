import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';


export const newSNIndustry = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const sNIndustry = {
    created_by: params['created_by'],
    name: params['name'],
    location: params['location'],
    price_amount: parseFloat(params['price_amount']),
    video_link: params['video_link'],
    ad_images: params['ad_images'],
    description: params['description'],
    published: true,
    ad_phone_number: params['ad_phone_number'],
    ad_email: params['ad_email'],
    embeddings: await (ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['description'] }))
  }

  const response = await ctx.runMutation(api.sNIndustriesMutations.newSNIndustry, sNIndustry);

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

export const getSNIndustries = httpAction(async (ctx, request) => {

  const response = await ctx.runQuery(api.sNIndustriesQueries.getSNIndustries);

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

export const searchSNIndustries = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
  const response = await ctx.runQuery(api.sNIndustriesQueries.searchSNIndustries, { searchTerm: params['searchTerm'] });

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




export const getAllSNIndustries = httpAction(async (ctx, request) => {

  const response = await ctx.runQuery(api.sNIndustriesQueries.getAllSNIndustries);

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

export const getSNIndustryById = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const response = await ctx.runQuery(api.sNIndustriesQueries.getSNIndustryById, params);
  

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

export const updateSNIndustry = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const sNIndustry = {
    id: params['id'],
    created_by: params['created_by'],
    name: params['name'],
    location: params['location'],
    price_amount: parseFloat(params['price_amount']),
    video_link: params['video_link'],
    ad_images: params['ad_images'],
    description: params['description'],
    published: true,
    ad_phone_number: params['ad_phone_number'],
    ad_email: params['ad_email'],
    embeddings: await (ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['description'] }))
  }

  const response = await ctx.runMutation(api.sNIndustriesMutations.updateSNIndustry, sNIndustry);

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


export const getSimilarSNIndustries = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
 
  const embeddings = await ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['query']});
  const response = await ctx.runQuery(api.sNIndustriesQueries.getSimilarSNIndustries, { embeddings: embeddings });

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



