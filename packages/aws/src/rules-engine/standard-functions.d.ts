/**
 * Standard Smithy Rules Engine Functions
 *
 * Implementation of built-in functions for the rules engine.
 * @see https://smithy.io/2.0/additional-specs/rules-engine/specification.html#standard-library-functions
 */
import type { ParsedUrl, RulesValue } from "./expression.ts";
/** Returns true if the value is set (not null or undefined). */
export declare const isSet: (value: RulesValue) => boolean;
/** Returns the boolean negation of the input. */
export declare const not: (value: RulesValue) => boolean;
/** Returns true if both values are strictly equal. */
export declare const booleanEquals: (a: RulesValue, b: RulesValue) => boolean;
/** Alias for booleanEquals - both use strict equality. */
export declare const stringEquals: (a: RulesValue, b: RulesValue) => boolean;
/** Gets an attribute from an object using dot/bracket notation (e.g. "foo.bar[0].baz") */
export declare function getAttr(value: RulesValue, path: string): RulesValue;
/** Returns a substring. If reverse is true, indexes are from the end. */
export declare function substring(
  input: RulesValue,
  start: RulesValue,
  stop: RulesValue,
  reverse: RulesValue,
): RulesValue;
/** Parses a URL string into its components. */
export declare function parseURL(url: RulesValue): ParsedUrl | undefined;
/**
 * Check if a string is an IP address (v4 or v6).
 */
export declare function isIpAddress(host: string): boolean;
/** URI encodes a string value. */
export declare function uriEncode(value: RulesValue): RulesValue;
/** Checks if a string is a valid DNS host label. */
export declare function isValidHostLabel(
  value: RulesValue,
  allowSubDomains: RulesValue,
): boolean;
//# sourceMappingURL=standard-functions.d.ts.map
