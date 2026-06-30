// ==========================================================================
// Google Civic Information API (civicinfo v2)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "civicinfo",
  version: "v2",
  rootUrl: "https://civicinfo.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CivicinfoSchemaV2Election {
  /** The unique ID of this election. */
  id?: string;
  /** The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us). */
  ocdDivisionId?: string;
  /** Day of the election in YYYY-MM-DD format. */
  electionDay?: string;
  shapeLookupBehavior?:
    | "shapeLookupDefault"
    | "shapeLookupDisabled"
    | "shapeLookupEnabled"
    | (string & {});
  /** A displayable name for the election. */
  name?: string;
}

export const CivicinfoSchemaV2Election: Schema.Schema<CivicinfoSchemaV2Election> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    ocdDivisionId: Schema.optional(Schema.String),
    electionDay: Schema.optional(Schema.String),
    shapeLookupBehavior: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoSchemaV2Election" });

export interface CivicinfoSchemaV2Precinct {
  /** ID of the AdministrationRegion message for this precinct. Corresponds to LocalityId xml tag. */
  administrationRegionId?: string;
  /** Specifies if the precinct runs mail-only elections. */
  mailOnly?: boolean;
  /** ID(s) of the Contest message(s) for this precinct. */
  contestId?: ReadonlyArray<string>;
  /** Required. Dataset ID. What datasets our Precincts come from. */
  datasetId?: string;
  /** Required. The name of the precinct. */
  name?: string;
  /** ID(s) of the SpatialBoundary message(s) for this precinct. Used to specify a geometrical boundary of the precinct. */
  spatialBoundaryId?: ReadonlyArray<string>;
  /** ID(s) of the ElectoralDistrict message(s) for this precinct. */
  electoralDistrictId?: ReadonlyArray<string>;
  /** ID(s) of the PollingLocation message(s) for this precinct. */
  pollingLocationId?: ReadonlyArray<string>;
  /** If present, this proto corresponds to one portion of split precinct. Other portions of this precinct are guaranteed to have the same `name`. If not present, this proto represents a full precicnt. */
  splitName?: string;
  /** Required. A unique identifier for this precinct. */
  id?: string;
  /** The number of the precinct. */
  number?: string;
  /** Encouraged. The OCD ID of the precinct */
  ocdId?: ReadonlyArray<string>;
  /** Specifies the ward the precinct is contained within. */
  ward?: string;
  /** ID(s) of the PollingLocation message(s) for this precinct. */
  earlyVoteSiteId?: ReadonlyArray<string>;
}

export const CivicinfoSchemaV2Precinct: Schema.Schema<CivicinfoSchemaV2Precinct> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    administrationRegionId: Schema.optional(Schema.String),
    mailOnly: Schema.optional(Schema.Boolean),
    contestId: Schema.optional(Schema.Array(Schema.String)),
    datasetId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    spatialBoundaryId: Schema.optional(Schema.Array(Schema.String)),
    electoralDistrictId: Schema.optional(Schema.Array(Schema.String)),
    pollingLocationId: Schema.optional(Schema.Array(Schema.String)),
    splitName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    number: Schema.optional(Schema.String),
    ocdId: Schema.optional(Schema.Array(Schema.String)),
    ward: Schema.optional(Schema.String),
    earlyVoteSiteId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CivicinfoSchemaV2Precinct" });

export interface CivicinfoSchemaV2SimpleAddressType {
  /** The street name and number of this address. */
  line1?: string;
  /** The second line the address, if needed. */
  line2?: string;
  /** The third line of the address, if needed. */
  line3?: string;
  /** The US two letter state abbreviation of the address. */
  state?: string;
  /** The US Postal Zip Code of the address. */
  zip?: string;
  addressLine?: ReadonlyArray<string>;
  /** The city or town for the address. */
  city?: string;
  /** The name of the location. */
  locationName?: string;
}

export const CivicinfoSchemaV2SimpleAddressType: Schema.Schema<CivicinfoSchemaV2SimpleAddressType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    line1: Schema.optional(Schema.String),
    line2: Schema.optional(Schema.String),
    line3: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    zip: Schema.optional(Schema.String),
    addressLine: Schema.optional(Schema.Array(Schema.String)),
    city: Schema.optional(Schema.String),
    locationName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoSchemaV2SimpleAddressType" });

export interface CivicinfoSchemaV2Source {
  /** The name of the data source. */
  name?: string;
  /** Whether this data comes from an official government source. */
  official?: boolean;
}

export const CivicinfoSchemaV2Source: Schema.Schema<CivicinfoSchemaV2Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    official: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CivicinfoSchemaV2Source" });

export interface CivicinfoSchemaV2PollingLocation {
  /** Longitude of the location, in degrees east of the Prime Meridian. Note this field may not be available for some locations. */
  longitude?: number;
  /** The name of the early vote site or drop off location. This field is not populated for polling locations. */
  name?: string;
  /** The last date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
  endDate?: string;
  /** The services provided by this early vote site or drop off location. This field is not populated for polling locations. */
  voterServices?: string;
  /** The first date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
  startDate?: string;
  /** Notes about this location (e.g. accessibility ramp or entrance to use). */
  notes?: string;
  /** A description of when this location is open. */
  pollingHours?: string;
  /** The address of the location. */
  address?: CivicinfoSchemaV2SimpleAddressType;
  /** A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources. */
  sources?: ReadonlyArray<CivicinfoSchemaV2Source>;
  /** Latitude of the location, in degrees north of the equator. Note this field may not be available for some locations. */
  latitude?: number;
}

export const CivicinfoSchemaV2PollingLocation: Schema.Schema<CivicinfoSchemaV2PollingLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    longitude: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    voterServices: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    pollingHours: Schema.optional(Schema.String),
    address: Schema.optional(CivicinfoSchemaV2SimpleAddressType),
    sources: Schema.optional(Schema.Array(CivicinfoSchemaV2Source)),
    latitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CivicinfoSchemaV2PollingLocation" });

export interface CivicinfoSchemaV2ElectoralDistrict {
  /** The name of the district. */
  name?: string;
  /** The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special */
  scope?:
    | "statewide"
    | "congressional"
    | "stateUpper"
    | "stateLower"
    | "countywide"
    | "judicial"
    | "schoolBoard"
    | "citywide"
    | "special"
    | "countyCouncil"
    | "township"
    | "ward"
    | "cityCouncil"
    | "national"
    | (string & {});
  /** An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper. */
  id?: string;
}

export const CivicinfoSchemaV2ElectoralDistrict: Schema.Schema<CivicinfoSchemaV2ElectoralDistrict> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoSchemaV2ElectoralDistrict" });

export interface CivicinfoSchemaV2Channel {
  /** The unique public identifier for the candidate's channel. */
  id?: string;
  /** The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter */
  type?: string;
}

export const CivicinfoSchemaV2Channel: Schema.Schema<CivicinfoSchemaV2Channel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoSchemaV2Channel" });

export interface CivicinfoSchemaV2Candidate {
  /** The full name of the party the candidate is a member of. */
  party?: string;
  /** A list of known (social) media channels for this candidate. */
  channels?: ReadonlyArray<CivicinfoSchemaV2Channel>;
  /** The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan" */
  name?: string;
  /** The URL for the candidate's campaign web site. */
  candidateUrl?: string;
  /** The voice phone number for the candidate's campaign office. */
  phone?: string;
  /** The email address for the candidate's campaign. */
  email?: string;
  /** The order the candidate appears on the ballot for this contest. */
  orderOnBallot?: string;
  /** A URL for a photo of the candidate. */
  photoUrl?: string;
}

export const CivicinfoSchemaV2Candidate: Schema.Schema<CivicinfoSchemaV2Candidate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    party: Schema.optional(Schema.String),
    channels: Schema.optional(Schema.Array(CivicinfoSchemaV2Channel)),
    name: Schema.optional(Schema.String),
    candidateUrl: Schema.optional(Schema.String),
    phone: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    orderOnBallot: Schema.optional(Schema.String),
    photoUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoSchemaV2Candidate" });

export interface CivicinfoSchemaV2Contest {
  /** "Yes" or "No" depending on whether this a contest being held outside the normal election cycle. */
  special?: string;
  /** The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'. */
  referendumTitle?: string;
  /** Information about the electoral district that this contest is in. */
  district?: CivicinfoSchemaV2ElectoralDistrict;
  /** Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'. */
  referendumBrief?: string;
  /** A brief description of the referendum. This field is only populated for contests of type 'Referendum'. */
  referendumSubtitle?: string;
  /** The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only populated for contests of type 'Referendum'. */
  referendumBallotResponses?: ReadonlyArray<string>;
  /** The roles which this office fulfills. */
  roles?: ReadonlyArray<
    | "headOfState"
    | "headOfGovernment"
    | "deputyHeadOfGovernment"
    | "governmentOfficer"
    | "executiveCouncil"
    | "legislatorUpperBody"
    | "legislatorLowerBody"
    | "highestCourtJudge"
    | "judge"
    | "schoolBoard"
    | "specialPurposeOfficer"
    | "otherRole"
    | (string & {})
  >;
  /** If this is a partisan election, the name of the party/parties it is for. */
  primaryParties?: ReadonlyArray<string>;
  /** The number of candidates that will be elected to office in this contest. */
  numberElected?: string;
  /** Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'. */
  referendumEffectOfAbstain?: string;
  /** A link to the referendum. This field is only populated for contests of type 'Referendum'. */
  referendumUrl?: string;
  /** The official title on the ballot for this contest, only where available. */
  ballotTitle?: string;
  /** A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
  referendumProStatement?: string;
  /** A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources. */
  sources?: ReadonlyArray<CivicinfoSchemaV2Source>;
  /** The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'. */
  type?: string;
  /** The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1". */
  level?: ReadonlyArray<
    | "international"
    | "country"
    | "administrativeArea1"
    | "regional"
    | "administrativeArea2"
    | "locality"
    | "subLocality1"
    | "subLocality2"
    | "special"
    | (string & {})
  >;
  /** A number specifying the position of this contest on the voter's ballot. */
  ballotPlacement?: string;
  /** The number of candidates that a voter may vote for in this contest. */
  numberVotingFor?: string;
  /** The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'. */
  referendumPassageThreshold?: string;
  /** The name of the office for this contest. */
  office?: string;
  /** The candidate choices for this contest. */
  candidates?: ReadonlyArray<CivicinfoSchemaV2Candidate>;
  /** A description of any additional eligibility requirements for voting in this contest. */
  electorateSpecifications?: string;
  /** The full text of the referendum. This field is only populated for contests of type 'Referendum'. */
  referendumText?: string;
  /** A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
  referendumConStatement?: string;
}

export const CivicinfoSchemaV2Contest: Schema.Schema<CivicinfoSchemaV2Contest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    special: Schema.optional(Schema.String),
    referendumTitle: Schema.optional(Schema.String),
    district: Schema.optional(CivicinfoSchemaV2ElectoralDistrict),
    referendumBrief: Schema.optional(Schema.String),
    referendumSubtitle: Schema.optional(Schema.String),
    referendumBallotResponses: Schema.optional(Schema.Array(Schema.String)),
    roles: Schema.optional(Schema.Array(Schema.String)),
    primaryParties: Schema.optional(Schema.Array(Schema.String)),
    numberElected: Schema.optional(Schema.String),
    referendumEffectOfAbstain: Schema.optional(Schema.String),
    referendumUrl: Schema.optional(Schema.String),
    ballotTitle: Schema.optional(Schema.String),
    referendumProStatement: Schema.optional(Schema.String),
    sources: Schema.optional(Schema.Array(CivicinfoSchemaV2Source)),
    type: Schema.optional(Schema.String),
    level: Schema.optional(Schema.Array(Schema.String)),
    ballotPlacement: Schema.optional(Schema.String),
    numberVotingFor: Schema.optional(Schema.String),
    referendumPassageThreshold: Schema.optional(Schema.String),
    office: Schema.optional(Schema.String),
    candidates: Schema.optional(Schema.Array(CivicinfoSchemaV2Candidate)),
    electorateSpecifications: Schema.optional(Schema.String),
    referendumText: Schema.optional(Schema.String),
    referendumConStatement: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoSchemaV2Contest" });

export interface CivicinfoSchemaV2ElectionOfficial {
  /** The office phone number of the election official. */
  officePhoneNumber?: string;
  /** The fax number of the election official. */
  faxNumber?: string;
  /** The email address of the election official. */
  emailAddress?: string;
  /** The title of the election official. */
  title?: string;
  /** The full name of the election official. */
  name?: string;
}

export const CivicinfoSchemaV2ElectionOfficial: Schema.Schema<CivicinfoSchemaV2ElectionOfficial> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    officePhoneNumber: Schema.optional(Schema.String),
    faxNumber: Schema.optional(Schema.String),
    emailAddress: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoSchemaV2ElectionOfficial" });

export interface CivicinfoSchemaV2AdministrativeBody {
  /** The election officials for this election administrative body. */
  electionOfficials?: ReadonlyArray<CivicinfoSchemaV2ElectionOfficial>;
  /** A URL provided by this administrative body for looking up where to vote. */
  votingLocationFinderUrl?: string;
  /** A description of the services this administrative body may provide. */
  voter_services?: ReadonlyArray<string>;
  /** A URL provided by this administrative body for additional information related to the last minute or emergency notification. */
  electionNoticeUrl?: string;
  /** A URL provided by this administrative body to give contest information to the voter. */
  ballotInfoUrl?: string;
  /** A URL provided by this administrative body for confirming that the voter is registered to vote. */
  electionRegistrationConfirmationUrl?: string;
  /** A last minute or emergency notification text provided by this administrative body. */
  electionNoticeText?: string;
  /** A URL provided by this administrative body describing election rules to the voter. */
  electionRulesUrl?: string;
  /** The name of this election administrative body. */
  name?: string;
  /** A URL provided by this administrative body for looking up how to register to vote. */
  electionRegistrationUrl?: string;
  /** The mailing address of this administrative body. */
  correspondenceAddress?: CivicinfoSchemaV2SimpleAddressType;
  /** A URL provided by this administrative body for information on absentee voting. */
  absenteeVotingInfoUrl?: string;
  /** A description of the hours of operation for this administrative body. */
  hoursOfOperation?: string;
  /** The physical address of this administrative body. */
  physicalAddress?: CivicinfoSchemaV2SimpleAddressType;
  /** A URL provided by this administrative body for looking up general election information. */
  electionInfoUrl?: string;
}

export const CivicinfoSchemaV2AdministrativeBody: Schema.Schema<CivicinfoSchemaV2AdministrativeBody> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    electionOfficials: Schema.optional(
      Schema.Array(CivicinfoSchemaV2ElectionOfficial),
    ),
    votingLocationFinderUrl: Schema.optional(Schema.String),
    voter_services: Schema.optional(Schema.Array(Schema.String)),
    electionNoticeUrl: Schema.optional(Schema.String),
    ballotInfoUrl: Schema.optional(Schema.String),
    electionRegistrationConfirmationUrl: Schema.optional(Schema.String),
    electionNoticeText: Schema.optional(Schema.String),
    electionRulesUrl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    electionRegistrationUrl: Schema.optional(Schema.String),
    correspondenceAddress: Schema.optional(CivicinfoSchemaV2SimpleAddressType),
    absenteeVotingInfoUrl: Schema.optional(Schema.String),
    hoursOfOperation: Schema.optional(Schema.String),
    physicalAddress: Schema.optional(CivicinfoSchemaV2SimpleAddressType),
    electionInfoUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoSchemaV2AdministrativeBody" });

export interface CivicinfoSchemaV2AdministrationRegion {
  /** The city or county that provides election information for this voter. This object can have the same elements as state. */
  local_jurisdiction?: CivicinfoSchemaV2AdministrationRegion;
  /** A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources. */
  sources?: ReadonlyArray<CivicinfoSchemaV2Source>;
  /** The election administration body for this area. */
  electionAdministrationBody?: CivicinfoSchemaV2AdministrativeBody;
  /** The name of the jurisdiction. */
  name?: string;
}

export const CivicinfoSchemaV2AdministrationRegion: Schema.Schema<CivicinfoSchemaV2AdministrationRegion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      local_jurisdiction: Schema.optional(
        CivicinfoSchemaV2AdministrationRegion,
      ),
      sources: Schema.optional(Schema.Array(CivicinfoSchemaV2Source)),
      electionAdministrationBody: Schema.optional(
        CivicinfoSchemaV2AdministrativeBody,
      ),
      name: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "CivicinfoSchemaV2AdministrationRegion",
  }) as any as Schema.Schema<CivicinfoSchemaV2AdministrationRegion>;

export interface CivicinfoApiprotosV2VoterInfoResponse {
  precinctId?: string;
  /** When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user. */
  otherElections?: ReadonlyArray<CivicinfoSchemaV2Election>;
  /** The precincts that match this voter's address. Will only be returned for project IDs which have been allowlisted as "partner projects". */
  precincts?: ReadonlyArray<CivicinfoSchemaV2Precinct>;
  /** Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field. */
  dropOffLocations?: ReadonlyArray<CivicinfoSchemaV2PollingLocation>;
  /** Contests that will appear on the voter's ballot. */
  contests?: ReadonlyArray<CivicinfoSchemaV2Contest>;
  /** Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse". */
  kind?: string;
  /** Locations where the voter is eligible to vote early, prior to election day. */
  earlyVoteSites?: ReadonlyArray<CivicinfoSchemaV2PollingLocation>;
  /** The normalized version of the requested address */
  normalizedInput?: CivicinfoSchemaV2SimpleAddressType;
  /** Locations where the voter is eligible to vote on election day. */
  pollingLocations?: ReadonlyArray<CivicinfoSchemaV2PollingLocation>;
  /** Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well). */
  mailOnly?: boolean;
  /** The election that was queried. */
  election?: CivicinfoSchemaV2Election;
  /** Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array. */
  state?: ReadonlyArray<CivicinfoSchemaV2AdministrationRegion>;
}

export const CivicinfoApiprotosV2VoterInfoResponse: Schema.Schema<CivicinfoApiprotosV2VoterInfoResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    precinctId: Schema.optional(Schema.String),
    otherElections: Schema.optional(Schema.Array(CivicinfoSchemaV2Election)),
    precincts: Schema.optional(Schema.Array(CivicinfoSchemaV2Precinct)),
    dropOffLocations: Schema.optional(
      Schema.Array(CivicinfoSchemaV2PollingLocation),
    ),
    contests: Schema.optional(Schema.Array(CivicinfoSchemaV2Contest)),
    kind: Schema.optional(Schema.String),
    earlyVoteSites: Schema.optional(
      Schema.Array(CivicinfoSchemaV2PollingLocation),
    ),
    normalizedInput: Schema.optional(CivicinfoSchemaV2SimpleAddressType),
    pollingLocations: Schema.optional(
      Schema.Array(CivicinfoSchemaV2PollingLocation),
    ),
    mailOnly: Schema.optional(Schema.Boolean),
    election: Schema.optional(CivicinfoSchemaV2Election),
    state: Schema.optional(Schema.Array(CivicinfoSchemaV2AdministrationRegion)),
  }).annotate({ identifier: "CivicinfoApiprotosV2VoterInfoResponse" });

export interface CivicinfoSchemaV2GeographicDivision {
  /** List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request. */
  officeIndices?: ReadonlyArray<number>;
  /** The name of the division. */
  name?: string;
  /** Any other valid OCD IDs that refer to the same division.\n\nBecause OCD IDs are meant to be human-readable and at least somewhat predictable, there are occasionally several identifiers for a single division. These identifiers are defined to be equivalent to one another, and one is always indicated as the primary identifier. The primary identifier will be returned in ocd_id above, and any other equivalent valid identifiers will be returned in this list.\n\nFor example, if this division's OCD ID is ocd-division/country:us/district:dc, this will contain ocd-division/country:us/state:dc. */
  alsoKnownAs?: ReadonlyArray<string>;
}

export const CivicinfoSchemaV2GeographicDivision: Schema.Schema<CivicinfoSchemaV2GeographicDivision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    officeIndices: Schema.optional(Schema.Array(Schema.Number)),
    name: Schema.optional(Schema.String),
    alsoKnownAs: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CivicinfoSchemaV2GeographicDivision" });

export interface CivicinfoApiprotosV2DivisionSearchResult {
  /** The name of the division. */
  name?: string;
  /** Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district. */
  aliases?: ReadonlyArray<string>;
  /** The unique Open Civic Data identifier for this division */
  ocdId?: string;
}

export const CivicinfoApiprotosV2DivisionSearchResult: Schema.Schema<CivicinfoApiprotosV2DivisionSearchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    aliases: Schema.optional(Schema.Array(Schema.String)),
    ocdId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoApiprotosV2DivisionSearchResult" });

export interface CivicinfoApiprotosV2DivisionSearchResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse". */
  kind?: string;
  results?: ReadonlyArray<CivicinfoApiprotosV2DivisionSearchResult>;
}

export const CivicinfoApiprotosV2DivisionSearchResponse: Schema.Schema<CivicinfoApiprotosV2DivisionSearchResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    results: Schema.optional(
      Schema.Array(CivicinfoApiprotosV2DivisionSearchResult),
    ),
  }).annotate({ identifier: "CivicinfoApiprotosV2DivisionSearchResponse" });

export interface CivicinfoApiprotosV2DivisionByAddressResponse {
  /** The normalized version of the requested address. */
  normalizedInput?: CivicinfoSchemaV2SimpleAddressType;
  divisions?: Record<string, CivicinfoSchemaV2GeographicDivision>;
}

export const CivicinfoApiprotosV2DivisionByAddressResponse: Schema.Schema<CivicinfoApiprotosV2DivisionByAddressResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    normalizedInput: Schema.optional(CivicinfoSchemaV2SimpleAddressType),
    divisions: Schema.optional(
      Schema.Record(Schema.String, CivicinfoSchemaV2GeographicDivision),
    ),
  }).annotate({ identifier: "CivicinfoApiprotosV2DivisionByAddressResponse" });

export interface CivicinfoApiprotosV2ElectionsQueryResponse {
  /** A list of available elections */
  elections?: ReadonlyArray<CivicinfoSchemaV2Election>;
  /** Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse". */
  kind?: string;
}

export const CivicinfoApiprotosV2ElectionsQueryResponse: Schema.Schema<CivicinfoApiprotosV2ElectionsQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elections: Schema.optional(Schema.Array(CivicinfoSchemaV2Election)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CivicinfoApiprotosV2ElectionsQueryResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ElectionQueryElectionsRequest {
  /** Whether to include data that has not been allowlisted yet */
  productionDataOnly?: boolean;
}

export const ElectionQueryElectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productionDataOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("productionDataOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "civicinfo/v2/elections" }),
    svc,
  ) as unknown as Schema.Schema<ElectionQueryElectionsRequest>;

export type ElectionQueryElectionsResponse =
  CivicinfoApiprotosV2ElectionsQueryResponse;
export const ElectionQueryElectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CivicinfoApiprotosV2ElectionsQueryResponse;

export type ElectionQueryElectionsError = DefaultErrors | NotFound | Forbidden;

/** List of available elections to query. */
export const electionQueryElections: API.OperationMethod<
  ElectionQueryElectionsRequest,
  ElectionQueryElectionsResponse,
  ElectionQueryElectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ElectionQueryElectionsRequest,
  output: ElectionQueryElectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface VoterInfoQueryElectionsRequest {
  /** Whether to include data that has not been vetted yet. Should only be made available to internal IPs or trusted partners. This is a non-discoverable parameter in the One Platform API config. */
  productionDataOnly?: boolean;
  /** The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections. If no election ID is specified in the query and there is more than one election with data for the given voter, the additional elections are provided in the otherElections response field. */
  electionId?: string;
  /** The registered address of the voter to look up. */
  address?: string;
  /** If set to true, the query will return the success code and include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries. */
  returnAllAvailableData?: boolean;
  /** If set to true, only data from official state sources will be returned. */
  officialOnly?: boolean;
}

export const VoterInfoQueryElectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productionDataOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("productionDataOnly"),
    ),
    electionId: Schema.optional(Schema.String).pipe(T.HttpQuery("electionId")),
    address: Schema.optional(Schema.String).pipe(T.HttpQuery("address")),
    returnAllAvailableData: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnAllAvailableData"),
    ),
    officialOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("officialOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "civicinfo/v2/voterinfo" }),
    svc,
  ) as unknown as Schema.Schema<VoterInfoQueryElectionsRequest>;

export type VoterInfoQueryElectionsResponse =
  CivicinfoApiprotosV2VoterInfoResponse;
export const VoterInfoQueryElectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CivicinfoApiprotosV2VoterInfoResponse;

export type VoterInfoQueryElectionsError = DefaultErrors | NotFound | Forbidden;

/** Looks up information relevant to a voter based on the voter's registered address. */
export const voterInfoQueryElections: API.OperationMethod<
  VoterInfoQueryElectionsRequest,
  VoterInfoQueryElectionsResponse,
  VoterInfoQueryElectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VoterInfoQueryElectionsRequest,
  output: VoterInfoQueryElectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchDivisionsRequest {
  /** The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html */
  query?: string;
}

export const SearchDivisionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  },
).pipe(
  T.Http({ method: "GET", path: "civicinfo/v2/divisions" }),
  svc,
) as unknown as Schema.Schema<SearchDivisionsRequest>;

export type SearchDivisionsResponse =
  CivicinfoApiprotosV2DivisionSearchResponse;
export const SearchDivisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CivicinfoApiprotosV2DivisionSearchResponse;

export type SearchDivisionsError = DefaultErrors | NotFound | Forbidden;

/** Searches for political divisions by their natural name or OCD ID. */
export const searchDivisions: API.OperationMethod<
  SearchDivisionsRequest,
  SearchDivisionsResponse,
  SearchDivisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchDivisionsRequest,
  output: SearchDivisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface QueryDivisionByAddressDivisionsRequest {
  address?: string;
}

export const QueryDivisionByAddressDivisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(Schema.String).pipe(T.HttpQuery("address")),
  }).pipe(
    T.Http({ method: "GET", path: "civicinfo/v2/divisionsByAddress" }),
    svc,
  ) as unknown as Schema.Schema<QueryDivisionByAddressDivisionsRequest>;

export type QueryDivisionByAddressDivisionsResponse =
  CivicinfoApiprotosV2DivisionByAddressResponse;
export const QueryDivisionByAddressDivisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CivicinfoApiprotosV2DivisionByAddressResponse;

export type QueryDivisionByAddressDivisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lookup OCDIDs and names for divisions related to an address. */
export const queryDivisionByAddressDivisions: API.OperationMethod<
  QueryDivisionByAddressDivisionsRequest,
  QueryDivisionByAddressDivisionsResponse,
  QueryDivisionByAddressDivisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryDivisionByAddressDivisionsRequest,
  output: QueryDivisionByAddressDivisionsResponse,
  errors: [NotFound, Forbidden],
}));
