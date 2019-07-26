/**
 * Small helper for creating props that optionall render text, or components 
 * for more flexibility.
 * 
 * @param render The thing to render.
 * @param props The props to pass along if it's a function.
 */
function handleRenderProp(render: RenderProp, props: any) {
  return typeof render === 'function' ? render(props) : render;
}

export type RenderProp = string|React.ReactNode|React.FunctionComponent;

export default handleRenderProp;
