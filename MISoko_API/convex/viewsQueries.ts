import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';


export const getViewsPerAd = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
    .query('adViews')
    .withIndex('by_ad_id')
    .filter((q) => q.eq(q.field('ad_id'), args.ad_id))
    .collect()
  
  },
});


