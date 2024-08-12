import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';



export const newSNIndustry = httpAction(async (ctx, request) => {
    let response;
    await request.formData().then(async (data: any) => {
        console.log(data);
        

    if (data.get('ad_image')) {
      const storageId = await ctx.storage.store(data.get('ad_image') as Blob);
      const storageURL = await ctx.storage.getUrl(storageId);

      const sNIndustry = {
        created_by: data.get('created_by'),
        name: data.get('name'),
        location: data.get('location'),
        price_amount: parseFloat(data.get('price_amount')),
        video_link: data.get('video_link'),
        ad_image: storageURL,
        description: data.get('description'),
        published: true,
        phone_number: data.get('phone_number'),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

        response = await ctx.runMutation(api.sNIndustriesMutations.newSNIndustry, sNIndustry);
    
      
    } else {

      const sNIndustry = {
        created_by: data.get('created_by'),
        name: data.get('name'),
        location: data.get('location'),
        price_amount: parseFloat(data.get('price_amount')),
        video_link: data.get('video_link'),
        ad_image: 'No_Ad_Image',
        description: data.get('description'),
        published: true,
        phone_number: data.get('phone_number'),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

        response = await ctx.runMutation(api.sNIndustriesMutations.newSNIndustry, sNIndustry);
        
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

