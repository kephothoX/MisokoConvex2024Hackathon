import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';

export const checkIfAdIsViewed = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('adViews')
  .filter((q) => q.eq(q.field('view_id'), args.view_id))
  .collect()
  },
});

export const countAdViews = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('adViews')
      .withIndex('by_view_id')
      .filter((q) => q.eq(q.field('view_id'), args.view_id))
     .collect()
  },
});


