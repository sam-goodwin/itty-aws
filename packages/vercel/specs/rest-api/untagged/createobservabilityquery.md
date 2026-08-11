---
title: createobservabilityquery
product: vercel
url: /docs/rest-api/untagged/createobservabilityquery
canonical_url: "https://vercel.com/docs/rest-api/untagged/createobservabilityquery"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about createobservabilityquery on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# POST /v2/observability/query

```http
POST /v2/observability/query
```

## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "metric",
    "scope"
  ],
  "properties": {
    "metric": {
      "type": "string",
      "description": "Metric id"
    },
    "scope": {
      "type": "object",
      "description": "Owner or project scope for the query"
    },
    "aggregation": {
      "type": "string",
      "description": "Aggregation function to apply. Some aggregations require a dimension: use <agg>/<dimension>, for example unique/visitor_id."
    },
    "groupBy": {
      "type": "array",
      "description": "Dimensions to group results by. JSON dimensions support nested refs, for example event_data/checkout_step. Nested keys containing characters that OData cannot parse as an identifier, such as '-', spaces, quotes, or '/', must be wrapped in single quotes (escape embedded single quotes by doubling them), for example flags/'enable-comments-view' or event_data/'some property''s/value'.",
      "items": {
        "type": "string"
      }
    },
    "filter": {
      "type": "string",
      "description": "Filter to apply to the query. JSON dimensions support nested refs, for example event_data/checkout_step eq 'payment'. Nested keys containing characters that OData cannot parse as an identifier, such as '-', spaces, quotes, or '/', must be wrapped in single quotes (escape embedded single quotes by doubling them), for example flags/'enable-comments-view' eq true or event_data/'some property''s/value' eq true."
    },
    "limit": {
      "type": "number",
      "description": "Maximum number of results"
    },
    "orderBy": {
      "type": "string",
      "description": "Rollup column to order grouped results by. Use the generated rollup key for the requested metric and aggregation. Defaults to the query engine count rollup."
    },
    "orderDirection": {
      "type": "string",
      "description": "Direction to order grouped results by. Defaults to desc.",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "granularity": {
      "type": "object",
      "description": "Time bucket size"
    },
    "startTime": {
      "type": "string",
      "description": "Start timestamp"
    },
    "endTime": {
      "type": "string",
      "description": "End timestamp"
    },
    "bucketTimezone": {
      "type": "string",
      "description": "IANA timezone (e.g. Europe/Paris) used only to align calendar buckets (1d/1mo) to that zone's day/month boundaries. startTime/endTime and all output timestamps are always UTC. No effect on sub-day granularities."
    }
  },
  "additionalProperties": true
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object"
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.

### 408: No description

### 410: No description

---

## Related

- [Untagged endpoints](/docs/rest-api#untagged)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
