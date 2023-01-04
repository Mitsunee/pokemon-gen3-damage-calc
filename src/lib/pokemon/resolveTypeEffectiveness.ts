import { Effectiveness, MoveEffectiveness, type MonType } from "@/types/enum";
import type { PokemonData } from "@/types/PokemonSchema";
import { TypeChart } from "./TypeChart";

export function resolveTypeEffectiveness(
  move: MonType,
  defenderType: PokemonData["type"]
): MoveEffectiveness {
  const moveType = TypeChart[move];
  const effTypeA = moveType.chart[defenderType[0]];

  if (effTypeA == Effectiveness.IMMUNE) return MoveEffectiveness.IMMUNE;

  if (defenderType[1] !== null) {
    const effTypeB = moveType.chart[defenderType[1]];
    if (effTypeB == Effectiveness.IMMUNE) return MoveEffectiveness.IMMUNE;

    switch (effTypeB) {
      case Effectiveness.RESIST:
        switch (effTypeA) {
          case Effectiveness.RESIST:
            return MoveEffectiveness.RESIST_DOUBLE;
          case Effectiveness.NORMAL:
            return MoveEffectiveness.RESIST;
          default:
            return MoveEffectiveness.NORMAL;
        }

      case Effectiveness.EFFECTIVE:
        switch (effTypeA) {
          case Effectiveness.EFFECTIVE:
            return MoveEffectiveness.EFFECTIVE_DOUBLE;
          case Effectiveness.NORMAL:
            return MoveEffectiveness.EFFECTIVE;
          default:
            return MoveEffectiveness.NORMAL;
        }
    }
  }

  switch (effTypeA) {
    case Effectiveness.RESIST:
      return MoveEffectiveness.RESIST;
    case Effectiveness.EFFECTIVE:
      return MoveEffectiveness.EFFECTIVE;
    default:
      return MoveEffectiveness.NORMAL;
  }
}
