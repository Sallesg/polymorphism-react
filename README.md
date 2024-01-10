# Polymorphism in React

- Usually used to check which tag the component should render.
- Used to keep the HTML semantic and the component dynamic.
- Allows the component to be reused.

## First example is a custom LinkButton

- The first example shows that the component is being used three, but in its properties the first and second is given an href while the third is given an onClick().

```javascript
    <LinkButton href="/home">Home</LinkButton>
    <LinkButton href="/about">About</LinkButton>
    <LinkButton onClick={() => console.log("button")}>Go to</LinkButton>
```

- Observing the LinkButton component we can see that it has a validation that checks whether the href type is a string or not, if it is it will return a string called button which is the tag that will be rendered on screen.

```javascript
const Tag = typeof href === "string" ? "a" : "button";
```

- You might ask: but isn't button a string too?
  - It is, but when the LinkButton component doesn't receive the href property, it returns the value undefined, which is of type undefined, and it understands that it's a button tag since it's not of type string.

```javascript
export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  ...delegated
}: LinkButtonProps) => {
  const Tag = typeof href === "string" ? "a" : "button";

  return (
    <Tag
      style={styles}
      href={href} // it is "a" or undefined as a value received between the brackets
      {...delegated}
    >
      {children}
    </Tag>
  );
};
```

## Second example is a custom Lists (unordered and ordered)

- The second component shows a useful and dynamic way of rendering lists.
- In this solution, we use object destructuring to extract the as prop, and rename it to Tag.

```javascript
    ... (existing code)

    <Lists as="ul">
        <li>Item 1</li>
        <li>Item 2</li>
    </Lists>

    ... (existing code)
```

```javascript
export const Lists: React.FC<ListProps> = ({
  as: Tag = "ul",
  children,
  ...delegated
}: ListProps) => { ... (existing code)}
```

- In this example we have limited the type of html tag that the "as" property can pass to the Lists component.

```javascript
const VALID_TAGS = ["ul", "ol"];

... (existing code)

if (typeof Tag === "string" && !VALID_TAGS.includes(Tag)) {
    throw new Error(`Invalid tag: ${Tag}`);
}

  ... (existing code)
```

- This ensures that only an ordered and unordered list tag can be rendered.
- If another value is passed in, an error will be returned stating the problem.

```javascript
<section>
  <h4>Polymorphism for lists</h4>
  <Lists as="ul">
    <li>Item 1</li>
    <li>Item 2</li>
  </Lists>
  <Lists as="ol">
    <li>Iphone</li>
    <li>Samsung</li>
  </Lists>
</section>
```

```javascript
const VALID_TAGS = ["ul", "ol"];
export const Lists: React.FC<ListProps> = ({
  as: Tag = "ul",
  children,
  ...delegated
}: ListProps) => {
  if (typeof Tag === "string" && !VALID_TAGS.includes(Tag)) {
    throw new Error(`Invalid tag: ${Tag}`);
  }
  return (
    <Tag style={styles} {...delegated}>
      {children}
    </Tag>
  );
};
```

## Tech Stack

**Client:** React, Typescript

## Run Locally

Clone the project

```bash
  git clone https://github.com/Sallesg/polymorphism-react
```

Go to the project directory

```bash
  cd polymorphism-react
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```
