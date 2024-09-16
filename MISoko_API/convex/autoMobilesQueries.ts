import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';


export const getAllAutoMobiles = query({
  handler: async (ctx) => {
    return await ctx.db.query('autoMobiles')
        .collect();    
  }    
});

export const getAutoMobiles = query({
  handler: async (ctx) => {
    return await ctx.db.query('autoMobiles')
        .take(5)   
  }    
});

export const searchAutoMobiles = query({
  args: { searchTerm: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query('autoMobiles')
        .withSearchIndex('make', (q) => q.search("make", args.searchTerm))
        .collect()
  }    
});

export const getAutoMobilesByModel = query({
  handler: async (ctx, args) => {
    return await ctx.db.query('autoMobiles')
        .withIndex('by_make')
        .take(5)   
  }    
});

export const getAutoMobileById = query({
  args: { id: v.string() },
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('autoMobiles')
      .filter((q) => q.eq(q.field('_id'), args.id))
      .collect()
  },
});

export const getSimilarAutoMobiles = query({
  args: { embeddings: v.array(v.float64()) },
  handler: async (ctx, args) => {
    return await ctx.db.query('autoMobiles')
      .filter((q) => q.eq(q.field('embeddings'), args.embeddings))
      .collect()
  }
});



