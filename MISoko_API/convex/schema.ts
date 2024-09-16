import { authTables } from '@convex-dev/auth/server';
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({

  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
  })
    .index("email", ["email"])
    .index("phone", ["phone"]),

  authSessions: defineTable({
    userId: v.optional(v.id("users")),
    expirationTime: v.optional(v.number()),
  }).index("userId", ["userId"]),

  authAccounts: defineTable({
    userId: v.optional(v.id("users")),
    provider: v.optional(v.string()),
    providerAccountId: v.optional(v.string()),
    secret: v.optional(v.string()),
    emailVerified: v.optional(v.string()),
    phoneVerified: v.optional(v.string()),
  })
  .index("userIdAndProvider", ["userId", "provider"])
  .index("providerAndAccountId", ["provider", "providerAccountId"]),

  authRefreshTokens: defineTable({
    sessionId: v.optional(v.id("authSessions")),
    expirationTime: v.optional(v.number()),
  }).index("sessionId", ["sessionId"]),


  authVerificationCodes: defineTable({
    accountId: v.optional(v.id("authAccounts")),
    provider: v.optional(v.string()),
    code: v.optional(v.string()),
    expirationTime: v.optional(v.number()),
    verifier: v.optional(v.string()),
    emailVerified: v.optional(v.string()),
    phoneVerified: v.optional(v.string()),
  })
  .index("accountId", ["accountId"])
  .index("code", ["code"]),

  authVerifiers: defineTable({
    sessionId: v.optional(v.id("authSessions")),
    signature: v.optional(v.string()),
  }).index("signature", ["signature"]),

  authRateLimits: defineTable({
    identifier: v.optional(v.string()),
    lastAttemptTime: v.optional(v.number()),
    attemptsLeft: v.optional(v.number()),
  }).index("identifier", ["identifier"]),


  adViews: defineTable({
    created_by: v.string(),
    view_id: v.string(),
    ad_id: v.string(),
  })
  .index('ad_id', ['ad_id'])
  .index('by_view_id', ['view_id']),

  adComments:defineTable({
    ad_id: v.string(),
    comment: v.string(),
    created_by: v.string()
  })
  .index('ad_id', ['ad_id'])
  .index('created_by', ['created_by']),


  eNAppliances: defineTable({
    name: v.string(),
    description: v.string(),
    price_amount: v.number(),
    ad_images: v.array(v.string()),
    video_link: v.string(),
    published: v.boolean(),
    ad_phone_number: v.string(),
    ad_email: v.string(),
    location: v.string(),
    created_by: v.string(),
    embeddings: v.array(v.float64())
  })
  .index('by_name', ['name'])
  .searchIndex('name', {
    searchField: 'name',
    filterFields: ['name', 'description']
  })
  .vectorIndex("embeddings", {
    vectorField: "embeddings",
    dimensions: 768
  }),
  
  
  canvaFolders: defineTable({
    canvaUserID: v.string(),
    canvaTeamID: v.string(),
    folderName: v.string(),
    folderID: v.string(),
  })
  .index('canvaUserID', ['canvaUserID'])
  .index('canvaTeamID', ['canvaTeamID'])
  .index('folderName', ['folderName'])
  .index('folderID', ['folderID']),

  canvaAssets: defineTable({
    canvaUserID: v.string(),
    canvaTeamID: v.string(),
    assetName: v.string(),
    assetID: v.string(),
  })
  .index('canvaUserID', ['canvaUserID'])
  .index('canvaTeamID', ['canvaTeamID'])
  .index('assetName', ['assetName'])
  .index('assetID', ['assetID']),


  pNAccessories: defineTable({
    created_by: v.string(),
    name: v.string(),
    specifications: v.string(),
    description: v.string(),
    price_amount: v.number(),
    published: v.boolean(),
    video_link: v.string(),
    ad_phone_number: v.string(),
    ad_email: v.string(),
    ad_images: v.array(v.string()),
    location: v.string(),
    embeddings: v.array(v.float64())
  })
  .index('by_name', ['name'])
  .index('specifications', ['specifications'])
  .index('created_by', ['created_by'])
  .index('published', ['published'])
  .searchIndex('name', {
    searchField: 'name',
    filterFields: ['name', 'specifications', 'description']
  })
  .vectorIndex("embeddings", {
    vectorField: "embeddings",
    dimensions: 768
  }),


  sNIndustries: defineTable({
    name: v.string(),
    type: v.string(),
    description: v.string(),
    price_amount: v.number(),
    ad_images: v.array(v.string()),
    video_link: v.string(),
    ad_phone_number: v.string(),
    ad_email: v.string(),
    published: v.boolean(),
    location: v.string(),
    created_by: v.string(),
    embeddings: v.array(v.float64())
  })
  .index('by_name', ['name'])
  .searchIndex('name', {
    searchField: 'name',
    filterFields: ['name', 'type', 'description']
  })
  .vectorIndex("embeddings", {
    vectorField: "embeddings",
    dimensions: 768
  }),

  
  lNProperties: defineTable({
    created_by: v.string(),
    name: v.string(),
    transaction_type: v.string(),
    description: v.string(),
    price_amount: v.number(),
    published: v.boolean(),
    video_link: v.string(),
    ad_phone_number: v.string(),
    ad_email: v.string(),
    ad_images: v.array(v.string()),
    location: v.string(),
    embeddings: v.array(v.float64())
  })
  .index('by_name', ['name'])
  .index('description', ['description'])
  .index('created_by', ['created_by'])
  .searchIndex('name', {
    searchField: 'name',
    filterFields: ['name', 'transaction_type', 'description']
  })
  .vectorIndex("embeddings", {
    vectorField: "embeddings",
    dimensions: 768
  }),
 
  

  autoMobiles: defineTable({
    created_by: v.string(),
    make: v.string(),
    model: v.string(),
    chassis_number: v.string(),
    category: v.string(),
    engine: v.string(),
    yom: v.string(),
    transmission: v.string(),
    body_color: v.string(),
    interior: v.string(),
    key_features: v.string(),
    description: v.string(),
    video_link: v.string(),
    ad_images: v.array(v.string()),
    price_amount: v.number(),
    published: v.boolean(),
    ad_phone_number: v.string(),
    ad_email: v.string(),    
    location: v.string(),
    transaction_type: v.string(),
    embeddings: v.array(v.float64())
  })
  .index('by_make', ['make'])
  .index('by_model', ['model'])
  .index('key_features', ['key_features'])
  .index('created_by', ['created_by'])
  .index('published', ['published'])
  .searchIndex('model', {
    searchField: 'model',
    filterFields: ['make', 'model']
  })  
  .searchIndex('make', {
    searchField: 'make',
    filterFields: ['make', 'model']
  })
  .vectorIndex("embeddings", {
    vectorField: "embeddings",
    dimensions: 768
  })

});