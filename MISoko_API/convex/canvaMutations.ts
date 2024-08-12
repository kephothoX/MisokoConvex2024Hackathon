import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';




export const addNewFolder = mutation({
  args : {
    canvaUserID: v.string(),
    canvaTeamID: v.string(), 
    folderName:  v.string(), 
    folderID: v.string()
  },
  handler: async(ctx, args) => {
    return await ctx.db.insert('canvaFolders',  args);
  }
});

export const addAsset = mutation({
  args : {
    canvaUserID: v.string(),
    canvaTeamID: v.string(),
    assetName:  v.string(), 
    assetID: v.string()
  },
  handler: async(ctx, args) => {
    return await ctx.db.insert('canvaAssets',  args);
  }
});


export const deleteCanvaFolder = mutation({
  args: { id: v.id("canvaFolders") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});

export const deleteCanvaAsset = mutation({
  args: { id: v.id("canvaAssets") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});


export const updateCanvaAsset = mutation({
  args : {
    id: v.string(),
    canvaUserID: v.string(),
    canvaTeamID: v.string(),
    assetName:  v.string(), 
    assetID: v.string()
  },
  handler: async (ctx, args) => {
    const id: any = args.id;
    
    return await ctx.db.patch(id, { 
      canvaUserID: args.canvaUserID,
      canvaTeamID: args.canvaTeamID,
      assetName:  args.assetName, 
      assetID: args.assetID
    });
  }
    
});
