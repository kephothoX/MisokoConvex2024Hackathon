import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';




export const newPNAccessory = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data: any) => {
    console.log(data);


    if (data.get('ad_images[]')) {
      const ad_images = new Array();

      for (let img of data.getAll('ad_images[]')) {
        const blob_img = img as Blob;
        const storageId = await ctx.storage.store(blob_img);
        ad_images.push(await ctx.storage.getUrl(storageId));

      }

      const pNAccessory = {
        created_by: data.get('created_by'),
        name: data.get('name'),
        specifications: data.get('specifications'),
        location: data.get('location'),
        price_amount: parseFloat(data.get('price_amount')),
        video_link: data.get('video_link'),
        ad_images: ad_images,
        description: data.get('description'),
        published: true,
        ad_phone_number: data.get('ad_phone_number'),
        ad_email: data.get('ad_email'),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      response = await ctx.runMutation(api.pNAccessoriesMutations.addNewPNAccessory, pNAccessory);


    } else {

      const pNAccessory = {
        created_by: data.get('created_by'),
        name: data.get('name'),
        specifications: data.get('specifications'),
        location: data.get('location'),
        price_amount: parseFloat(data.get('price_amount')),
        video_link: data.get('video_link'),
        ad_images: ['No_Ad_Images'],
        description: data.get('description'),
        ad_phone_number: data.get('ad_phone_number'),
        ad_email: data.get('ad_email'),
        published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      response = await ctx.runMutation(api.pNAccessoriesMutations.addNewPNAccessory, pNAccessory);

    }
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
  console.log(response);

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

