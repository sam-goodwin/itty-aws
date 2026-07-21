/**
 * The generic smithy→SDK service generator (dev-time only).
 *
 * One driver compiles a Smithy JSON model into an Effect SDK service module.
 * Everything provider-specific arrives through {@link SdkSpec}: import
 * header, trait vocabulary (which trait ids mean payload/file/nullable/…),
 * the `T.*` pipe expressions to emit for each binding, how operations are
 * declared (protocol/retry/error names), and naming policies. The driver
 * owns the pipeline: operation discovery, reachability, topological order,
 * schema/interface emission, error classes, pagination validation, and
 * operation consts.
 *
 * A provider's `scripts/generate.ts` reduces to: load models (its own
 * pipeline — docs-derived specs, patches, …), define its {@link SdkSpec},
 * call {@link generateService} per model, write files.
 */
import {
  camel as _camel,
  local,
  lowerFirst,
  oneLine,
  q,
  tsKey,
  upperFirst,
} from "./naming.ts";
import {
  orderIndex,
  reachableFrom,
  shapeDeps,
  topoOrder,
  type ShapeMap,
} from "./graph.ts";
import {
  enumDecl,
  errorClass,
  errorUnionAlias,
  interfaceDecl,
  interfaceField,
  operationConst,
  PURE,
  suspendConst,
} from "./emit.ts";
import {
  JSON_PRELUDE,
  makeSchemaRef,
  makeTsRef,
  TS_JSON_PRELUDE,
} from "./prelude.ts";
import {
  collectOperations,
  collectOpErrorIds,
  ensureNamedIo,
  modelNamespace,
  type OpEntry,
} from "./operations.ts";
import { memberBases, smithyWireName } from "./members.ts";
import { validatePaginated } from "./pagination.ts";

const PAGINATED_TRAIT = "smithy.api#paginated";

/** A member's resolved binding. The four generic kinds plus provider extras. */
export type MemberBinding =
  | "label"
  | "query"
  | "header"
  | "body"
  | (string & {});

export interface EmittedMember {
  readonly name: string;
  readonly tsName: string;
  readonly wire: string;
  readonly target: string;
  readonly binding: MemberBinding;
  readonly required: boolean;
  readonly nullable: boolean;
  readonly doc: string | undefined;
  readonly traits: Record<string, any>;
}

export interface OperationEmit {
  readonly op: OpEntry;
  readonly opName: string;
  readonly exportName: string;
  readonly inputName: string;
  readonly outputName: string;
  /** Declared error class names present in the model. */
  readonly errorNames: readonly string[];
  readonly doc: string | undefined;
  /** The validated pagination trait, when the op paginates. */
  readonly pagination: unknown | undefined;
}

export interface SdkSpec {
  /** Namespace fallback for models with no operations. Default `"smithy.unknown"`. */
  readonly namespaceFallback?: string;
  /** PURE marker before schema consts. Default: the shared single marker. */
  readonly pure?: string;
  /** Prelude scalar → schema expression map. Default {@link JSON_PRELUDE}. */
  readonly prelude?: Record<string, string>;
  /** Prelude scalar → TS type map. Default {@link TS_JSON_PRELUDE}. */
  readonly tsPrelude?: Record<string, string>;
  /** Wire member name → TS-facing name. Default: identity. */
  readonly memberName?: (name: string) => string;
  /** Operation shape name → exported const name. Default: lowerFirst. */
  readonly opExportName?: (name: string) => string;

  /**
   * Provider bindings checked between the generic header binding and
   * `smithy.api#httpPayload` — e.g. cloudflare's envelope payloads and
   * form-data files. The driver owns the generic cascade:
   * label → query → header → extraBinding → rawBody (httpPayload) → body.
   */
  readonly extraBinding?: (
    traits: Record<string, any>,
  ) => MemberBinding | undefined;
  /**
   * Which wire-name rule a binding follows. Defaults: the three generic
   * kinds map to themselves, everything else to `"other"` (jsonName).
   */
  readonly wireKind?: (
    binding: MemberBinding,
  ) => "label" | "query" | "header" | "other";
  /** Trait id marking a member nullable (`S.NullOr` + `| null`). */
  readonly nullableTrait?: string;
  /**
   * Extra schema pipes appended after the generic ones. The driver emits
   * `T.Label/T.Query/T.Header` (wire-aware), `T.HttpBody()` for rawBody,
   * and `T.Body(wire)` renames — the SDK's traits module must export those
   * core builders under these names. Provider bindings and member traits
   * (e.g. key dictionaries) add theirs here.
   */
  readonly memberExtraPipes?: (m: EmittedMember) => string[];
  /** Full override of member pipe emission (rarely needed). */
  readonly memberPipes?: (m: EmittedMember) => string[];
  /** Override the TS type of a member (e.g. file uploads → `(File | Blob)[]`). */
  readonly memberTsType?: (
    m: EmittedMember,
    tsRef: (target: string) => string,
  ) => string | undefined;

  /**
   * Struct-level pipes for a shape (after the member struct): the http
   * trait on op inputs, service-wide key-dictionary stamping, etc.
   */
  readonly structPipes?: (ctx: {
    readonly id: string;
    readonly isOpIo: boolean;
    readonly httpTrait: unknown | undefined;
  }) => string[];

  /**
   * Bare-payload detection: when an output structure has exactly one member
   * carrying this trait, the whole response IS that member's value. The
   * driver emits the member's type + schema piped through `rootPipe`.
   */
  readonly barePayload?: {
    readonly trait: string;
    readonly rootPipe: string;
  };

  /** Pagination validation inputs (see codegen/pagination.ts). */
  readonly pagination?: {
    readonly itemsFallback: string;
    readonly syntheticOutputs: readonly string[];
    /**
     * Extra interface field + struct member appended to paginated outputs
     * that don't already model them (e.g. cloudflare's `resultInfo`).
     */
    readonly injectOutputMember?: {
      readonly tsName: string;
      readonly interfaceLines: readonly string[];
      readonly structLine: string;
    };
  };

  /** Union emission: TS alias union + opaque/structural schema const. */
  readonly union: (ctx: {
    readonly name: string;
    readonly caseTargets: readonly string[];
    readonly caseKeys: readonly (readonly string[])[];
    readonly tsRef: (target: string) => string;
  }) => string[];

  /** Error-class emission details. All optional. */
  readonly errors?: {
    /**
     * Field lines used when the error shape declares no members.
     * Default: `code` (integer) + `message` (string) — the common REST
     * error envelope.
     */
    readonly defaultFields?: (prelude: Record<string, string>) => string[];
    /** Field line for a declared member. Default: prelude-mapped schema. */
    readonly field?: (name: string, target: string) => string;
    /** Optional wrapper (e.g. matcher application) from the shape's traits. */
    readonly wrap?: (
      traits: Record<string, any>,
    ) => ((cls: string) => string) | undefined;
  };

  /** Operation const emission — the provider owns protocol/retry/type names. */
  readonly operation: (ctx: OperationEmit) => string;

  /** Module header (imports, shared consts). */
  readonly header: (ctx: { readonly hasPaginated: boolean }) => string;

  /**
   * Trailing sections after operations (e.g. route-alias re-exports).
   * Receives the set of emitted op export names (mutable — additions are
   * visible to subsequent alias checks).
   */
  readonly footer?: (ctx: { readonly emittedOps: Set<string> }) => string[];
}

export interface GeneratedService {
  code: string;
  operations: number;
}

/**
 * Compile one Smithy model into a service module. `limitRef` supports
 * partial generation (`--limit N` across models).
 */
export const generateService = (
  model: any,
  spec: SdkSpec,
  limitRef: { remaining: number } = { remaining: Infinity },
): GeneratedService => {
  const shapes: ShapeMap = model.shapes;
  const pure = spec.pure ?? PURE;
  const prelude = spec.prelude ?? JSON_PRELUDE;
  const tsPrelude = spec.tsPrelude ?? TS_JSON_PRELUDE;
  const memberName = spec.memberName ?? ((n: string) => n);
  const opExportName = spec.opExportName ?? lowerFirst;

  // 1. Operations — synthesize named Request/Response for Unit I/O so every
  //    operation has an input shape that can carry operation-level traits.
  const operations = collectOperations(shapes);
  const httpFor: Record<string, any> = {}; // input shape id → http trait
  const ns = modelNamespace(
    operations,
    shapes,
    spec.namespaceFallback ?? "smithy.unknown",
  );

  const selected: OpEntry[] = [];
  for (const op of operations) {
    if (limitRef.remaining <= 0) break;
    limitRef.remaining--;
    selected.push(op);

    const { input, output } = ensureNamedIo(shapes, op, ns);
    op.def.__input = input;
    op.def.__output = output;

    const http = op.def.traits?.["smithy.api#http"];
    if (http) httpFor[input] = http;
  }

  if (selected.length === 0) return { code: "", operations: 0 };

  // 2. Reachability + dependencies-first order (cycles suspend at refs).
  const roots = selected.flatMap((op) => [op.def.__input, op.def.__output]);
  const reachable = reachableFrom(shapes, roots, shapeDeps);
  const order = topoOrder(shapes, reachable, shapeDeps);
  const indexOf = orderIndex(order);

  const ref = makeSchemaRef(prelude, indexOf);
  const tsRef = makeTsRef(tsPrelude);

  const wireKind =
    spec.wireKind ??
    ((b: MemberBinding): "label" | "query" | "header" | "other" =>
      b === "label"
        ? "label"
        : b === "query"
          ? "query"
          : b === "header"
            ? "header"
            : "other");

  // The generic binding cascade; provider bindings slot in after headers.
  const bindingOf = (traits: Record<string, any>): MemberBinding =>
    "smithy.api#httpLabel" in traits
      ? "label"
      : "smithy.api#httpQuery" in traits
        ? "query"
        : "smithy.api#httpHeader" in traits
          ? "header"
          : (spec.extraBinding?.(traits) ??
            ("smithy.api#httpPayload" in traits ? "rawBody" : "body"));

  const memberInfos = (d: any): EmittedMember[] =>
    memberBases(d, memberName).map((base) => {
      const traits = base.traits;
      const binding = bindingOf(traits);
      return {
        ...base,
        binding,
        wire: smithyWireName(traits, base.name, wireKind(binding)),
        nullable: spec.nullableTrait ? spec.nullableTrait in traits : false,
      };
    });

  // Generic pipes for the smithy bindings (the SDK's traits module exports
  // core's Label/Query/Header/HttpBody/Body builders under these names);
  // provider bindings and member traits append theirs via memberExtraPipes.
  const genericPipes = (info: EmittedMember): string[] => {
    switch (info.binding) {
      case "label":
        return [
          info.wire === info.tsName ? "T.Label()" : `T.Label(${q(info.wire)})`,
        ];
      case "query":
        return [
          info.wire === info.tsName ? "T.Query()" : `T.Query(${q(info.wire)})`,
        ];
      case "header":
        return [
          info.wire === info.tsName
            ? "T.Header()"
            : `T.Header(${q(info.wire)})`,
        ];
      case "rawBody":
        return ["T.HttpBody()"];
      case "body":
        return info.wire !== info.tsName ? [`T.Body(${q(info.wire)})`] : [];
      default:
        return [];
    }
  };

  const memberPipes =
    spec.memberPipes ??
    ((info: EmittedMember) => [
      ...genericPipes(info),
      ...(spec.memberExtraPipes?.(info) ?? []),
    ]);

  const emitMember = (info: EmittedMember, selfIdx: number): string => {
    let expr = ref(info.target, selfIdx);
    if (info.nullable) expr = `S.NullOr(${expr})`;
    const pipes = memberPipes(info);
    if (pipes.length) expr = `${expr}.pipe(${pipes.join(", ")})`;
    if (!info.required) expr = `S.optional(${expr})`;
    return `  ${q(info.tsName)}: ${expr},`;
  };

  const opIoShapes = new Set<string>();
  for (const op of selected) {
    opIoShapes.add(op.def.__input);
    opIoShapes.add(op.def.__output);
  }

  // 3. Validate pagination traits: a paginated op must actually carry its
  //    token on the input and its items member on the output, else it
  //    degrades to a plain operation.
  const paginatedOutputs = new Set<string>();
  const paginatedItemsRoot = new Map<string, string>();
  if (spec.pagination) {
    const syntheticOutputs = new Set(spec.pagination.syntheticOutputs);
    for (const op of selected) {
      const pg = op.def.traits?.[PAGINATED_TRAIT];
      if (!pg) continue;
      const inNames = new Set(
        memberInfos(shapes[op.def.__input] ?? {}).map((m) => m.tsName),
      );
      const outNames = new Set(
        memberInfos(shapes[op.def.__output] ?? {}).map((m) => m.tsName),
      );
      const { ok, itemsRoot } = validatePaginated({
        trait: pg,
        inputNames: inNames,
        outputNames: outNames,
        itemsFallback: spec.pagination.itemsFallback,
        syntheticOutputs,
      });
      if (ok) {
        op.def.__pagination = pg;
        paginatedOutputs.add(op.def.__output);
        paginatedItemsRoot.set(op.def.__output, itemsRoot);
      }
    }
  }

  // 4. Error classes from the operations' errors lists.
  const out: string[] = [];
  const errorIds = collectOpErrorIds(selected, shapes);
  const errorIdSet = new Set(errorIds);
  const errorNames = new Set(errorIds.map(local));

  for (const id of errorIds) {
    const d = shapes[id];
    const name = local(id);
    const doc = oneLine(d.traits?.["smithy.api#documentation"]);
    if (doc) out.push(`/** ${doc} */`);
    const errorField =
      spec.errors?.field ??
      ((mn: string, target: string) =>
        `  ${tsKey(mn)}: ${prelude[local(target)] ?? "S.Unknown"},`);
    const fields =
      d.members && Object.keys(d.members).length
        ? Object.entries(d.members).map(([mn, m]: [string, any]) =>
            errorField(mn, m.target),
          )
        : (spec.errors?.defaultFields?.(prelude) ?? [
            errorField("code", "smithy.api#Integer"),
            errorField("message", "smithy.api#String"),
          ]);
    out.push(
      errorClass({
        name,
        fields,
        wrap: spec.errors?.wrap?.(d.traits ?? {}),
      }),
    );
  }

  // 5. Every reachable shape in dependency order: explicit TS type next to
  //    a schema const cast to `S.Schema<T>` (the compile-perf pattern).
  order.forEach((id, i) => {
    if (errorIdSet.has(id)) return; // emitted as an error class above
    const d = shapes[id];
    const name = local(id);
    const doc = oneLine(d.traits?.["smithy.api#documentation"]);
    if (doc) out.push(`/** ${doc} */`);

    if (d.type === "structure") {
      // Bare-payload response: single trait-marked member — the response IS
      // that member's value; emit its type + a root marker for the protocol.
      const memberEntriesAll = Object.entries(d.members ?? {});
      if (
        spec.barePayload &&
        !paginatedOutputs.has(id) &&
        memberEntriesAll.length === 1 &&
        spec.barePayload.trait in
          ((memberEntriesAll[0]![1] as any).traits ?? {})
      ) {
        const [, m] = memberEntriesAll[0]! as [string, any];
        out.push(`export type ${name} = ${tsRef(m.target)};`);
        out.push(
          suspendConst({
            name,
            pure,
            multiline: true,
            annotateIdentifier: true,
            expr: `${ref(m.target, i)}.pipe(${spec.barePayload.rootPipe})`,
          }),
        );
        return;
      }

      // Paginated outputs always deliver their items member — required.
      const itemsRoot = paginatedItemsRoot.get(id);
      const infos = memberInfos(d).map((info) =>
        info.tsName === itemsRoot ? { ...info, required: true } : info,
      );
      const fields = infos.flatMap((info) =>
        interfaceField({
          name: info.tsName,
          optional: !info.required,
          doc: info.doc,
          type:
            spec.memberTsType?.(info, tsRef) ??
            `${tsRef(info.target)}${info.nullable ? " | null" : ""}`,
        }),
      );
      const members = infos.map((info) => emitMember(info, i));
      const inject = spec.pagination?.injectOutputMember;
      if (
        inject &&
        paginatedOutputs.has(id) &&
        !infos.some((m) => m.tsName === inject.tsName)
      ) {
        fields.push(...inject.interfaceLines);
        members.push(inject.structLine);
      }
      out.push(interfaceDecl(name, fields));
      const struct = members.length
        ? `S.Struct({\n${members.join("\n")}\n})`
        : `S.Struct({})`;
      const pipes =
        spec.structPipes?.({
          id,
          isOpIo: opIoShapes.has(id),
          httpTrait: httpFor[id],
        }) ?? [];
      const tail = pipes.map((p) => `.pipe(${p})`).join("");
      out.push(
        suspendConst({
          name,
          pure,
          multiline: true,
          annotateIdentifier: true,
          expr: `${struct}${tail}`,
        }),
      );
    } else if (d.type === "list") {
      out.push(`export type ${name} = ${tsRef(d.member.target)}[];`);
      out.push(
        `export const ${name} = ${pure}S.Array(${ref(d.member.target, i)}) as any as S.Schema<${name}>;\n`,
      );
    } else if (d.type === "map") {
      out.push(
        `export type ${name} = { [key: string]: ${tsRef(d.value.target)} | undefined };`,
      );
      out.push(
        `export const ${name} = ${pure}S.Record(S.String, ${ref(d.value.target, i)}) as any as S.Schema<${name}>;\n`,
      );
    } else if (d.type === "union") {
      const caseTargets = Object.values(d.members ?? {}).map(
        (m: any) => m.target,
      );
      const caseKeys = caseTargets.map((t: string) => {
        const cd = shapes[t];
        return cd?.type === "structure"
          ? memberInfos(cd).map((mi) => mi.tsName)
          : [];
      });
      out.push(...spec.union({ name, caseTargets, caseKeys, tsRef }));
    } else if (d.type === "enum") {
      const values = Object.values(d.members ?? {})
        .map((m: any) => m.traits?.["smithy.api#enumValue"])
        .filter((v: unknown): v is string => typeof v === "string");
      out.push(...enumDecl({ name, values, pure }));
    }
  });

  // 6. Operations.
  for (const op of selected) {
    const opName = local(op.id);
    const errNames = ((op.def.errors ?? []) as Array<{ target: string }>)
      .map((e) => local(e.target))
      .filter((n) => errorNames.has(n));
    out.push(
      spec.operation({
        op,
        opName,
        exportName: opExportName(opName),
        inputName: local(op.def.__input),
        outputName: local(op.def.__output),
        errorNames: errNames,
        doc: oneLine(op.def.traits?.["smithy.api#documentation"]),
        pagination: op.def.__pagination,
      }),
    );
  }

  // 7. Provider trailing sections (aliases etc.).
  if (spec.footer) {
    const emittedOps = new Set(
      selected.map((op) => opExportName(local(op.id))),
    );
    out.push(...spec.footer({ emittedOps }));
  }

  const header = spec.header({ hasPaginated: paginatedOutputs.size > 0 });
  return { code: header + out.join("\n") + "\n", operations: selected.length };
};

// Re-exported so provider specs can be written against the same helpers the
// driver uses, without importing every codegen module individually.
export { errorUnionAlias, operationConst, upperFirst, tsKey, q, local };
