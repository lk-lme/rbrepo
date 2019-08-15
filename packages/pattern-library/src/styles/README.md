# Styles

## Global styles

The `styles.scss` file includes all 'global' styles that should be included in the consuming application, regardless of components.

## Modular scale

LME GUI currently uses a modular scale in order to create consistent spacing and element sizing. 

The current scale is set at a ratio of 1.125. You can see an [example list of values here](https://www.modularscale.com/?1&em&1.125).

You can import the [modular scale SASS mixins](https://github.com/modularscale/modularscale-sass) for use in a component's SCSS file:

```scss
@import '~Styles/utilities/ms';
```

And then use it like so:

```scss
.thing {
  padding: ms(0); // Equates to 1rem
}
```

If you would like to use em units rather than rem units, you can pass the `em` 'thread' in:

```scss
.thing {
  padding: ms(0, $thread: em); // Equates to 1em
}
```
