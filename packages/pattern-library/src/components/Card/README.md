# Card

A generic 'card' style wrapper with a light border and (typically) white background.

A `<Card>` doesn't have any padding of its own, each section must be wrapped in a `<Card.Section>`. This is to enable differently colored sections e.g. a muted background, or full-bleed content without negative margins.

```
<Card>
    <Card.Section>
        Section content.
    </Card.Section>
</Card>
```
