/**
 * Arguably should use a custom SVGR template, however this currently breaks
 * the build for some reason.
 *
 * @link https://www.smooth-code.com/open-source/svgr/docs/typescript/
 */
declare module '*.svg' {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}

/**
 * Generic type for CSS modules.
 */
declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
