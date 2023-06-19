This is a high-performance implementation of Base64 in Typescript.
There is room for further performance upgrades using chip specific instructions and registers.

- `base64_encoder`
  - encode(str: string): string
- `base64_decoder`
  - decode(str: string): string
- `error_handler`
  - handleError(error: Error): string

Written by Dan Zulla (@zdanl) (z@lyra.foundation)
