/**
 * Thin Fly GraphQL introspection covering the add-on operations flyctl uses
 * for Tigris (`tigris`) and Upstash Redis (`upstash_redis` / `redis`).
 *
 * The public Fly GraphQL schema lives in flyctl `gql/schema.graphql`; there
 * is no REST for these extensions. This is the subset convert.ts feeds to
 * the shared GraphQL→Smithy converter.
 */
import type {
  Field,
  InputValue,
  IntrospectionSchema,
  IntrospectionType,
  TypeRef,
} from "@distilled.cloud/core/codegen/graphql";

const SCALAR = (name: string): TypeRef => ({ kind: "SCALAR", name });
const OBJECT = (name: string): TypeRef => ({ kind: "OBJECT", name });
const ENUM = (name: string): TypeRef => ({ kind: "ENUM", name });
const INPUT = (name: string): TypeRef => ({ kind: "INPUT_OBJECT", name });
const NN = (ofType: TypeRef): TypeRef => ({ kind: "NON_NULL", ofType });
const LIST = (ofType: TypeRef): TypeRef => ({ kind: "LIST", ofType });

const arg = (name: string, type: TypeRef): InputValue => ({ name, type });
const field = (
  name: string,
  type: TypeRef,
  args: InputValue[] = [],
): Field => ({ name, args, type });

const scalarType = (name: string): IntrospectionType => ({
  kind: "SCALAR",
  name,
});

const enumType = (name: string, values: string[]): IntrospectionType => ({
  kind: "ENUM",
  name,
  enumValues: values.map((v) => ({ name: v })),
});

const objectType = (name: string, fields: Field[]): IntrospectionType => ({
  kind: "OBJECT",
  name,
  fields,
});

const inputType = (
  name: string,
  inputFields: InputValue[],
): IntrospectionType => ({
  kind: "INPUT_OBJECT",
  name,
  inputFields,
});

const ADDON_TYPES = [
  "arcjet",
  "enveloop",
  "fly_mysql",
  "kubernetes",
  "redis",
  "sentry",
  "supabase",
  "tigris",
  "upstash_kafka",
  "upstash_redis",
  "upstash_vector",
  "wafris",
];

/** Introspection schema for Fly GraphQL add-on CRUD. */
export const addonsIntrospection = (): IntrospectionSchema => ({
  queryType: { name: "Queries" },
  mutationType: { name: "Mutations" },
  types: [
    scalarType("String"),
    scalarType("ID"),
    scalarType("Int"),
    scalarType("Boolean"),
    scalarType("JSON"),
    scalarType("ISO8601DateTime"),
    enumType("AddOnType", ADDON_TYPES),
    objectType("PageInfo", [
      field("hasNextPage", NN(SCALAR("Boolean"))),
      field("hasPreviousPage", NN(SCALAR("Boolean"))),
      field("startCursor", SCALAR("String")),
      field("endCursor", SCALAR("String")),
    ]),
    objectType("AddOnPlan", [
      field("id", NN(SCALAR("ID"))),
      field("name", SCALAR("String")),
      field("displayName", SCALAR("String")),
      field("description", SCALAR("String")),
      field("maxDataSize", SCALAR("String")),
      field("pricePerMonth", SCALAR("Int")),
    ]),
    objectType("AddOnPlanEdge", [
      field("cursor", NN(SCALAR("String"))),
      field("node", OBJECT("AddOnPlan")),
    ]),
    objectType("AddOnPlanConnection", [
      field("edges", LIST(OBJECT("AddOnPlanEdge"))),
      field("nodes", LIST(OBJECT("AddOnPlan"))),
      field("pageInfo", NN(OBJECT("PageInfo"))),
      field("totalCount", NN(SCALAR("Int"))),
    ]),
    objectType("AddOnProvider", [
      field("id", NN(SCALAR("ID"))),
      field("name", SCALAR("String")),
      field("displayName", SCALAR("String")),
      field("tosUrl", SCALAR("String")),
      field("tosAgreement", SCALAR("String")),
      field("asyncProvisioning", NN(SCALAR("Boolean"))),
      field("autoProvision", NN(SCALAR("Boolean"))),
      field("beta", NN(SCALAR("Boolean"))),
      field("internal", NN(SCALAR("Boolean"))),
      field("selectName", NN(SCALAR("Boolean"))),
      field("selectRegion", NN(SCALAR("Boolean"))),
      field("selectReplicaRegions", NN(SCALAR("Boolean"))),
      field("detectPlatform", NN(SCALAR("Boolean"))),
      field("resourceName", NN(SCALAR("String"))),
      field("nameSuffix", SCALAR("String")),
      field("provisioningInstructions", SCALAR("String")),
    ]),
    objectType("App", [
      field("id", NN(SCALAR("ID"))),
      field("name", SCALAR("String")),
    ]),
    objectType("Organization", [
      field("id", NN(SCALAR("ID"))),
      field("name", SCALAR("String")),
      field("slug", SCALAR("String")),
      field("rawSlug", NN(SCALAR("String"))),
      field("paidPlan", NN(SCALAR("Boolean"))),
      field("billable", NN(SCALAR("Boolean"))),
      field("provisionsBetaExtensions", NN(SCALAR("Boolean"))),
      // No args so the organization() query can select add-ons in one round
      // trip. The real schema takes `type`/`after`/`first`; callers who need
      // a typed filter use Queries.addOns.
      field("addOns", NN(OBJECT("AddOnConnection"))),
    ]),
    objectType("AddOn", [
      field("id", NN(SCALAR("ID"))),
      field("name", SCALAR("String")),
      field("primaryRegion", SCALAR("String")),
      field("readRegions", LIST(NN(SCALAR("String")))),
      field("status", SCALAR("String")),
      field("errorMessage", SCALAR("String")),
      field("publicUrl", SCALAR("String")),
      field("privateIp", SCALAR("String")),
      field("password", SCALAR("String")),
      field("ssoLink", SCALAR("String")),
      field("environment", SCALAR("JSON")),
      field("options", SCALAR("JSON")),
      field("metadata", SCALAR("JSON")),
      field("createdAt", NN(SCALAR("ISO8601DateTime"))),
      field("updatedAt", NN(SCALAR("ISO8601DateTime"))),
      field("addOnPlan", OBJECT("AddOnPlan")),
      field("addOnPlanName", SCALAR("String")),
      field("addOnProvider", OBJECT("AddOnProvider")),
      field("organization", NN(OBJECT("Organization"))),
      field("app", OBJECT("App")),
    ]),
    objectType("AddOnEdge", [
      field("cursor", NN(SCALAR("String"))),
      field("node", OBJECT("AddOn")),
    ]),
    objectType("AddOnConnection", [
      field("edges", LIST(OBJECT("AddOnEdge"))),
      field("nodes", LIST(OBJECT("AddOn"))),
      field("pageInfo", NN(OBJECT("PageInfo"))),
      field("totalCount", NN(SCALAR("Int"))),
    ]),
    inputType("CreateAddOnInput", [
      arg("type", NN(ENUM("AddOnType"))),
      arg("name", SCALAR("String")),
      arg("organizationId", SCALAR("ID")),
      arg("appId", SCALAR("ID")),
      arg("planId", SCALAR("ID")),
      arg("primaryRegion", SCALAR("String")),
      arg("readRegions", LIST(NN(SCALAR("String")))),
      arg("options", SCALAR("JSON")),
      arg("organizationPlanId", SCALAR("String")),
      arg("clientMutationId", SCALAR("String")),
    ]),
    inputType("UpdateAddOnInput", [
      arg("addOnId", SCALAR("ID")),
      arg("name", SCALAR("String")),
      arg("provider", SCALAR("String")),
      arg("planId", SCALAR("ID")),
      arg("readRegions", LIST(NN(SCALAR("String")))),
      arg("options", SCALAR("JSON")),
      arg("metadata", SCALAR("JSON")),
      arg("prodPack", SCALAR("Boolean")),
      arg("clientMutationId", SCALAR("String")),
    ]),
    inputType("DeleteAddOnInput", [
      arg("addOnId", SCALAR("ID")),
      arg("name", SCALAR("String")),
      arg("provider", SCALAR("String")),
      arg("clientMutationId", SCALAR("String")),
    ]),
    inputType("CreateExtensionTosAgreementInput", [
      arg("addOnProviderName", NN(SCALAR("String"))),
      arg("organizationId", SCALAR("ID")),
      arg("clientMutationId", SCALAR("String")),
    ]),
    inputType("ResetAddOnPasswordInput", [
      arg("name", NN(SCALAR("String"))),
      arg("clientMutationId", SCALAR("String")),
    ]),
    objectType("CreateAddOnPayload", [
      field("addOn", NN(OBJECT("AddOn"))),
      field("clientMutationId", SCALAR("String")),
    ]),
    objectType("UpdateAddOnPayload", [
      field("addOn", NN(OBJECT("AddOn"))),
      field("clientMutationId", SCALAR("String")),
    ]),
    objectType("DeleteAddOnPayload", [
      field("deletedAddOnName", SCALAR("String")),
      field("clientMutationId", SCALAR("String")),
    ]),
    objectType("CreateExtensionTosAgreementPayload", [
      field("clientMutationId", SCALAR("String")),
    ]),
    objectType("ResetAddOnPasswordPayload", [
      field("addOn", NN(OBJECT("AddOn"))),
      field("clientMutationId", SCALAR("String")),
    ]),
    objectType("Queries", [
      field("addOn", OBJECT("AddOn"), [
        arg("id", SCALAR("ID")),
        arg("name", SCALAR("String")),
        arg("provider", SCALAR("String")),
      ]),
      field("addOns", NN(OBJECT("AddOnConnection")), [
        arg("after", SCALAR("String")),
        arg("before", SCALAR("String")),
        arg("first", SCALAR("Int")),
        arg("last", SCALAR("Int")),
        arg("type", ENUM("AddOnType")),
      ]),
      field("addOnPlans", NN(OBJECT("AddOnPlanConnection")), [
        arg("after", SCALAR("String")),
        arg("before", SCALAR("String")),
        arg("first", SCALAR("Int")),
        arg("last", SCALAR("Int")),
        arg("type", ENUM("AddOnType")),
      ]),
      field("addOnProvider", NN(OBJECT("AddOnProvider")), [
        arg("name", NN(SCALAR("String"))),
      ]),
      field("organization", OBJECT("Organization"), [
        arg("id", SCALAR("ID")),
        arg("name", SCALAR("String")),
        arg("slug", SCALAR("String")),
      ]),
    ]),
    objectType("Mutations", [
      field("createAddOn", OBJECT("CreateAddOnPayload"), [
        arg("input", NN(INPUT("CreateAddOnInput"))),
      ]),
      field("updateAddOn", OBJECT("UpdateAddOnPayload"), [
        arg("input", NN(INPUT("UpdateAddOnInput"))),
      ]),
      field("deleteAddOn", OBJECT("DeleteAddOnPayload"), [
        arg("input", NN(INPUT("DeleteAddOnInput"))),
      ]),
      field(
        "createExtensionTosAgreement",
        OBJECT("CreateExtensionTosAgreementPayload"),
        [arg("input", NN(INPUT("CreateExtensionTosAgreementInput")))],
      ),
      field("resetAddOnPassword", OBJECT("ResetAddOnPasswordPayload"), [
        arg("input", NN(INPUT("ResetAddOnPasswordInput"))),
      ]),
    ]),
  ],
});
