import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DiscountscreateInput {
  metadata?: Record<string, string | number | boolean>;
  name: string;
  code?: string | null;
  starts_at?: string | null;
  ends_at?: string | null;
  max_redemptions?: number | null;
  products?: ReadonlyArray<string> | null;
  organization_id?: string | null;
  type?: string;
  duration: "once" | "forever" | "repeating";
  duration_in_months?: number | null;
  amount?: number | null;
  currency?:
    | "aed"
    | "all"
    | "amd"
    | "aoa"
    | "ars"
    | "aud"
    | "awg"
    | "azn"
    | "bam"
    | "bbd"
    | "bdt"
    | "bif"
    | "bmd"
    | "bnd"
    | "bob"
    | "brl"
    | "bsd"
    | "bwp"
    | "bzd"
    | "cad"
    | "cdf"
    | "chf"
    | "clp"
    | "cny"
    | "cop"
    | "crc"
    | "cve"
    | "czk"
    | "djf"
    | "dkk"
    | "dop"
    | "dzd"
    | "egp"
    | "etb"
    | "eur"
    | "fjd"
    | "fkp"
    | "gbp"
    | "gel"
    | "gip"
    | "gmd"
    | "gnf"
    | "gtq"
    | "gyd"
    | "hkd"
    | "hnl"
    | "htg"
    | "huf"
    | "idr"
    | "ils"
    | "inr"
    | "isk"
    | "jmd"
    | "jpy"
    | "kes"
    | "kgs"
    | "khr"
    | "kmf"
    | "krw"
    | "kyd"
    | "kzt"
    | "lak"
    | "lkr"
    | "lrd"
    | "lsl"
    | "mad"
    | "mdl"
    | "mga"
    | "mkd"
    | "mnt"
    | "mop"
    | "mur"
    | "mvr"
    | "mwk"
    | "mxn"
    | "myr"
    | "mzn"
    | "nad"
    | "ngn"
    | "nio"
    | "nok"
    | "npr"
    | "nzd"
    | "pab"
    | "pen"
    | "pgk"
    | "php"
    | "pkr"
    | "pln"
    | "pyg"
    | "qar"
    | "ron"
    | "rsd"
    | "rwf"
    | "sar"
    | "sbd"
    | "scr"
    | "sek"
    | "sgd"
    | "shp"
    | "sos"
    | "srd"
    | "szl"
    | "thb"
    | "tjs"
    | "top"
    | "try"
    | "ttd"
    | "twd"
    | "tzs"
    | "uah"
    | "ugx"
    | "usd"
    | "uyu"
    | "uzs"
    | "vnd"
    | "vuv"
    | "wst"
    | "xaf"
    | "xcd"
    | "xcg"
    | "xof"
    | "xpf"
    | "yer"
    | "zar"
    | "zmw"
    | null;
  amounts?: Record<string, number> | null;
  basis_points?: number;
}
export const DiscountscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    ),
  ),
  name: Schema.String,
  code: Schema.optional(Schema.NullOr(Schema.String)),
  starts_at: Schema.optional(Schema.NullOr(Schema.String)),
  ends_at: Schema.optional(Schema.NullOr(Schema.String)),
  max_redemptions: Schema.optional(Schema.NullOr(Schema.Number)),
  products: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  organization_id: Schema.optional(Schema.NullOr(Schema.String)),
  type: Schema.optional(Schema.String),
  duration: Schema.Literals(["once", "forever", "repeating"]),
  duration_in_months: Schema.optional(Schema.NullOr(Schema.Number)),
  amount: Schema.optional(Schema.NullOr(Schema.Number)),
  currency: Schema.optional(
    Schema.NullOr(
      Schema.Literals([
        "aed",
        "all",
        "amd",
        "aoa",
        "ars",
        "aud",
        "awg",
        "azn",
        "bam",
        "bbd",
        "bdt",
        "bif",
        "bmd",
        "bnd",
        "bob",
        "brl",
        "bsd",
        "bwp",
        "bzd",
        "cad",
        "cdf",
        "chf",
        "clp",
        "cny",
        "cop",
        "crc",
        "cve",
        "czk",
        "djf",
        "dkk",
        "dop",
        "dzd",
        "egp",
        "etb",
        "eur",
        "fjd",
        "fkp",
        "gbp",
        "gel",
        "gip",
        "gmd",
        "gnf",
        "gtq",
        "gyd",
        "hkd",
        "hnl",
        "htg",
        "huf",
        "idr",
        "ils",
        "inr",
        "isk",
        "jmd",
        "jpy",
        "kes",
        "kgs",
        "khr",
        "kmf",
        "krw",
        "kyd",
        "kzt",
        "lak",
        "lkr",
        "lrd",
        "lsl",
        "mad",
        "mdl",
        "mga",
        "mkd",
        "mnt",
        "mop",
        "mur",
        "mvr",
        "mwk",
        "mxn",
        "myr",
        "mzn",
        "nad",
        "ngn",
        "nio",
        "nok",
        "npr",
        "nzd",
        "pab",
        "pen",
        "pgk",
        "php",
        "pkr",
        "pln",
        "pyg",
        "qar",
        "ron",
        "rsd",
        "rwf",
        "sar",
        "sbd",
        "scr",
        "sek",
        "sgd",
        "shp",
        "sos",
        "srd",
        "szl",
        "thb",
        "tjs",
        "top",
        "try",
        "ttd",
        "twd",
        "tzs",
        "uah",
        "ugx",
        "usd",
        "uyu",
        "uzs",
        "vnd",
        "vuv",
        "wst",
        "xaf",
        "xcd",
        "xcg",
        "xof",
        "xpf",
        "yer",
        "zar",
        "zmw",
      ]),
    ),
  ),
  amounts: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Number)),
  ),
  basis_points: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "POST", path: "/v1/discounts/" }),
) as unknown as Schema.Codec<DiscountscreateInput>;

// Output Schema
export type DiscountscreateOutput = unknown;
export const DiscountscreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<DiscountscreateOutput>;

// The operation
/**
 * Create Discount
 *
 * Create a discount.
 * **Scopes**: `discounts:write`
 */
export const discountscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiscountscreateInput,
  outputSchema: DiscountscreateOutput,
}));
