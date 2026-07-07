const annotationMetaSymbol = Symbol.for(
  "@distilled.cloud/core/annotation-meta",
);

type Annotatable = {
  annotate(annotations: any): Annotatable;
};

export interface Annotation {
  <A extends Annotatable>(schema: A): A;
  readonly [annotationMetaSymbol]: Array<{ symbol: symbol; value: unknown }>;
  readonly [key: symbol]: unknown;
}

function makeAnnotation<T>(sym: symbol, value: T): Annotation {
  const fn = <A extends Annotatable>(schema: A): A =>
    schema.annotate({ [sym]: value }) as A;
  (fn as any)[annotationMetaSymbol] = [{ symbol: sym, value }];
  (fn as any)[sym] = value;
  return fn as Annotation;
}

//#region Generic Operation traits
//#endregion

//#region Generic Http traits

export interface HttpTrait {
  readonly method:
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE"
    | "HEAD"
    | "OPTIONS";
  /** URI template relative to the service base URL, e.g. `/accounts/{account_id}/foo`. */
  readonly uri: string;
  /** Default success status code (a `ResponseCode()` member can still read the actual code). */
  readonly code?: number;
}

export const httpSymbol = Symbol.for("@distilled.cloud/core/http");
/**
 * Operation-level HTTP binding: the request method + URI template. Stamped on
 * the input schema so the protocol can build the request line. URI `{labels}`
 * are filled from members marked with `Label()`.
 */
export const Http = (trait: HttpTrait) => makeAnnotation(httpSymbol, trait);

export const labelSymbol = Symbol.for("@distilled.cloud/core/http/label");
/** Bind a member to a `{name}` placeholder in the operation's URI template. */
export const Label = (name?: string) =>
  makeAnnotation(labelSymbol, name ?? true);

export const responseCodeSymbol = Symbol.for(
  "@distilled.cloud/core/http/response-code",
);
export const ResponseCode = () => makeAnnotation(responseCodeSymbol, true);

export const headerSymbol = Symbol.for("@distilled.cloud/core/http/header");
export const Header = (name?: string) =>
  makeAnnotation(headerSymbol, name ?? true);

export const bodySymbol = Symbol.for("@distilled.cloud/core/http/body");
export const Body = (name?: string) => makeAnnotation(bodySymbol, name ?? true);

export const querySymbol = Symbol.for("@distilled.cloud/core/http/query");
export const Query = (name?: string) =>
  makeAnnotation(querySymbol, name ?? true);
//#endregion

//#region Generic JSON traits
//#endregion
