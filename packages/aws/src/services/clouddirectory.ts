import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CloudDirectory",
  serviceShapeName: "AmazonCloudDirectory_20170111",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "clouddirectory" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-01-11");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://clouddirectory-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://clouddirectory.${Region}.amazonaws.com`);
            }
            return e(
              `https://clouddirectory-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://clouddirectory.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://clouddirectory.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class BatchWriteException
  extends /*@__PURE__*/ S.TaggedError<BatchWriteException>()("BatchWriteException", {
    Index: /*@__PURE__*/ S.optional(S.Number),
    Type: /*@__PURE__*/ S.optional(
      /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "BatchWriteExceptionType",
      }),
    ),
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class CannotListParentOfRootException
  extends /*@__PURE__*/ S.TaggedError<CannotListParentOfRootException>()(
    "CannotListParentOfRootException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DirectoryAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<DirectoryAlreadyExistsException>()(
    "DirectoryAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class DirectoryDeletedException
  extends /*@__PURE__*/ S.TaggedError<DirectoryDeletedException>()(
    "DirectoryDeletedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DirectoryNotDisabledException
  extends /*@__PURE__*/ S.TaggedError<DirectoryNotDisabledException>()(
    "DirectoryNotDisabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DirectoryNotEnabledException
  extends /*@__PURE__*/ S.TaggedError<DirectoryNotEnabledException>()(
    "DirectoryNotEnabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class FacetAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<FacetAlreadyExistsException>()(
    "FacetAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class FacetInUseException
  extends /*@__PURE__*/ S.TaggedError<FacetInUseException>()(
    "FacetInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class FacetNotFoundException
  extends /*@__PURE__*/ S.TaggedError<FacetNotFoundException>()(
    "FacetNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class FacetValidationException
  extends /*@__PURE__*/ S.TaggedError<FacetValidationException>()(
    "FacetValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class IncompatibleSchemaException
  extends /*@__PURE__*/ S.TaggedError<IncompatibleSchemaException>()(
    "IncompatibleSchemaException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class IndexedAttributeMissingException
  extends /*@__PURE__*/ S.TaggedError<IndexedAttributeMissingException>()(
    "IndexedAttributeMissingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalServiceException
  extends /*@__PURE__*/ S.TaggedError<InternalServiceException>()(
    "InternalServiceException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidArnException
  extends /*@__PURE__*/ S.TaggedError<InvalidArnException>()(
    "InvalidArnException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidAttachmentException
  extends /*@__PURE__*/ S.TaggedError<InvalidAttachmentException>()(
    "InvalidAttachmentException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidFacetUpdateException
  extends /*@__PURE__*/ S.TaggedError<InvalidFacetUpdateException>()(
    "InvalidFacetUpdateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()(
    "InvalidNextTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidRuleException
  extends /*@__PURE__*/ S.TaggedError<InvalidRuleException>()(
    "InvalidRuleException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidSchemaDocException
  extends /*@__PURE__*/ S.TaggedError<InvalidSchemaDocException>()(
    "InvalidSchemaDocException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidTaggingRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidTaggingRequestException>()(
    "InvalidTaggingRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LinkNameAlreadyInUseException
  extends /*@__PURE__*/ S.TaggedError<LinkNameAlreadyInUseException>()(
    "LinkNameAlreadyInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotIndexException
  extends /*@__PURE__*/ S.TaggedError<NotIndexException>()(
    "NotIndexException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotNodeException
  extends /*@__PURE__*/ S.TaggedError<NotNodeException>()(
    "NotNodeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotPolicyException
  extends /*@__PURE__*/ S.TaggedError<NotPolicyException>()(
    "NotPolicyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ObjectAlreadyDetachedException
  extends /*@__PURE__*/ S.TaggedError<ObjectAlreadyDetachedException>()(
    "ObjectAlreadyDetachedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ObjectNotDetachedException
  extends /*@__PURE__*/ S.TaggedError<ObjectNotDetachedException>()(
    "ObjectNotDetachedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class RetryableConflictException
  extends /*@__PURE__*/ S.TaggedError<RetryableConflictException>()(
    "RetryableConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class SchemaAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<SchemaAlreadyExistsException>()(
    "SchemaAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class SchemaAlreadyPublishedException
  extends /*@__PURE__*/ S.TaggedError<SchemaAlreadyPublishedException>()(
    "SchemaAlreadyPublishedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class StillContainsLinksException
  extends /*@__PURE__*/ S.TaggedError<StillContainsLinksException>()(
    "StillContainsLinksException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedIndexTypeException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedIndexTypeException>()(
    "UnsupportedIndexTypeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Arn = string;
export type FacetName = string;
export interface SchemaFacet {
  SchemaArn?: string;
  FacetName?: string;
}
export type AttributeName = string;
export interface AttributeKey {
  SchemaArn: string;
  FacetName: string;
  Name: string;
}
export type StringAttributeValue = string;
export type BinaryAttributeValue = Uint8Array;
export type BooleanAttributeValue = boolean;
export type NumberAttributeValue = string;
export type DatetimeAttributeValue = Date;
export type TypedAttributeValue =
  | {
      StringValue: string;
      BinaryValue?: never;
      BooleanValue?: never;
      NumberValue?: never;
      DatetimeValue?: never;
    }
  | {
      StringValue?: never;
      BinaryValue: Uint8Array;
      BooleanValue?: never;
      NumberValue?: never;
      DatetimeValue?: never;
    }
  | {
      StringValue?: never;
      BinaryValue?: never;
      BooleanValue: boolean;
      NumberValue?: never;
      DatetimeValue?: never;
    }
  | {
      StringValue?: never;
      BinaryValue?: never;
      BooleanValue?: never;
      NumberValue: string;
      DatetimeValue?: never;
    }
  | {
      StringValue?: never;
      BinaryValue?: never;
      BooleanValue?: never;
      NumberValue?: never;
      DatetimeValue: Date;
    };
export interface AttributeKeyAndValue {
  Key: AttributeKey;
  Value: TypedAttributeValue;
}
export type AttributeKeyAndValueList = AttributeKeyAndValue[];
export type SelectorObjectReference = string;
export interface ObjectReference {
  Selector?: string;
}
export interface AddFacetToObjectRequest {
  DirectoryArn: string;
  SchemaFacet: SchemaFacet;
  ObjectAttributeList?: AttributeKeyAndValue[];
  ObjectReference: ObjectReference;
}
export interface AddFacetToObjectResponse {}
export interface ApplySchemaRequest {
  PublishedSchemaArn: string;
  DirectoryArn: string;
}
export interface ApplySchemaResponse {
  AppliedSchemaArn?: string;
  DirectoryArn?: string;
}
export type LinkName = string;
export interface AttachObjectRequest {
  DirectoryArn: string;
  ParentReference: ObjectReference;
  ChildReference: ObjectReference;
  LinkName: string;
}
export type ObjectIdentifier = string;
export interface AttachObjectResponse {
  AttachedObjectIdentifier?: string;
}
export interface AttachPolicyRequest {
  DirectoryArn: string;
  PolicyReference: ObjectReference;
  ObjectReference: ObjectReference;
}
export interface AttachPolicyResponse {}
export interface AttachToIndexRequest {
  DirectoryArn: string;
  IndexReference: ObjectReference;
  TargetReference: ObjectReference;
}
export interface AttachToIndexResponse {
  AttachedObjectIdentifier?: string;
}
export type TypedLinkName = string;
export interface TypedLinkSchemaAndFacetName {
  SchemaArn: string;
  TypedLinkName: string;
}
export interface AttributeNameAndValue {
  AttributeName: string;
  Value: TypedAttributeValue;
}
export type AttributeNameAndValueList = AttributeNameAndValue[];
export interface AttachTypedLinkRequest {
  DirectoryArn: string;
  SourceObjectReference: ObjectReference;
  TargetObjectReference: ObjectReference;
  TypedLinkFacet: TypedLinkSchemaAndFacetName;
  Attributes: AttributeNameAndValue[];
}
export interface TypedLinkSpecifier {
  TypedLinkFacet: TypedLinkSchemaAndFacetName;
  SourceObjectReference: ObjectReference;
  TargetObjectReference: ObjectReference;
  IdentityAttributeValues: AttributeNameAndValue[];
}
export interface AttachTypedLinkResponse {
  TypedLinkSpecifier?: TypedLinkSpecifier;
}
export type NextToken = string;
export type NumberResults = number;
export interface BatchListObjectAttributes {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  FacetFilter?: SchemaFacet;
}
export interface BatchListObjectChildren {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListAttachedIndices {
  TargetReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListObjectParentPaths {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchGetObjectInformation {
  ObjectReference: ObjectReference;
}
export type AttributeNameList = string[];
export interface BatchGetObjectAttributes {
  ObjectReference: ObjectReference;
  SchemaFacet: SchemaFacet;
  AttributeNames: string[];
}
export interface BatchListObjectParents {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListObjectPolicies {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListPolicyAttachments {
  PolicyReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchLookupPolicy {
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export type RangeMode =
  | "FIRST"
  | "LAST"
  | "LAST_BEFORE_MISSING_VALUES"
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | (string & {});
export interface TypedAttributeValueRange {
  StartMode: RangeMode;
  StartValue?: TypedAttributeValue;
  EndMode: RangeMode;
  EndValue?: TypedAttributeValue;
}
export interface ObjectAttributeRange {
  AttributeKey?: AttributeKey;
  Range?: TypedAttributeValueRange;
}
export type ObjectAttributeRangeList = ObjectAttributeRange[];
export interface BatchListIndex {
  RangesOnIndexedValues?: ObjectAttributeRange[];
  IndexReference: ObjectReference;
  MaxResults?: number;
  NextToken?: string;
}
export interface TypedLinkAttributeRange {
  AttributeName?: string;
  Range: TypedAttributeValueRange;
}
export type TypedLinkAttributeRangeList = TypedLinkAttributeRange[];
export interface BatchListOutgoingTypedLinks {
  ObjectReference: ObjectReference;
  FilterAttributeRanges?: TypedLinkAttributeRange[];
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchListIncomingTypedLinks {
  ObjectReference: ObjectReference;
  FilterAttributeRanges?: TypedLinkAttributeRange[];
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  NextToken?: string;
  MaxResults?: number;
}
export interface BatchGetLinkAttributes {
  TypedLinkSpecifier: TypedLinkSpecifier;
  AttributeNames: string[];
}
export interface BatchReadOperation {
  ListObjectAttributes?: BatchListObjectAttributes;
  ListObjectChildren?: BatchListObjectChildren;
  ListAttachedIndices?: BatchListAttachedIndices;
  ListObjectParentPaths?: BatchListObjectParentPaths;
  GetObjectInformation?: BatchGetObjectInformation;
  GetObjectAttributes?: BatchGetObjectAttributes;
  ListObjectParents?: BatchListObjectParents;
  ListObjectPolicies?: BatchListObjectPolicies;
  ListPolicyAttachments?: BatchListPolicyAttachments;
  LookupPolicy?: BatchLookupPolicy;
  ListIndex?: BatchListIndex;
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks;
  ListIncomingTypedLinks?: BatchListIncomingTypedLinks;
  GetLinkAttributes?: BatchGetLinkAttributes;
}
export type BatchReadOperationList = BatchReadOperation[];
export type ConsistencyLevel = "SERIALIZABLE" | "EVENTUAL" | (string & {});
export interface BatchReadRequest {
  DirectoryArn: string;
  Operations: BatchReadOperation[];
  ConsistencyLevel?: ConsistencyLevel;
}
export interface BatchListObjectAttributesResponse {
  Attributes?: AttributeKeyAndValue[];
  NextToken?: string;
}
export type LinkNameToObjectIdentifierMap = { [key: string]: string | undefined };
export interface BatchListObjectChildrenResponse {
  Children?: { [key: string]: string | undefined };
  NextToken?: string;
}
export type SchemaFacetList = SchemaFacet[];
export interface BatchGetObjectInformationResponse {
  SchemaFacets?: SchemaFacet[];
  ObjectIdentifier?: string;
}
export interface BatchGetObjectAttributesResponse {
  Attributes?: AttributeKeyAndValue[];
}
export interface IndexAttachment {
  IndexedAttributes?: AttributeKeyAndValue[];
  ObjectIdentifier?: string;
}
export type IndexAttachmentList = IndexAttachment[];
export interface BatchListAttachedIndicesResponse {
  IndexAttachments?: IndexAttachment[];
  NextToken?: string;
}
export type PathString = string;
export type ObjectIdentifierList = string[];
export interface PathToObjectIdentifiers {
  Path?: string;
  ObjectIdentifiers?: string[];
}
export type PathToObjectIdentifiersList = PathToObjectIdentifiers[];
export interface BatchListObjectParentPathsResponse {
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[];
  NextToken?: string;
}
export interface BatchListObjectPoliciesResponse {
  AttachedPolicyIds?: string[];
  NextToken?: string;
}
export interface BatchListPolicyAttachmentsResponse {
  ObjectIdentifiers?: string[];
  NextToken?: string;
}
export type PolicyType = string;
export interface PolicyAttachment {
  PolicyId?: string;
  ObjectIdentifier?: string;
  PolicyType?: string;
}
export type PolicyAttachmentList = PolicyAttachment[];
export interface PolicyToPath {
  Path?: string;
  Policies?: PolicyAttachment[];
}
export type PolicyToPathList = PolicyToPath[];
export interface BatchLookupPolicyResponse {
  PolicyToPathList?: PolicyToPath[];
  NextToken?: string;
}
export interface BatchListIndexResponse {
  IndexAttachments?: IndexAttachment[];
  NextToken?: string;
}
export type TypedLinkSpecifierList = TypedLinkSpecifier[];
export interface BatchListOutgoingTypedLinksResponse {
  TypedLinkSpecifiers?: TypedLinkSpecifier[];
  NextToken?: string;
}
export interface BatchListIncomingTypedLinksResponse {
  LinkSpecifiers?: TypedLinkSpecifier[];
  NextToken?: string;
}
export interface BatchGetLinkAttributesResponse {
  Attributes?: AttributeKeyAndValue[];
}
export interface ObjectIdentifierAndLinkNameTuple {
  ObjectIdentifier?: string;
  LinkName?: string;
}
export type ObjectIdentifierAndLinkNameList = ObjectIdentifierAndLinkNameTuple[];
export interface BatchListObjectParentsResponse {
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[];
  NextToken?: string;
}
export interface BatchReadSuccessfulResponse {
  ListObjectAttributes?: BatchListObjectAttributesResponse;
  ListObjectChildren?: BatchListObjectChildrenResponse;
  GetObjectInformation?: BatchGetObjectInformationResponse;
  GetObjectAttributes?: BatchGetObjectAttributesResponse;
  ListAttachedIndices?: BatchListAttachedIndicesResponse;
  ListObjectParentPaths?: BatchListObjectParentPathsResponse;
  ListObjectPolicies?: BatchListObjectPoliciesResponse;
  ListPolicyAttachments?: BatchListPolicyAttachmentsResponse;
  LookupPolicy?: BatchLookupPolicyResponse;
  ListIndex?: BatchListIndexResponse;
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;
  ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;
  GetLinkAttributes?: BatchGetLinkAttributesResponse;
  ListObjectParents?: BatchListObjectParentsResponse;
}
export type BatchReadExceptionType =
  | "ValidationException"
  | "InvalidArnException"
  | "ResourceNotFoundException"
  | "InvalidNextTokenException"
  | "AccessDeniedException"
  | "NotNodeException"
  | "FacetValidationException"
  | "CannotListParentOfRootException"
  | "NotIndexException"
  | "NotPolicyException"
  | "DirectoryNotEnabledException"
  | "LimitExceededException"
  | "InternalServiceException"
  | (string & {});
export type ExceptionMessage = string;
export interface BatchReadException {
  Type?: BatchReadExceptionType;
  Message?: string;
}
export interface BatchReadOperationResponse {
  SuccessfulResponse?: BatchReadSuccessfulResponse;
  ExceptionResponse?: BatchReadException;
}
export type BatchReadOperationResponseList = BatchReadOperationResponse[];
export interface BatchReadResponse {
  Responses?: BatchReadOperationResponse[];
}
export type BatchReferenceName = string;
export interface BatchCreateObject {
  SchemaFacet: SchemaFacet[];
  ObjectAttributeList: AttributeKeyAndValue[];
  ParentReference?: ObjectReference;
  LinkName?: string;
  BatchReferenceName?: string;
}
export interface BatchAttachObject {
  ParentReference: ObjectReference;
  ChildReference: ObjectReference;
  LinkName: string;
}
export interface BatchDetachObject {
  ParentReference: ObjectReference;
  LinkName: string;
  BatchReferenceName?: string;
}
export type UpdateActionType = "CREATE_OR_UPDATE" | "DELETE" | (string & {});
export interface ObjectAttributeAction {
  ObjectAttributeActionType?: UpdateActionType;
  ObjectAttributeUpdateValue?: TypedAttributeValue;
}
export interface ObjectAttributeUpdate {
  ObjectAttributeKey?: AttributeKey;
  ObjectAttributeAction?: ObjectAttributeAction;
}
export type ObjectAttributeUpdateList = ObjectAttributeUpdate[];
export interface BatchUpdateObjectAttributes {
  ObjectReference: ObjectReference;
  AttributeUpdates: ObjectAttributeUpdate[];
}
export interface BatchDeleteObject {
  ObjectReference: ObjectReference;
}
export interface BatchAddFacetToObject {
  SchemaFacet: SchemaFacet;
  ObjectAttributeList: AttributeKeyAndValue[];
  ObjectReference: ObjectReference;
}
export interface BatchRemoveFacetFromObject {
  SchemaFacet: SchemaFacet;
  ObjectReference: ObjectReference;
}
export interface BatchAttachPolicy {
  PolicyReference: ObjectReference;
  ObjectReference: ObjectReference;
}
export interface BatchDetachPolicy {
  PolicyReference: ObjectReference;
  ObjectReference: ObjectReference;
}
export type AttributeKeyList = AttributeKey[];
export interface BatchCreateIndex {
  OrderedIndexedAttributeList: AttributeKey[];
  IsUnique: boolean;
  ParentReference?: ObjectReference;
  LinkName?: string;
  BatchReferenceName?: string;
}
export interface BatchAttachToIndex {
  IndexReference: ObjectReference;
  TargetReference: ObjectReference;
}
export interface BatchDetachFromIndex {
  IndexReference: ObjectReference;
  TargetReference: ObjectReference;
}
export interface BatchAttachTypedLink {
  SourceObjectReference: ObjectReference;
  TargetObjectReference: ObjectReference;
  TypedLinkFacet: TypedLinkSchemaAndFacetName;
  Attributes: AttributeNameAndValue[];
}
export interface BatchDetachTypedLink {
  TypedLinkSpecifier: TypedLinkSpecifier;
}
export interface LinkAttributeAction {
  AttributeActionType?: UpdateActionType;
  AttributeUpdateValue?: TypedAttributeValue;
}
export interface LinkAttributeUpdate {
  AttributeKey?: AttributeKey;
  AttributeAction?: LinkAttributeAction;
}
export type LinkAttributeUpdateList = LinkAttributeUpdate[];
export interface BatchUpdateLinkAttributes {
  TypedLinkSpecifier: TypedLinkSpecifier;
  AttributeUpdates: LinkAttributeUpdate[];
}
export interface BatchWriteOperation {
  CreateObject?: BatchCreateObject;
  AttachObject?: BatchAttachObject;
  DetachObject?: BatchDetachObject;
  UpdateObjectAttributes?: BatchUpdateObjectAttributes;
  DeleteObject?: BatchDeleteObject;
  AddFacetToObject?: BatchAddFacetToObject;
  RemoveFacetFromObject?: BatchRemoveFacetFromObject;
  AttachPolicy?: BatchAttachPolicy;
  DetachPolicy?: BatchDetachPolicy;
  CreateIndex?: BatchCreateIndex;
  AttachToIndex?: BatchAttachToIndex;
  DetachFromIndex?: BatchDetachFromIndex;
  AttachTypedLink?: BatchAttachTypedLink;
  DetachTypedLink?: BatchDetachTypedLink;
  UpdateLinkAttributes?: BatchUpdateLinkAttributes;
}
export type BatchWriteOperationList = BatchWriteOperation[];
export interface BatchWriteRequest {
  DirectoryArn: string;
  Operations: BatchWriteOperation[];
}
export interface BatchCreateObjectResponse {
  ObjectIdentifier?: string;
}
export interface BatchAttachObjectResponse {
  attachedObjectIdentifier?: string;
}
export interface BatchDetachObjectResponse {
  detachedObjectIdentifier?: string;
}
export interface BatchUpdateObjectAttributesResponse {
  ObjectIdentifier?: string;
}
export interface BatchDeleteObjectResponse {}
export interface BatchAddFacetToObjectResponse {}
export interface BatchRemoveFacetFromObjectResponse {}
export interface BatchAttachPolicyResponse {}
export interface BatchDetachPolicyResponse {}
export interface BatchCreateIndexResponse {
  ObjectIdentifier?: string;
}
export interface BatchAttachToIndexResponse {
  AttachedObjectIdentifier?: string;
}
export interface BatchDetachFromIndexResponse {
  DetachedObjectIdentifier?: string;
}
export interface BatchAttachTypedLinkResponse {
  TypedLinkSpecifier?: TypedLinkSpecifier;
}
export interface BatchDetachTypedLinkResponse {}
export interface BatchUpdateLinkAttributesResponse {}
export interface BatchWriteOperationResponse {
  CreateObject?: BatchCreateObjectResponse;
  AttachObject?: BatchAttachObjectResponse;
  DetachObject?: BatchDetachObjectResponse;
  UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;
  DeleteObject?: BatchDeleteObjectResponse;
  AddFacetToObject?: BatchAddFacetToObjectResponse;
  RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;
  AttachPolicy?: BatchAttachPolicyResponse;
  DetachPolicy?: BatchDetachPolicyResponse;
  CreateIndex?: BatchCreateIndexResponse;
  AttachToIndex?: BatchAttachToIndexResponse;
  DetachFromIndex?: BatchDetachFromIndexResponse;
  AttachTypedLink?: BatchAttachTypedLinkResponse;
  DetachTypedLink?: BatchDetachTypedLinkResponse;
  UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse;
}
export type BatchWriteOperationResponseList = BatchWriteOperationResponse[];
export interface BatchWriteResponse {
  Responses?: BatchWriteOperationResponse[];
}
export type DirectoryName = string;
export interface CreateDirectoryRequest {
  Name: string;
  SchemaArn: string;
}
export type DirectoryArn = string;
export interface CreateDirectoryResponse {
  DirectoryArn: string;
  Name: string;
  ObjectIdentifier: string;
  AppliedSchemaArn: string;
}
export type FacetAttributeType =
  | "STRING"
  | "BINARY"
  | "BOOLEAN"
  | "NUMBER"
  | "DATETIME"
  | "VARIANT"
  | (string & {});
export type RuleKey = string;
export type RuleType =
  | "BINARY_LENGTH"
  | "NUMBER_COMPARISON"
  | "STRING_FROM_SET"
  | "STRING_LENGTH"
  | (string & {});
export type RuleParameterKey = string;
export type RuleParameterValue = string;
export type RuleParameterMap = { [key: string]: string | undefined };
export interface Rule {
  Type?: RuleType;
  Parameters?: { [key: string]: string | undefined };
}
export type RuleMap = { [key: string]: Rule | undefined };
export interface FacetAttributeDefinition {
  Type: FacetAttributeType;
  DefaultValue?: TypedAttributeValue;
  IsImmutable?: boolean;
  Rules?: { [key: string]: Rule | undefined };
}
export interface FacetAttributeReference {
  TargetFacetName: string;
  TargetAttributeName: string;
}
export type RequiredAttributeBehavior = "REQUIRED_ALWAYS" | "NOT_REQUIRED" | (string & {});
export interface FacetAttribute {
  Name: string;
  AttributeDefinition?: FacetAttributeDefinition;
  AttributeReference?: FacetAttributeReference;
  RequiredBehavior?: RequiredAttributeBehavior;
}
export type FacetAttributeList = FacetAttribute[];
export type ObjectType = "NODE" | "LEAF_NODE" | "POLICY" | "INDEX" | (string & {});
export type FacetStyle = "STATIC" | "DYNAMIC" | (string & {});
export interface CreateFacetRequest {
  SchemaArn: string;
  Name: string;
  Attributes?: FacetAttribute[];
  ObjectType?: ObjectType;
  FacetStyle?: FacetStyle;
}
export interface CreateFacetResponse {}
export interface CreateIndexRequest {
  DirectoryArn: string;
  OrderedIndexedAttributeList: AttributeKey[];
  IsUnique: boolean;
  ParentReference?: ObjectReference;
  LinkName?: string;
}
export interface CreateIndexResponse {
  ObjectIdentifier?: string;
}
export interface CreateObjectRequest {
  DirectoryArn: string;
  SchemaFacets: SchemaFacet[];
  ObjectAttributeList?: AttributeKeyAndValue[];
  ParentReference?: ObjectReference;
  LinkName?: string;
}
export interface CreateObjectResponse {
  ObjectIdentifier?: string;
}
export type SchemaName = string;
export interface CreateSchemaRequest {
  Name: string;
}
export interface CreateSchemaResponse {
  SchemaArn?: string;
}
export interface TypedLinkAttributeDefinition {
  Name: string;
  Type: FacetAttributeType;
  DefaultValue?: TypedAttributeValue;
  IsImmutable?: boolean;
  Rules?: { [key: string]: Rule | undefined };
  RequiredBehavior: RequiredAttributeBehavior;
}
export type TypedLinkAttributeDefinitionList = TypedLinkAttributeDefinition[];
export interface TypedLinkFacet {
  Name: string;
  Attributes: TypedLinkAttributeDefinition[];
  IdentityAttributeOrder: string[];
}
export interface CreateTypedLinkFacetRequest {
  SchemaArn: string;
  Facet: TypedLinkFacet;
}
export interface CreateTypedLinkFacetResponse {}
export interface DeleteDirectoryRequest {
  DirectoryArn: string;
}
export interface DeleteDirectoryResponse {
  DirectoryArn: string;
}
export interface DeleteFacetRequest {
  SchemaArn: string;
  Name: string;
}
export interface DeleteFacetResponse {}
export interface DeleteObjectRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
}
export interface DeleteObjectResponse {}
export interface DeleteSchemaRequest {
  SchemaArn: string;
}
export interface DeleteSchemaResponse {
  SchemaArn?: string;
}
export interface DeleteTypedLinkFacetRequest {
  SchemaArn: string;
  Name: string;
}
export interface DeleteTypedLinkFacetResponse {}
export interface DetachFromIndexRequest {
  DirectoryArn: string;
  IndexReference: ObjectReference;
  TargetReference: ObjectReference;
}
export interface DetachFromIndexResponse {
  DetachedObjectIdentifier?: string;
}
export interface DetachObjectRequest {
  DirectoryArn: string;
  ParentReference: ObjectReference;
  LinkName: string;
}
export interface DetachObjectResponse {
  DetachedObjectIdentifier?: string;
}
export interface DetachPolicyRequest {
  DirectoryArn: string;
  PolicyReference: ObjectReference;
  ObjectReference: ObjectReference;
}
export interface DetachPolicyResponse {}
export interface DetachTypedLinkRequest {
  DirectoryArn: string;
  TypedLinkSpecifier: TypedLinkSpecifier;
}
export interface DetachTypedLinkResponse {}
export interface DisableDirectoryRequest {
  DirectoryArn: string;
}
export interface DisableDirectoryResponse {
  DirectoryArn: string;
}
export interface EnableDirectoryRequest {
  DirectoryArn: string;
}
export interface EnableDirectoryResponse {
  DirectoryArn: string;
}
export interface GetAppliedSchemaVersionRequest {
  SchemaArn: string;
}
export interface GetAppliedSchemaVersionResponse {
  AppliedSchemaArn?: string;
}
export interface GetDirectoryRequest {
  DirectoryArn: string;
}
export type DirectoryState = "ENABLED" | "DISABLED" | "DELETED" | (string & {});
export interface Directory {
  Name?: string;
  DirectoryArn?: string;
  State?: DirectoryState;
  CreationDateTime?: Date;
}
export interface GetDirectoryResponse {
  Directory: Directory;
}
export interface GetFacetRequest {
  SchemaArn: string;
  Name: string;
}
export interface Facet {
  Name?: string;
  ObjectType?: ObjectType;
  FacetStyle?: FacetStyle;
}
export interface GetFacetResponse {
  Facet?: Facet;
}
export interface GetLinkAttributesRequest {
  DirectoryArn: string;
  TypedLinkSpecifier: TypedLinkSpecifier;
  AttributeNames: string[];
  ConsistencyLevel?: ConsistencyLevel;
}
export interface GetLinkAttributesResponse {
  Attributes?: AttributeKeyAndValue[];
}
export interface GetObjectAttributesRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  ConsistencyLevel?: ConsistencyLevel;
  SchemaFacet: SchemaFacet;
  AttributeNames: string[];
}
export interface GetObjectAttributesResponse {
  Attributes?: AttributeKeyAndValue[];
}
export interface GetObjectInformationRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface GetObjectInformationResponse {
  SchemaFacets?: SchemaFacet[];
  ObjectIdentifier?: string;
}
export interface GetSchemaAsJsonRequest {
  SchemaArn: string;
}
export type SchemaJsonDocument = string;
export interface GetSchemaAsJsonResponse {
  Name?: string;
  Document?: string;
}
export interface GetTypedLinkFacetInformationRequest {
  SchemaArn: string;
  Name: string;
}
export interface GetTypedLinkFacetInformationResponse {
  IdentityAttributeOrder?: string[];
}
export interface ListAppliedSchemaArnsRequest {
  DirectoryArn: string;
  SchemaArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type Arns = string[];
export interface ListAppliedSchemaArnsResponse {
  SchemaArns?: string[];
  NextToken?: string;
}
export interface ListAttachedIndicesRequest {
  DirectoryArn: string;
  TargetReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListAttachedIndicesResponse {
  IndexAttachments?: IndexAttachment[];
  NextToken?: string;
}
export interface ListDevelopmentSchemaArnsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDevelopmentSchemaArnsResponse {
  SchemaArns?: string[];
  NextToken?: string;
}
export interface ListDirectoriesRequest {
  NextToken?: string;
  MaxResults?: number;
  state?: DirectoryState;
}
export type DirectoryList = Directory[];
export interface ListDirectoriesResponse {
  Directories: Directory[];
  NextToken?: string;
}
export interface ListFacetAttributesRequest {
  SchemaArn: string;
  Name: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFacetAttributesResponse {
  Attributes?: FacetAttribute[];
  NextToken?: string;
}
export interface ListFacetNamesRequest {
  SchemaArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export type FacetNameList = string[];
export interface ListFacetNamesResponse {
  FacetNames?: string[];
  NextToken?: string;
}
export interface ListIncomingTypedLinksRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  FilterAttributeRanges?: TypedLinkAttributeRange[];
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListIncomingTypedLinksResponse {
  LinkSpecifiers?: TypedLinkSpecifier[];
  NextToken?: string;
}
export interface ListIndexRequest {
  DirectoryArn: string;
  RangesOnIndexedValues?: ObjectAttributeRange[];
  IndexReference: ObjectReference;
  MaxResults?: number;
  NextToken?: string;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListIndexResponse {
  IndexAttachments?: IndexAttachment[];
  NextToken?: string;
}
export interface ListManagedSchemaArnsRequest {
  SchemaArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListManagedSchemaArnsResponse {
  SchemaArns?: string[];
  NextToken?: string;
}
export interface ListObjectAttributesRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
  FacetFilter?: SchemaFacet;
}
export interface ListObjectAttributesResponse {
  Attributes?: AttributeKeyAndValue[];
  NextToken?: string;
}
export interface ListObjectChildrenRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListObjectChildrenResponse {
  Children?: { [key: string]: string | undefined };
  NextToken?: string;
}
export interface ListObjectParentPathsRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListObjectParentPathsResponse {
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[];
  NextToken?: string;
}
export interface ListObjectParentsRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
  IncludeAllLinksToEachParent?: boolean;
}
export type ObjectIdentifierToLinkNameMap = { [key: string]: string | undefined };
export interface ListObjectParentsResponse {
  Parents?: { [key: string]: string | undefined };
  NextToken?: string;
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[];
}
export interface ListObjectPoliciesRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListObjectPoliciesResponse {
  AttachedPolicyIds?: string[];
  NextToken?: string;
}
export interface ListOutgoingTypedLinksRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  FilterAttributeRanges?: TypedLinkAttributeRange[];
  FilterTypedLink?: TypedLinkSchemaAndFacetName;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListOutgoingTypedLinksResponse {
  TypedLinkSpecifiers?: TypedLinkSpecifier[];
  NextToken?: string;
}
export interface ListPolicyAttachmentsRequest {
  DirectoryArn: string;
  PolicyReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
  ConsistencyLevel?: ConsistencyLevel;
}
export interface ListPolicyAttachmentsResponse {
  ObjectIdentifiers?: string[];
  NextToken?: string;
}
export interface ListPublishedSchemaArnsRequest {
  SchemaArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPublishedSchemaArnsResponse {
  SchemaArns?: string[];
  NextToken?: string;
}
export type TagsNumberResults = number;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Tag[];
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
  NextToken?: string;
}
export interface ListTypedLinkFacetAttributesRequest {
  SchemaArn: string;
  Name: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTypedLinkFacetAttributesResponse {
  Attributes?: TypedLinkAttributeDefinition[];
  NextToken?: string;
}
export interface ListTypedLinkFacetNamesRequest {
  SchemaArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export type TypedLinkNameList = string[];
export interface ListTypedLinkFacetNamesResponse {
  FacetNames?: string[];
  NextToken?: string;
}
export interface LookupPolicyRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  NextToken?: string;
  MaxResults?: number;
}
export interface LookupPolicyResponse {
  PolicyToPathList?: PolicyToPath[];
  NextToken?: string;
}
export type Version = string;
export interface PublishSchemaRequest {
  DevelopmentSchemaArn: string;
  Version: string;
  MinorVersion?: string;
  Name?: string;
}
export interface PublishSchemaResponse {
  PublishedSchemaArn?: string;
}
export interface PutSchemaFromJsonRequest {
  SchemaArn: string;
  Document: string;
}
export interface PutSchemaFromJsonResponse {
  Arn?: string;
}
export interface RemoveFacetFromObjectRequest {
  DirectoryArn: string;
  SchemaFacet: SchemaFacet;
  ObjectReference: ObjectReference;
}
export interface RemoveFacetFromObjectResponse {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface FacetAttributeUpdate {
  Attribute?: FacetAttribute;
  Action?: UpdateActionType;
}
export type FacetAttributeUpdateList = FacetAttributeUpdate[];
export interface UpdateFacetRequest {
  SchemaArn: string;
  Name: string;
  AttributeUpdates?: FacetAttributeUpdate[];
  ObjectType?: ObjectType;
}
export interface UpdateFacetResponse {}
export interface UpdateLinkAttributesRequest {
  DirectoryArn: string;
  TypedLinkSpecifier: TypedLinkSpecifier;
  AttributeUpdates: LinkAttributeUpdate[];
}
export interface UpdateLinkAttributesResponse {}
export interface UpdateObjectAttributesRequest {
  DirectoryArn: string;
  ObjectReference: ObjectReference;
  AttributeUpdates: ObjectAttributeUpdate[];
}
export interface UpdateObjectAttributesResponse {
  ObjectIdentifier?: string;
}
export interface UpdateSchemaRequest {
  SchemaArn: string;
  Name: string;
}
export interface UpdateSchemaResponse {
  SchemaArn?: string;
}
export interface TypedLinkFacetAttributeUpdate {
  Attribute: TypedLinkAttributeDefinition;
  Action: UpdateActionType;
}
export type TypedLinkFacetAttributeUpdateList = TypedLinkFacetAttributeUpdate[];
export interface UpdateTypedLinkFacetRequest {
  SchemaArn: string;
  Name: string;
  AttributeUpdates: TypedLinkFacetAttributeUpdate[];
  IdentityAttributeOrder: string[];
}
export interface UpdateTypedLinkFacetResponse {}
export interface UpgradeAppliedSchemaRequest {
  PublishedSchemaArn: string;
  DirectoryArn: string;
  DryRun?: boolean;
}
export interface UpgradeAppliedSchemaResponse {
  UpgradedSchemaArn?: string;
  DirectoryArn?: string;
}
export interface UpgradePublishedSchemaRequest {
  DevelopmentSchemaArn: string;
  PublishedSchemaArn: string;
  MinorVersion: string;
  DryRun?: boolean;
}
export interface UpgradePublishedSchemaResponse {
  UpgradedSchemaArn?: string;
}
export type BatchOperationIndex = number;
export type BatchWriteExceptionType =
  | "InternalServiceException"
  | "ValidationException"
  | "InvalidArnException"
  | "LinkNameAlreadyInUseException"
  | "StillContainsLinksException"
  | "FacetValidationException"
  | "ObjectNotDetachedException"
  | "ResourceNotFoundException"
  | "AccessDeniedException"
  | "InvalidAttachmentException"
  | "NotIndexException"
  | "NotNodeException"
  | "IndexedAttributeMissingException"
  | "ObjectAlreadyDetachedException"
  | "NotPolicyException"
  | "DirectoryNotEnabledException"
  | "LimitExceededException"
  | "UnsupportedIndexTypeException"
  | (string & {});
export type AddFacetToObjectError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Adds a new Facet to an object. An object can have more than one facet applied on it.
 */
export const addFacetToObject: API.OperationMethod<
  AddFacetToObjectRequest,
  AddFacetToObjectResponse,
  AddFacetToObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<AddFacetToObjectRequest>,
  output: __S(7) as any as S.Schema<AddFacetToObjectResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddFacetToObject",
}));

export type ApplySchemaError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidAttachmentException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | SchemaAlreadyExistsException
  | ValidationException
  | CommonErrors;
/**
 * Copies the input published schema, at the specified version, into the Directory with the same
 * name and version as that of the published schema.
 */
export const applySchema: API.OperationMethod<
  ApplySchemaRequest,
  ApplySchemaResponse,
  ApplySchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8) as any as S.Schema<ApplySchemaRequest>,
  output: __S(9) as any as S.Schema<ApplySchemaResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidAttachmentException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    SchemaAlreadyExistsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ApplySchema",
}));

export type AttachObjectError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidAttachmentException
  | LimitExceededException
  | LinkNameAlreadyInUseException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Attaches an existing object to another object. An object can be accessed in two
 * ways:
 *
 * - Using the path
 *
 * - Using `ObjectIdentifier`
 */
export const attachObject: API.OperationMethod<
  AttachObjectRequest,
  AttachObjectResponse,
  AttachObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<AttachObjectRequest>,
  output: __S(11) as any as S.Schema<AttachObjectResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidAttachmentException,
    LimitExceededException,
    LinkNameAlreadyInUseException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachObject",
}));

export type AttachPolicyError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | NotPolicyException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Attaches a policy object to a regular object. An object can have a limited number of attached
 * policies.
 */
export const attachPolicy: API.OperationMethod<
  AttachPolicyRequest,
  AttachPolicyResponse,
  AttachPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<AttachPolicyRequest>,
  output: __S(7) as any as S.Schema<AttachPolicyResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    NotPolicyException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachPolicy",
}));

export type AttachToIndexError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | IndexedAttributeMissingException
  | InternalServiceException
  | InvalidArnException
  | InvalidAttachmentException
  | LimitExceededException
  | LinkNameAlreadyInUseException
  | NotIndexException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Attaches the specified object to the specified index.
 */
export const attachToIndex: API.OperationMethod<
  AttachToIndexRequest,
  AttachToIndexResponse,
  AttachToIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<AttachToIndexRequest>,
  output: __S(11) as any as S.Schema<AttachToIndexResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    IndexedAttributeMissingException,
    InternalServiceException,
    InvalidArnException,
    InvalidAttachmentException,
    LimitExceededException,
    LinkNameAlreadyInUseException,
    NotIndexException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachToIndex",
}));

export type AttachTypedLinkError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidAttachmentException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Attaches a typed link to a specified source and target object. For more information, see Typed Links.
 */
export const attachTypedLink: API.OperationMethod<
  AttachTypedLinkRequest,
  AttachTypedLinkResponse,
  AttachTypedLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<AttachTypedLinkRequest>,
  output: __S(19) as any as S.Schema<AttachTypedLinkResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidAttachmentException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachTypedLink",
}));

export type BatchReadError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Performs all the read operations in a batch.
 */
export const batchRead: API.OperationMethod<
  BatchReadRequest,
  BatchReadResponse,
  BatchReadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38) as any as S.Schema<BatchReadRequest>,
  output: __S(69) as any as S.Schema<BatchReadResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchRead",
}));

export type BatchWriteError =
  | AccessDeniedException
  | BatchWriteException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Performs all the write operations in a batch. Either all the operations succeed or
 * none.
 */
export const batchWrite: API.OperationMethod<
  BatchWriteRequest,
  BatchWriteResponse,
  BatchWriteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92) as any as S.Schema<BatchWriteRequest>,
  output: __S(103) as any as S.Schema<BatchWriteResponse>,
  errors: [
    AccessDeniedException,
    BatchWriteException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchWrite",
}));

export type CreateDirectoryError =
  | AccessDeniedException
  | DirectoryAlreadyExistsException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Directory by copying the published schema into the
 * directory. A directory cannot be created without a schema.
 *
 * You can also quickly create a directory using a managed schema, called the
 * `QuickStartSchema`. For more information, see Managed Schema in the *Amazon Cloud Directory Developer Guide*.
 */
export const createDirectory: API.OperationMethod<
  CreateDirectoryRequest,
  CreateDirectoryResponse,
  CreateDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<CreateDirectoryRequest>,
  output: __S(105) as any as S.Schema<CreateDirectoryResponse>,
  errors: [
    AccessDeniedException,
    DirectoryAlreadyExistsException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDirectory",
}));

export type CreateFacetError =
  | AccessDeniedException
  | FacetAlreadyExistsException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidRuleException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Facet in a schema. Facet creation is allowed only
 * in development or applied schemas.
 */
export const createFacet: API.OperationMethod<
  CreateFacetRequest,
  CreateFacetResponse,
  CreateFacetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<CreateFacetRequest>,
  output: __S(7) as any as S.Schema<CreateFacetResponse>,
  errors: [
    AccessDeniedException,
    FacetAlreadyExistsException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidRuleException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFacet",
}));

export type CreateIndexError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | LinkNameAlreadyInUseException
  | ResourceNotFoundException
  | RetryableConflictException
  | UnsupportedIndexTypeException
  | ValidationException
  | CommonErrors;
/**
 * Creates an index object. See Indexing and search for more information.
 */
export const createIndex: API.OperationMethod<
  CreateIndexRequest,
  CreateIndexResponse,
  CreateIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113) as any as S.Schema<CreateIndexRequest>,
  output: __S(97) as any as S.Schema<CreateIndexResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    LinkNameAlreadyInUseException,
    ResourceNotFoundException,
    RetryableConflictException,
    UnsupportedIndexTypeException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIndex",
}));

export type CreateObjectError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | LinkNameAlreadyInUseException
  | ResourceNotFoundException
  | RetryableConflictException
  | UnsupportedIndexTypeException
  | ValidationException
  | CommonErrors;
/**
 * Creates an object in a Directory. Additionally attaches the object to
 * a parent, if a parent reference and `LinkName` is specified. An object is simply a
 * collection of Facet attributes. You can also use this API call to create a
 * policy object, if the facet from which you create the object is a policy facet.
 */
export const createObject: API.OperationMethod<
  CreateObjectRequest,
  CreateObjectResponse,
  CreateObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114) as any as S.Schema<CreateObjectRequest>,
  output: __S(97) as any as S.Schema<CreateObjectResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    LinkNameAlreadyInUseException,
    ResourceNotFoundException,
    RetryableConflictException,
    UnsupportedIndexTypeException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateObject",
}));

export type CreateSchemaError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | RetryableConflictException
  | SchemaAlreadyExistsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new schema in a development state. A schema can exist in three
 * phases:
 *
 * - *Development:* This is a mutable phase of the schema. All new
 * schemas are in the development phase. Once the schema is finalized, it can be
 * published.
 *
 * - *Published:* Published schemas are immutable and have a version
 * associated with them.
 *
 * - *Applied:* Applied schemas are mutable in a way that allows you
 * to add new schema facets. You can also add new, nonrequired attributes to existing schema
 * facets. You can apply only published schemas to directories.
 */
export const createSchema: API.OperationMethod<
  CreateSchemaRequest,
  CreateSchemaResponse,
  CreateSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115) as any as S.Schema<CreateSchemaRequest>,
  output: __S(116) as any as S.Schema<CreateSchemaResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    RetryableConflictException,
    SchemaAlreadyExistsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSchema",
}));

export type CreateTypedLinkFacetError =
  | AccessDeniedException
  | FacetAlreadyExistsException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidRuleException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Creates a TypedLinkFacet. For more information, see Typed Links.
 */
export const createTypedLinkFacet: API.OperationMethod<
  CreateTypedLinkFacetRequest,
  CreateTypedLinkFacetResponse,
  CreateTypedLinkFacetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120) as any as S.Schema<CreateTypedLinkFacetRequest>,
  output: __S(7) as any as S.Schema<CreateTypedLinkFacetResponse>,
  errors: [
    AccessDeniedException,
    FacetAlreadyExistsException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidRuleException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTypedLinkFacet",
}));

export type DeleteDirectoryError =
  | AccessDeniedException
  | DirectoryDeletedException
  | DirectoryNotDisabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme
 * caution
 * when deleting directories.
 */
export const deleteDirectory: API.OperationMethod<
  DeleteDirectoryRequest,
  DeleteDirectoryResponse,
  DeleteDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121) as any as S.Schema<DeleteDirectoryRequest>,
  output: __S(122) as any as S.Schema<DeleteDirectoryResponse>,
  errors: [
    AccessDeniedException,
    DirectoryDeletedException,
    DirectoryNotDisabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDirectory",
}));

export type DeleteFacetError =
  | AccessDeniedException
  | FacetInUseException
  | FacetNotFoundException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a given Facet. All attributes and Rules
 * that are associated with the facet will be deleted. Only development schema facets are allowed
 * deletion.
 */
export const deleteFacet: API.OperationMethod<
  DeleteFacetRequest,
  DeleteFacetResponse,
  DeleteFacetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123) as any as S.Schema<DeleteFacetRequest>,
  output: __S(7) as any as S.Schema<DeleteFacetResponse>,
  errors: [
    AccessDeniedException,
    FacetInUseException,
    FacetNotFoundException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFacet",
}));

export type DeleteObjectError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ObjectNotDetachedException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an object and its associated attributes. Only objects with no children and no
 * parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see Amazon Cloud Directory Limits.
 */
export const deleteObject: API.OperationMethod<
  DeleteObjectRequest,
  DeleteObjectResponse,
  DeleteObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124) as any as S.Schema<DeleteObjectRequest>,
  output: __S(7) as any as S.Schema<DeleteObjectResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ObjectNotDetachedException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteObject",
}));

export type DeleteSchemaError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | StillContainsLinksException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a given schema. Schemas in a development and published state can only be deleted.
 */
export const deleteSchema: API.OperationMethod<
  DeleteSchemaRequest,
  DeleteSchemaResponse,
  DeleteSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125) as any as S.Schema<DeleteSchemaRequest>,
  output: __S(116) as any as S.Schema<DeleteSchemaResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    StillContainsLinksException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSchema",
}));

export type DeleteTypedLinkFacetError =
  | AccessDeniedException
  | FacetNotFoundException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a TypedLinkFacet. For more information, see Typed Links.
 */
export const deleteTypedLinkFacet: API.OperationMethod<
  DeleteTypedLinkFacetRequest,
  DeleteTypedLinkFacetResponse,
  DeleteTypedLinkFacetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126) as any as S.Schema<DeleteTypedLinkFacetRequest>,
  output: __S(7) as any as S.Schema<DeleteTypedLinkFacetResponse>,
  errors: [
    AccessDeniedException,
    FacetNotFoundException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTypedLinkFacet",
}));

export type DetachFromIndexError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | NotIndexException
  | ObjectAlreadyDetachedException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Detaches the specified object from the specified index.
 */
export const detachFromIndex: API.OperationMethod<
  DetachFromIndexRequest,
  DetachFromIndexResponse,
  DetachFromIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127) as any as S.Schema<DetachFromIndexRequest>,
  output: __S(128) as any as S.Schema<DetachFromIndexResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    NotIndexException,
    ObjectAlreadyDetachedException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachFromIndex",
}));

export type DetachObjectError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | NotNodeException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Detaches a given object from the parent object. The object that is to be detached from the
 * parent is specified by the link name.
 */
export const detachObject: API.OperationMethod<
  DetachObjectRequest,
  DetachObjectResponse,
  DetachObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129) as any as S.Schema<DetachObjectRequest>,
  output: __S(128) as any as S.Schema<DetachObjectResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    NotNodeException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachObject",
}));

export type DetachPolicyError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | NotPolicyException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Detaches a policy from an object.
 */
export const detachPolicy: API.OperationMethod<
  DetachPolicyRequest,
  DetachPolicyResponse,
  DetachPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130) as any as S.Schema<DetachPolicyRequest>,
  output: __S(7) as any as S.Schema<DetachPolicyResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    NotPolicyException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachPolicy",
}));

export type DetachTypedLinkError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Detaches a typed link from a specified source and target object. For more information, see Typed Links.
 */
export const detachTypedLink: API.OperationMethod<
  DetachTypedLinkRequest,
  DetachTypedLinkResponse,
  DetachTypedLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131) as any as S.Schema<DetachTypedLinkRequest>,
  output: __S(7) as any as S.Schema<DetachTypedLinkResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachTypedLink",
}));

export type DisableDirectoryError =
  | AccessDeniedException
  | DirectoryDeletedException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Disables the specified directory. Disabled directories cannot be read or written to.
 * Only enabled directories can be disabled. Disabled directories may be reenabled.
 */
export const disableDirectory: API.OperationMethod<
  DisableDirectoryRequest,
  DisableDirectoryResponse,
  DisableDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132) as any as S.Schema<DisableDirectoryRequest>,
  output: __S(122) as any as S.Schema<DisableDirectoryResponse>,
  errors: [
    AccessDeniedException,
    DirectoryDeletedException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableDirectory",
}));

export type EnableDirectoryError =
  | AccessDeniedException
  | DirectoryDeletedException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Enables the specified directory. Only disabled directories can be enabled. Once
 * enabled, the directory can then be read and written to.
 */
export const enableDirectory: API.OperationMethod<
  EnableDirectoryRequest,
  EnableDirectoryResponse,
  EnableDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133) as any as S.Schema<EnableDirectoryRequest>,
  output: __S(122) as any as S.Schema<EnableDirectoryResponse>,
  errors: [
    AccessDeniedException,
    DirectoryDeletedException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableDirectory",
}));

export type GetAppliedSchemaVersionError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns current applied schema version ARN, including the minor version in use.
 */
export const getAppliedSchemaVersion: API.OperationMethod<
  GetAppliedSchemaVersionRequest,
  GetAppliedSchemaVersionResponse,
  GetAppliedSchemaVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134) as any as S.Schema<GetAppliedSchemaVersionRequest>,
  output: __S(135) as any as S.Schema<GetAppliedSchemaVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAppliedSchemaVersion",
}));

export type GetDirectoryError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves metadata about a directory.
 */
export const getDirectory: API.OperationMethod<
  GetDirectoryRequest,
  GetDirectoryResponse,
  GetDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136) as any as S.Schema<GetDirectoryRequest>,
  output: __S(138) as any as S.Schema<GetDirectoryResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDirectory",
}));

export type GetFacetError =
  | AccessDeniedException
  | FacetNotFoundException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Gets details of the Facet, such as facet name, attributes, Rules, or `ObjectType`. You can call this on all kinds of schema
 * facets -- published, development, or applied.
 */
export const getFacet: API.OperationMethod<
  GetFacetRequest,
  GetFacetResponse,
  GetFacetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139) as any as S.Schema<GetFacetRequest>,
  output: __S(141) as any as S.Schema<GetFacetResponse>,
  errors: [
    AccessDeniedException,
    FacetNotFoundException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFacet",
}));

export type GetLinkAttributesError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves attributes that are associated with a typed link.
 */
export const getLinkAttributes: API.OperationMethod<
  GetLinkAttributesRequest,
  GetLinkAttributesResponse,
  GetLinkAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142) as any as S.Schema<GetLinkAttributesRequest>,
  output: __S(44) as any as S.Schema<GetLinkAttributesResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLinkAttributes",
}));

export type GetObjectAttributesError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves attributes within a facet that are associated with an object.
 */
export const getObjectAttributes: API.OperationMethod<
  GetObjectAttributesRequest,
  GetObjectAttributesResponse,
  GetObjectAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143) as any as S.Schema<GetObjectAttributesRequest>,
  output: __S(44) as any as S.Schema<GetObjectAttributesResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetObjectAttributes",
}));

export type GetObjectInformationError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves metadata about an object.
 */
export const getObjectInformation: API.OperationMethod<
  GetObjectInformationRequest,
  GetObjectInformationResponse,
  GetObjectInformationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(144) as any as S.Schema<GetObjectInformationRequest>,
  output: __S(43) as any as S.Schema<GetObjectInformationResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetObjectInformation",
}));

export type GetSchemaAsJsonError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a JSON representation of the schema. See JSON Schema Format for more information.
 */
export const getSchemaAsJson: API.OperationMethod<
  GetSchemaAsJsonRequest,
  GetSchemaAsJsonResponse,
  GetSchemaAsJsonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145) as any as S.Schema<GetSchemaAsJsonRequest>,
  output: __S(146) as any as S.Schema<GetSchemaAsJsonResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSchemaAsJson",
}));

export type GetTypedLinkFacetInformationError =
  | AccessDeniedException
  | FacetNotFoundException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns the identity attribute order for a specific TypedLinkFacet. For more information, see Typed Links.
 */
export const getTypedLinkFacetInformation: API.OperationMethod<
  GetTypedLinkFacetInformationRequest,
  GetTypedLinkFacetInformationResponse,
  GetTypedLinkFacetInformationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147) as any as S.Schema<GetTypedLinkFacetInformationRequest>,
  output: __S(148) as any as S.Schema<GetTypedLinkFacetInformationResponse>,
  errors: [
    AccessDeniedException,
    FacetNotFoundException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTypedLinkFacetInformation",
}));

export type ListAppliedSchemaArnsError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Lists schema major versions applied to a directory. If `SchemaArn` is provided, lists the minor version.
 */
export const listAppliedSchemaArns: API.PaginatedOperationMethod<
  ListAppliedSchemaArnsRequest,
  ListAppliedSchemaArnsResponse,
  ListAppliedSchemaArnsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(149) as any as S.Schema<ListAppliedSchemaArnsRequest>,
  output: __S(150) as any as S.Schema<ListAppliedSchemaArnsResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppliedSchemaArns",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAttachedIndicesError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Lists indices attached to the specified object.
 */
export const listAttachedIndices: API.PaginatedOperationMethod<
  ListAttachedIndicesRequest,
  ListAttachedIndicesResponse,
  ListAttachedIndicesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(151) as any as S.Schema<ListAttachedIndicesRequest>,
  output: __S(47) as any as S.Schema<ListAttachedIndicesResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachedIndices",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDevelopmentSchemaArnsError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves each Amazon Resource Name (ARN) of schemas in the development
 * state.
 */
export const listDevelopmentSchemaArns: API.PaginatedOperationMethod<
  ListDevelopmentSchemaArnsRequest,
  ListDevelopmentSchemaArnsResponse,
  ListDevelopmentSchemaArnsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(152) as any as S.Schema<ListDevelopmentSchemaArnsRequest>,
  output: __S(150) as any as S.Schema<ListDevelopmentSchemaArnsResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevelopmentSchemaArns",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDirectoriesError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Lists directories created within an account.
 */
export const listDirectories: API.PaginatedOperationMethod<
  ListDirectoriesRequest,
  ListDirectoriesResponse,
  ListDirectoriesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(153) as any as S.Schema<ListDirectoriesRequest>,
  output: __S(155) as any as S.Schema<ListDirectoriesResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDirectories",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFacetAttributesError =
  | AccessDeniedException
  | FacetNotFoundException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves attributes attached to the facet.
 */
export const listFacetAttributes: API.PaginatedOperationMethod<
  ListFacetAttributesRequest,
  ListFacetAttributesResponse,
  ListFacetAttributesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(156) as any as S.Schema<ListFacetAttributesRequest>,
  output: __S(157) as any as S.Schema<ListFacetAttributesResponse>,
  errors: [
    AccessDeniedException,
    FacetNotFoundException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFacetAttributes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFacetNamesError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the names of facets that exist in a schema.
 */
export const listFacetNames: API.PaginatedOperationMethod<
  ListFacetNamesRequest,
  ListFacetNamesResponse,
  ListFacetNamesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(158) as any as S.Schema<ListFacetNamesRequest>,
  output: __S(159) as any as S.Schema<ListFacetNamesResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFacetNames",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListIncomingTypedLinksError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of all the incoming TypedLinkSpecifier
 * information for an object. It also supports filtering by typed link facet and identity
 * attributes. For more information, see Typed Links.
 */
export const listIncomingTypedLinks: API.OperationMethod<
  ListIncomingTypedLinksRequest,
  ListIncomingTypedLinksResponse,
  ListIncomingTypedLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(160) as any as S.Schema<ListIncomingTypedLinksRequest>,
  output: __S(61) as any as S.Schema<ListIncomingTypedLinksResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIncomingTypedLinks",
}));

export type ListIndexError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | NotIndexException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Lists objects attached to the specified index.
 */
export const listIndex: API.PaginatedOperationMethod<
  ListIndexRequest,
  ListIndexResponse,
  ListIndexError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161) as any as S.Schema<ListIndexRequest>,
  output: __S(58) as any as S.Schema<ListIndexResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    NotIndexException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIndex",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListManagedSchemaArnsError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.
 */
export const listManagedSchemaArns: API.PaginatedOperationMethod<
  ListManagedSchemaArnsRequest,
  ListManagedSchemaArnsResponse,
  ListManagedSchemaArnsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(162) as any as S.Schema<ListManagedSchemaArnsRequest>,
  output: __S(150) as any as S.Schema<ListManagedSchemaArnsResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedSchemaArns",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListObjectAttributesError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Lists all attributes that are associated with an object.
 */
export const listObjectAttributes: API.PaginatedOperationMethod<
  ListObjectAttributesRequest,
  ListObjectAttributesResponse,
  ListObjectAttributesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(163) as any as S.Schema<ListObjectAttributesRequest>,
  output: __S(39) as any as S.Schema<ListObjectAttributesResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListObjectAttributes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListObjectChildrenError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | NotNodeException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of child objects that are associated with a given
 * object.
 */
export const listObjectChildren: API.PaginatedOperationMethod<
  ListObjectChildrenRequest,
  ListObjectChildrenResponse,
  ListObjectChildrenError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(164) as any as S.Schema<ListObjectChildrenRequest>,
  output: __S(41) as any as S.Schema<ListObjectChildrenResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    NotNodeException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListObjectChildren",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListObjectParentPathsError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves all available parent paths for any object type such as node, leaf node,
 * policy node, and index node objects. For more information about objects, see Directory Structure.
 *
 * Use this API to evaluate all parents for an object. The call returns all objects from
 * the root of the directory up to the requested object. The API returns the number of paths
 * based on user-defined `MaxResults`, in case there are multiple paths to the parent.
 * The order of the paths and nodes returned is consistent among multiple API calls unless the
 * objects are deleted or moved. Paths not leading to the directory root are ignored from the
 * target object.
 */
export const listObjectParentPaths: API.PaginatedOperationMethod<
  ListObjectParentPathsRequest,
  ListObjectParentPathsResponse,
  ListObjectParentPathsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165) as any as S.Schema<ListObjectParentPathsRequest>,
  output: __S(50) as any as S.Schema<ListObjectParentPathsResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListObjectParentPaths",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListObjectParentsError =
  | AccessDeniedException
  | CannotListParentOfRootException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Lists parent objects that are associated with a given object in pagination
 * fashion.
 */
export const listObjectParents: API.PaginatedOperationMethod<
  ListObjectParentsRequest,
  ListObjectParentsResponse,
  ListObjectParentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(166) as any as S.Schema<ListObjectParentsRequest>,
  output: __S(167) as any as S.Schema<ListObjectParentsResponse>,
  errors: [
    AccessDeniedException,
    CannotListParentOfRootException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListObjectParents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListObjectPoliciesError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns policies attached to an object in pagination fashion.
 */
export const listObjectPolicies: API.PaginatedOperationMethod<
  ListObjectPoliciesRequest,
  ListObjectPoliciesResponse,
  ListObjectPoliciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(168) as any as S.Schema<ListObjectPoliciesRequest>,
  output: __S(51) as any as S.Schema<ListObjectPoliciesResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListObjectPolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOutgoingTypedLinksError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of all the outgoing TypedLinkSpecifier
 * information for an object. It also supports filtering by typed link facet and identity
 * attributes. For more information, see Typed Links.
 */
export const listOutgoingTypedLinks: API.OperationMethod<
  ListOutgoingTypedLinksRequest,
  ListOutgoingTypedLinksResponse,
  ListOutgoingTypedLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169) as any as S.Schema<ListOutgoingTypedLinksRequest>,
  output: __S(60) as any as S.Schema<ListOutgoingTypedLinksResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOutgoingTypedLinks",
}));

export type ListPolicyAttachmentsError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | NotPolicyException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns all of the `ObjectIdentifiers` to which a given policy is attached.
 */
export const listPolicyAttachments: API.PaginatedOperationMethod<
  ListPolicyAttachmentsRequest,
  ListPolicyAttachmentsResponse,
  ListPolicyAttachmentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(170) as any as S.Schema<ListPolicyAttachmentsRequest>,
  output: __S(52) as any as S.Schema<ListPolicyAttachmentsResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    NotPolicyException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyAttachments",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPublishedSchemaArnsError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Lists the major version families of each published schema. If a major version ARN is provided as `SchemaArn`, the minor version revisions in that family are listed instead.
 */
export const listPublishedSchemaArns: API.PaginatedOperationMethod<
  ListPublishedSchemaArnsRequest,
  ListPublishedSchemaArnsResponse,
  ListPublishedSchemaArnsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(171) as any as S.Schema<ListPublishedSchemaArnsRequest>,
  output: __S(150) as any as S.Schema<ListPublishedSchemaArnsResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPublishedSchemaArns",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidTaggingRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns tags for a resource. Tagging is currently supported only for directories with a
 * limit of 50 tags per directory. All 50 tags are returned for a given directory with this API
 * call.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(172) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(175) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidTaggingRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTypedLinkFacetAttributesError =
  | AccessDeniedException
  | FacetNotFoundException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of all attribute definitions for a particular TypedLinkFacet. For more information, see Typed Links.
 */
export const listTypedLinkFacetAttributes: API.PaginatedOperationMethod<
  ListTypedLinkFacetAttributesRequest,
  ListTypedLinkFacetAttributesResponse,
  ListTypedLinkFacetAttributesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(176) as any as S.Schema<ListTypedLinkFacetAttributesRequest>,
  output: __S(177) as any as S.Schema<ListTypedLinkFacetAttributesResponse>,
  errors: [
    AccessDeniedException,
    FacetNotFoundException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTypedLinkFacetAttributes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTypedLinkFacetNamesError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of `TypedLink` facet names for a particular schema.
 * For more information, see Typed Links.
 */
export const listTypedLinkFacetNames: API.PaginatedOperationMethod<
  ListTypedLinkFacetNamesRequest,
  ListTypedLinkFacetNamesResponse,
  ListTypedLinkFacetNamesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(178) as any as S.Schema<ListTypedLinkFacetNamesRequest>,
  output: __S(179) as any as S.Schema<ListTypedLinkFacetNamesResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTypedLinkFacetNames",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type LookupPolicyError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InternalServiceException
  | InvalidArnException
  | InvalidNextTokenException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Lists all policies from the root of the Directory to the object
 * specified. If there are no policies present, an empty list is returned. If policies are
 * present, and if some objects don't have the policies attached, it returns the `ObjectIdentifier`
 * for such objects. If policies are present, it returns `ObjectIdentifier`, `policyId`, and
 * `policyType`. Paths that don't lead to the root from the target object are ignored. For more
 * information, see Policies.
 */
export const lookupPolicy: API.PaginatedOperationMethod<
  LookupPolicyRequest,
  LookupPolicyResponse,
  LookupPolicyError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(180) as any as S.Schema<LookupPolicyRequest>,
  output: __S(181) as any as S.Schema<LookupPolicyResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    InternalServiceException,
    InvalidArnException,
    InvalidNextTokenException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "LookupPolicy",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PublishSchemaError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | SchemaAlreadyPublishedException
  | ValidationException
  | CommonErrors;
/**
 * Publishes a development schema with a major version and a recommended minor version.
 */
export const publishSchema: API.OperationMethod<
  PublishSchemaRequest,
  PublishSchemaResponse,
  PublishSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182) as any as S.Schema<PublishSchemaRequest>,
  output: __S(183) as any as S.Schema<PublishSchemaResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    SchemaAlreadyPublishedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PublishSchema",
}));

export type PutSchemaFromJsonError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidRuleException
  | InvalidSchemaDocException
  | LimitExceededException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Allows a schema to be updated using JSON upload. Only available for development schemas. See JSON Schema Format for more information.
 */
export const putSchemaFromJson: API.OperationMethod<
  PutSchemaFromJsonRequest,
  PutSchemaFromJsonResponse,
  PutSchemaFromJsonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184) as any as S.Schema<PutSchemaFromJsonRequest>,
  output: __S(185) as any as S.Schema<PutSchemaFromJsonResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidRuleException,
    InvalidSchemaDocException,
    LimitExceededException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSchemaFromJson",
}));

export type RemoveFacetFromObjectError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified facet from the specified object.
 */
export const removeFacetFromObject: API.OperationMethod<
  RemoveFacetFromObjectRequest,
  RemoveFacetFromObjectResponse,
  RemoveFacetFromObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<RemoveFacetFromObjectRequest>,
  output: __S(7) as any as S.Schema<RemoveFacetFromObjectResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveFacetFromObject",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidTaggingRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * An API operation for adding tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187) as any as S.Schema<TagResourceRequest>,
  output: __S(7) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidTaggingRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | InvalidTaggingRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * An API operation for removing tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188) as any as S.Schema<UntagResourceRequest>,
  output: __S(7) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    InvalidTaggingRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateFacetError =
  | AccessDeniedException
  | FacetNotFoundException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidFacetUpdateException
  | InvalidRuleException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Does the following:
 *
 * - Adds new `Attributes`, `Rules`, or `ObjectTypes`.
 *
 * - Updates existing `Attributes`, `Rules`, or `ObjectTypes`.
 *
 * - Deletes existing `Attributes`, `Rules`, or `ObjectTypes`.
 */
export const updateFacet: API.OperationMethod<
  UpdateFacetRequest,
  UpdateFacetResponse,
  UpdateFacetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191) as any as S.Schema<UpdateFacetRequest>,
  output: __S(7) as any as S.Schema<UpdateFacetResponse>,
  errors: [
    AccessDeniedException,
    FacetNotFoundException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidFacetUpdateException,
    InvalidRuleException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFacet",
}));

export type UpdateLinkAttributesError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Updates a given typed link's attributes. Attributes to be updated must not contribute to the typed link's identity, as defined by its `IdentityAttributeOrder`.
 */
export const updateLinkAttributes: API.OperationMethod<
  UpdateLinkAttributesRequest,
  UpdateLinkAttributesResponse,
  UpdateLinkAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<UpdateLinkAttributesRequest>,
  output: __S(7) as any as S.Schema<UpdateLinkAttributesResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLinkAttributes",
}));

export type UpdateObjectAttributesError =
  | AccessDeniedException
  | DirectoryNotEnabledException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | LinkNameAlreadyInUseException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Updates a given object's attributes.
 */
export const updateObjectAttributes: API.OperationMethod<
  UpdateObjectAttributesRequest,
  UpdateObjectAttributesResponse,
  UpdateObjectAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193) as any as S.Schema<UpdateObjectAttributesRequest>,
  output: __S(93) as any as S.Schema<UpdateObjectAttributesResponse>,
  errors: [
    AccessDeniedException,
    DirectoryNotEnabledException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    LinkNameAlreadyInUseException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateObjectAttributes",
}));

export type UpdateSchemaError =
  | AccessDeniedException
  | InternalServiceException
  | InvalidArnException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Updates the schema name with a new name. Only development schema names can be
 * updated.
 */
export const updateSchema: API.OperationMethod<
  UpdateSchemaRequest,
  UpdateSchemaResponse,
  UpdateSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194) as any as S.Schema<UpdateSchemaRequest>,
  output: __S(116) as any as S.Schema<UpdateSchemaResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    InvalidArnException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSchema",
}));

export type UpdateTypedLinkFacetError =
  | AccessDeniedException
  | FacetNotFoundException
  | FacetValidationException
  | InternalServiceException
  | InvalidArnException
  | InvalidFacetUpdateException
  | InvalidRuleException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Updates a TypedLinkFacet. For more information, see Typed Links.
 */
export const updateTypedLinkFacet: API.OperationMethod<
  UpdateTypedLinkFacetRequest,
  UpdateTypedLinkFacetResponse,
  UpdateTypedLinkFacetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(197) as any as S.Schema<UpdateTypedLinkFacetRequest>,
  output: __S(7) as any as S.Schema<UpdateTypedLinkFacetResponse>,
  errors: [
    AccessDeniedException,
    FacetNotFoundException,
    FacetValidationException,
    InternalServiceException,
    InvalidArnException,
    InvalidFacetUpdateException,
    InvalidRuleException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTypedLinkFacet",
}));

export type UpgradeAppliedSchemaError =
  | AccessDeniedException
  | IncompatibleSchemaException
  | InternalServiceException
  | InvalidArnException
  | InvalidAttachmentException
  | ResourceNotFoundException
  | RetryableConflictException
  | SchemaAlreadyExistsException
  | ValidationException
  | CommonErrors;
/**
 * Upgrades a single directory in-place using the `PublishedSchemaArn` with schema updates found in `MinorVersion`. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
 */
export const upgradeAppliedSchema: API.OperationMethod<
  UpgradeAppliedSchemaRequest,
  UpgradeAppliedSchemaResponse,
  UpgradeAppliedSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198) as any as S.Schema<UpgradeAppliedSchemaRequest>,
  output: __S(199) as any as S.Schema<UpgradeAppliedSchemaResponse>,
  errors: [
    AccessDeniedException,
    IncompatibleSchemaException,
    InternalServiceException,
    InvalidArnException,
    InvalidAttachmentException,
    ResourceNotFoundException,
    RetryableConflictException,
    SchemaAlreadyExistsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpgradeAppliedSchema",
}));

export type UpgradePublishedSchemaError =
  | AccessDeniedException
  | IncompatibleSchemaException
  | InternalServiceException
  | InvalidArnException
  | InvalidAttachmentException
  | LimitExceededException
  | ResourceNotFoundException
  | RetryableConflictException
  | ValidationException
  | CommonErrors;
/**
 * Upgrades a published schema under a new minor version revision using the current contents of `DevelopmentSchemaArn`.
 */
export const upgradePublishedSchema: API.OperationMethod<
  UpgradePublishedSchemaRequest,
  UpgradePublishedSchemaResponse,
  UpgradePublishedSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200) as any as S.Schema<UpgradePublishedSchemaRequest>,
  output: __S(201) as any as S.Schema<UpgradePublishedSchemaResponse>,
  errors: [
    AccessDeniedException,
    IncompatibleSchemaException,
    InternalServiceException,
    InvalidArnException,
    InvalidAttachmentException,
    LimitExceededException,
    ResourceNotFoundException,
    RetryableConflictException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpgradePublishedSchema",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SchemaArn: S.optional(S.String), FacetName: S.optional(S.String) }),
      ).annotate({ identifier: "SchemaFacet" });
    case 1:
      return S.suspend(() =>
        S.Struct({ SchemaArn: S.String, FacetName: S.String, Name: S.String }),
      ).annotate({ identifier: "AttributeKey" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ StringValue: S.String }),
        /*@__PURE__*/ S.Struct({ BinaryValue: T.Blob }),
        /*@__PURE__*/ S.Struct({ BooleanValue: S.Boolean }),
        /*@__PURE__*/ S.Struct({ NumberValue: S.String }),
        /*@__PURE__*/ S.Struct({
          DatetimeValue: /*@__PURE__*/ S.Date.pipe(
            /*@__PURE__*/ T.TimestampFormat("epoch-seconds"),
          ),
        }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ Key: __S(1), Value: __S(2) })).annotate({
        identifier: "AttributeKeyAndValue",
      });
    case 4:
      return S.Array(__S(3));
    case 5:
      return S.suspend(() => S.Struct({ Selector: S.optional(S.String) })).annotate({
        identifier: "ObjectReference",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          SchemaFacet: __S(0),
          ObjectAttributeList: S.optional(__S(4)),
          ObjectReference: __S(5),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/object/facets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AddFacetToObjectRequest" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AddFacetToObjectResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PublishedSchemaArn: S.String,
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/schema/apply" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ApplySchemaRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AppliedSchemaArn: S.optional(S.String), DirectoryArn: S.optional(S.String) }),
      ).annotate({ identifier: "ApplySchemaResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ParentReference: __S(5),
          ChildReference: __S(5),
          LinkName: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/object/attach" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AttachObjectRequest" });
    case 3:
      return S.suspend(() => S.Struct({ AttachedObjectIdentifier: S.optional(S.String) })).annotate(
        { identifier: "AttachObjectResponse" },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          PolicyReference: __S(5),
          ObjectReference: __S(5),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/policy/attach" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AttachPolicyRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          IndexReference: __S(5),
          TargetReference: __S(5),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/index/attach" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AttachToIndexRequest" });
    case 6:
      return S.suspend(() => S.Struct({ SchemaArn: S.String, TypedLinkName: S.String })).annotate({
        identifier: "TypedLinkSchemaAndFacetName",
      });
    case 7:
      return S.suspend(() => S.Struct({ AttributeName: S.String, Value: __S(2) })).annotate({
        identifier: "AttributeNameAndValue",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15));
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          SourceObjectReference: __S(5),
          TargetObjectReference: __S(5),
          TypedLinkFacet: __S(14),
          Attributes: __S(16),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/typedlink/attach" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AttachTypedLinkRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TypedLinkFacet: __S(14),
          SourceObjectReference: __S(5),
          TargetObjectReference: __S(5),
          IdentityAttributeValues: __S(16),
        }),
      ).annotate({ identifier: "TypedLinkSpecifier" });
    case 3:
      return S.suspend(() => S.Struct({ TypedLinkSpecifier: S.optional(__S(18)) })).annotate({
        identifier: "AttachTypedLinkResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ObjectReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          FacetFilter: S.optional(__S(0)),
        }),
      ).annotate({
        identifier: "BatchListObjectAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ObjectReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BatchListObjectChildren" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TargetReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BatchListAttachedIndices" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ObjectReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BatchListObjectParentPaths",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ObjectReference: __S(5) })).annotate({
        identifier: "BatchGetObjectInformation",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ObjectReference: __S(5),
          SchemaFacet: __S(0),
          AttributeNames: __S(25),
        }),
      ).annotate({ identifier: "BatchGetObjectAttributes" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PolicyReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BatchListPolicyAttachments",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StartMode: S.String,
          StartValue: S.optional(__S(2)),
          EndMode: S.String,
          EndValue: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "TypedAttributeValueRange" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AttributeKey: S.optional(__S(1)),
          Range: S.optional(__S(28)),
        }),
      ).annotate({ identifier: "ObjectAttributeRange" });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.suspend(() =>
        S.Struct({
          RangesOnIndexedValues: S.optional(__S(30)),
          IndexReference: __S(5),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchListIndex" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AttributeName: S.optional(S.String), Range: __S(28) }),
      ).annotate({ identifier: "TypedLinkAttributeRange" });
    case 1:
      return S.Array(__S(32));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ObjectReference: __S(5),
          FilterAttributeRanges: S.optional(__S(33)),
          FilterTypedLink: S.optional(__S(14)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BatchListOutgoingTypedLinks",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TypedLinkSpecifier: __S(18), AttributeNames: __S(25) }),
      ).annotate({ identifier: "BatchGetLinkAttributes" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ListObjectAttributes: S.optional(__S(20)),
          ListObjectChildren: S.optional(__S(21)),
          ListAttachedIndices: S.optional(__S(22)),
          ListObjectParentPaths: S.optional(__S(23)),
          GetObjectInformation: S.optional(__S(24)),
          GetObjectAttributes: S.optional(__S(26)),
          ListObjectParents: S.optional(__S(21)),
          ListObjectPolicies: S.optional(__S(21)),
          ListPolicyAttachments: S.optional(__S(27)),
          LookupPolicy: S.optional(__S(21)),
          ListIndex: S.optional(__S(31)),
          ListOutgoingTypedLinks: S.optional(__S(34)),
          ListIncomingTypedLinks: S.optional(__S(34)),
          GetLinkAttributes: S.optional(__S(35)),
        }),
      ).annotate({ identifier: "BatchReadOperation" });
    case 5:
      return S.Array(__S(36));
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Operations: __S(37),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/batchread" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchReadRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchListObjectAttributesResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Children: S.optional(__S(40)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchListObjectChildrenResponse",
      });
    case 2:
      return S.Array(__S(0));
    case 3:
      return S.suspend(() =>
        S.Struct({
          SchemaFacets: S.optional(__S(42)),
          ObjectIdentifier: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchGetObjectInformationResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(4)) })).annotate({
        identifier: "BatchGetObjectAttributesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IndexedAttributes: S.optional(__S(4)),
          ObjectIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "IndexAttachment" });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({
          IndexAttachments: S.optional(__S(46)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchListAttachedIndicesResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Path: S.optional(S.String),
          ObjectIdentifiers: S.optional(__S(25)),
        }),
      ).annotate({ identifier: "PathToObjectIdentifiers" });
    case 1:
      return S.Array(__S(48));
    case 2:
      return S.suspend(() =>
        S.Struct({
          PathToObjectIdentifiersList: S.optional(__S(49)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchListObjectParentPathsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AttachedPolicyIds: S.optional(__S(25)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchListObjectPoliciesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ObjectIdentifiers: S.optional(__S(25)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchListPolicyAttachmentsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PolicyId: S.optional(S.String),
          ObjectIdentifier: S.optional(S.String),
          PolicyType: S.optional(S.String),
        }),
      ).annotate({ identifier: "PolicyAttachment" });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.suspend(() =>
        S.Struct({ Path: S.optional(S.String), Policies: S.optional(__S(54)) }),
      ).annotate({ identifier: "PolicyToPath" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PolicyToPathList: S.optional(__S(56)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchLookupPolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          IndexAttachments: S.optional(__S(46)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchListIndexResponse" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          TypedLinkSpecifiers: S.optional(__S(59)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchListOutgoingTypedLinksResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LinkSpecifiers: S.optional(__S(59)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchListIncomingTypedLinksResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ObjectIdentifier: S.optional(S.String), LinkName: S.optional(S.String) }),
      ).annotate({
        identifier: "ObjectIdentifierAndLinkNameTuple",
      });
    case 7:
      return S.Array(__S(62));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ParentLinks: S.optional(__S(63)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchListObjectParentsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ListObjectAttributes: S.optional(__S(39)),
          ListObjectChildren: S.optional(__S(41)),
          GetObjectInformation: S.optional(__S(43)),
          GetObjectAttributes: S.optional(__S(44)),
          ListAttachedIndices: S.optional(__S(47)),
          ListObjectParentPaths: S.optional(__S(50)),
          ListObjectPolicies: S.optional(__S(51)),
          ListPolicyAttachments: S.optional(__S(52)),
          LookupPolicy: S.optional(__S(57)),
          ListIndex: S.optional(__S(58)),
          ListOutgoingTypedLinks: S.optional(__S(60)),
          ListIncomingTypedLinks: S.optional(__S(61)),
          GetLinkAttributes: S.optional(__S(44)),
          ListObjectParents: S.optional(__S(64)),
        }),
      ).annotate({
        identifier: "BatchReadSuccessfulResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "BatchReadException" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SuccessfulResponse: S.optional(__S(65)),
          ExceptionResponse: S.optional(__S(66)),
        }),
      ).annotate({
        identifier: "BatchReadOperationResponse",
      });
    case 4:
      return S.Array(__S(67));
    case 5:
      return S.suspend(() => S.Struct({ Responses: S.optional(__S(68)) })).annotate({
        identifier: "BatchReadResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SchemaFacet: __S(42),
          ObjectAttributeList: __S(4),
          ParentReference: S.optional(__S(5)),
          LinkName: S.optional(S.String),
          BatchReferenceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchCreateObject" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ParentReference: __S(5),
          ChildReference: __S(5),
          LinkName: S.String,
        }),
      ).annotate({ identifier: "BatchAttachObject" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ParentReference: __S(5),
          LinkName: S.String,
          BatchReferenceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchDetachObject" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ObjectAttributeActionType: S.optional(S.String),
          ObjectAttributeUpdateValue: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "ObjectAttributeAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ObjectAttributeKey: S.optional(__S(1)),
          ObjectAttributeAction: S.optional(__S(73)),
        }),
      ).annotate({ identifier: "ObjectAttributeUpdate" });
    case 3:
      return S.Array(__S(74));
    case 4:
      return S.suspend(() =>
        S.Struct({ ObjectReference: __S(5), AttributeUpdates: __S(75) }),
      ).annotate({
        identifier: "BatchUpdateObjectAttributes",
      });
    case 5:
      return S.suspend(() => S.Struct({ ObjectReference: __S(5) })).annotate({
        identifier: "BatchDeleteObject",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SchemaFacet: __S(0),
          ObjectAttributeList: __S(4),
          ObjectReference: __S(5),
        }),
      ).annotate({ identifier: "BatchAddFacetToObject" });
    case 7:
      return S.suspend(() => S.Struct({ SchemaFacet: __S(0), ObjectReference: __S(5) })).annotate({
        identifier: "BatchRemoveFacetFromObject",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PolicyReference: __S(5), ObjectReference: __S(5) }),
      ).annotate({ identifier: "BatchAttachPolicy" });
    case 1:
      return S.Array(__S(1));
    case 2:
      return S.suspend(() =>
        S.Struct({
          OrderedIndexedAttributeList: __S(81),
          IsUnique: S.Boolean,
          ParentReference: S.optional(__S(5)),
          LinkName: S.optional(S.String),
          BatchReferenceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchCreateIndex" });
    case 3:
      return S.suspend(() =>
        S.Struct({ IndexReference: __S(5), TargetReference: __S(5) }),
      ).annotate({ identifier: "BatchAttachToIndex" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SourceObjectReference: __S(5),
          TargetObjectReference: __S(5),
          TypedLinkFacet: __S(14),
          Attributes: __S(16),
        }),
      ).annotate({ identifier: "BatchAttachTypedLink" });
    case 5:
      return S.suspend(() => S.Struct({ TypedLinkSpecifier: __S(18) })).annotate({
        identifier: "BatchDetachTypedLink",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AttributeActionType: S.optional(S.String),
          AttributeUpdateValue: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "LinkAttributeAction" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AttributeKey: S.optional(__S(1)),
          AttributeAction: S.optional(__S(86)),
        }),
      ).annotate({ identifier: "LinkAttributeUpdate" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({
          TypedLinkSpecifier: __S(18),
          AttributeUpdates: __S(88),
        }),
      ).annotate({
        identifier: "BatchUpdateLinkAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreateObject: S.optional(__S(70)),
          AttachObject: S.optional(__S(71)),
          DetachObject: S.optional(__S(72)),
          UpdateObjectAttributes: S.optional(__S(76)),
          DeleteObject: S.optional(__S(77)),
          AddFacetToObject: S.optional(__S(78)),
          RemoveFacetFromObject: S.optional(__S(79)),
          AttachPolicy: S.optional(__S(80)),
          DetachPolicy: S.optional(__S(80)),
          CreateIndex: S.optional(__S(82)),
          AttachToIndex: S.optional(__S(83)),
          DetachFromIndex: S.optional(__S(83)),
          AttachTypedLink: S.optional(__S(84)),
          DetachTypedLink: S.optional(__S(85)),
          UpdateLinkAttributes: S.optional(__S(89)),
        }),
      ).annotate({ identifier: "BatchWriteOperation" });
    case 3:
      return S.Array(__S(90));
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Operations: __S(91),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/batchwrite" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchWriteRequest" });
    case 5:
      return S.suspend(() => S.Struct({ ObjectIdentifier: S.optional(S.String) })).annotate({
        identifier: "BatchCreateObjectResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ attachedObjectIdentifier: S.optional(S.String) })).annotate(
        {
          identifier: "BatchAttachObjectResponse",
        },
      );
    case 7:
      return S.suspend(() => S.Struct({ detachedObjectIdentifier: S.optional(S.String) })).annotate(
        {
          identifier: "BatchDetachObjectResponse",
        },
      );
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "BatchRemoveFacetFromObjectResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ ObjectIdentifier: S.optional(S.String) })).annotate({
        identifier: "BatchCreateIndexResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ AttachedObjectIdentifier: S.optional(S.String) })).annotate(
        {
          identifier: "BatchAttachToIndexResponse",
        },
      );
    case 3:
      return S.suspend(() => S.Struct({ DetachedObjectIdentifier: S.optional(S.String) })).annotate(
        {
          identifier: "BatchDetachFromIndexResponse",
        },
      );
    case 4:
      return S.suspend(() => S.Struct({ TypedLinkSpecifier: S.optional(__S(18)) })).annotate({
        identifier: "BatchAttachTypedLinkResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CreateObject: S.optional(__S(93)),
          AttachObject: S.optional(__S(94)),
          DetachObject: S.optional(__S(95)),
          UpdateObjectAttributes: S.optional(__S(93)),
          DeleteObject: S.optional(__S(7)),
          AddFacetToObject: S.optional(__S(7)),
          RemoveFacetFromObject: S.optional(__S(96)),
          AttachPolicy: S.optional(__S(7)),
          DetachPolicy: S.optional(__S(7)),
          CreateIndex: S.optional(__S(97)),
          AttachToIndex: S.optional(__S(98)),
          DetachFromIndex: S.optional(__S(99)),
          AttachTypedLink: S.optional(__S(100)),
          DetachTypedLink: S.optional(__S(7)),
          UpdateLinkAttributes: S.optional(__S(96)),
        }),
      ).annotate({
        identifier: "BatchWriteOperationResponse",
      });
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() => S.Struct({ Responses: S.optional(__S(102)) })).annotate({
        identifier: "BatchWriteResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/directory/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDirectoryRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String,
          Name: S.String,
          ObjectIdentifier: S.String,
          AppliedSchemaArn: S.String,
        }),
      ).annotate({ identifier: "CreateDirectoryResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Parameters: S.optional(__S(40)) }),
      ).annotate({ identifier: "Rule" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(106).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Type: S.String,
          DefaultValue: S.optional(__S(2)),
          IsImmutable: S.optional(S.Boolean),
          Rules: S.optional(__S(107)),
        }),
      ).annotate({ identifier: "FacetAttributeDefinition" });
    case 5:
      return S.suspend(() =>
        S.Struct({ TargetFacetName: S.String, TargetAttributeName: S.String }),
      ).annotate({ identifier: "FacetAttributeReference" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          AttributeDefinition: S.optional(__S(108)),
          AttributeReference: S.optional(__S(109)),
          RequiredBehavior: S.optional(S.String),
        }),
      ).annotate({ identifier: "FacetAttribute" });
    case 7:
      return S.Array(__S(110));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
          Attributes: S.optional(__S(111)),
          ObjectType: S.optional(S.String),
          FacetStyle: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/facet/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateFacetRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          OrderedIndexedAttributeList: __S(81),
          IsUnique: S.Boolean,
          ParentReference: S.optional(__S(5)),
          LinkName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/index" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateIndexRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          SchemaFacets: __S(42),
          ObjectAttributeList: S.optional(__S(4)),
          ParentReference: S.optional(__S(5)),
          LinkName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/object" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateObjectRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/schema/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSchemaRequest" });
    case 4:
      return S.suspend(() => S.Struct({ SchemaArn: S.optional(S.String) })).annotate({
        identifier: "CreateSchemaResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Type: S.String,
          DefaultValue: S.optional(__S(2)),
          IsImmutable: S.optional(S.Boolean),
          Rules: S.optional(__S(107)),
          RequiredBehavior: S.String,
        }),
      ).annotate({
        identifier: "TypedLinkAttributeDefinition",
      });
    case 6:
      return S.Array(__S(117));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Attributes: __S(118),
          IdentityAttributeOrder: __S(25),
        }),
      ).annotate({ identifier: "TypedLinkFacet" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Facet: __S(119),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/amazonclouddirectory/2017-01-11/typedlink/facet/create",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateTypedLinkFacetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/directory" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDirectoryRequest" });
    case 2:
      return S.suspend(() => S.Struct({ DirectoryArn: S.String })).annotate({
        identifier: "DeleteDirectoryResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/facet/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFacetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/object/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteObjectRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/schema" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSchemaRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/amazonclouddirectory/2017-01-11/typedlink/facet/delete",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTypedLinkFacetRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          IndexReference: __S(5),
          TargetReference: __S(5),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/index/detach" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DetachFromIndexRequest" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ DetachedObjectIdentifier: S.optional(S.String) })).annotate(
        { identifier: "DetachFromIndexResponse" },
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ParentReference: __S(5),
          LinkName: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/object/detach" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DetachObjectRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          PolicyReference: __S(5),
          ObjectReference: __S(5),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/policy/detach" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DetachPolicyRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          TypedLinkSpecifier: __S(18),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/typedlink/detach" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DetachTypedLinkRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/directory/disable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisableDirectoryRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/directory/enable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "EnableDirectoryRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ SchemaArn: S.String }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/amazonclouddirectory/2017-01-11/schema/getappliedschema",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAppliedSchemaVersionRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ AppliedSchemaArn: S.optional(S.String) })).annotate({
        identifier: "GetAppliedSchemaVersionResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/directory/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDirectoryRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          DirectoryArn: S.optional(S.String),
          State: S.optional(S.String),
          CreationDateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Directory" });
    case 2:
      return S.suspend(() => S.Struct({ Directory: __S(137) })).annotate({
        identifier: "GetDirectoryResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/facet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFacetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ObjectType: S.optional(S.String),
          FacetStyle: S.optional(S.String),
        }),
      ).annotate({ identifier: "Facet" });
    case 5:
      return S.suspend(() => S.Struct({ Facet: S.optional(__S(140)) })).annotate({
        identifier: "GetFacetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          TypedLinkSpecifier: __S(18),
          AttributeNames: __S(25),
          ConsistencyLevel: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/amazonclouddirectory/2017-01-11/typedlink/attributes/get",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetLinkAttributesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
          SchemaFacet: __S(0),
          AttributeNames: __S(25),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/amazonclouddirectory/2017-01-11/object/attributes/get",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetObjectAttributesRequest",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/object/information" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetObjectInformationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/schema/json" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSchemaAsJsonRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Document: S.optional(S.String) }),
      ).annotate({ identifier: "GetSchemaAsJsonResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/typedlink/facet/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTypedLinkFacetInformationRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ IdentityAttributeOrder: S.optional(__S(25)) })).annotate({
        identifier: "GetTypedLinkFacetInformationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String,
          SchemaArn: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/schema/applied" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppliedSchemaArnsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ SchemaArns: S.optional(__S(25)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAppliedSchemaArnsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          TargetReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/object/indices" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAttachedIndicesRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/schema/development" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDevelopmentSchemaArnsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          state: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/directory/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDirectoriesRequest" });
    case 2:
      return S.Array(__S(137));
    case 3:
      return S.suspend(() =>
        S.Struct({ Directories: __S(154), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDirectoriesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/facet/attributes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFacetAttributesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Attributes: S.optional(__S(111)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListFacetAttributesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/facet/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFacetNamesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ FacetNames: S.optional(__S(25)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFacetNamesResponse" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          FilterAttributeRanges: S.optional(__S(33)),
          FilterTypedLink: S.optional(__S(14)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ConsistencyLevel: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/typedlink/incoming" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIncomingTypedLinksRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          RangesOnIndexedValues: S.optional(__S(30)),
          IndexReference: __S(5),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/index/targets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIndexRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/schema/managed" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedSchemaArnsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
          FacetFilter: S.optional(__S(0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/object/attributes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListObjectAttributesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/object/children" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListObjectChildrenRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/object/parentpaths" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListObjectParentPathsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
          IncludeAllLinksToEachParent: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/object/parent" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListObjectParentsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Parents: S.optional(__S(40)),
          NextToken: S.optional(S.String),
          ParentLinks: S.optional(__S(63)),
        }),
      ).annotate({
        identifier: "ListObjectParentsResponse",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/object/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListObjectPoliciesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          FilterAttributeRanges: S.optional(__S(33)),
          FilterTypedLink: S.optional(__S(14)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ConsistencyLevel: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/typedlink/outgoing" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOutgoingTypedLinksRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          PolicyReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ConsistencyLevel: S.optional(S.String).pipe(T.HttpHeader("x-amz-consistency-level")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/policy/attachment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPolicyAttachmentsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/schema/published" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPublishedSchemaArnsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/tags" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 6:
      return S.Array(__S(173));
    case 7:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(__S(174)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/amazonclouddirectory/2017-01-11/typedlink/facet/attributes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTypedLinkFacetAttributesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(118)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTypedLinkFacetAttributesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/amazonclouddirectory/2017-01-11/typedlink/facet/list",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTypedLinkFacetNamesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ FacetNames: S.optional(__S(25)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTypedLinkFacetNamesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/amazonclouddirectory/2017-01-11/policy/lookup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "LookupPolicyRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PolicyToPathList: S.optional(__S(56)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "LookupPolicyResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DevelopmentSchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Version: S.String,
          MinorVersion: S.optional(S.String),
          Name: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/schema/publish" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PublishSchemaRequest" });
    case 7:
      return S.suspend(() => S.Struct({ PublishedSchemaArn: S.optional(S.String) })).annotate({
        identifier: "PublishSchemaResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Document: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/schema/json" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutSchemaFromJsonRequest" });
    case 1:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "PutSchemaFromJsonResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          SchemaFacet: __S(0),
          ObjectReference: __S(5),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/object/facets/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveFacetFromObjectRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(174) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/tags/add" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(25) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/tags/remove" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Attribute: S.optional(__S(110)), Action: S.optional(S.String) }),
      ).annotate({ identifier: "FacetAttributeUpdate" });
    case 6:
      return S.Array(__S(189));
    case 7:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
          AttributeUpdates: S.optional(__S(190)),
          ObjectType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/facet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFacetRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          TypedLinkSpecifier: __S(18),
          AttributeUpdates: __S(88),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/amazonclouddirectory/2017-01-11/typedlink/attributes/update",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLinkAttributesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          ObjectReference: __S(5),
          AttributeUpdates: __S(75),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/object/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateObjectAttributesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/schema/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSchemaRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Attribute: __S(117), Action: S.String })).annotate({
        identifier: "TypedLinkFacetAttributeUpdate",
      });
    case 4:
      return S.Array(__S(195));
    case 5:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.String.pipe(T.HttpHeader("x-amz-data-partition")),
          Name: S.String,
          AttributeUpdates: __S(196),
          IdentityAttributeOrder: __S(25),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/amazonclouddirectory/2017-01-11/typedlink/facet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTypedLinkFacetRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PublishedSchemaArn: S.String,
          DirectoryArn: S.String,
          DryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/amazonclouddirectory/2017-01-11/schema/upgradeapplied",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpgradeAppliedSchemaRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ UpgradedSchemaArn: S.optional(S.String), DirectoryArn: S.optional(S.String) }),
      ).annotate({
        identifier: "UpgradeAppliedSchemaResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DevelopmentSchemaArn: S.String,
          PublishedSchemaArn: S.String,
          MinorVersion: S.String,
          DryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/amazonclouddirectory/2017-01-11/schema/upgradepublished",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpgradePublishedSchemaRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ UpgradedSchemaArn: S.optional(S.String) })).annotate({
        identifier: "UpgradePublishedSchemaResponse",
      });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
  }
}
