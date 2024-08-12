import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';



export const getAllENAppliances = query({
  handler: async (ctx) => {
    return await ctx.db.query('eNAppliances')
        .withIndex('by_name')
        .collect();    
  }    
});

export const getENAppliances = query({
  handler: async (ctx) => {
    return await ctx.db.query('eNAppliances')
        .withIndex('by_name')
        .take(5)   
  }    
});

export const getENApplianceById = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('eNAppliances')
      .filter((q) => q.eq(q.field('_id'), args.id))
      .collect()
  },
});



