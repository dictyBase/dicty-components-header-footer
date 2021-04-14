### Sitemap style footer

```jsx
const items = [
  [
    {
      header: { description: "Random" },
      items: [
        { link: "http://cnn.com", description: "CNN" },
        { link: "http://nytimes.com", description: "Nytimes" },
        { link: "http://yahoo.com", description: "Yahoo" },
      ],
    },
  ],
  [
    {
      header: { description: "Tools", link: "http://dictybase.org/tools" },
      items: [
        { link: "http://dictybase.org/tools", description: "Tools home" },
        { link: "http://dictybase.org/tools", description: "Genome browser" },
      ],
    },
  ],
  [
    {
      header: { description: "Please Cite", link: "http://dictybase.org/cite" },
      items: [
        { description: "dictyBase", link: "http://dictybase.org" },
        {
          description: "Dicty stock center",
          link: "http://dictybase.org/stock",
        },
      ],
    },
    {
      header: {
        description: "Supported By",
        link: "http://dictybase.org/support",
      },
      items: [
        { description: "NIH", link: "http://dictybase.org/nih" },
        { description: "GMOD", link: "http://dictybase.org/nih" },
        { description: "Gene ontology", link: "http://dictybase.org/nih" },
      ],
    },
  ],
]

const theme = {
  primary: "#004080",
  secondary: "#ebe07a",
  text: "#d8d8d8",
}

;<SiteMapFooter items={items} theme={theme} />
```
