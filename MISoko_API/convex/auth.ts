
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import Resend from "@auth/core/providers/resend";
import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { httpAction, action, query } from "./_generated/server";
import { DataModel } from "./_generated/dataModel";
import GitLab from "@auth/core/providers/gitlab";




export const { auth, signIn, signOut, store } = convexAuth({
  providers: [
    GitHub({
      profile(githubProfile, tokens) {
        return {
          //id: githubProfile.id,
          name: githubProfile.name,
          email: githubProfile.email,
          //image: githubProfile.picture,
          githubId: githubProfile.id,
        };
      },
    }),
    GitLab({
      profile(gitlabProfile, tokens) {
        return {
          //id: gitlabProfile.id,
          name: gitlabProfile.name,
          email: gitlabProfile.email,
          //image: gitlabProfile.picture,
          githubId: gitlabProfile.id,
        };
      },
    }),
    Google,
    Password,
    //Password({ id: "password-with-reset", reset: ResendOTPPasswordReset }),
    /*Password({
      id: "password-code",
      reset: ResendOTPPasswordReset,
      verify: ResendOTP,
    }),*/
    // This one only makes sense with routing, ignore for now:
    Password({ id: "password-link", verify: Resend }),
  ],
  /*callbacks: {
    async createOrUpdateUser(ctx, args) {

      console.log(args);

      if (args.existingUserId) {
        // Optionally merge updated fields into the existing user object here
        return args.existingUserId;
      }
 
      // Implement your own account linking logic:
      const  findByEmail = { email:  `${ args.profile.email }` };

      const existingUser = await findUserByEmail(ctx,  findByEmail );

      console.log(existingUser);

      if (existingUser) return existingUser._id;
 
      // Implement your own user creation:
      return ctx.db.insert("users", {

        

      });
      console.log('Am Here...');
    },
  } */
});


export const githubCallback = httpAction(async (ctx, request) => {
  const values = JSON.parse(await request.text());
  console.log(values)

  const response = {}; //await ctx.runQuery(api.usersQueries.getUser, values)



  return new Response(JSON.stringify(response), {
    headers: new Headers({
       'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',   
        Vary: 'origin',
      }),

    status: 200,
  });
});


const  findUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return  await ctx.db
    .query('users')
    .withIndex('email')
  .filter((q) => q.eq(q.field('email'), args.email ))
  .collect()
  }
});
