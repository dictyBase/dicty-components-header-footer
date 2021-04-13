## Default header component

```jsx
const headerTheme = {
  primary: "#004080",
  secondary: "#001b53",
  text: "#004080",
}

const items = [
  {
    url: "/cite",
    icon: "plus",
    text: "Cite Us",
  },
  {
    url: "/downloads",
    icon: "download",
    text: "Downloads",
  },
  {
    url: "/info",
    icon: "info-circle",
    text: "About dictyBase",
  },
  {
    url: "/login",
    icon: "sign-in",
    text: "Login",
    isRouter: true,
  },
]

const style = {
  marginRight: "8px",
  marginTop: "24px",
}

const HeaderLinks = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((link, i) => (
        <a key={i} href={link.url} style={style}>
          {link.text}
        </a>
      ))}
    </React.Fragment>
  )
}

;<Header items={items} render={HeaderLinks} theme={headerTheme} />
```
