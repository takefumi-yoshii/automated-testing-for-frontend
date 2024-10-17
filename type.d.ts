declare module '*.svg' {
  /**
   * Use `any` to avoid conflicts with
   * `@svgr/webpack` plugin or
   * `babel-plugin-inline-react-svg` plugin.
   */
  const content: any

  export default content
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
