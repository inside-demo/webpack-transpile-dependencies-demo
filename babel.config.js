const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        ie: "11"
      },
      useBuiltIns: "entry",
    },
  ],
];

module.exports = { presets };