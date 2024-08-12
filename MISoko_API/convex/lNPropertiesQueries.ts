import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';


export const getAllLNProperties = query({
  handler: async (ctx) => {
    return await ctx.db.query('lNProperties')
        .withIndex('by_name')
        .collect();    
  }    
});

export const getLNProperties = query({
  handler: async (ctx) => {
    return await ctx.db.query('lNProperties')
        .withIndex('by_name')
        .take(5)   
  }    
});

export const getLNPropertyById = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('lNProperties')
      .filter((q) => q.eq(q.field('_id'), args.id))
      .collect()
  },
});