import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';

export const newAdComment = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('adComments',  args);
  }
});

export const updateAdComment = mutation({
  args: { 
    id: v.id('adComments'), 
    ad_id: v.string(),
    comment: v.string(),
    created_by: v.string()
  },

  handler: async (ctx, args) => {
    const id: any  = args;
    
    return await ctx.db.patch(id, { 
      created_by:  args.created_by, 
      ad_id: args.ad_id, 
      comment: args.comment 
    });
    
  },
});

