import { z } from "zod";
import type { MonType } from "./enum";

const _zMonType = z
  .number()
  .int()
  .min(0)
  .max(16)
  .transform(v => v as MonType);

export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.tuple([_zMonType, z.union([z.null(), _zMonType])])
});

export type PokemonDataType = z.input<typeof PokemonSchema>;
export type PokemonData = z.output<typeof PokemonSchema>;
