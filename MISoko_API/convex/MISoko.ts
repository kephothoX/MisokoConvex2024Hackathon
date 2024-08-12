
import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';


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
