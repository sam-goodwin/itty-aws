---
title: list-access-groups-for-a-team-project-or-member
product: vercel
url: /docs/rest-api/access-groups/list-access-groups-for-a-team-project-or-member
canonical_url: "https://vercel.com/docs/rest-api/access-groups/list-access-groups-for-a-team-project-or-member"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-access-groups-for-a-team-project-or-member on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List access groups for a team, project or member

```http
GET /v1/access-groups
```

List access groups

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | No | Filter access groups by project. |
| `search` | string | No | Search for access groups by name. |
| `membersLimit` | integer. min: 1; max: 100 | No | Number of members to include in the response. |
| `projectsLimit` | integer. min: 1; max: 100 | No | Number of projects to include in the response. |
| `limit` | integer. min: 1; max: 100 | No | Limit how many access group should be returned. |
| `next` | string | No | Continuation cursor to retrieve the next page of results. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object"
    },
    {
      "type": "object",
      "required": [
        "accessGroups",
        "pagination"
      ],
      "properties": {
        "accessGroups": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "accessGroupId",
              "createdAt",
              "isDsyncManaged",
              "membersCount",
              "name",
              "projectsCount",
              "teamId",
              "updatedAt"
            ]
          }
        },
        "pagination": {
          "type": "object",
          "required": [
            "count",
            "next"
          ],
          "properties": {
            "count": {
              "type": "number"
            },
            "next": {
              "type": "string",
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

### 410: No description

---

## Related

- [access-groups endpoints](/docs/rest-api#access-groups)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
