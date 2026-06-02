/**
 * Clerk API clients.
 *
 * Clerk exposes two separate APIs with different authentication schemes:
 *   - {@link PlatformAPI}  — workspace/application management
 *   - {@link BackendAPI}   — per-instance resources (users, sessions, etc.)
 *
 * Generated operations under `src/operations/{platform,backend}/` import
 * `{ API }` directly from their respective client module, so consumers
 * usually don't need to touch these — they just provide the matching
 * credentials layer.
 */
export { API as PlatformAPI } from "./platform-client.ts";
export { API as BackendAPI } from "./backend-client.ts";
export { matchClerkError } from "./match-error.ts";
export { UnknownClerkError, ClerkParseError } from "./errors.ts";
