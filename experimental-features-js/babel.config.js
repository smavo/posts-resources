module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-partial-application",
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-logical-assignment-operators",
    "@babel/plugin-proposal-do-expressions"
  ]
}