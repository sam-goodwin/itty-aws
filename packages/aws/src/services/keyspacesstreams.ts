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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "KeyspacesStreams",
  serviceShapeName: "KeyspacesStreams",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cassandra" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-09-09");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://cassandra-streams-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://cassandra-streams.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AccessDeniedException", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InternalServerException", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFoundException", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ThrottlingException", httpResponseCode: 429 }),
      /*@__PURE__*/ T.HttpError(429),
    ),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      errorCode: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionType).annotate({
          identifier: "ValidationExceptionType",
        }),
      ),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ValidationException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type ShardIterator = string;
export interface GetRecordsInput {
  shardIterator: string;
  maxResults?: number;
}
const GetRecordsInput = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<GetRecordsInput>;
export type OriginType = "USER" | "REPLICATION" | "TTL" | (string & {});
const OriginType = S.String;

export interface KeyspacesMetadata {
  expirationTime?: string;
  writeTime?: string;
}
const KeyspacesMetadata = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<KeyspacesMetadata>;
export interface KeyspacesCell {
  value?: KeyspacesCellValue;
  metadata?: KeyspacesMetadata;
}
const KeyspacesCell = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<KeyspacesCell>;
export type KeyspacesCellList = KeyspacesCell[];
const KeyspacesCellList = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<KeyspacesCellList>;
export interface KeyspacesCellMapDefinition {
  key?: KeyspacesCellValue;
  value?: KeyspacesCellValue;
  metadata?: KeyspacesMetadata;
}
const KeyspacesCellMapDefinition = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<KeyspacesCellMapDefinition>;
export type KeyspacesCellMap = KeyspacesCellMapDefinition[];
const KeyspacesCellMap = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<KeyspacesCellMap>;
export type KeyspacesUdtMap = { [key: string]: KeyspacesCell | undefined };
const KeyspacesUdtMap = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<KeyspacesUdtMap>;
export type KeyspacesCellValue =
  | {
      asciiT: string;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT: string;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT: Uint8Array;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT: boolean;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT: string;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT: string;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT: string;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT: string;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT: string;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT: string;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT: string;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT: string;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT: KeyspacesCell[];
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT: KeyspacesCellMapDefinition[];
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT: KeyspacesCell[];
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT: string;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT: string;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT: string;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT: string;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT: string;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT: string;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT: KeyspacesCell[];
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT: string;
      varcharT?: never;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT: string;
      varintT?: never;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT: string;
      udtT?: never;
    }
  | {
      asciiT?: never;
      bigintT?: never;
      blobT?: never;
      boolT?: never;
      counterT?: never;
      dateT?: never;
      decimalT?: never;
      doubleT?: never;
      durationT?: never;
      floatT?: never;
      inetT?: never;
      intT?: never;
      listT?: never;
      mapT?: never;
      setT?: never;
      smallintT?: never;
      textT?: never;
      timeT?: never;
      timestampT?: never;
      timeuuidT?: never;
      tinyintT?: never;
      tupleT?: never;
      uuidT?: never;
      varcharT?: never;
      varintT?: never;
      udtT: { [key: string]: KeyspacesCell | undefined };
    };
const KeyspacesCellValue = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<KeyspacesCellValue>;
export type KeyspacesKeysMap = { [key: string]: KeyspacesCellValue | undefined };
const KeyspacesKeysMap = /*@__PURE__*/ __L.at(__c1, 0);
export type KeyspacesCells = { [key: string]: KeyspacesCell | undefined };
const KeyspacesCells = /*@__PURE__*/ __L.at(__c1, 1);
export interface KeyspacesRow {
  valueCells?: { [key: string]: KeyspacesCell | undefined };
  staticCells?: { [key: string]: KeyspacesCell | undefined };
  rowMetadata?: KeyspacesMetadata;
}
const KeyspacesRow = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<KeyspacesRow>;
export type SequenceNumber = string;
export interface Record {
  eventVersion?: string;
  createdAt?: Date;
  origin?: OriginType;
  partitionKeys?: { [key: string]: KeyspacesCellValue | undefined };
  clusteringKeys?: { [key: string]: KeyspacesCellValue | undefined };
  newImage?: KeyspacesRow;
  oldImage?: KeyspacesRow;
  sequenceNumber?: string;
}
const Record = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<Record>;
export type RecordList = Record[];
const RecordList = /*@__PURE__*/ __L.at(__c1, 4);
export type IteratorPosition = "AT_TIP" | "BEHIND_TIP" | (string & {});
const IteratorPosition = S.String;

export interface IteratorDescription {
  iteratorPosition?: IteratorPosition;
}
const IteratorDescription = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<IteratorDescription>;
export interface GetRecordsOutput {
  changeRecords?: Record[];
  nextShardIterator?: string;
  iteratorDescription?: IteratorDescription;
}
const GetRecordsOutput = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<GetRecordsOutput>;
export type StreamArn = string;
export type ShardId = string;
export type ShardIteratorType =
  | "TRIM_HORIZON"
  | "LATEST"
  | "AT_SEQUENCE_NUMBER"
  | "AFTER_SEQUENCE_NUMBER"
  | (string & {});
const ShardIteratorType = S.String;

export interface GetShardIteratorInput {
  streamArn: string;
  shardId: string;
  shardIteratorType: ShardIteratorType;
  sequenceNumber?: string;
}
const GetShardIteratorInput = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<GetShardIteratorInput>;
export interface GetShardIteratorOutput {
  shardIterator?: string;
}
const GetShardIteratorOutput = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<GetShardIteratorOutput>;
export type ShardFilterType = "CHILD_SHARDS" | (string & {});
const ShardFilterType = S.String;

export interface ShardFilter {
  type?: ShardFilterType;
  shardId?: string;
}
const ShardFilter = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<ShardFilter>;
export type ShardIdToken = string;
export interface GetStreamInput {
  streamArn: string;
  maxResults?: number;
  shardFilter?: ShardFilter;
  nextToken?: string;
}
const GetStreamInput = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<GetStreamInput>;
export type StreamStatus = "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED" | (string & {});
const StreamStatus = S.String;

export type StreamViewType =
  | "NEW_IMAGE"
  | "OLD_IMAGE"
  | "NEW_AND_OLD_IMAGES"
  | "KEYS_ONLY"
  | (string & {});
const StreamViewType = S.String;

export type KeyspaceName = string;
export type TableName = string;
export interface SequenceNumberRange {
  startingSequenceNumber?: string;
  endingSequenceNumber?: string;
}
const SequenceNumberRange = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<SequenceNumberRange>;
export type ShardIdList = string[];
const ShardIdList = /*@__PURE__*/ __L.at(__c2, 4);
export interface Shard {
  shardId?: string;
  sequenceNumberRange?: SequenceNumberRange;
  parentShardIds?: string[];
}
const Shard = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<Shard>;
export type ShardDescriptionList = Shard[];
const ShardDescriptionList = /*@__PURE__*/ __L.at(__c2, 6);
export interface GetStreamOutput {
  streamArn: string;
  streamLabel: string;
  streamStatus: StreamStatus;
  streamViewType: StreamViewType;
  creationRequestDateTime: Date;
  keyspaceName: string;
  tableName: string;
  shards?: Shard[];
  nextToken?: string;
}
const GetStreamOutput = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<GetStreamOutput>;
export type StreamArnToken = string;
export interface ListStreamsInput {
  keyspaceName?: string;
  tableName?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListStreamsInput = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ListStreamsInput>;
export interface Stream {
  streamArn: string;
  keyspaceName: string;
  tableName: string;
  streamLabel: string;
}
const Stream = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<Stream>;
export type StreamList = Stream[];
const StreamList = /*@__PURE__*/ __L.at(__c3, 2);
export interface ListStreamsOutput {
  streams?: Stream[];
  nextToken?: string;
}
const ListStreamsOutput = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ListStreamsOutput>;
export type ValidationExceptionType =
  | "InvalidFormat"
  | "TrimmedDataAccess"
  | "ExpiredIterator"
  | "ExpiredNextToken"
  | (string & {});
const ValidationExceptionType = S.String;

export type GetRecordsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves data records from a specified shard in an Amazon Keyspaces data stream. This operation returns a collection of data records from the shard, including the primary key columns and information about modifications made to the captured table data. Each record represents a single data modification in the Amazon Keyspaces table and includes metadata about when the change occurred.
 */
export const getRecords: API.OperationMethod<
  GetRecordsInput,
  GetRecordsOutput,
  GetRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecordsInput,
  output: GetRecordsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecords",
}));

export type GetShardIteratorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a shard iterator that serves as a bookmark for reading data from a specific position in an Amazon Keyspaces data stream's shard. The shard iterator specifies the shard position from which to start reading data records sequentially. You can specify whether to begin reading at the latest record, the oldest record, or at a particular sequence number within the shard.
 */
export const getShardIterator: API.OperationMethod<
  GetShardIteratorInput,
  GetShardIteratorOutput,
  GetShardIteratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetShardIteratorInput,
  output: GetShardIteratorOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetShardIterator",
}));

export type GetStreamError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns detailed information about a specific data capture stream for an Amazon Keyspaces table. The information includes the stream's Amazon Resource Name (ARN), creation time, current status, retention period, shard composition, and associated table details. This operation helps you monitor and manage the configuration of your Amazon Keyspaces data streams.
 */
export const getStream: API.PaginatedOperationMethod<
  GetStreamInput,
  GetStreamOutput,
  GetStreamError,
  Credentials | HttpClient.HttpClient,
  Shard
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetStreamInput,
  output: GetStreamOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStream",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "shards",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStreamsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all data capture streams associated with your Amazon Keyspaces account or for a specific keyspace or table. The response includes information such as stream ARNs, table associations, creation timestamps, and current status. This operation helps you discover and manage all active data streams in your Amazon Keyspaces environment.
 */
export const listStreams: API.PaginatedOperationMethod<
  ListStreamsInput,
  ListStreamsOutput,
  ListStreamsError,
  Credentials | HttpClient.HttpClient,
  Stream
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStreamsInput,
  output: ListStreamsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStreams",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "streams",
    pageSize: "maxResults",
  } as const,
})) as any;

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ shardIterator: S.String, maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRecordsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ expirationTime: S.optional(S.String), writeTime: S.optional(S.String) }),
      ).annotate({ identifier: "KeyspacesMetadata" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(
            S.suspend(() => KeyspacesCellValue).annotate({ identifier: "KeyspacesCellValue" }),
          ),
          metadata: S.optional(KeyspacesMetadata),
        }),
      ).annotate({ identifier: "KeyspacesCell" });
    case 3:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<KeyspacesCell> => KeyspacesCell).annotate({
          identifier: "KeyspacesCell",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(
            S.suspend(() => KeyspacesCellValue).annotate({ identifier: "KeyspacesCellValue" }),
          ),
          value: S.optional(
            S.suspend(() => KeyspacesCellValue).annotate({ identifier: "KeyspacesCellValue" }),
          ),
          metadata: S.optional(KeyspacesMetadata),
        }),
      ).annotate({
        identifier: "KeyspacesCellMapDefinition",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ S.suspend(
          (): S.Schema<KeyspacesCellMapDefinition> => KeyspacesCellMapDefinition,
        ).annotate({
          identifier: "KeyspacesCellMapDefinition",
        }),
      );
    case 6:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<KeyspacesCell> => KeyspacesCell)
          .annotate({ identifier: "KeyspacesCell" })
          .pipe(S.optional),
      );
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ asciiT: S.String }),
        /*@__PURE__*/ S.Struct({ bigintT: S.String }),
        /*@__PURE__*/ S.Struct({ blobT: T.Blob }),
        /*@__PURE__*/ S.Struct({ boolT: S.Boolean }),
        /*@__PURE__*/ S.Struct({ counterT: S.String }),
        /*@__PURE__*/ S.Struct({ dateT: S.String }),
        /*@__PURE__*/ S.Struct({ decimalT: S.String }),
        /*@__PURE__*/ S.Struct({ doubleT: S.String }),
        /*@__PURE__*/ S.Struct({ durationT: S.String }),
        /*@__PURE__*/ S.Struct({ floatT: S.String }),
        /*@__PURE__*/ S.Struct({ inetT: S.String }),
        /*@__PURE__*/ S.Struct({ intT: S.String }),
        /*@__PURE__*/ S.Struct({
          listT: /*@__PURE__*/ S.suspend(() => KeyspacesCellList).annotate({
            identifier: "KeyspacesCellList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          mapT: /*@__PURE__*/ S.suspend(() => KeyspacesCellMap).annotate({
            identifier: "KeyspacesCellMap",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          setT: /*@__PURE__*/ S.suspend(() => KeyspacesCellList).annotate({
            identifier: "KeyspacesCellList",
          }),
        }),
        /*@__PURE__*/ S.Struct({ smallintT: S.String }),
        /*@__PURE__*/ S.Struct({ textT: S.String }),
        /*@__PURE__*/ S.Struct({ timeT: S.String }),
        /*@__PURE__*/ S.Struct({ timestampT: S.String }),
        /*@__PURE__*/ S.Struct({ timeuuidT: S.String }),
        /*@__PURE__*/ S.Struct({ tinyintT: S.String }),
        /*@__PURE__*/ S.Struct({
          tupleT: /*@__PURE__*/ S.suspend(() => KeyspacesCellList).annotate({
            identifier: "KeyspacesCellList",
          }),
        }),
        /*@__PURE__*/ S.Struct({ uuidT: S.String }),
        /*@__PURE__*/ S.Struct({ varcharT: S.String }),
        /*@__PURE__*/ S.Struct({ varintT: S.String }),
        /*@__PURE__*/ S.Struct({
          udtT: /*@__PURE__*/ S.suspend(() => KeyspacesUdtMap).annotate({
            identifier: "KeyspacesUdtMap",
          }),
        }),
      ]);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend(() => KeyspacesCellValue)
          .annotate({ identifier: "KeyspacesCellValue" })
          .pipe(S.optional),
      );
    case 1:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<KeyspacesCell> => KeyspacesCell)
          .annotate({ identifier: "KeyspacesCell" })
          .pipe(S.optional),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          valueCells: S.optional(KeyspacesCells),
          staticCells: S.optional(KeyspacesCells),
          rowMetadata: S.optional(KeyspacesMetadata),
        }),
      ).annotate({ identifier: "KeyspacesRow" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          eventVersion: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          origin: S.optional(OriginType),
          partitionKeys: S.optional(KeyspacesKeysMap),
          clusteringKeys: S.optional(KeyspacesKeysMap),
          newImage: S.optional(KeyspacesRow),
          oldImage: S.optional(KeyspacesRow),
          sequenceNumber: S.optional(S.String),
        }),
      ).annotate({ identifier: "Record" });
    case 4:
      return S.Array(Record);
    case 5:
      return S.suspend(() => S.Struct({ iteratorPosition: S.optional(IteratorPosition) })).annotate(
        { identifier: "IteratorDescription" },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          changeRecords: S.optional(RecordList),
          nextShardIterator: S.optional(S.String),
          iteratorDescription: S.optional(IteratorDescription),
        }),
      ).annotate({ identifier: "GetRecordsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          streamArn: S.String,
          shardId: S.String,
          shardIteratorType: ShardIteratorType,
          sequenceNumber: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetShardIteratorInput" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ shardIterator: S.optional(S.String) })).annotate({
        identifier: "GetShardIteratorOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ type: S.optional(ShardFilterType), shardId: S.optional(S.String) }),
      ).annotate({ identifier: "ShardFilter" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          streamArn: S.String,
          maxResults: S.optional(S.Number),
          shardFilter: S.optional(ShardFilter),
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetStreamInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          startingSequenceNumber: S.optional(S.String),
          endingSequenceNumber: S.optional(S.String),
        }),
      ).annotate({ identifier: "SequenceNumberRange" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          shardId: S.optional(S.String),
          sequenceNumberRange: S.optional(SequenceNumberRange),
          parentShardIds: S.optional(ShardIdList),
        }),
      ).annotate({ identifier: "Shard" });
    case 6:
      return S.Array(Shard);
    case 7:
      return S.suspend(() =>
        S.Struct({
          streamArn: S.String,
          streamLabel: S.String,
          streamStatus: StreamStatus,
          streamViewType: StreamViewType,
          creationRequestDateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          keyspaceName: S.String,
          tableName: S.String,
          shards: S.optional(ShardDescriptionList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetStreamOutput" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          keyspaceName: S.optional(S.String),
          tableName: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListStreamsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          streamArn: S.String,
          keyspaceName: S.String,
          tableName: S.String,
          streamLabel: S.String,
        }),
      ).annotate({ identifier: "Stream" });
    case 2:
      return S.Array(Stream);
    case 3:
      return S.suspend(() =>
        S.Struct({ streams: S.optional(StreamList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListStreamsOutput" });
  }
}
