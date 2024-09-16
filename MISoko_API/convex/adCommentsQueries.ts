import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';


export const getCommentsPerAd = query({
  args: { ad_id: v.string() },
  handler: async (ctx, args: any) => {
    return await ctx.db
    .query('adComments')
    .withIndex('ad_id')
    .filter((q) => q.eq(q.field('ad_id'), args.ad_id))
    .collect()
  
  },
});


