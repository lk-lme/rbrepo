# Heading

Headings are used to title sections. They should be used to title anything ranging from pages to smaller UI elements such as cards.

The HTML specification defines up to six levels of headings, however it is rare that using the full six levels is advisable, since it implies an extreme level of nested/complex content.

## Automatic heading levels

Heading levels are contextual, and rely on following a structural sequence (for instance a third-level heading should only appear under a second-level heading).

In order to automate the selection of the correct level, simply wrap a `<Heading />` in a `<Section />` element every time the level should increment. For instance:

```jsx
<Heading>
  A top-level heading (<h1 />)
</Heading>
<Section>
  <Heading>
    A second-level heading (<h2 />).
  </Heading>
  <Section>
    <Heading>
      A third-level heading (<h3 />).
    </Heading>
  </Section>
</Section>
```

## Manually specifying a level

If required, you can manually override the heading level by passing the `level` prop:

```jsx
<Heading level={2}>
  A second-level heading (<h2 />).
</Heading>
```

This will ignore the heading's contextual position.
