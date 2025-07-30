# AGENT.md - Project Knowledge for itty-aws

## Project Overview
**itty-aws** is a lightweight (34KB) AWS SDK implementation for Effect.js, built with a single Proxy and types generated from AWS API specifications. It aims to provide the entire AWS API surface area in a much smaller package than the official AWS SDK v3.

## Architecture

### Core Components
- **`src/client.ts`**: Main AWS proxy that dynamically constructs service clients and handles API requests
- **`src/services/`**: Generated TypeScript service definitions from Smithy specs
- **`src/metadata.ts`**: Service metadata including protocols and endpoints
- **`scripts/`**: Code generation and build utilities
- **`manifests/`**: AWS service specifications in JSON format

### Technology Stack
- **Runtime**: Bun (primary), Node.js (compatible)
- **Language**: TypeScript
- **Effect System**: Effect.js for composable async operations with type-safe error handling
- **Request Signing**: aws4fetch for AWS signature v4
- **Testing**: Vitest
- **Code Quality**: Biome for formatting/linting

## Commands

### Build & Development
```bash
bun run build              # TypeScript compilation
bun run test              # Run tests with Vitest
bun run test:watch        # Watch mode for tests
bun run test:ui           # Vitest UI
```

### Code Generation
```bash
bun run fetch:manifests   # Download AWS service manifests
bun run generate          # Generate TypeScript services from manifests
bun run gen               # Shorthand for generate
```

### Analysis
```bash
bun run bundle:size       # Analyze bundle size
```

## Protocol Support

### Current Status (as of analysis)
- ✅ **JSON Protocols**: `awsJson1_0`, `awsJson1_1`, `restJson1` (fully working)
- ❌ **XML Protocols**: `ec2Query`, `awsQuery`, `restXml` (parsing broken)

### Protocol Details
- **JSON services**: DynamoDB, Lambda, CloudTrail, etc.
- **XML services**: EC2, S3, CloudFront, Route 53, Auto Scaling, etc.
- **Issue**: `client.ts` hardcodes `JSON.parse()` for all responses (lines 175, 181)

### Known XML Parsing Limitation
The client proxy currently fails on XML-based protocols because it assumes all AWS responses are JSON. The library has `fast-xml-parser@5.2.5` available in dependencies but doesn't use it for response parsing.

## Codebase Structure

### Directory Layout
```
src/
├── client.ts           # Main proxy implementation
├── index.ts           # Public API exports
├── metadata.ts        # Service configuration
└── services/          # Generated service types
    ├── dynamodb.ts
    ├── ec2.ts
    └── ...

scripts/
├── generate-clients.ts # Service generation
├── fetch-manifests.ts # Download specs
└── bundle-size.ts     # Size analysis

test/                  # Test files
manifests/            # AWS service specs (JSON)
dist/                 # Built output
```

### Key Files for XML Support Investigation
- **`src/client.ts:170-190`**: Response parsing logic that needs XML support
- **`src/metadata.ts:456`**: EC2 service metadata showing `"protocol": "ec2Query"`
- **`bun.lock`**: Contains `fast-xml-parser@5.2.5` dependency

## Development Patterns

### Service Client Pattern
```typescript
const ddb = new AWS.DynamoDB({ region: "us-east-1" });
const result = yield* ddb.getItem({...});
```

### Error Handling Pattern
```typescript
Effect.catchTag("ResourceNotFoundException", () => Effect.succeed(fallback))
```

### Testing Approach
- Uses Vitest with Effect integration (`@effect/vitest`)
- Tests located in `test/` directory
- Content-type testing in `test/content-type.test.ts`

## Future Considerations

### XML Protocol Support
Based on analysis, the recommended approach for XML support:
1. Add protocol-aware response parser using existing `fast-xml-parser`
2. Create `parseAwsResponse()` and `parseAwsError()` helpers
3. Replace hardcoded `JSON.parse()` calls with protocol detection
4. Maintain backward compatibility with existing JSON protocols

### Bundle Size Target
- Core: 34KB (current)
- Full with Effect.js: 228.1KB
- Fixed-size regardless of services used
