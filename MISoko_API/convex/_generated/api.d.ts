/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as AI from "../AI.js";
import type * as AIActions from "../AIActions.js";
import type * as adComments from "../adComments.js";
import type * as adCommentsMutations from "../adCommentsMutations.js";
import type * as adCommentsQueries from "../adCommentsQueries.js";
import type * as api_ from "../api.js";
import type * as auth from "../auth.js";
import type * as autoMobiles from "../autoMobiles.js";
import type * as autoMobilesActions from "../autoMobilesActions.js";
import type * as autoMobilesMutations from "../autoMobilesMutations.js";
import type * as autoMobilesQueries from "../autoMobilesQueries.js";
import type * as canva from "../canva.js";
import type * as canvaActions from "../canvaActions.js";
import type * as canvaMutations from "../canvaMutations.js";
import type * as canvaQueries from "../canvaQueries.js";
import type * as eNAppliances from "../eNAppliances.js";
import type * as eNAppliancesActions from "../eNAppliancesActions.js";
import type * as eNAppliancesMutations from "../eNAppliancesMutations.js";
import type * as eNAppliancesQueries from "../eNAppliancesQueries.js";
import type * as http from "../http.js";
import type * as lNProperties from "../lNProperties.js";
import type * as lNPropertiesActions from "../lNPropertiesActions.js";
import type * as lNPropertiesMutations from "../lNPropertiesMutations.js";
import type * as lNPropertiesQueries from "../lNPropertiesQueries.js";
import type * as misoko from "../misoko.js";
import type * as misokoAI from "../misokoAI.js";
import type * as misokoAIActions from "../misokoAIActions.js";
import type * as misokoActions from "../misokoActions.js";
import type * as misokoMutations from "../misokoMutations.js";
import type * as misokoQueries from "../misokoQueries.js";
import type * as pNAccessories from "../pNAccessories.js";
import type * as pNAccessoriesActions from "../pNAccessoriesActions.js";
import type * as pNAccessoriesMutations from "../pNAccessoriesMutations.js";
import type * as pNAccessoriesQueries from "../pNAccessoriesQueries.js";
import type * as sNIndustries from "../sNIndustries.js";
import type * as sNIndustriesMutations from "../sNIndustriesMutations.js";
import type * as sNIndustriesQueries from "../sNIndustriesQueries.js";
import type * as users from "../users.js";
import type * as usersActions from "../usersActions.js";
import type * as usersMutations from "../usersMutations.js";
import type * as usersQueries from "../usersQueries.js";
import type * as views from "../views.js";
import type * as viewsMutations from "../viewsMutations.js";
import type * as viewsQueries from "../viewsQueries.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  AI: typeof AI;
  AIActions: typeof AIActions;
  adComments: typeof adComments;
  adCommentsMutations: typeof adCommentsMutations;
  adCommentsQueries: typeof adCommentsQueries;
  api: typeof api_;
  auth: typeof auth;
  autoMobiles: typeof autoMobiles;
  autoMobilesActions: typeof autoMobilesActions;
  autoMobilesMutations: typeof autoMobilesMutations;
  autoMobilesQueries: typeof autoMobilesQueries;
  canva: typeof canva;
  canvaActions: typeof canvaActions;
  canvaMutations: typeof canvaMutations;
  canvaQueries: typeof canvaQueries;
  eNAppliances: typeof eNAppliances;
  eNAppliancesActions: typeof eNAppliancesActions;
  eNAppliancesMutations: typeof eNAppliancesMutations;
  eNAppliancesQueries: typeof eNAppliancesQueries;
  http: typeof http;
  lNProperties: typeof lNProperties;
  lNPropertiesActions: typeof lNPropertiesActions;
  lNPropertiesMutations: typeof lNPropertiesMutations;
  lNPropertiesQueries: typeof lNPropertiesQueries;
  misoko: typeof misoko;
  misokoAI: typeof misokoAI;
  misokoAIActions: typeof misokoAIActions;
  misokoActions: typeof misokoActions;
  misokoMutations: typeof misokoMutations;
  misokoQueries: typeof misokoQueries;
  pNAccessories: typeof pNAccessories;
  pNAccessoriesActions: typeof pNAccessoriesActions;
  pNAccessoriesMutations: typeof pNAccessoriesMutations;
  pNAccessoriesQueries: typeof pNAccessoriesQueries;
  sNIndustries: typeof sNIndustries;
  sNIndustriesMutations: typeof sNIndustriesMutations;
  sNIndustriesQueries: typeof sNIndustriesQueries;
  users: typeof users;
  usersActions: typeof usersActions;
  usersMutations: typeof usersMutations;
  usersQueries: typeof usersQueries;
  views: typeof views;
  viewsMutations: typeof viewsMutations;
  viewsQueries: typeof viewsQueries;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
