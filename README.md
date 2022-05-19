# `minima-pair-registry`

Fetches and caches pair for the Minima router.

## Development

```bash
# Fetch data
yarn registry:sync
```

## Usage

```ts
import { fetchPools } from "@dahlia-labs/minima-pair-registry";
import type { Pool } from "@dahlia-labs/minima-pair-registry";

const pools: Pool[] = await fetchPools();
```

## License

AGPL-3.0
