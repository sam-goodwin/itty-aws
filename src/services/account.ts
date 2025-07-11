import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Account {
  acceptPrimaryEmailUpdate(
    input: AcceptPrimaryEmailUpdateRequest,
  ): Effect.Effect<
    AcceptPrimaryEmailUpdateResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  deleteAlternateContact(
    input: DeleteAlternateContactRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  disableRegion(
    input: DisableRegionRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  enableRegion(
    input: EnableRegionRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getAccountInformation(
    input: GetAccountInformationRequest,
  ): Effect.Effect<
    GetAccountInformationResponse,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getAlternateContact(
    input: GetAlternateContactRequest,
  ): Effect.Effect<
    GetAlternateContactResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getContactInformation(
    input: GetContactInformationRequest,
  ): Effect.Effect<
    GetContactInformationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getPrimaryEmail(
    input: GetPrimaryEmailRequest,
  ): Effect.Effect<
    GetPrimaryEmailResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  getRegionOptStatus(
    input: GetRegionOptStatusRequest,
  ): Effect.Effect<
    GetRegionOptStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listRegions(
    input: ListRegionsRequest,
  ): Effect.Effect<
    ListRegionsResponse,
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  putAccountName(
    input: PutAccountNameRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  putAlternateContact(
    input: PutAlternateContactRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  putContactInformation(
    input: PutContactInformationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  startPrimaryEmailUpdate(
    input: StartPrimaryEmailUpdateRequest,
  ): Effect.Effect<
    StartPrimaryEmailUpdateResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
}

export interface AcceptPrimaryEmailUpdateRequest {
  AccountId: string;
  PrimaryEmail: string;
  Otp: string;
}
export interface AcceptPrimaryEmailUpdateResponse {
  Status?: string;
}
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
  readonly errorType?: string;
}> {}
export type AccountCreatedDate = Date | string;

export type AccountId = string;

export type AccountName = string;

export type AddressLine = string;

export interface AlternateContact {
  Name?: string;
  Title?: string;
  EmailAddress?: string;
  PhoneNumber?: string;
  AlternateContactType?: string;
}
export type AlternateContactType = string;

export type City = string;

export type CompanyName = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly errorType?: string;
}> {}
export interface ContactInformation {
  FullName: string;
  AddressLine1: string;
  AddressLine2?: string;
  AddressLine3?: string;
  City: string;
  StateOrRegion?: string;
  DistrictOrCounty?: string;
  PostalCode: string;
  CountryCode: string;
  PhoneNumber: string;
  CompanyName?: string;
  WebsiteUrl?: string;
}
export type ContactInformationPhoneNumber = string;

export type CountryCode = string;

export interface DeleteAlternateContactRequest {
  AlternateContactType: string;
  AccountId?: string;
}
export interface DisableRegionRequest {
  AccountId?: string;
  RegionName: string;
}
export type DistrictOrCounty = string;

export type EmailAddress = string;

export interface EnableRegionRequest {
  AccountId?: string;
  RegionName: string;
}
export type FullName = string;

export interface GetAccountInformationRequest {
  AccountId?: string;
}
export interface GetAccountInformationResponse {
  AccountId?: string;
  AccountName?: string;
  AccountCreatedDate?: Date | string;
}
export interface GetAlternateContactRequest {
  AlternateContactType: string;
  AccountId?: string;
}
export interface GetAlternateContactResponse {
  AlternateContact?: AlternateContact;
}
export interface GetContactInformationRequest {
  AccountId?: string;
}
export interface GetContactInformationResponse {
  ContactInformation?: ContactInformation;
}
export interface GetPrimaryEmailRequest {
  AccountId: string;
}
export interface GetPrimaryEmailResponse {
  PrimaryEmail?: string;
}
export interface GetRegionOptStatusRequest {
  AccountId?: string;
  RegionName: string;
}
export interface GetRegionOptStatusResponse {
  RegionName?: string;
  RegionOptStatus?: string;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly errorType?: string;
}> {}
export interface ListRegionsRequest {
  AccountId?: string;
  MaxResults?: number;
  NextToken?: string;
  RegionOptStatusContains?: Array<string>;
}
export interface ListRegionsResponse {
  NextToken?: string;
  Regions?: Array<Region>;
}
export type Name = string;

export type Otp = string;

export type PhoneNumber = string;

export type PostalCode = string;

export type PrimaryEmailAddress = string;

export type PrimaryEmailUpdateStatus = string;

export interface PutAccountNameRequest {
  AccountName: string;
  AccountId?: string;
}
export interface PutAlternateContactRequest {
  Name: string;
  Title: string;
  EmailAddress: string;
  PhoneNumber: string;
  AlternateContactType: string;
  AccountId?: string;
}
export interface PutContactInformationRequest {
  ContactInformation: ContactInformation;
  AccountId?: string;
}
export interface Region {
  RegionName?: string;
  RegionOptStatus?: string;
}
export type RegionName = string;

export type RegionOptList = Array<Region>;
export type RegionOptStatus = string;

export type RegionOptStatusList = Array<string>;
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly errorType?: string;
}> {}
export type SensitiveString = string;

export interface StartPrimaryEmailUpdateRequest {
  AccountId: string;
  PrimaryEmail: string;
}
export interface StartPrimaryEmailUpdateResponse {
  Status?: string;
}
export type StateOrRegion = string;

export type Title = string;

export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message: string;
  readonly errorType?: string;
}> {}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type WebsiteUrl = string;

export declare namespace AcceptPrimaryEmailUpdate {
  export type Input = AcceptPrimaryEmailUpdateRequest;
  export type Output = AcceptPrimaryEmailUpdateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAlternateContact {
  export type Input = DeleteAlternateContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisableRegion {
  export type Input = DisableRegionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableRegion {
  export type Input = EnableRegionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccountInformation {
  export type Input = GetAccountInformationRequest;
  export type Output = GetAccountInformationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAlternateContact {
  export type Input = GetAlternateContactRequest;
  export type Output = GetAlternateContactResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetContactInformation {
  export type Input = GetContactInformationRequest;
  export type Output = GetContactInformationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPrimaryEmail {
  export type Input = GetPrimaryEmailRequest;
  export type Output = GetPrimaryEmailResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRegionOptStatus {
  export type Input = GetRegionOptStatusRequest;
  export type Output = GetRegionOptStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRegions {
  export type Input = ListRegionsRequest;
  export type Output = ListRegionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutAccountName {
  export type Input = PutAccountNameRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutAlternateContact {
  export type Input = PutAlternateContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutContactInformation {
  export type Input = PutContactInformationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartPrimaryEmailUpdate {
  export type Input = StartPrimaryEmailUpdateRequest;
  export type Output = StartPrimaryEmailUpdateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}
