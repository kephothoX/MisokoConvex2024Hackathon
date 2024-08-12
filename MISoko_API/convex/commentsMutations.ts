import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';

export const newComment = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('adComments',  args);
  }
});

export const updateComment = mutation({
  args: { 
    id: v.id('adComments'), 
    ad_id: v.string(),
    comment: v.string(),
    created_by: v.string(),
    created_at: v.optional(v.string()),
    updated_at: v.string(),
    published: v.boolean()
  },

  handler: async (ctx, args) => {
    const id: any  = args;
    
    return await ctx.db.patch(id, { 
      created_by:  args.created_by, 
      ad_id: args.ad_id, 
      comment: args.comment, 
      updated_at: args.updated_at,
      published: args.published 
    });
    
  },
});

