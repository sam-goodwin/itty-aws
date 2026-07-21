/**
 * AWS-Specific Rules Engine Functions
 *
 * Implementation of AWS extension functions for the rules engine.
 * @see https://smithy.io/2.0/aws/rules-engine/library-functions.html
 */
import type { ParsedArn, PartitionInfo, RulesValue } from "./expression.ts";
/** Returns partition information for a given region. */
export declare function partition(
  region: RulesValue,
): PartitionInfo | undefined;
/** Parses an ARN string into its components. */
export declare function parseArn(value: RulesValue): ParsedArn | undefined;
/** Checks if a string is a valid virtual-hostable S3 bucket name. */
export declare function isVirtualHostableS3Bucket(
  value: RulesValue,
  allowSubDomains?: RulesValue,
): boolean;
//# sourceMappingURL=aws-functions.d.ts.map
