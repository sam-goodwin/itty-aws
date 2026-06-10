/**
 * AWS Authentication service for loading AWS profiles and credentials.
 *
 * @since 0.0.0
 */
export * as Auth from "./auth.ts";

/**
 * AWS Credentials providers for obtaining temporary or long-lived credentials.
 *
 * @since 0.0.0
 */
export * as Credentials from "./credentials.ts";

/**
 * AWS configuration service (region and optional custom endpoint).
 *
 * @since 0.0.0
 */
export * as Config from "./config.ts";
export { AWSConfig } from "./config.ts";

/**
 * Common AWS error types shared across all services.
 *
 * @since 0.0.0
 */
export * as Errors from "./errors.ts";

/**
 * Retry policy configuration for AWS API calls.
 *
 * @since 0.0.0
 */
export * as Retry from "./retry.ts";

/**
 * Sensitive data schemas for the smithy.api#sensitive trait.
 * Wraps values in Effect's Redacted type to prevent accidental logging.
 *
 * @since 0.0.0
 */
export * as Sensitive from "./sensitive.ts";

/**
 * Smithy trait annotations for AWS service schemas.
 *
 * @since 0.0.0
 */
export * as Traits from "./traits.ts";
