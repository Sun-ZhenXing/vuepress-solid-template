# Demo for page-01

## LaTeX

$$
\LaTeX \oiiint_\Sigma
$$

## Badge & Footnote

*@recommend* All of VuePress2 is ready![^1]

[^1]: footnote!

## Container

::: warning Your Warning

Solid is not Solid.js!

:::

## Image

![favicon](/favicon.svg)

## Mermaid

```mermaid
flowchart TB
  c1-->a2
  subgraph one
  a1-->a2
  end
  subgraph two
  b1-->b2
  end
  subgraph three
  c1-->c2
  end
  one --> two
  three --> two
  two --> c2
```

## Copy Code

```cpp
#include <iostream>

int main(int argc, char** argv) {
  std::cout << "Hello World!" << std::endl;
  return 0;
}
```

## Tabs

::: tabs

@tab title 1

$$
\oint
$$

@tab title 2

$$
\oiint
$$

@tab:active title 3

$$
\oiiint
$$

:::

## Card

```card
title: Alex Sun
desc: Learning what is fun.
logo: /favicon.svg
link: https://blog.alexsun.top
color: rgba(253, 230, 138, 0.15)
```
