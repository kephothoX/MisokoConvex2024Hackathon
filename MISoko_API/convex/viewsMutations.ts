import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';

export const newAdView = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('adViews',  args);
  }
});

export const updateAdView = mutation({
  args: { 
    id: v.id('adComments'), 
    ad_id: v.string(),
    created_by: v.string(),
    created_at: v.optional(v.string()),
    updated_at: v.string(),
  },

  handler: async (ctx, args) => {
    const id: any  = args;
    
    return await ctx.db.patch(id, { 
      created_by:  args.created_by, 
      ad_id: args.ad_id, 
      updated_at: args.updated_at,
    });
    
  },
});

