---
title: list-existing-dns-records
product: vercel
url: /docs/rest-api/dns/list-existing-dns-records
canonical_url: "https://vercel.com/docs/rest-api/dns/list-existing-dns-records"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-existing-dns-records on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List existing DNS records

```http
GET /v5/domains/{domain}/records
```

Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | string | No | Maximum number of records to list from a request. |
| `since` | string | No | Get records created after this JavaScript timestamp. |
| `until` | string | No | Get records created before this JavaScript timestamp. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Successful response retrieving a list of paginated DNS records.

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "string"
    },
    {
      "type": "object",
      "required": [
        "records"
      ],
      "properties": {
        "records": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "created",
              "createdAt",
              "creator",
              "id",
              "name",
              "slug",
              "type",
              "updated",
              "updatedAt",
              "value"
            ]
          }
        }
      }
    },
    {
      "type": "object",
      "description": "Successful response retrieving a list of paginated DNS records.",
      "required": [
        "pagination",
        "records"
      ],
      "properties": {
        "records": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "created",
              "createdAt",
              "creator",
              "id",
              "name",
              "slug",
              "type",
              "updated",
              "updatedAt",
              "value"
            ]
          }
        },
        "pagination": {
          "type": "object",
          "description": "This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.",
          "required": [
            "count",
            "next",
            "prev"
          ],
          "properties": {
            "count": {
              "type": "number",
              "description": "Amount of items in the current page."
            },
            "next": {
              "type": "number",
              "description": "Timestamp that must be used to request the next page.",
              "nullable": true
            },
            "prev": {
              "type": "number",
              "description": "Timestamp that must be used to request the previous page.",
              "nullable": true
            }
          }
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [dns endpoints](/docs/rest-api#dns)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
