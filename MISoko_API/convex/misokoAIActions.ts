'use node';

import 'dotenv/config';
import { action } from './_generated/server';
import { v } from 'convex/values';
import { api } from './_generated/api';
import { GoogleGenerativeAI } from '@google/generative-ai';


const genAI = new GoogleGenerativeAI(`${ process.env.GEMINI_API_KEY }`);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


function TextFormatting(text: string) {
  text.replace(/\_(.+?)_\|/g, '')
   text.replace(/\*\*(.+?)\*\*/g, '')
  return text
}


export const generateContent = action({
  args: { 
    prompt: v.string()
  },
  handler: async (ctx, args) => {
    const result = await model.generateContent(args.prompt);
    const response = result.response;

    return response.text();
  }
});


export const generateContentWithContext = action({
  args: { 
    prompt: v.string(),
    context: v.array(v.string())
  },
  handler: async (ctx, args) => {
    const query = `${ args.prompt } given this ${ args.context } context? format answer in html`;
    const result = await model.generateContent(query);
    const response = result.response;

    console.log(response.text());

    return response.text();
  }
});

export const summarizeContent = action({
  args: { content: v.string() },
  handler: async (ctx, args) => {
    const result = await model.generateContent(`summarize this ${ args.content } content, format answer as html`);
    const response = result.response;

    return response.text();
  }

});

export const generateIntro = action({
  args: { content: v.string() },
  handler: async (ctx, args) => {
    console.log(args.content);
    const result = await model.generateContent(`generate short intro based on ${ args.content } format answer as html`);
    const response = result.response;

    return response.text();
  }

});


export const generativeAIChat = action({
  args: { chat: v.string() },
  handler: async (ctx, args) => {
    const chat = model.startChat({
      generationConfig: {
        maxOutputTokens: 100,
      },
    });


    const result = await chat.sendMessage(args.chat);
    const response =  result.response;
    
    return response.text();
  }
});


export const  generateEmbeddings = action({
  args: { content: v.string() },
  handler: async (ctx, args) => {
    const embeddingModel = genAI.getGenerativeModel({ model: "text-embedding-004"});

    const result = await embeddingModel.embedContent(args.content);
    const embedding = result.embedding;  
    return embedding.values;
  }
});


/*
export const ExtractInfo = action({
  args: { content: v.string() },
  handler: async (ctx, args) => {
    const embeddings: any = await (ctx.runAction(api.misokoAIActions.generateEmbeddings, { content: args.content }))

    console.log(embeddings)

    //const embs = await ctx.runQuery(api.misokoQueries.getSimilarDocuments, data);

    //console.log(embs);
    const response = await ctx.vectorSearch('fileEmbeddings', 'embeddings', {
      vector: embeddings,
      //filter: (q) => q.eq('content', args.content)
      /*filter: (q) =>
      q.or(q.eq('fileID', 'content'), q.eq(`${ params['fileID'] }`, `${ params['content'] }`))*/
    /*});

    

    return response;
  }
})

*/


