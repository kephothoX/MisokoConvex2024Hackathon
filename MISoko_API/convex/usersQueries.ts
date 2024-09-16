import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';


export const getAllUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query('users').collect();   
  },
});

export const getUser = query({
  args: { id: v.string() }, 
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('users')
  .filter((q) => q.eq(q.field('_id'), args.id))
  .collect();
  },
});


export const getUserByEmail = query({
  handler: async (ctx, args: any) => {
    return await ctx.db
    .query('users')
    .withIndex('email')
  .filter((q) => q.eq(q.field('email'), args.email))
  .collect()
  },
});


