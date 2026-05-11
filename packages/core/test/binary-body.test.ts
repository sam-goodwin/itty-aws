import * as Schema from "effect/Schema";
import * as Stream from "effect/Stream";
import { describe, expect, it } from "vitest";
import * as T from "../src/traits.ts";

// `T.Http({ contentType: "binary" })` operations carry a single
// `T.HttpBody()` field whose value (Blob / Uint8Array / ArrayBuffer / string)
// IS the entire HTTP request body. `buildRequestParts` must surface that
// value verbatim as `parts.body` (NOT a record of body fields), so the
// runtime can hand it straight to `HttpBody.uint8Array` / `HttpBody.text`.
describe("buildRequestParts — binary HTTP body", () => {
  const BinaryBodySchema = Schema.Union([
    Schema.declare(
      (input): input is Uint8Array =>
        typeof Uint8Array !== "undefined" && input instanceof Uint8Array,
      { identifier: "Uint8Array" },
    ),
    Schema.String,
  ]);

  const PutObjectInput = Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    objectName: Schema.String.pipe(T.HttpPath("objectName")),
    contentType: Schema.optional(Schema.String).pipe(
      T.HttpHeader("content-type"),
    ),
    body: BinaryBodySchema.pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/buckets/{bucketName}/objects/{objectName}",
      contentType: "binary",
    }),
  );

  it("preserves a Uint8Array body verbatim", () => {
    const httpTrait = T.getHttpTrait(PutObjectInput.ast);
    expect(httpTrait?.contentType).toBe("binary");

    const body = new Uint8Array([1, 2, 3, 4, 5]);
    const parts = T.buildRequestParts(
      PutObjectInput.ast,
      httpTrait!,
      {
        bucketName: "my-bucket",
        objectName: "data.bin",
        contentType: "application/octet-stream",
        body,
      },
      PutObjectInput,
    );

    expect(parts.path).toBe("/buckets/my-bucket/objects/data.bin");
    expect(parts.headers).toEqual({
      "content-type": "application/octet-stream",
    });
    // The single `T.HttpBody()` field IS the body — not wrapped in a record.
    expect(parts.body).toBe(body);
    expect(parts.body).toBeInstanceOf(Uint8Array);
    expect(parts.isMultipart).not.toBe(true);
  });

  it("preserves a string body verbatim", () => {
    const httpTrait = T.getHttpTrait(PutObjectInput.ast);
    const parts = T.buildRequestParts(
      PutObjectInput.ast,
      httpTrait!,
      {
        bucketName: "my-bucket",
        objectName: "hello.txt",
        contentType: "text/plain",
        body: "hello world",
      },
      PutObjectInput,
    );

    expect(parts.body).toBe("hello world");
    expect(parts.headers["content-type"]).toBe("text/plain");
  });

  it("does not coerce the binary value into a record of body fields", () => {
    // Regression guard: an earlier shape mistakenly wrapped HttpBody fields as
    // `{ [tsName]: value }` for binary operations, which would force the
    // runtime down the JSON branch and produce `JSON.stringify(uint8Array) ===
    // '{"0":1,"1":2,...}'` on the wire.
    const body = new Uint8Array([0, 1, 2]);
    const parts = T.buildRequestParts(
      PutObjectInput.ast,
      T.getHttpTrait(PutObjectInput.ast)!,
      {
        bucketName: "b",
        objectName: "k",
        body,
      },
      PutObjectInput,
    );

    expect(parts.body).toBe(body);
    // Regression sentinel: must not be wrapped in `{ body: <value> }`.
    expect(parts.body).not.toMatchObject({ body: expect.anything() });
  });
});

// `T.Http({ responseContentType: "binary" })` operations have an output
// schema shaped like `{ body: Stream<Uint8Array>, ...headers }`. The runtime
// uses `buildBinaryResponse` to populate that struct from a body stream and
// the response headers map.
describe("buildBinaryResponse — S3-style download response", () => {
  const GetObjectOutput = Schema.Struct({
    body: Schema.declare(
      (input): input is Stream.Stream<Uint8Array, never> =>
        Stream.isStream(input as Stream.Stream<unknown, unknown, unknown>),
      { identifier: "Stream" },
    ).pipe(T.BinaryResponseBody()),
    etag: Schema.optional(Schema.String).pipe(T.HttpResponseHeader("etag")),
    contentType: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("content-type"),
    ),
    contentLength: Schema.optional(Schema.Number).pipe(
      T.HttpResponseHeader("content-length"),
    ),
    storageClass: Schema.optional(Schema.String).pipe(
      T.HttpResponseHeader("cf-r2-storage-class"),
    ),
  });

  it("places the stream on the body field and copies headers verbatim", () => {
    const stream = Stream.succeed(new Uint8Array([1, 2, 3]));
    const result = T.buildBinaryResponse(GetObjectOutput.ast, stream, {
      etag: "abc123",
      "content-type": "text/plain",
      "content-length": "3",
      "cf-r2-storage-class": "Standard",
    });

    expect(result.body).toBe(stream);
    expect(result.etag).toBe("abc123");
    expect(result.contentType).toBe("text/plain");
    expect(result.storageClass).toBe("Standard");
  });

  it("coerces numeric headers to numbers", () => {
    const result = T.buildBinaryResponse(GetObjectOutput.ast, Stream.empty, {
      "content-length": "1024",
    });
    expect(result.contentLength).toBe(1024);
  });

  it("matches header names case-insensitively", () => {
    const result = T.buildBinaryResponse(GetObjectOutput.ast, Stream.empty, {
      ETag: "MIXED-CASE",
      "Content-Type": "application/json",
    });
    expect(result.etag).toBe("MIXED-CASE");
    expect(result.contentType).toBe("application/json");
  });

  it("omits header fields when the header is absent", () => {
    const result = T.buildBinaryResponse(GetObjectOutput.ast, Stream.empty, {
      etag: "only-etag",
    });
    expect(result.etag).toBe("only-etag");
    expect("contentType" in result).toBe(false);
    expect("contentLength" in result).toBe(false);
  });
});
