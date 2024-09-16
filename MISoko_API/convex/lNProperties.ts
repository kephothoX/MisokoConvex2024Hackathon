import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';


export const newLNProperty = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const LNProperty = {
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

    const response = await ctx.runMutation(api.lNPropertiesMutations.newLNProperty, LNProperty);


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


export const getAllLNProperties = httpAction(async (ctx, request) => {
    const response = await ctx.runQuery(api.lNPropertiesQueries.getAllLNProperties);

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

export const getLNProperties = httpAction(async (ctx, request) => {
    const response = await ctx.runQuery(api.lNPropertiesQueries.getLNProperties);


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


export const getLNPropertyById = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const response = await ctx.runQuery(api.lNPropertiesQueries.getLNPropertyById, params);

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

export const searchLNProperties = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const response = await ctx.runQuery(api.lNPropertiesQueries.searchLNProperties, { searchTerm: params['searchTerm'] });

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

export const updateLNProperty = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());


    const LNProperty = {
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

    const response = await ctx.runMutation(api.lNPropertiesMutations.updateLNProperty, LNProperty);




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



export const getSimilarLNProperties = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());
 
  const embeddings = await ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: params['query']});
  const response = await ctx.runQuery(api.lNPropertiesQueries.getSimilarLNProperties, { embeddings: embeddings });

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



