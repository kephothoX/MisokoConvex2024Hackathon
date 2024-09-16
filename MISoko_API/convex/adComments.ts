import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';


export const newAdComment = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());


    const values = {
        ad_id: params.ad_id,
        comment: params.comment,
        created_by: params.created_by
    }

    const response = await ctx.runMutation(api.adCommentsMutations.newAdComment, values);

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

export const updateAdComment = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text())

    const values = {
        id: params.id,
        ad_id: params.ad_id,
        comment: params.comment,
        created_by: params.created_by
    }

    const response = await ctx.runMutation(api.adCommentsMutations.updateAdComment, values);

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


export const getCommentsPerAd = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const response = await ctx.runQuery(api.adCommentsQueries.getCommentsPerAd, params);

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


