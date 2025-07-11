import { Data } from "effect";

export interface AwsErrorMeta {
  readonly statusCode: number;
  readonly requestId?: string;
}

// Common AWS errors that can occur across all services
export class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<AwsErrorMeta> {}
export class ServiceUnavailable extends Data.TaggedError(
  "ServiceUnavailable",
)<AwsErrorMeta> {}
export class RequestTimeout extends Data.TaggedError(
  "RequestTimeout",
)<AwsErrorMeta> {}
export class UnknownError extends Data.TaggedError("UnknownError")<
  AwsErrorMeta & { message: string }
> {}
export class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<AwsErrorMeta> {}
export class UnauthorizedException extends Data.TaggedError(
  "UnauthorizedException",
)<AwsErrorMeta> {}
export class ValidationException extends Data.TaggedError(
  "ValidationException",
)<AwsErrorMeta> {}

export type CommonAwsError =
  | ThrottlingException
  | ServiceUnavailable
  | RequestTimeout
  | UnknownError
  | AccessDeniedException
  | UnauthorizedException
  | ValidationException;
