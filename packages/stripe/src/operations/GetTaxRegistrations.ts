import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTaxRegistrationsInput {
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
  status?: "active" | "all" | "expired" | "scheduled";
}
export const GetTaxRegistrationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["active", "all", "expired", "scheduled"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/tax/registrations",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTaxRegistrationsInput>;

// Output Schema
export interface GetTaxRegistrationsOutput {
  data: {
    active_from: number;
    country: string;
    country_options: {
      ae?: {
        standard?: { place_of_supply_scheme: "inbound_goods" | "standard" };
        type: "standard";
      };
      al?: { type: "standard" };
      am?: { type: "simplified" };
      ao?: { type: "standard" };
      at?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      au?: {
        standard?: { place_of_supply_scheme: "inbound_goods" | "standard" };
        type: "standard";
      };
      aw?: { type: "standard" };
      az?: { type: "simplified" };
      ba?: { type: "standard" };
      bb?: { type: "standard" };
      bd?: { type: "standard" };
      be?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      bf?: { type: "standard" };
      bg?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      bh?: { type: "standard" };
      bj?: { type: "simplified" };
      bs?: { type: "standard" };
      by?: { type: "simplified" };
      ca?: {
        province_standard?: { province: string };
        type: "province_standard" | "simplified" | "standard";
      };
      cd?: { type: "standard" };
      ch?: {
        standard?: { place_of_supply_scheme: "inbound_goods" | "standard" };
        type: "standard";
      };
      cl?: { type: "simplified" };
      cm?: { type: "simplified" };
      co?: { type: "simplified" };
      cr?: { type: "simplified" };
      cv?: { type: "simplified" };
      cy?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      cz?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      de?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      dk?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      ec?: { type: "simplified" };
      ee?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      eg?: { type: "simplified" };
      es?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      et?: { type: "standard" };
      fi?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      fr?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      gb?: {
        standard?: { place_of_supply_scheme: "inbound_goods" | "standard" };
        type: "standard";
      };
      ge?: { type: "simplified" };
      gn?: { type: "standard" };
      gr?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      hr?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      hu?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      id?: { type: "simplified" };
      ie?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      in?: { type: "simplified" };
      is?: { type: "standard" };
      it?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      jp?: {
        standard?: { place_of_supply_scheme: "inbound_goods" | "standard" };
        type: "standard";
      };
      ke?: { type: "simplified" };
      kg?: { type: "simplified" };
      kh?: { type: "simplified" };
      kr?: { type: "simplified" };
      kz?: { type: "simplified" };
      la?: { type: "simplified" };
      lk?: { type: "simplified" };
      lt?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      lu?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      lv?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      ma?: { type: "simplified" };
      md?: { type: "simplified" };
      me?: { type: "standard" };
      mk?: { type: "standard" };
      mr?: { type: "standard" };
      mt?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      mx?: { type: "simplified" };
      my?: { type: "simplified" };
      ng?: { type: "simplified" };
      nl?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      no?: {
        standard?: { place_of_supply_scheme: "inbound_goods" | "standard" };
        type: "standard";
      };
      np?: { type: "simplified" };
      nz?: {
        standard?: { place_of_supply_scheme: "inbound_goods" | "standard" };
        type: "standard";
      };
      om?: { type: "standard" };
      pe?: { type: "simplified" };
      ph?: { type: "simplified" };
      pl?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      pt?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      ro?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      rs?: { type: "standard" };
      ru?: { type: "simplified" };
      sa?: { type: "simplified" };
      se?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      sg?: {
        standard?: { place_of_supply_scheme: "inbound_goods" | "standard" };
        type: "standard";
      };
      si?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      sk?: {
        standard?: {
          place_of_supply_scheme: "inbound_goods" | "small_seller" | "standard";
        };
        type: "ioss" | "oss_non_union" | "oss_union" | "standard";
      };
      sn?: { type: "simplified" };
      sr?: { type: "standard" };
      th?: { type: "simplified" };
      tj?: { type: "simplified" };
      tr?: { type: "simplified" };
      tw?: { type: "simplified" };
      tz?: { type: "simplified" };
      ua?: { type: "simplified" };
      ug?: { type: "simplified" };
      us?: {
        local_amusement_tax?: { jurisdiction: string };
        local_lease_tax?: { jurisdiction: string };
        state: string;
        state_sales_tax?: {
          elections?: {
            jurisdiction?: string;
            type:
              | "local_use_tax"
              | "simplified_sellers_use_tax"
              | "single_local_use_tax";
          }[];
        };
        type:
          | "local_amusement_tax"
          | "local_lease_tax"
          | "state_communications_tax"
          | "state_retail_delivery_fee"
          | "state_sales_tax";
      };
      uy?: { type: "standard" };
      uz?: { type: "simplified" };
      vn?: { type: "simplified" };
      za?: { type: "standard" };
      zm?: { type: "simplified" };
      zw?: { type: "standard" };
    };
    created: number;
    expires_at: number | null;
    id: string;
    livemode: boolean;
    object: "tax.registration";
    status: "active" | "expired" | "scheduled";
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetTaxRegistrationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        active_from: Schema.Number,
        country: Schema.String,
        country_options: Schema.Struct({
          ae: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals(["standard"]),
            }),
          ),
          al: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          am: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          ao: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          at: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          au: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals(["standard"]),
            }),
          ),
          aw: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          az: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          ba: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          bb: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          bd: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          be: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          bf: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          bg: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          bh: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          bj: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          bs: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          by: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          ca: Schema.optional(
            Schema.Struct({
              province_standard: Schema.optional(
                Schema.Struct({
                  province: Schema.String,
                }),
              ),
              type: Schema.Literals([
                "province_standard",
                "simplified",
                "standard",
              ]),
            }),
          ),
          cd: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          ch: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals(["standard"]),
            }),
          ),
          cl: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          cm: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          co: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          cr: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          cv: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          cy: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          cz: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          de: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          dk: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          ec: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          ee: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          eg: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          es: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          et: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          fi: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          fr: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          gb: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals(["standard"]),
            }),
          ),
          ge: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          gn: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          gr: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          hr: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          hu: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          id: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          ie: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          in: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          is: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          it: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          jp: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals(["standard"]),
            }),
          ),
          ke: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          kg: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          kh: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          kr: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          kz: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          la: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          lk: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          lt: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          lu: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          lv: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          ma: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          md: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          me: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          mk: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          mr: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          mt: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          mx: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          my: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          ng: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          nl: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          no: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals(["standard"]),
            }),
          ),
          np: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          nz: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals(["standard"]),
            }),
          ),
          om: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          pe: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          ph: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          pl: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          pt: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          ro: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          rs: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          ru: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          sa: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          se: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          sg: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals(["standard"]),
            }),
          ),
          si: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          sk: Schema.optional(
            Schema.Struct({
              standard: Schema.optional(
                Schema.Struct({
                  place_of_supply_scheme: Schema.Literals([
                    "inbound_goods",
                    "small_seller",
                    "standard",
                  ]),
                }),
              ),
              type: Schema.Literals([
                "ioss",
                "oss_non_union",
                "oss_union",
                "standard",
              ]),
            }),
          ),
          sn: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          sr: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          th: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          tj: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          tr: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          tw: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          tz: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          ua: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          ug: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          us: Schema.optional(
            Schema.Struct({
              local_amusement_tax: Schema.optional(
                Schema.Struct({
                  jurisdiction: Schema.String,
                }),
              ),
              local_lease_tax: Schema.optional(
                Schema.Struct({
                  jurisdiction: Schema.String,
                }),
              ),
              state: Schema.String,
              state_sales_tax: Schema.optional(
                Schema.Struct({
                  elections: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        jurisdiction: Schema.optional(Schema.String),
                        type: Schema.Literals([
                          "local_use_tax",
                          "simplified_sellers_use_tax",
                          "single_local_use_tax",
                        ]),
                      }),
                    ),
                  ),
                }),
              ),
              type: Schema.Literals([
                "local_amusement_tax",
                "local_lease_tax",
                "state_communications_tax",
                "state_retail_delivery_fee",
                "state_sales_tax",
              ]),
            }),
          ),
          uy: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          uz: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          vn: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          za: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
          zm: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["simplified"]),
            }),
          ),
          zw: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["standard"]),
            }),
          ),
        }),
        created: Schema.Number,
        expires_at: Schema.NullOr(Schema.Number),
        id: Schema.String,
        livemode: Schema.Boolean,
        object: Schema.Literals(["tax.registration"]),
        status: Schema.Literals(["active", "expired", "scheduled"]),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetTaxRegistrationsOutput>;

// The operation
/**
 * List registrations
 *
 * <p>Returns a list of Tax <code>Registration</code> objects.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - The status of the Tax Registration.
 */
export const GetTaxRegistrations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTaxRegistrationsInput,
  outputSchema: GetTaxRegistrationsOutput,
}));
