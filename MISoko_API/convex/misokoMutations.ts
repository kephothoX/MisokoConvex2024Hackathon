import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';


export const newPostView = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('adViews',  args);
  }
});




/*export const addSAML2Sessions = mutation({
  handler: async(ctx, args: any) => {
    return await ctx.db.insert('SAML2Sessions',  args);
  }
});*/


/*

export const addNewAccessToken = mutation({
  args : { 
    access_token:  v.string(), 
    expires_in: v.number(), 
    id_token: v.string(), 
    scope: v.string(), 
    token_type: v.string() 
  },
  handler: async(ctx, args) => {
    return await ctx.db.insert('accessTokens',  args);
  }
});

*/
