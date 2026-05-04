const nextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg"),
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
          }, // exclude if *.svg?url
          use: ["@svgr/webpack"],
        },
      );

      // Modify the file loader rule to ignore *.svg, since we have it covered now.
      fileLoaderRule.exclude = /\.svg$/i;
    }
    return config;
  },
  allowedDevOrigins: [" http://172.20.10.3:3000"],
};

export default nextConfig;
