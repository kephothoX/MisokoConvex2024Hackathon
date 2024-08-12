import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';


export const getCommentsPerAd = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
    .query('adComments')
    .withIndex('by_ad_id')
    .filter((q) => q.eq(q.field('ad_id'), args.post_id))
    .collect()
  
  },
});


