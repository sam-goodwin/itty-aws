export default {
  test: {
    include: ["test/**/*.test.ts"],
  },
  resolve: {
    // `@distilled.cloud/core`'s package exports point `bun` at `src` and
    // everything else at the built `lib`. Vite honours neither without a
    // build, so tests resolve core straight from source.
    alias: {
      "@distilled.cloud/core/schema": new URL(
        "../core/src/schema.ts",
        import.meta.url,
      ).pathname,
    },
  },
};
