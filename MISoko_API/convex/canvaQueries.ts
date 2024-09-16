import { query, internalQuery } from './_generated/server';
import { v } from 'convex/values';



export const getCanvaFolders = query({
  args: { canvaUserID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query('canvaFolders')
    .withIndex('canvaUserID')
    .filter((q) => q.eq(q.field('canvaUserID'), args.canvaUserID))
    .collect()
  }
});

export const getCanvaFolderById = query({
  args: { folderID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query('canvaFolders')
    .withIndex('folderID')
    .filter((q) => q.eq(q.field('folderID'), args.folderID))
    .collect()
  }
});

export const getCanvaAssetById = query({
  args: { assetID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query('canvaAssets')
    .withIndex('assetID')
    .filter((q) => q.eq(q.field('assetID'), args.assetID))
    .collect()
  }
});


export const getCanvaAssets = query({
  args: { canvaUserID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query('canvaAssets')
    .withIndex('canvaUserID')
    .filter((q) => q.eq(q.field('canvaUserID'), args.canvaUserID))
    .collect()
  }
});