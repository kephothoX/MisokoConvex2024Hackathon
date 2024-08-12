import { mutation, internalMutation } from "./_generated/server";
import { v } from 'convex/values';


export const newLNProperty = mutation({
  handler: async(ctx, args: any) => {
    console.log(args);

    
    return await ctx.db.insert('lNProperties',  args);
  }
});

export const updateLNProperty = mutation({
    args: {
        id: v.id('lNProperties'),
        created_by: v.string(),
        name: v.string(),
        description: v.string(),
        price_amount: v.number(),
        published: v.boolean(),
        video_link: v.string(),
        ad_phone_number: v.string(),
        ad_email: v.string(),
        ad_images: v.array(v.string()),
        location: v.string(),
        created_at: v.optional(v.string()),
        updated_at: v.optional(v.string()),
    },

    handler: async (ctx, args) => {
        const id: any = args;

        return await ctx.db.patch(id, {
            created_by: args.created_by,
            name: args.name,
            description: args.description,
            price_amount: args.price_amount,
            published: args.published,
            video_link: args.video_link,
            ad_phone_number: args.ad_phone_number,
            ad_email: args.ad_email,
            ad_images: args.ad_images,
            location: args.location,
            created_at: args.created_at,
            updated_at: args.updated_at,
        });

    },
});
