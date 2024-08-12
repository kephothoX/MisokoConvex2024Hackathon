import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';




export const getAllUserProfiles = query({
  handler: async (ctx) => {
    return await ctx.db.query('usersProfiles').collect();   
  },
});

export const getAllUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query('users').collect();   
  },
});

export const getUser = query({ 
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('users')
  .filter((q) => q.eq(q.field('email'), args.email))
  .collect()
  },
});

export const getUserProfile = query({
  handler: async (ctx, args: any) => {

    console.log(args);
    return await ctx.db
      .query('usersProfiles')
      .withIndex('by_created_by')
      .filter((q) => q.eq(q.field('created_by'), args.created_by))
      .collect()
  },
});


export const getUserProfileByEmail = query({
  handler: async (ctx, args: any) => {
    console.log(args);
    return await ctx.db
    .query('usersProfiles')
    .withIndex('by_email')
    .filter((q) => q.eq(q.field('email'), args.email))
    .collect()
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

export const getUserProfileById = query({ 
  handler: async (ctx, args: any) => {
    return await ctx.db
      .query('usersProfiles')
  .filter((q) => q.eq(q.field('_id'), args.id))
  .collect()
  },
});

