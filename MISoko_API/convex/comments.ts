import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';


export const newComment = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());


    const values = {
        ad_id: params.post_id,
        comment: params.comment,
        created_by: params.created_by,
        published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }

    const response = await ctx.runMutation(api.commentsMutations.newComment, values);

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
        comment: params.comment,
        created_by: params.created_by,
        published: true,
        updated_at: new Date().toISOString()
    }

    const response = await ctx.runMutation(api.commentsMutations.updateComment, values);

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

    const response = await ctx.runQuery(api.commentsQueries.getCommentsPerAd, params);

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


