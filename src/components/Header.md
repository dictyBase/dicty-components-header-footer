## Default header component

```example
const  Link = require("../styles/header")
require("font-awesome/css/font-awesome.min.css")
const FontAwesome = require("react-fontawesome")

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
  },
];


const generateLinks = (link, i) => {
  return (
    <Link key={i} href={link.url}>
      <FontAwesome name={link.icon} />
      {link.text}
    </Link>
  );
};

<Header items={items}>
    {items => items.map(generateLinks)}
</Header>
```
