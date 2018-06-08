module.exports = {
  parser: "babel-eslint",
  plugins: ["react"],
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  extends: ["airbnb", "@octetstream"],
  rules: {
    "react/no-unknown-property": [
      2,
      {
        ignore: ["class"]
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "no-unused-expressions": 0
  }
}