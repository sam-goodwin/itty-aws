# Changelog

## [v0.7.3](https://github.com/alchemy-run/distilled/releases/tag/v0.7.3) (2026-03-25)

### Bug Fixes

- **cloudflare**: Include error message in CloudflareHttpError - by @sam-goodwin in [#169](https://github.com/alchemy-run/distilled/pull/169) [(8db73)](https://github.com/alchemy-run/distilled/commit/8db73185)
- **cloudflare**: Patch listContainerApplications.constraints to be optional - by @sam-goodwin in [#172](https://github.com/alchemy-run/distilled/pull/172) [(e732d)](https://github.com/alchemy-run/distilled/commit/e732df33)

## [v0.7.2](https://github.com/alchemy-run/distilled/releases/tag/v0.7.2) (2026-03-24)

*No significant changes*

## [v0.7.1](https://github.com/alchemy-run/distilled/releases/tag/v0.7.1) (2026-03-24)

*No significant changes*

## [v0.7.0](https://github.com/alchemy-run/distilled/releases/tag/v0.7.0) (2026-03-20)

### Bug Fixes

- **cloudflare**: Fix incorrect unknown types - by @sam-goodwin and @Mkassabov in [#167](https://github.com/alchemy-run/distilled/pull/167) [(01eda)](https://github.com/alchemy-run/distilled/commit/01eda42c)

## [v0.6.1](https://github.com/alchemy-run/distilled/releases/tag/v0.6.1) (2026-03-18)

*No significant changes*

## [v0.6.0](https://github.com/alchemy-run/distilled/releases/tag/v0.6.0) (2026-03-18)

### Features

- **cloudflare**: Container spec + OpenAPI generation for Cloudflare - by @sam-goodwin and @Mkassabov in [#163](https://github.com/alchemy-run/distilled/pull/163) [(c3e2b)](https://github.com/alchemy-run/distilled/commit/c3e2b1f4)

## [v0.5.5](https://github.com/alchemy-run/distilled/releases/tag/v0.5.5) (2026-03-17)

### Bug Fixes

- **aws**: Patch SendMessageBatchResult.Failed to be optional - by @sam-goodwin in [#162](https://github.com/alchemy-run/distilled/pull/162) [(98b42)](https://github.com/alchemy-run/distilled/commit/98b42c2b)

## [v0.5.4](https://github.com/alchemy-run/distilled/releases/tag/v0.5.4) (2026-03-16)

### Bug Fixes

- **aws**: Patch runInstances with InvalidParameterValue exception - by @sam-goodwin in [#161](https://github.com/alchemy-run/distilled/pull/161) [(d9b4e)](https://github.com/alchemy-run/distilled/commit/d9b4ef01)

## [v0.5.3](https://github.com/alchemy-run/distilled/releases/tag/v0.5.3) (2026-03-15)

### Bug Fixes

- **aws**: Use smithy toBase64 to avoid stackoverflow - by @sam-goodwin in [#157](https://github.com/alchemy-run/distilled/pull/157) [(7a3dc)](https://github.com/alchemy-run/distilled/commit/7a3dc4d2)

## [v0.5.2](https://github.com/alchemy-run/distilled/releases/tag/v0.5.2) (2026-03-15)

### Bug Fixes

- **aws**: Patch Cloudfront KeyValueStore.Comment to be optional - by @sam-goodwin in [#156](https://github.com/alchemy-run/distilled/pull/156) [(30b55)](https://github.com/alchemy-run/distilled/commit/30b55481)
- **website**: Sort SDK cards alphabetically - by @Mkassabov [(661a0)](https://github.com/alchemy-run/distilled/commit/661a054c)

## [v0.5.1](https://github.com/alchemy-run/distilled/releases/tag/v0.5.1) (2026-03-13)

### Features

- **azure**: Create azure sdk - by @Mkassabov in [#154](https://github.com/alchemy-run/distilled/pull/154) [(6e964)](https://github.com/alchemy-run/distilled/commit/6e964620)

### Bug Fixes

- **ci**: Auto-determine git tag/release based on version format - by @Mkassabov in [#151](https://github.com/alchemy-run/distilled/pull/151) [(79f15)](https://github.com/alchemy-run/distilled/commit/79f15f53)

## [v0.5.0](https://github.com/alchemy-run/distilled/releases/tag/v0.5.0) (2026-03-13)

### Features

- Update specs - by @Mkassabov in [#150](https://github.com/alchemy-run/distilled/pull/150) [(deb36)](https://github.com/alchemy-run/distilled/commit/deb36394)
- **k8s**: Create k8s sdk - by @Mkassabov in [#149](https://github.com/alchemy-run/distilled/pull/149) [(f4729)](https://github.com/alchemy-run/distilled/commit/f47294a0)

## [v0.4.0](https://github.com/alchemy-run/distilled/releases/tag/v0.4.0) (2026-03-12)

### Features

- Website - by @Mkassabov in [#126](https://github.com/alchemy-run/distilled/pull/126) [(3be59)](https://github.com/alchemy-run/distilled/commit/3be598b1)
- **cloudflare**: Support API Key and OAuth, add paginated APIs and restore envelope - by @sam-goodwin in [#128](https://github.com/alchemy-run/distilled/pull/128) [(a1c26)](https://github.com/alchemy-run/distilled/commit/a1c260d7)
- **cloudflare**: Add jwtToken property to createAssetUpload - by @sam-goodwin in [#132](https://github.com/alchemy-run/distilled/pull/132) [(240a2)](https://github.com/alchemy-run/distilled/commit/240a269d)

### Bug Fixes

- Use Redacted\<string\> for all sensitive credential fields - by @Mkassabov in [#136](https://github.com/alchemy-run/distilled/pull/136) [(47dcb)](https://github.com/alchemy-run/distilled/commit/47dcb130)
- **ci**: Include core changes in all SDK preview publish filters - by @Mkassabov in [#135](https://github.com/alchemy-run/distilled/pull/135) [(f6fef)](https://github.com/alchemy-run/distilled/commit/f6fef966)
- **ci**: Make pkg-pr preview publishes sequential - by @Mkassabov in [#138](https://github.com/alchemy-run/distilled/pull/138) [(136a2)](https://github.com/alchemy-run/distilled/commit/136a2eb9)

## [v0.2.6](https://github.com/alchemy-run/distilled/releases/tag/v0.2.6) (2026-03-11)

### Features

- **coinbase**: Add coinbase sdk + more reliably create-sdk script - by @Mkassabov in [#122](https://github.com/alchemy-run/distilled/pull/122) [(70d68)](https://github.com/alchemy-run/distilled/commit/70d68b96)

## [v0.2.4](https://github.com/alchemy-run/distilled/releases/tag/v0.2.4) (2026-03-11)

### Bug Fixes

- **cloudflare**: Export Credentials - by @sam-goodwin in [#119](https://github.com/alchemy-run/distilled/pull/119) [(36fd0)](https://github.com/alchemy-run/distilled/commit/36fd0d2f)
- **cloudflare**: Consistently use .ts suffix for relative imports - by @sam-goodwin in [#120](https://github.com/alchemy-run/distilled/pull/120) [(e0399)](https://github.com/alchemy-run/distilled/commit/e0399945)

## [v0.2.3](https://github.com/alchemy-run/distilled/releases/tag/v0.2.3) (2026-03-11)

### Features

- **aws**: Lazy AWS credentials and Auth Service - by @sam-goodwin in [#116](https://github.com/alchemy-run/distilled/pull/116) [(71915)](https://github.com/alchemy-run/distilled/commit/71915d87)

## [v0.2.2](https://github.com/alchemy-run/distilled/releases/tag/v0.2.2) (2026-03-11)

*No significant changes*

## [v0.2.1](https://github.com/alchemy-run/distilled/releases/tag/v0.2.1) (2026-03-11)

*No significant changes*
