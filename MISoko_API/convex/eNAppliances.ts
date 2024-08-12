import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';


export const newENAppliance = httpAction(async (ctx, request) => {
    let response;
    await request.formData().then(async (data: any) => {


        if (data.get('ad_images[]')) {
            const ad_images = new Array();

            for (let img of data.getAll('ad_images[]')) {
                const blob_img = img as Blob;
                const storageId = await ctx.storage.store(blob_img);
                ad_images.push(await ctx.storage.getUrl(storageId));

            }

            const ENAppliance = {
                created_by: 'kephothosolutions@gmail.com',//data.get('created_by'),
                name: data.get('name'),
                price_amount: parseFloat(data.get('price_amount')),
                video_link: data.get('video_link'),
                ad_images: ad_images,
                description: data.get('description'),
                location: data.get('location'),
                published: true,
                ad_phone_number: data.get('ad_phone_number'),
                ad_email: data.get('ad_email'),
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            }

            response = await ctx.runMutation(api.eNAppliancesMutations.newENAppliance, ENAppliance);


        } else {

            const ENAppliance = {
                created_by: data.get('created_by'),
                name: data.get('name'),
                price_amount: parseFloat(data.get('price_amount')),
                video_link: data.get('video_link'),
                ad_images: [],
                description: data.get('description'),
                location: data.get('location'),
                published: true,
                ad_phone_number: data.get('ad_phone_number'),
                ad_email: data.get('ad_email'),
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            }

            response = await ctx.runMutation(api.eNAppliancesMutations.newENAppliance, ENAppliance);

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


export const getENApplianceById = httpAction(async (ctx, request) => {
    const params = JSON.parse(await request.text());

    const response = await ctx.runQuery(api.eNAppliancesQueries.getENApplianceById, params);
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

export const updateENAppliance = httpAction(async (ctx, request) => {
    let response;
    await request.formData().then(async (data: any) => {

        if (data.get('ad_images[]')) {
            const ad_images = new Array();

            for (let img of data.getAll('ad_images[]')) {
                const blob_img = img as Blob;
                const storageId = await ctx.storage.store(blob_img);
                ad_images.push(await ctx.storage.getUrl(storageId));

            }  
            

            const ENAppliance = {
                id: data.get('id'),
                created_by: 'kephothosolutions@gmail.com',//data.get('created_by'),
                name: data.get('name'),
                price_amount: parseFloat(data.get('price_amount')),
                video_link: data.get('video_link'),
                ad_images: ad_images,
                description: data.get('description'),
                location: data.get('location'),
                published: true,
                ad_phone_number: data.get('ad_phone_number'),
                ad_email: data.get('ad_email'),
                updated_at: new Date().toISOString()
            }

            response = await ctx.runMutation(api.eNAppliancesMutations.updateENAppliance, ENAppliance);


        } else {

            const ENAppliance = {
                id: data.get('id'),
                created_by: data.get('created_by'),
                name: data.get('name'),
                price_amount: parseFloat(data.get('price_amount')),
                video_link: data.get('video_link'),
                ad_images: [],
                description: data.get('description'),
                location: data.get('location'),
                published: true,
                ad_phone_number: data.get('ad_phone_number'),
                ad_email: data.get('ad_email'),
                updated_at: new Date().toISOString()
            }

            response = await ctx.runMutation(api.eNAppliancesMutations.updateENAppliance, ENAppliance);

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
