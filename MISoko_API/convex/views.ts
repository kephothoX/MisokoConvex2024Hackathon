import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';


export const newAdView = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());


    const values = {
        ad_id: params.post_id,
        created_by: params.created_by,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }

    const response = await ctx.runMutation(api.viewsMutations.newAdView, values);

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

export const updateComment = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text())

    const values = {
        id: params.id,
        ad_id: params.ad_id,
        created_by: params.created_by,
        updated_at: new Date().toISOString()
    }

    const response = await ctx.runMutation(api.viewsMutations.updateAdView, values);

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


export const getViewsPerAd = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const response = await ctx.runQuery(api.viewsQueries.getViewsPerAd, params);

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


