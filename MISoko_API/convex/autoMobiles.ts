import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';



export const newAutoMobile = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data: any) => {

    if (data.get('ad_image')) {
      const storageId = await ctx.storage.store(data.get('ad_image') as Blob);
      const storageURL = await ctx.storage.getUrl(storageId);

      const autoMobile = {
        created_by: data.get('created_by'),
        make: data.get('make'),
        model: data.get('model'),
        chassis_number: data.get('chassis_number'),
        category: data.get('category'),
        engine: data.get('engine'),
        yom: data.get('yom'),
        transmission: data.get('transmission_data'),
        body_color: data.get('body_color'),
        interior: data.get('interior'),
        key_features: data.get('key_features'),
        description: data.get('description'),
        video_link: data.get('video_link'),
        ad_images: data.get('ad_image'),
        published: true,
        ad_phone_number: data.get('ad_phone_number'),
        ad_email: data.get('ad_email'),
        transaction_type: data.get('transaction_type'),
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString()
      }

      response = await ctx.runMutation(api.autoMobilesMutations.newAutoMobile, autoMobile);


    } else {

      const autoMobile = {
        created_by: data.get('created_by'),
        make: data.get('make'),
        model: data.get('model'),
        chassis_number: data.get('chassis_number'),
        category: data.get('category'),
        engine: data.get('engine'),
        yom: data.get('yom'),
        transmission: data.get('transmission_data'),
        body_color: data.get('body_color'),
        interior: data.get('interior'),
        key_features: data.get('key_features'),
        description: data.get('description'),
        video_link: data.get('video_link'),
        ad_images: 'No_Ad_Image',
        price_amount: data.get('price_amount'),
        published: true,
        ad_phone_number: data.get('ad_phone_number'),
        ad_email: data.get('ad_email'),
        transaction_type: data.get('transaction_type'),
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString()
      }
      response = await ctx.runMutation(api.autoMobilesMutations.newAutoMobile, autoMobile);

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


export const getAutoMobileById = httpAction(async (ctx, request) => {
  const params = JSON.parse(await request.text());

  const response = await ctx.runQuery(api.autoMobilesQueries.getAutoMobileById, params);
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

export const updateAutoMobile = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data: any) => {

    if (data.get('ad_images[]')) {
      const ad_images = new Array();

      for (let img of data.getAll('ad_images[]')) {
        const blob_img = img as Blob;
        const storageId = await ctx.storage.store(blob_img);
        ad_images.push(await ctx.storage.getUrl(storageId));

      }


      const AutoMobile = {
        id: data.get('id'),
        ccreated_by: data.get('created_by'),
        make: data.get('make'),
        model: data.get('model'),
        chassis_number: data.get('chassis_number'),
        category: data.get('category'),
        engine: data.get('engine'),
        yom: data.get('yom'),
        transmission: data.get('transmission_data'),
        body_color: data.get('body_color'),
        interior: data.get('interior'),
        key_features: data.get('key_features'),
        description: data.get('description'),
        video_link: data.get('video_link'),
        ad_images: data.get('ad_image'),
        price_amount: data.get('price_amount'),
        location: data.get('location'),
        published: true,
        ad_phone_number: data.get('ad_phone_number'),
        transaction_type: data.get('transaction_type'),
        ad_email: data.get('ad_email'),
        created_at: new Date().toISOString()
      }

      response = await ctx.runMutation(api.autoMobilesMutations.updateAutoMobile, AutoMobile);


    } else {

      const AutoMobile = {
        id: data.get('id'),
        ccreated_by: data.get('created_by'),
        make: data.get('make'),
        model: data.get('model'),
        chassis_number: data.get('chassis_number'),
        category: data.get('category'),
        engine: data.get('engine'),
        yom: data.get('yom'),
        transmission: data.get('transmission_data'),
        body_color: data.get('body_color'),
        interior: data.get('interior'),
        key_features: data.get('key_features'),
        description: data.get('description'),
        video_link: data.get('video_link'),
        ad_images: ['No-AD-Images'],
        price_amount: data.get('price_amount'),
        location: data.get('location'),
        published: true,
        ad_phone_number: data.get('ad_phone_number'),
        transaction_type: data.get('transaction_type'),
        ad_email: data.get('ad_email'),
        created_at: new Date().toISOString()
      }

      response = await ctx.runMutation(api.autoMobilesMutations.updateAutoMobile, AutoMobile);

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


