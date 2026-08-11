---
title: errors
product: vercel
url: /docs/rest-api/errors
canonical_url: "https://vercel.com/docs/rest-api/errors"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/integrations/vercel-api-integrations
summary: Learn about errors on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Errors

List of general and specific errors you may encounter when using the REST API.

## Generic errors

These error codes are consistent for all endpoints.

### Forbidden

You're not authorized to use the endpoint. This usually happens due to missing a user token.

> Similar to the HTTP 403 Forbidden error.

```json
{
  "error": {
    "code": "forbidden",
    "message": "Not authorized"
  }
}
```

### Rate limited

You exceeded the maximum allotted requests. The limit of requests is per endpoint basis so you can continue using other endpoints even if some of them give you this error.

```json
{
  "error": {
    "code": "rate_limited",
    "message": "The rate limit of 6 exceeded for 'api-www-user-update-username'. Try again in 7 days",
    "limit": {
      "remaining": 0,
      "reset": 1571432075,
      "resetMs": 1571432075563,
      "total": 6
    }
  }
}
```

### Bad request

There was an error with the request, the `error.message` would contain information about the issue.

```json
{
  "error": {
    "code": "bad_request",
    "message": "An english description of the error that just occurred"
  }
}
```

### Internal server error

This error is similar to the HTTP 500 Internal Server Error error code.

```json
{
  "error": {
    "code": "internal_server_error",
    "message": "An unexpected internal error occurred"
  }
}
```

### Resource not found

The requested resource could not be found.

```json
{
  "error": {
    "code": "not_found",
    "message": "Could not find the RESOURCE: ID"
  }
}
```

### Method unknown

The endpoint you're requesting does not handle the method you defined. The error message will contain the methods the endpoint responds to.

```json
{
  "error": {
    "code": "method_unknown",
    "message": "This endpoint only responds to METHOD"
  }
}
```

## Deployment errors

These error codes can happen when using any deployment related endpoint.

### Missing files

Some of the files you defined when creating the deployment are missing.

```json
{
  "error": {
    "code": "missing_files",
    "message": "Missing files",
    "missing": []
  }
}
```

### No files in the deployment

You tried to create an empty deployment.

```json
{
  "error": {
    "code": "no_files",
    "message": "No files in the deployment"
  }
}
```

### Too many environment variables

The limit of environment variables per deployment is 100 and you defined more. The error message indicates the amount you defined.

> `#` is your number of variables.

```json
{
  "error": {
    "code": "env_too_many_keys",
    "message": "Too many env vars have been supplied (100 max allowed, but got #)"
  }
}
```

### Environment variable key with invalid characters

Some environment variable name contains an invalid character. The only valid characters are letters, digits and `_`. The error message will contain the `KEY` with the problem.

```json
{
  "error": {
    "code": "env_key_invalid_characters",
    "message": "The env key \"KEY\" contains invalid characters. Only letters, digits and `_` are allowed",
    "key": "KEY"
  }
}
```

### Environment variable key with a long name

An environment variable name is too long, the maximum permitted name is 256 characters. The error message contains the environment `KEY`.

```json
{
  "error": {
    "code": "env_key_invalid_length",
    "message": "The env key \"KEY\" exceeds the 256 length limit",
    "key": "KEY"
  }
}
```

### Environment variable value with a long name

An environment variable value contains a value too long, the maximum permitted value is 65536 characters. The error message contains the environment `KEY`.

```json
{
  "error": {
    "code": "env_value_invalid_length",
    "message": "The env value for \"KEY\" exceeds the 65536 length limit",
    "key": "KEY",
    "value": "VALUE"
  }
}
```

### Environment variable value is an object without UID

The value of an environment variable is an object but it doesn't have a `uid`. The error message contains the environment `KEY` which has the error.

```json
{
  "error": {
    "code": "env_value_invalid_type_missing_uid",
    "message": "The env key \"KEY\" passed an object as a value with no `uid` key"
  }
}
```

### Environment variable value is an object with unknown props

The value of an environment variable is an object with unknown attributes, it can only have a `uid` key inside the object.

```json
{
  "error": {
    "code": "env_value_invalid_type_unknown_props",
    "message": "The env key \"KEY\" passed an object with unknown properties. Only `uid` is allowed when passing an object"
  }
}
```

### Environment variable value with an invalid type

An environment variable value passed is of an unsupported type. The error message contains the environment `KEY`.

```json
{
  "error": {
    "code": "env_value_invalid_type",
    "message": "The env key \"KEY\" passed an unsupported type for its value",
    "key": "KEY"
  }
}
```

### Not allowed to access a secret

You're trying to use a secret but you don't have access to it.

```json
{
  "error": {
    "code": "env_secret_forbidden",
    "message": "Not allowed to access secret \"NAME\"",
    "uid": "UID"
  }
}
```

### Missing secret

You're trying to use a secret as an environment value and it doesn't exist.

```json
{
  "error": {
    "code": "env_secret_missing",
    "message": "Could not find a secret by uid \"UID\"",
    "uid": "UID"
  }
}
```

## Domain errors

These error codes can happen when using any domain related endpoint.

### Domain forbidden

You don't have access to the domain, this usually means the domain is owned by another account or team. The domain is specified in the message and the `DOMAIN` key.

```json
{
  "error": {
    "code": "forbidden",
    "message": "You don't have access to \"DOMAIN\"",
    "domain": "DOMAIN"
  }
}
```

### Domain not found

The domain name could not be found in the system.

```json
{
  "error": {
    "code": "not_found",
    "message": "Domain name not found"
  }
}
```

### Missing domain name

The domain name wasn't specified in the URL. This means you tried to use an endpoint which requires you to define the domain name in the URL but didn't define it.

```json
{
  "error": {
    "code": "missing_name",
    "message": "The URL was expected to include the domain name. Example: /domains/google.com"
  }
}
```

### Conflicting aliases

You must remove the aliases described in the error before removing the domain. The aliases are specified in the `ALIASES` key.

```json
{
  "error": {
    "code": "conflict_aliases",
    "message": "The following aliases must be removed before removing the domain: ALIASES",
    "aliases": ["ALIASES"]
  }
}
```

### Not modified

When trying to modify a domain nothing was required to change.

```json
{
  "error": {
    "code": "not_modified",
    "message": "Nothing to do"
  }
}
```

### Missing name for domain

When trying to add a domain the name wasn't present in the request body.

```json
{
  "error": {
    "code": "missing_name",
    "message": "The `name` field in the body was expected but is not present in the body payload. Example value: `example.com`"
  }
}
```

### Invalid name for domain

The domain name defined in the request body is invalid. The name is specified in the error as the `NAME` key.

```json
{
  "error": {
    "code": "invalid_name",
    "message": "The `name` field contains an invalid domain name (\"NAME\")",
    "name": "NAME"
  }
}
```

### Custom domain needs a plan upgrade

To add a custom domain to your account or team you need to upgrade to a paid plan.

```json
{
  "error": {
    "code": "custom_domain_needs_upgrade",
    "message": "Domain name creation requires a premium account."
  }
}
```

### Domain already exists

The domain name you're trying to add already exists. The domain name and its current ID are received in the `NAME` and `DOMAIN_ID` keys.

```json
{
  "error": {
    "code": "not_modified",
    "message": "The domain \"NAME\" already exists",
    "name": "NAME",
    "uid": "DOMAIN_ID"
  }
}
```

### Can't create the domain

The domain name can't be created. Most likely it couldn't be verified.

```json
{
  "error": {
    "code": "forbidden",
    "message": "You don't have permission to create a domain"
  }
}
```

### Failed to add domain after purchase

The domain was purchased but there was an error adding it to your account. Please [contact support](https://vercel.com/help).

```json
{
  "error": {
    "code": "failed_to_add_domain",
    "message": "The domain was bought but couldn't be added."
  }
}
```

### Unable to determine the domain price

The price of a domain could not be determined.

```json
{
  "error": {
    "code": "service_unavailable",
    "message": "Failed to determine the domain price"
  }
}
```

### Domain price mismatch

The `expectedPrice` supplied in the request body does not match the actual domain price, which is specified in the `actualPrice` key.

```json
{
  "error": {
    "code": "price_mismatch",
    "message": "The expected price does not match the actual price",
    "price": "ACTUAL_PRICE"
  }
}
```

### Domain is not available

The domain name is not available to be purchased.

```json
{
  "error": {
    "code": "not_available",
    "message": "Domain is not available"
  }
}
```

### Invalid domain name

The domain name or TLD is invalid or not supported.

```json
{
  "error": {
    "code": "invalid_domain",
    "message": "Invalid domain or TLD"
  }
}
```

### Missing DNS record name

The DNS record key `name` is required and was not provided. It could be [any valid DNS record](https://en.wikipedia.org/wiki/List_of_DNS_record_types).

```json
{
  "error": {
    "code": "missing_type",
    "message": "Missing `type` parameter"
  }
}
```

## DNS errors

These error codes can happen when using any DNS related endpoint.

### Missing DNS record name

The DNS record key `name` is required and was not provided. It should be either a subdomain or `@` for the domain itself.

```json
{
  "error": {
    "code": "missing_name",
    "message": "Missing `name` parameter"
  }
}
```

### Missing DNS record type

The DNS record key `type` is required and was not provided. It could be [any valid DNS record](https://en.wikipedia.org/wiki/List_of_DNS_record_types).

```json
{
  "error": {
    "code": "missing_type",
    "message": "Missing `type` parameter"
  }
}
```

## OAuth2 errors

These errors can occur when using any [OAuth2 related endpoint](/docs/integrations/vercel-api-integrations#create-an-access-token).

### Client not found

The OAuth2 client ID could not be found or doesn't exist.

```json
{
  "error": {
    "code": "not_found",
    "message": "OAuth client not found: CLIENT_ID"
  }
}
```

---

[View full sitemap](/docs/sitemap)
