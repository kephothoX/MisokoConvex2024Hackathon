import { httpAction } from './_generated/server';
import { api, internal } from './_generated/api';



export const newProfile = httpAction(async (ctx, request) => {
  let response;

  
  await request.formData().then(async (data: any) => {
    if (data.get('attachment')) {

      const storageId = await ctx.storage.store(data.get('attachment') as Blob);
      const storageURL = await ctx.storage.getUrl(storageId);

      const email: any = {
        email: data.get('email'),
      }

      let result = await ctx.runQuery(api.usersQueries.getUserProfileByEmail, email);

      if (result.length <= 0) {

        const values: any = {
          created_by: data.get('created_by'),
          username: data.get('username'),
          email: data.get('email'),
          date_of_birth: data.get('date_of_birth'),
          country: data.get('country'),
          phone_number: data.get('phone_number'),
          about: data.get('about'),
          hobbies: data.get('hobbies'),
          interests: data.get('interests'),
          social_image_url: data.get('social_image_url'),
          profile_thumbnail: storageURL,
          active: true,
          created_at: new Date().toISOString()

        }

        response = await ctx.runMutation(api.usersMutations.addNewProfile, values);

      } else {

        const values: any = {
          created_by: data.get('created_by'),
          username: data.get('username'),
          email: data.get('email'),
          date_of_birth: data.get('date_of_birth'),
          country: data.get('country'),
          phone_number: data.get('phone_number'),
          about: data.get('about'),
          hobbies: data.get('hobbies'),
          interests: data.get('interests'),
          social_image_url: data.get('social_image_url'),
          profile_thumbnail: 'No-File',
          id: result[0]._id,
          active: true,
          updated_at: new Date().toISOString()
        }

        response = await ctx.runMutation(api.usersMutations.updateUserProfile, values);
      }

    } else {

      const email: any = {
        email: data.get('email'),
      }

      let result = await ctx.runQuery(api.usersQueries.getUserProfileByEmail, email);

      if (result.length <= 0) {

        const values: any = {
          created_by: data.get('created_by'),
          username: data.get('username'),
          email: data.get('email'),
          date_of_birth: data.get('date_of_birth'),
          country: data.get('country'),
          phone_number: data.get('phone_number'),
          about: data.get('about'),
          hobbies: data.get('hobbies'),
          interests: data.get('interests'),
          social_image_url: data.get('social_image_url'),
          profile_thumbnail: 'No-File',
          active: true,
          created_at: new Date().toISOString()

        }

        response = await ctx.runMutation(api.usersMutations.addNewProfile, values);

      } else {

        const values: any = {
          created_by: data.get('created_by'),
          username: data.get('username'),
          email: data.get('email'),
          date_of_birth: data.get('date_of_birth'),
          country: data.get('country'),
          phone_number: data.get('phone_number'),
          about: data.get('about'),
          hobbies: data.get('hobbies'),
          interests: data.get('interests'),
          social_image_url: data.get('social_image_url'),
          profile_thumbnail: 'No-File',
          id: result[0]._id,
          active: true,
          updated_at: new Date().toISOString()

        }

        response = await ctx.runMutation(api.usersMutations.updateUserProfile, values);

      }
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


export const updateUserProfile = httpAction(async (ctx, request) => {
  let response;
  await request.formData().then(async (data) => {

    if (data.get('attachment')) {
      const storageId = await ctx.storage.store(data.get('attachment') as Blob);
      const storageURL = await ctx.storage.getUrl(storageId);

      const profile: any = {
        email: data.get('email'),
      }

      let result = await ctx.runQuery(api.usersQueries.getUserProfileByEmail, profile);
    
      if (result.length <= 0) {

        const values: any = {
          created_by: data.get('created_by'),
          username: data.get('username'),
          email: data.get('email'),
          date_of_birth: data.get('date_of_birth'),
          country: data.get('country'),
          phone_number: data.get('phone_number'),
          about: data.get('about'),
          hobbies: data.get('hobbies'),
          interests: data.get('interests'),
          social_image_url: data.get('social_image_url'),
          profile_thumbnail: storageURL,
          active: true,
          updated_at: new Date().toISOString()
        }

        response = await ctx.runMutation(api.usersMutations.addNewProfile, values);
        
      } else {

        const values: any = {
          created_by: data.get('created_by'),
          username: data.get('username'),
          email: data.get('email'),
          date_of_birth: data.get('date_of_birth'),
          country: data.get('country'),
          phone_number: data.get('phone_number'),
          about: data.get('about'),
          hobbies: data.get('hobbies'),
          interests: data.get('interests'),
          social_image_url: data.get('social_image_url'),
          profile_thumbnail: storageURL,
          id: result[0]._id,
          active: true,
          updated_at: new Date().toISOString()
        }

        response = await ctx.runMutation(api.usersMutations.updateUserProfile, values);
      }

    } else {

      const profile: any = {
        email: data.get('email')
      }

      let result = await ctx.runQuery(api.usersQueries.getUserProfileByEmail, profile);

      if (result.length <= 0) {

        const values: any = {
          created_by: data.get('created_by'),
          username: data.get('username'),
          email: data.get('email'),
          date_of_birth: data.get('date_of_birth'),
          country: data.get('country'),
          phone_number: data.get('phone_number'),
          about: data.get('about'),
          hobbies: data.get('hobbies'),
          interests: data.get('interests'),
          social_image_url: data.get('social_image_url'),
          profile_thumbnail: 'No-File',
          active: true,
          updated_at: new Date().toISOString()
        }

        response = await ctx.runMutation(api.usersMutations.addNewProfile, values);
        
      } else {

        const values: any = {
          created_by: data.get('created_by'),
          username: data.get('username'),
          email: data.get('email'),
          date_of_birth: data.get('date_of_birth'),
          country: data.get('country'),
          phone_number: data.get('phone_number'),
          about: data.get('about'),
          hobbies: data.get('hobbies'),
          interests: data.get('interests'),
          social_image_url: data.get('social_image_url'),
          profile_thumbnail: 'No-File',
          id: data.get('id'),
          active: true,
          updated_at: new Date().toISOString()
        }

        response = await ctx.runMutation(api.usersMutations.updateUserProfile, values); 

      }
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





export const getUserProfiles = httpAction(async (ctx) => {
  const profiles = await ctx.runQuery(api.usersQueries.getAllUserProfiles);

  return new Response(JSON.stringify(profiles), {
    headers: new Headers({
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});

export const updateUser = httpAction(async (ctx, request) => {
  const values = JSON.parse(await request.text());

  let response;

  if ((await ctx.runQuery(api.usersQueries.getUserByEmail, values)).length <= 0) {

    const user: any = {
      email: values.email(),
      given_name: values.given_name,
      family_name: values.family_name,
      active: true,      
      updated_at: new Date().toISOString()
    }
    response = await ctx.runMutation(api.usersMutations.updateUser, user);

  } else {
    const user = {
      email: values.email(),
      given_name: values.given_name,
      family_name: values.family_name,
      active: true,
      created_at: new Date().toISOString()
    }
    response = await ctx.runMutation(api.usersMutations.addNewUser, user);

  }


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




/*export const addSAML2Sessions = httpAction(async(ctx, request) => {
  const response = await ctx.runMutation(api.usersMutations.addSAML2Sessions, JSON.stringify(JSON.parse(await request.text())));

  return new Response(JSON.stringify(response), {
    headers: new Headers({
        "Access-Control-Allow-Origin": process.env.CLIENT_ORIGIN!,
         "content-type": "application/json"
      }),

    status: 200,
  });
});*/




export const newUser = httpAction(async (ctx, request) => {
  const values = JSON.parse(await request.text());
  let response;

  if ((await ctx.runQuery(api.usersQueries.getUserByEmail, values)).length <= 0) {
    const user = {
      email: values.email,
      given_name: values.given_name,
      family_name: values.family_name,
      active: true,
      created_at: new Date().toISOString()
    }
    response = await ctx.runMutation(api.usersMutations.addNewUser, user);

  } else {

    const user = await ctx.runQuery(api.usersQueries.getUserByEmail, values)

    const userData: any = {
      id: user[0]._id,
      email: values.email,
      given_name: values.given_name,
      family_name: values.family_name,
      active: true,
      updated_at: new Date().toISOString()
    }
    response = await ctx.runMutation(api.usersMutations.updateUser, userData);

  }


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

export const getUser = httpAction(async (ctx, request) => {
  const values = JSON.parse(await request.text());

  const response = await ctx.runQuery(api.usersQueries.getUser, values)



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

export const getUserProfile = httpAction(async (ctx, request) => {
  const values = JSON.parse(await request.text());
  console.log(request.headers);

  const response = await ctx.runQuery(api.usersQueries.getUserProfile, values)


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

export const getUserProfileById = httpAction(async (ctx, request) => {
  const values = JSON.parse(await request.text());

  const response = await ctx.runQuery(api.usersQueries.getUserProfileById, values)


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


export const getUserProfileByEmail = httpAction(async (ctx, request) => {
  const values =  JSON.parse(await request.text());  

  const response = await ctx.runQuery(api.usersQueries.getUserProfileByEmail, values);   
   
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



