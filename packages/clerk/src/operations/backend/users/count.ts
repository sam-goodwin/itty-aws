import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const CountInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_address: Schema.optional(Schema.String),
  phone_number: Schema.optional(Schema.String),
  external_id: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  web3_wallet: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
  organization_id: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  email_address_query: Schema.optional(Schema.String),
  phone_number_query: Schema.optional(Schema.String),
  username_query: Schema.optional(Schema.String),
  name_query: Schema.optional(Schema.String),
  banned: Schema.optional(Schema.Boolean),
  last_active_at_before: Schema.optional(Schema.Number),
  last_active_at_after: Schema.optional(Schema.Number),
  last_active_at_since: Schema.optional(Schema.Number),
  created_at_before: Schema.optional(Schema.Number),
  created_at_after: Schema.optional(Schema.Number),
  last_sign_in_at_before: Schema.optional(Schema.Number),
  last_sign_in_at_after: Schema.optional(Schema.Number),
  provider: Schema.optional(Schema.String),
  provider_user_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/users/count" }));
export type CountInput = typeof CountInput.Type;

// Output Schema
export const CountOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["total_count"]),
  total_count: Schema.Number,
});
export type CountOutput = typeof CountOutput.Type;

// The operation
/**
 * Count users
 *
 * Returns a total count of all users that match the given filtering criteria.
 *
 * @param email_address - Counts users with the specified email addresses.
Accepts up to 100 email addresses.
Any email addresses not found are ignored.
 * @param phone_number - Counts users with the specified phone numbers.
Accepts up to 100 phone numbers.
Any phone numbers not found are ignored.
 * @param external_id - Counts users with the specified external IDs.
Accepts up to 100 external IDs.
Any external IDs not found are ignored.
 * @param username - Counts users with the specified usernames.
Accepts up to 100 usernames.
Any usernames not found are ignored.
 * @param web3_wallet - Counts users with the specified web3 wallet addresses.
Accepts up to 100 web3 wallet addresses.
Any web3 wallet addresses not found are ignored.
 * @param user_id - Counts users with the user IDs specified.
Accepts up to 100 user IDs.
Any user IDs not found are ignored.
 * @param organization_id - Returns users that have memberships to the given organizations. For each organization ID, the `+` and `-`
can be prepended to the ID, which denote whether the respective organization should be included or
excluded from the result set. Accepts up to 100 organization IDs.
 * @param query - Counts users that match the given query.
For possible matches, we check the email addresses, phone numbers, usernames, web3 wallets, user IDs, first and last names.
The query value doesn't need to match the exact value you are looking for, it is capable of partial matches as well.
 * @param email_address_query - Counts users with emails that match the given query, via case-insensitive partial match.
For example, `email_address_query=ello` will match a user with the email `HELLO@example.com`,
and will be included in the resulting count.
 * @param phone_number_query - Counts users with phone numbers that match the given query, via case-insensitive partial match.
For example, `phone_number_query=555` will match a user with the phone number `+1555xxxxxxx`,
and will be included in the resulting count.
 * @param username_query - Counts users with usernames that match the given query, via case-insensitive partial match.
For example, `username_query=CoolUser` will match a user with the username `SomeCoolUser`,
and will be included in the resulting count.
 * @param name_query - Returns users with names that match the given query, via case-insensitive partial match.
 * @param banned - Counts users which are either banned (`banned=true`) or not banned (`banned=false`).
 * @param last_active_at_before - Returns users whose last session activity was before the given date (with millisecond precision).
Example: use 1700690400000 to retrieve users whose last session activity was before 2023-11-23.
 * @param last_active_at_after - Returns users whose last session activity was after the given date (with millisecond precision).
Example: use 1700690400000 to retrieve users whose last session activity was after 2023-11-23.
 * @param last_active_at_since - Returns users that had session activity since the given date.
Example: use 1700690400000 to retrieve users that had session activity from 2023-11-23 until the current day.
Deprecated in favor of `last_active_at_after`.
 * @param created_at_before - Returns users who have been created before the given date (with millisecond precision).
Example: use 1730160000000 to retrieve users who have been created before 2024-10-29.
 * @param created_at_after - Returns users who have been created after the given date (with millisecond precision).
Example: use 1730160000000 to retrieve users who have been created after 2024-10-29.
 * @param last_sign_in_at_before - Counts users whose last sign-in was before the given date (with millisecond precision).
Example: use 1700690400000 to count users whose last sign-in was before 2023-11-23.
 * @param last_sign_in_at_after - Counts users whose last sign-in was after the given date (with millisecond precision).
Example: use 1700690400000 to count users whose last sign-in was after 2023-11-23.
 * @param provider - Counts users with external accounts for the specified OAuth provider.
Must be used in combination with the `provider_user_id` parameter.
For example, use `provider=oauth_google&provider_user_id=12345` to count users with Google provider user ID 12345.
Accepts up to 100 providers.
 * @param provider_user_id - Counts users with the specified provider user IDs for a specific provider.
Must be used in combination with the `provider` parameter.
For example, use `provider=oauth_google&provider_user_id=12345` to count users with Google provider user ID 12345.
Accepts up to 100 provider user IDs.
Any provider user IDs not found are ignored.
 */
export const count = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CountInput,
  outputSchema: CountOutput,
  errors: [UnprocessableEntity] as const,
}));
