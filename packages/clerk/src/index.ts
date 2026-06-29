/**
 * Clerk SDK for Effect
 *
 * Clerk exposes two distinct APIs sharing one base URL:
 *   - Platform API — workspace/application management (PlatformAPI / PlatformCredentials)
 *   - Backend API  — per-instance resources             (BackendAPI / BackendCredentials)
 *
 * @example
 * ```ts
 * import * as Clerk from "@distilled.cloud/clerk";
 * import { Backend } from "@distilled.cloud/clerk/Operations";
 * ```
 */
export * from "./credentials.ts";
export * as Category from "./category.ts";
export * as T from "./traits.ts";
export * as Retry from "./retry.ts";
export { PlatformAPI, BackendAPI } from "./client.ts";
export * from "./errors.ts";
export * from "./operations/index.ts";
export { SensitiveString, SensitiveNullableString } from "./sensitive.ts";
