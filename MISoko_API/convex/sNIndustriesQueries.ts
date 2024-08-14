import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';


export const getAllSNIndustries= query({
  handler: async (ctx) => {
    return await ctx.db.query('sNIndustries')
        .withIndex('by_name')
        .collect();    
  }    
});

export const getSNIndustryById = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('sNIndustries')
      .filter((q) => q.eq(q.field('_id'), args.id))
      .collect()
  },
});

export const getSNIndustries = query({
  handler: async (ctx) => {
    return await ctx.db.query('sNIndustries')
        .withIndex('by_name')
        .take(5)   
  }    
});



