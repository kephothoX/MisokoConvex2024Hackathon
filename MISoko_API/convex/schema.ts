import { authTables } from '@convex-dev/auth/server';
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({

  ...authTables,

  adViews: defineTable({
    created_by: v.string(),
    ad_id: v.string(),
  })
  .index('by_ad_id', ['ad_id']),

  adComments:defineTable({
    ad_id: v.string(),
    comment: v.string(),
    created_by: v.string(),
    published: v.boolean(),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string())
  })
  .index('by_ad_id', ['ad_id'])
  .index('created_by', ['created_by'])
  .searchIndex('phone_id', {
    searchField: 'ad_id',
    filterFields: ['ad_id', 'comment', 'created_by', 'created_at']
  }),


  eNAppliances: defineTable({
    name: v.string(),
    created_at: v.string(),
    updated_at: v.string(),
    description: v.string(),
    price_amount: v.number(),
    ad_images: v.array(v.string()),
    video_link: v.string(),
    published: v.boolean(),
    ad_phone_number: v.string(),
    ad_email: v.string(),
    location: v.string(),
    created_by: v.string()
  })
  .index('by_name', ['name']),
  
  
  canvaFolders: defineTable({
    canvaUserID: v.string(),
    canvaTeamID: v.string(),
    folderName: v.string(),
    folderID: v.string(),
  })
  .index('by_canvaUserID', ['canvaUserID'])
  .index('by_canvaTeamID', ['canvaTeamID'])
  .index('by_folderName', ['folderName'])
  .index('by_folderID', ['folderID']),

  canvaAssets: defineTable({
    canvaUserID: v.string(),
    canvaTeamID: v.string(),
    assetName: v.string(),
    assetID: v.string(),
  })
  .index('by_canvaUserID', ['canvaUserID'])
  .index('by_canvaTeamID', ['canvaTeamID'])
  .index('by_assetName', ['assetName'])
  .index('by_assetID', ['assetID']),


  pNAccessories: defineTable({
    created_by: v.string(),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
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
  }).index('by_name', ['name'])
    .index('by_specifications', ['specifications'])
    .index('by_created_by', ['created_by'])
    .index('by_published', ['published'])
    .searchIndex('name', {
      searchField: 'name',
      filterFields: ['name', 'specifications', 'ad_images']
    }),


  sNIndustries: defineTable({
    name: v.string(),
    created_at: v.string(),
    updated_at: v.string(),
    type: v.string(),
    description: v.string(),
    price_amount: v.number(),
    ad_images: v.array(v.string()),
    video_link: v.string(),
    ad_phone_number: v.string(),
    ad_email: v.string(),
    published: v.boolean(),
    location: v.string(),
    created_by: v.string()
  })
  .index('by_name', ['name']),



  usersProfiles: defineTable({
      created_by: v.string(),
      created_at: v.optional(v.string()),
      updated_at: v.optional(v.string()),
      about: v.string(),
      country: v.string(),
      date_of_birth: v.string(),
      email: v.string(),
      hobbies: v.string(),
      interests: v.string(),
      phone_number: v.string(),
      profile_thumbnail: v.string(),
      social_image_url: v.string(),
      username: v.string(),
      active: v.boolean()
    })
    .index('by_email', ['email'])
    .index('by_username', ['username'])
    .index('by_created_by', ['created_by'])
    .index('by_phone_number', ['phone_number'])
    .searchIndex('email', {
      searchField: 'email',
      filterFields: ['email', 'phone_number', 'username']
    }),
  

  users: defineTable({
    id: v.optional(v.number()),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    family_name: v.optional(v.string()),
    given_name: v.optional(v.string()),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
    active: v.boolean(),
  })
  .index('email', ['email'])
  .index('by_family_name', ['family_name'])
  .index('by_given_name', ['given_name'])
  .index('by_active', ['active']),  

  
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
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  })
  .index('by_name', ['name'])
  .index('by_description', ['description'])
  .index('by_created_by', ['created_by']),
 
  

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
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  })
  .index('by_make', ['make'])
  .index('by_model', ['model'])
  .index('by_key_features', ['key_features'])
  .index('by_created_by', ['created_by'])
  .index('by_published', ['published'])
  .searchIndex('model', {
    searchField: 'model',
    filterFields: ['make', 'model', 'yom']
  })  
  .searchIndex('make', {
    searchField: 'make',
    filterFields: ['make', 'model', 'yom']
  }),  
  
});