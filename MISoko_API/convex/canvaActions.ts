"use node"

import dotenv from 'dotenv/config';
import { action } from './_generated/server';
import { v } from 'convex/values';
import { api, internal } from './_generated/api';


import * as  url from "url";
import * as  path from "path";
import * as  os from "os";
import * as  fs from "fs";
import * as Busboy from "busboy";
import axios from 'axios';


import * as crypto from "crypto";
import { Readable } from 'stream';


//const codeVerifier = crypto.randomBytes(96).toString("base64url");
//const codeChallenge = crypto.createHash("sha256").update(codeVerifier).digest("base64url");

const codeVerifier = process.env.CANVA_CODE_VERIFIER;

const codeChallenge = process.env.CANVA_CODE_CHALLENGE;


export const genAuthURL = action({
  handler: async (ctx) => {

    return `https://www.canva.com/api/oauth/authorize?code_challenge_method=s256&response_type=code&client_id=OC-AZETAQLqjrMr&scope=app:read%20design:content:read%20design:meta:read%20design:content:write%20design:permission:read%20design:permission:write%20folder:read%20folder:write%20folder:permission:read%20folder:permission:write%20asset:read%20asset:write%20comment:read%20comment:write%20brandtemplate:meta:read%20brandtemplate:content:read%20profile:read&code_challenge=${codeChallenge}`;

  }
});



export const genRefreshToken = action({
  args: { code: v.string() },
  handler: async (ctx, args) => {
    let res;

    await axios({
      url: "https://api.canva.com/rest/v1/oauth/token",
      method: "POST",
      headers: {
        "Authorization": `Basic ${process.env.CANVA_BASIC_AUTH}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: new url.URLSearchParams(`grant_type=authorization_code&code_verifier=${codeVerifier}&code=${args.code}`)

    }).then((resp) => {

      res = resp.data;

    }).catch(err => console.error(err));


    return res;
  }
});


export const genAccessToken = action({
  args: { refreshToken: v.string() },
  handler: async (ctx, args) => {
    let res;
    console.log(args);

    await axios({
      url: "https://api.canva.com/rest/v1/oauth/token",
      method: "POST",
      headers: {
        "Authorization": `Basic ${process.env.CANVA_BASIC_AUTH}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: new url.URLSearchParams(`grant_type=refresh_token&refresh_token=${args.refreshToken}`)

    }).then((resp) => {
      res = resp.data;
      console.log(res);

    }).catch(err => console.error(err));

    return res;
  }
});

export const inspectAccessToken = action({
  args: { accessToken: v.string() },
  handler: async (ctx, args) => {
    let res;

    await axios({
      url: "https://api.canva.com/rest/v1/oauth/introspect",
      method: "POST",
      headers: {
        "Authorization": `Basic ${process.env.CANVA_BASIC_AUTH}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: new url.URLSearchParams(`token=${args.accessToken}`)

    }).then((resp) => {
      res = resp.data;

    }).catch(err => console.error(err));

    return res;
  }
});


export const revokeRefreshToken = action({
  args: { refreshToken: v.string() },

  handler: async (ctx, args) => {
    let res;

    await axios({
      url: "https://api.canva.com/rest/v1/oauth/revoke",
      method: "POST",
      headers: {
        "Authorization": `Basic ${process.env.CANVA_BASIC_AUTH}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: new url.URLSearchParams(`token=${args.refreshToken}`)

    }).then(async (resp) => {
      res = resp.data;


    }).catch(err => console.error(err));

    return res;
  }
});

export const getUserProfile = action({
  args: { accessToken: v.string() },
  handler: async (ctx, args) => {
    let res;

    await axios({
      url: "https://api.canva.com/rest/v1/users/me/profile",
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((resp) => {
      res = resp.data;


    }).catch(err => console.error(err));

    return res;
  }
});


export const getUserID = action({
  args: { accessToken: v.string() },
  handler: async (ctx, args) => {
    let res;

    await axios({
      url: "https://api.canva.com/rest/v1/users/me",
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((resp) => {
      res = resp.data;


    }).catch(err => console.error(err));

    return res;
  }
});


export const uploadAsset = action({
  handler: async (ctx, args) => {
    let response;

    await axios({
      url: `${args.canvaAsset}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: 'stream'

    }).then(async (resp) => {

      await axios({
        url: "https://api.canva.com/rest/v1/asset-uploads",
        method: "POST",
        headers: {
          "Asset-Upload-Metadata": JSON.stringify({ "name_base64": `${Buffer.from(`${args.canvaAssetName}`).toString('base64')}` }),
          "Authorization": `Bearer ${args.accessToken}`,
          "Content-Type": "application/octet-stream",
        },
        data: resp.data,

      }).then(async (res) => {
        response = res.data;

        const assetData = {
          canvaUserID: `${args.canvaUserID}`,
          canvaTeamID: `${args.canvaTeamID}`,
          assetName: `${args.canvaAssetName}`,
          assetID: `${res.data.job.id}`
        };


        await ctx.runMutation(api.canvaMutations.addAsset, assetData);
        await ctx.storage.delete(`${args.storageId}`);


      }).catch(err => console.error(err));

    }).catch(err => console.error(err));

    return response;
  }
});


export const getAssets = action({
  handler: async (ctx, args) => {

    axios({
      url: "https://api.canva.com/rest/v1/assets",
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },

    }).then(async (resp) => {

      return resp.data;


    }).catch(err => console.error(err));

  }
});


/*

export const geminiAsset = action({
  handler: async (ctx, args) => {

    const busboy = Busboy({ headers: request.headers });
    const tmpdir = os.tmpdir();
    const fields: any = {};
    const uploads: any = {};


    busboy.on('field', (fieldname: any, val: any) => {
      fields[fieldname] = val;
    });

    const fileWrites: any[] = [];
    busboy.on('file', (fieldname: any, file: any, { filename }: any) => {
      const filepath = path.join(tmpdir, filename);
      uploads[fieldname] = filepath;

      const writeStream = fs.createWriteStream(filepath);
      file.pipe(writeStream);


      const promise = new Promise((resolve, reject) => {
        file.on('end', () => {
          writeStream.end();
        });
        writeStream.on('close', resolve);
        writeStream.on('error', reject);
      });
      fileWrites.push(promise);
    });

    busboy.on('finish', async () => {
      await Promise.all(fileWrites);


      for (const file in uploads) {
        fs.unlinkSync(uploads[file]);
      }
      response.send();
    });

    busboy.end(request.rawBody);

    const result = await model.generateContent([
      "What is in this photo?",
      {
        inlineData: {
          data: Buffer.from(fs.readFileSync(`${uploads['attachment']}`)).toString("base64"),
          mimeType: 'image/png'
        }
      }
    ]
  );
  console.log(result.response.text());
  }
});

*/


export const getCanvaAsset = action({
  args: {
    accessToken: v.string(),
    assetID: v.string(),
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: `https://api.canva.com/rest/v1/assets/${args.assetID}`,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {
      res = await resp.data;

    }).catch(err => console.error(err));


    return res;
  }
});

export const updateCanvaAsset = action({
  args: {
    accessToken: v.string(),
    assetID: v.string(),
    name: v.string(),
    tags: v.optional(v.array(v.string()))
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: `https://api.canva.com/rest/v1/assets/${args.assetID}`,
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        name: args.name,
        tags: args.tags
      }),
    }).then(async (resp) => {
      res = await resp.data;

      const asset = await ctx.runQuery(api.canvaQueries.getCanvaAssetById, { assetID: args.assetID });
      await ctx.runMutation(api.canvaMutations.updateCanvaAsset, {
        id: asset[0]._id,
        canvaUserID: asset[0].canvaUserID,
        canvaTeamID: asset[0].canvaTeamID,
        assetName: args.name,
        assetID: args.assetID

      });

    }).catch(err => console.error(err));


    return res;
  }
});


export const deleteCanvaAsset = action({
  args: {
    accessToken: v.string(),
    assetID: v.string(),
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: `https://api.canva.com/rest/v1/assets/${args.assetID}`,
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {
      res = await resp.data;
      
      const asset = await ctx.runQuery(api.canvaQueries.getCanvaAssetById, { assetID: args.assetID });
      await ctx.runMutation(api.canvaMutations.deleteCanvaAsset, { id: asset[0]._id });

    }).catch(err => console.error(err));


    return res;
  }
});



export const newCanvaDesign = action({
  handler: async (ctx, args) => {
    let res;

    await axios({
      url: "https://api.canva.com/rest/v1/designs",
      method: "POST",
      headers: {
        "Authorization": `Bearer ${ args.accessToken}`,
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        design_type: {
          type:  "custom",
          width: `${ args.width }`,
          height: `${ args.height }`,
        },
        title: `${ args.title }`,
        assetID: `${ args.assetId }`
      }),
    }).then(async (resp) => {

      res = resp.data;

    }).catch(err => console.error(err));


    return res;
  }
});



export const getCanvaBrandTemplates = action({
  args: { accessToken: v.string() },
  handler: async (ctx, args) => {
    let res;

    axios({
      url: "https://api.canva.com/rest/v1/brand-templates",
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {

      res = resp.data;

    }).catch(err => console.error(err));

    return res;
  }
});


export const createNewCanvaFolder = action({
  args: {
    accessToken: v.string(),
    canvaUserID: v.string(),
    canvaTeamID: v.string(),
    folderName: v.string()
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: "https://api.canva.com/rest/v1/folders",
      method: "POST",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        "name": `${args.folderName}`,
        "parent_folder_id": "root"
      })
    }).then(async (resp) => {

      const data = {
        canvaUserID: `${args.canvaUserID}`,
        canvaTeamID: `${args.canvaTeamID}`,
        folderName: resp.data.folder.name,
        folderID: resp.data.folder.id
      }

      await ctx.runMutation(api.canvaMutations.addNewFolder, data)

      res = await resp.data;

    }).catch(err => console.error(err));


    return res;
  }
});


export const getCanvaFolder = action({
  args: {
    accessToken: v.string(),
    folderID: v.string(),
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: `https://api.canva.com/rest/v1/folders/${args.folderID}`,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {
      res = await resp.data;

    }).catch(err => console.error(err));


    return res;
  }
});

export const getCanvaFolderItems = action({
  args: {
    accessToken: v.string(),
    folderID: v.string(),
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: `https://api.canva.com/rest/v1/folders/${args.folderID}/items`,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {
      res = await resp.data;

    }).catch(err => console.error(err));


    return res;
  }
});




export const updateCanvaFolder = action({
  args: {
    accessToken: v.string(),
    folderID: v.string(),
    folderName: v.string()
  },
  handler: async (ctx, args) => {
    let res;

    await axios({
      url: `https://api.canva.com/rest/v1/folders/${args.folderID}`,
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        "name": `${args.folderName}`,
        "parent_folder_id": "root"
      })
    }).then(async (resp) => {

      res = await resp.data;

    }).catch(err => console.error(err));


    return res;
  }
});

export const deleteCanvaFolder = action({
  args: {
    accessToken: v.string(),
    folderID: v.string(),
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: `https://api.canva.com/rest/v1/folders/${args.folderID}`,
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {
      res = await resp.data;

      const folder = await ctx.runQuery(api.canvaQueries.getCanvaFolderById, { folderID: args.folderID })
      await ctx.runMutation(api.canvaMutations.deleteCanvaFolder, { id: folder[0]._id });

    }).catch(err => console.error(err));


    return res;
  }
});

export const getCanvaDesign = action({
  args: {
    accessToken: v.string(),
    designID: v.string(),
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: `https://api.canva.com/rest/v1/designs/${args.designID}`,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {
      res = await resp.data;

      console.log(res);

    }).catch(err => console.error(err));


    return res;
  }
});

export const getCanvaDesigns = action({
  args: {
    accessToken: v.string(),
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: `https://api.canva.com/rest/v1/designs`,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {
      res = await resp.data;

      console.log(res);

    }).catch(err => console.error(err));


    return res;
  }
});

/*
export const getCanvaBrandTemplates = action({
  args: { accessToken: v.string() },
  handler: async (ctx, args) => {
    let res;

    axios({
      url: "https://api.canva.com/rest/v1/brand-templates",
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {

      res = resp.data;

    }).catch(err => console.error(err));

    return res;
  }
});
*/


export const getCanvaBrandDatasetTemplates = action({
  args: { accessToken: v.string() },
  handler: async (ctx, args) => {
    let res;

    axios({
      url: "https://api.canva.com/rest/v1/brand-templates",
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accessToken}`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {

      res = resp.data;

    }).catch(err => console.error(err));

    return res;
  }
});



/*
export const newCanvaDesign = action({
  args: {
    accessToken: v.string(),
    folderID: v.string(),
  },
  handler: async (ctx, args) => {
    let res;


    await axios({
      url: `https://api.canva.com/rest/v1/folders/${ args.folderID }`,
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${ args.accessToken }`,
        "Content-Type": "application/json"
      }
    }).then(async (resp) => {
      res =  await resp.data;

      console.log(res);

    }).catch(err => console.error(err));


    return res;
  }  
});

*/


/*
export const  generateE = action({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const embeddingModel = geminiAI.getGenerativeModel({ model: "embedding-001"});

    const result = await embeddingModel.embedContent(args.text);
    const embedding = result.embedding;

  
    return embedding.values;
  }
});
*/
