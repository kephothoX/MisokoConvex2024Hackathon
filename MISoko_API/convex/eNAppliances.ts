import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';


export const newENAppliance = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const ENAppliance = {
        created_by: params['created_by'],
        name: params['name'],
        price_amount: parseFloat(params['price_amount']),
        video_link: params['video_link'],
        ad_images: params['ad_images'],
        description: params['description'],
        location: params['location'],
        published: true,
        ad_phone_number: params['ad_phone_number'],
        ad_email: params['ad_email'],
        embeddings: await (ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['description'] })),
    }

    const response = await ctx.runMutation(api.eNAppliancesMutations.newENAppliance, ENAppliance);



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


export const getAllENAppliances = httpAction(async (ctx, request) => {

    const response = await ctx.runQuery(api.eNAppliancesQueries.getAllENAppliances);

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

export const getENAppliances = httpAction(async (ctx, request) => {

    const response = await ctx.runQuery(api.eNAppliancesQueries.getENAppliances);


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

export const searchENAppliances = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const response = await ctx.runQuery(api.eNAppliancesQueries.searchENAppliances, { searchTerm: params['searchTerm'] });

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


export const getENApplianceById = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const response = await ctx.runQuery(api.eNAppliancesQueries.getENApplianceById, params);

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

export const updateENAppliance = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const ENAppliance = {
        id: params['id'],
        created_by: params['created_by'],
        name: params['name'],
        price_amount: parseFloat(params['price_amount']),
        video_link: params['video_link'],
        ad_images: params['ad_images'],
        description: params['description'],
        location: params['location'],
        published: true,
        ad_phone_number: params['ad_phone_number'],
        ad_email: params['ad_email'],
        embeddings: await (ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['description'] })),
    }

    const response = await ctx.runMutation(api.eNAppliancesMutations.updateENAppliance, ENAppliance);


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


export const getSimilarENAppliances = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
 
  const embeddings = await ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['query']});
  const response = await ctx.runQuery(api.eNAppliancesQueries.getSimilarENAppliances, { embeddings: embeddings });

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


