import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';


export const newSNIndustry = mutation({
  handler: async(ctx, args: any) => {
    console.log(args);

    
    return await ctx.db.insert('sNIndustries',  args);
  }
});

export const updateSNIndustry = mutation({
  args: { 
    id: v.id('sNIndustries'), 
    name: v.string(),
    created_at: v.string(),
    updated_at: v.string(),
    description: v.string(),
    price_amount: v.number(),
    ad_images: v.array(v.string()),
    video_link: v.string(),
    published: v.boolean(),
    phone_number: v.string(),
    location: v.string(),
    created_by: v.string()
  },

  handler: async (ctx, args) => {
    const id: any  = args;
    
    return await ctx.db.patch(id, {
      name: args.name,
      created_at: args.created_at,
      updated_at: args.updated_at,
      description: args.description,
      price_amount: args.price_amount,
      ad_images: args.ad_images,
      video_link: args.video_link,
      published: args.published,
      phone_number: args.phone_number,
      location: args.location,
      created_by: args.created_by
    });
    
  },
});


