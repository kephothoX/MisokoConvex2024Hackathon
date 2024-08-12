import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';


export const addNewUser = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('users',  args);
  }
});


export const addNewProfile = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('usersProfiles',  args);
  }
});



export const updateUser = mutation({
  args: { 
    id: v.id('users'),
    email: v.string(), 
    family_name: v.string(),  
    given_name: v.string(), 
    updated_at: v.optional(v.string()), 
    active: v.boolean()
  },

  handler: async (ctx, args: any) => {
    const id: any  = args.id;
    
    await ctx.db.patch(id, {
      family_name: args.family_name, 
      given_name: args.given_name, 
      email: args.email, 
      updated_at: args.updated_at, 
      active: args.active 
    });

    return id;
    
  },
});



export const updateUserProfile = mutation({
  args: { id: v.optional(v.id('usersProfiles')), 
    created_by: v.string(),
    about: v.string(),
    country: v.string(),
    date_of_birth: v.string(),
    email: v.string(),
    hobbies: v.string(),
    interests: v.string(),
    phone_number: v.string(),
    profile_thumbnail: v.string(),
    social_image_url: v.optional(v.string()),
    username: v.string(),
    updated_at: v.optional(v.string()),
    active: v.boolean(),
  },
  handler: async (ctx, args) => {
    console.log(args);
    
    const id: any = args.id;

    await ctx.db.patch(id, {
      created_by: args.created_by,
      about: args.about,
      country: args.country,
      date_of_birth: args.date_of_birth,
      email: args.email,
      hobbies: args.hobbies,
      interests: args.interests,
      phone_number: args.phone_number,
      profile_thumbnail: args.profile_thumbnail,
      social_image_url: args.social_image_url,
      username: args.username,
      updated_at: args.updated_at,
      active: args.active,
    });

    return id;
    
  },
});

