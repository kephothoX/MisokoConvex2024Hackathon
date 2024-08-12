import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';


export const getAllAutoMobiles = query({
  handler: async (ctx) => {
    return await ctx.db.query('autoMobiles')
        .withIndex('by_make')
        .collect();    
  }    
});

export const getAutoMobiles = query({
  handler: async (ctx) => {
    return await ctx.db.query('autoMobiles')
        .withIndex('by_make')
        .take(5)   
  }    
});

export const getAutoMobileById = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('autoMobiles')
      .filter((q) => q.eq(q.field('_id'), args.id))
      .collect()
  },
});

