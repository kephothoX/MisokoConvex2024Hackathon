import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';



export const getAllPNAccessories = query({
  handler: async (ctx) => {
    return await ctx.db.query('pNAccessories')
        .withIndex('by_name')
        .collect();    
  }    
});

export const getPNAccessories = query({
  handler: async (ctx) => {
    return await ctx.db.query('pNAccessories')
        .withIndex('by_name')
        .take(5)   
  }    
});

export const getPNAccessoryById = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('pNAccessories')
      .filter((q) => q.eq(q.field('_id'), args.id))
      .collect()
  },
});


