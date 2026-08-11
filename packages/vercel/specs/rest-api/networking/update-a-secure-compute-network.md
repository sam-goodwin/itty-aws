---
title: update-a-secure-compute-network
product: vercel
url: /docs/rest-api/networking/update-a-secure-compute-network
canonical_url: "https://vercel.com/docs/rest-api/networking/update-a-secure-compute-network"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-a-secure-compute-network on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update a Secure Compute network

```http
PATCH /v1/connect/networks/{networkId}
```

Allows to update a Secure Compute network.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `networkId` | string | Yes | The unique identifier of the Secure Compute network |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the Secure Compute network",
      "maxLength": 255
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "awsAccountId",
    "awsRegion",
    "cidr",
    "createdAt",
    "id",
    "name",
    "status",
    "teamId"
  ],
  "properties": {
    "awsAccountId": {
      "type": "string",
      "description": "The ID of the AWS Account in which the network exists."
    },
    "awsAvailabilityZoneIds": {
      "type": "array",
      "description": "The IDs of the AWS Availability Zones in which the network exists, if specified during creation.",
      "items": {
        "type": "string"
      }
    },
    "awsRegion": {
      "type": "string",
      "description": "The AWS Region in which the network exists."
    },
    "cidr": {
      "type": "string",
      "description": "The CIDR range of the Network."
    },
    "createdAt": {
      "type": "number",
      "description": "The date at which the Network was created, represented as a UNIX timestamp since EPOCH."
    },
    "egressIpAddresses": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "egressCidrBlock": {
      "type": "string",
      "description": "The single contiguous CIDR block from which all egress (NAT gateway) IP addresses are allocated. Present only for networks created with the egress CIDR block feature enabled. Customers can allowlist this range instead of individual egress IPs so it keeps working when AZs are added."
    },
    "hostedZones": {
      "type": "object",
      "description": "Metadata about any AWS Route53 Hosted Zones associated with the Network.",
      "required": [
        "count"
      ],
      "properties": {
        "count": {
          "type": "number",
          "description": "The number of AWS Route53 Hosted Zones associated with the Network."
        }
      }
    },
    "id": {
      "type": "string",
      "description": "The unique identifier of the Network."
    },
    "name": {
      "type": "string",
      "description": "The name of the network."
    },
    "peeringConnections": {
      "type": "object",
      "description": "Metadata about any AWS Route53 Hosted Zones associated with the Network.",
      "required": [
        "count"
      ],
      "properties": {
        "count": {
          "type": "number",
          "description": "The number of AWS Route53 Hosted Zones associated with the Network."
        }
      }
    },
    "projects": {
      "type": "object",
      "description": "Metadata about any projects associated with the Network.",
      "required": [
        "count",
        "ids"
      ],
      "properties": {
        "count": {
          "type": "number"
        },
        "ids": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "region": {
      "type": "string",
      "description": "The Vercel region in which the Network exists."
    },
    "status": {
      "type": "string",
      "description": "The status of the Network.",
      "enum": [
        "create_in_progress",
        "delete_in_progress",
        "error",
        "ready"
      ]
    },
    "teamId": {
      "type": "string",
      "description": "The unique identifier of the Team that owns the Network."
    },
    "vpcId": {
      "type": "string",
      "description": "The ID of the VPC which hosts the network."
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [networking endpoints](/docs/rest-api#networking)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
