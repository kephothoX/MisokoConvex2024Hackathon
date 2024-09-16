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
    description: v.string(),
    price_amount: v.number(),
    ad_images: v.array(v.string()),
    video_link: v.string(),
    published: v.boolean(),
    ad_phone_number:  v.string(),
    ad_email: v.string(),
    location: v.string(),
    embeddings: v.array(v.float64()),
    created_by: v.string()
  },

  handler: async (ctx, args) => {
    const id: any  = args;
    
    return await ctx.db.patch(id, {
      name: args.name,
      description: args.description,
      price_amount: args.price_amount,
      ad_images: args.ad_images,
      video_link: args.video_link,
      published: args.published,
      ad_phone_number: args.ad_phone_number,
      ad_email: args.ad_email,
      location: args.location,
      embeddings: args.embeddings,
      created_by: args.created_by
    });
    
  },
});


