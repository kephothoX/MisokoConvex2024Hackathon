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

export const searchSNIndustries = query({
  args: { searchTerm: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query('sNIndustries')
        .withSearchIndex('name', (q) => q.search("name", args.searchTerm))
        .collect()   
  }    
});



export const getSimilarSNIndustries = query({
  args: { embeddings: v.array(v.float64()) },
  handler: async (ctx, args) => {
    return await ctx.db.query('sNIndustries')
      .filter((q) => q.eq(q.field('embeddings'), args.embeddings))
      .collect()
  }
});



