import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';




export const newAutoMobile = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('autoMobiles',  args);
  }
});


export const updateAutoMobile = mutation({
  args: { 
    id: v.id('eNAppliances'), 
     make: v.string(),
    model: v.string(),
    chassis_number: v.string(),
    category: v.string(),
    engine: v.string(),
    yom: v.string(),
    transmission: v.string(),
    body_color: v.string(),
    interior: v.string(),
    key_features: v.string(),
    description: v.string(),
    video_link: v.string(),
    ad_images: v.array(v.string()),
    price_amount: v.number(),
    published: v.boolean(),
    ad_phone_number: v.string(),
    ad_email: v.string(),    
    location: v.string(),
    transaction_type: v.string(),
    updated_at: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const id: any  = args;
    
    return await ctx.db.patch(id, {
      make: args.make,
      model: args.model,
      chassis_number: args.chassis_number,
      category: args.category,
      engine: args.engine,
      yom: args.yom,
      transmission: args.transmission,
      body_color: args.body_color,
      interior: args.interior,
      key_features: args.key_features,
      description: args.description,
      video_link: args.video_link,
      ad_images: args.ad_images,
      price_amount: args.price_amount,
      published: args.published,
      ad_phone_number: args.ad_phone_number,
      ad_email: args.ad_email,
      location: args.location,
      transaction_type: args.transaction_type,
      updated_at: args.updated_at,
    });

  },
});

