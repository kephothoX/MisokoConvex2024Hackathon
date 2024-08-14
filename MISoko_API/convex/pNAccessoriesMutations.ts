import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';



export const addNewPNAccessory = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('pNAccessories',  args);
  }
});



export const updatePNAccessories = mutation({
  args: { 
    id: v.id('pNAccessories'), 
    name: v.string(),
    created_at: v.string(),
    updated_at: v.string(),
    description: v.string(),
    specifications: v.string(),
    price_amount: v.number(),
    ad_images: v.array(v.string()),
    video_link: v.string(),
    published: v.boolean(),
    location: v.string(),
    ad_phone_number: v.string(),
    ad_email: v.string(),
    created_by: v.string()
  },

  handler: async (ctx, args) => {
    const id: any  = args;
    
    return await ctx.db.patch(id, {
      name: args.name,
      created_at: args.created_at,
      updated_at: args.updated_at,
      description: args.description,
      specifications: args.specifications,
      price_amount: args.price_amount,
      ad_images: args.ad_images,
      video_link: args.video_link,
      published: args.published,
      ad_phone_number: args.ad_phone_number,
      ad_email: args.ad_email,
      location: args.location,
      created_by: args.created_by
    });
    
  },
});

