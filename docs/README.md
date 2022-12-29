---
home: true
heroImage: /favicon.svg
actions:
  - text: Get Start
    link: /demo/
    type: primary
  - text: Configure
    link: https://v2.vuepress.vuejs.org/guide/
    type: secondary
features:
  - title: Zero configuration
    details: Out of the box, contract is configuration.
  - title: Fully functional plugins
    details: Various plugins have been configured to support LaTeX and other common requirements.
  - title: VuePress
    details: All of them are the latest support. Plugins can be added or removed at any time. Native themes and ecosystem.
footer: Create from VuePress community!
---

# Hello VuePress

$$
\LaTeX
$$

*@recommend* All of VuePress2 is ready![^1]

[^1]: footnote!

::: warning

Solid is not Solid.js!

:::

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

```cpp
#include <iostream>

int main(int argc, char** argv) {
  std::cout << "Hello World!" << std::endl;
  return 0;
}
```
