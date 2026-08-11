---
title: record-an-artifacts-cache-usage-event
product: vercel
url: /docs/rest-api/artifacts/record-an-artifacts-cache-usage-event
canonical_url: "https://vercel.com/docs/rest-api/artifacts/record-an-artifacts-cache-usage-event"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about record-an-artifacts-cache-usage-event on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Record an artifacts cache usage event

```http
POST /v8/artifacts/events
```

Records an artifacts cache usage event. The body of this request is an array of cache usage events. The supported event types are `HIT` and `MISS`. The source is either `LOCAL` the cache event was on the users filesystem cache or `REMOTE` if the cache event is for a remote cache. When the event is a `HIT` the request also accepts a number `duration` which is the time taken to generate the artifact in the cache.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Header parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `'x-Artifact-Client-Ci'` | string. maxLength: 50 | No | The continuous integration or delivery environment where this artifact is downloaded. |
| `'x-Artifact-Client-Interactive'` | integer. min: 0; max: 1 | No | 1 if the client is an interactive shell. Otherwise 0 |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "sessionId",
      "source",
      "hash",
      "event"
    ],
    "properties": {
      "sessionId": {
        "type": "string",
        "description": "A UUID (universally unique identifer) for the session that generated this event."
      },
      "source": {
        "type": "string",
        "description": "One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.",
        "enum": [
          "LOCAL",
          "REMOTE"
        ]
      },
      "event": {
        "type": "string",
        "description": "One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.",
        "enum": [
          "HIT",
          "MISS"
        ]
      },
      "hash": {
        "type": "string",
        "description": "The artifact hash"
      },
      "duration": {
        "type": "number",
        "description": "The time taken to generate the artifact. This should be sent as a body parameter on `HIT` events."
      }
    }
  }
}
```

## Responses

### 200: Success. Event recorded.

### 400: One of the provided values in the request body is invalid.
One of the provided values in the headers is invalid

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.
The Remote Caching usage limit has been reached for this account for this billing cycle.
Remote Caching has been disabled for this team or user. An owner can enable it in the billing settings.
You do not have permission to access this resource.

### 410: No description

---

## Related

- [artifacts endpoints](/docs/rest-api#artifacts)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
