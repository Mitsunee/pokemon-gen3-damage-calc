import { MonType, TypeCategory, Effectiveness } from "@/types/enum";

interface EffectivenessChart extends Array<Effectiveness> {
  0: Effectiveness;
  length: 17;
}

export interface MoveType {
  cat: TypeCategory;
  chart: EffectivenessChart;
}

export const TypeChart: Record<MonType, MoveType> = {
  [MonType.NORMAL]: {
    cat: TypeCategory.PHYSICAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.NORMAL,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.NORMAL,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.IMMUNE,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.RESIST,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.FIRE]: {
    cat: TypeCategory.SPECIAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.RESIST,
      /* Water: */ Effectiveness.RESIST,
      /* Grass: */ Effectiveness.EFFECTIVE,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.EFFECTIVE,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.RESIST,
      /* Steel: */ Effectiveness.EFFECTIVE,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.EFFECTIVE,
      /* Dragon: */ Effectiveness.RESIST
    ]
  },
  [MonType.WATER]: {
    cat: TypeCategory.SPECIAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.EFFECTIVE,
      /* Water: */ Effectiveness.RESIST,
      /* Grass: */ Effectiveness.RESIST,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.EFFECTIVE,
      /* Rock: */ Effectiveness.EFFECTIVE,
      /* Steel: */ Effectiveness.NORMAL,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.RESIST
    ]
  },
  [MonType.GRASS]: {
    cat: TypeCategory.SPECIAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.RESIST,
      /* Water: */ Effectiveness.EFFECTIVE,
      /* Grass: */ Effectiveness.RESIST,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.RESIST,
      /* Ground: */ Effectiveness.EFFECTIVE,
      /* Rock: */ Effectiveness.EFFECTIVE,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.RESIST,
      /* Bug: */ Effectiveness.RESIST,
      /* Dragon: */ Effectiveness.RESIST
    ]
  },
  [MonType.ELECTRIC]: {
    cat: TypeCategory.SPECIAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.NORMAL,
      /* Water: */ Effectiveness.EFFECTIVE,
      /* Grass: */ Effectiveness.RESIST,
      /* Electric: */ Effectiveness.RESIST,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.IMMUNE,
      /* Rock: */ Effectiveness.NORMAL,
      /* Steel: */ Effectiveness.NORMAL,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.EFFECTIVE,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.RESIST
    ]
  },
  [MonType.ICE]: {
    cat: TypeCategory.SPECIAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.RESIST,
      /* Water: */ Effectiveness.RESIST,
      /* Grass: */ Effectiveness.EFFECTIVE,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.RESIST,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.EFFECTIVE,
      /* Rock: */ Effectiveness.NORMAL,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.EFFECTIVE,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.EFFECTIVE
    ]
  },
  [MonType.PSYCHIC]: {
    cat: TypeCategory.SPECIAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.NORMAL,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.NORMAL,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.RESIST,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.IMMUNE,
      /* Poison: */ Effectiveness.EFFECTIVE,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.NORMAL,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.EFFECTIVE,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.GHOST]: {
    cat: TypeCategory.PHYSICAL,
    chart: [
      /* Normal: */ Effectiveness.IMMUNE,
      /* Fire: */ Effectiveness.NORMAL,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.NORMAL,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.EFFECTIVE,
      /* Ghost: */ Effectiveness.EFFECTIVE,
      /* Dark: */ Effectiveness.RESIST,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.NORMAL,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.DARK]: {
    cat: TypeCategory.SPECIAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.NORMAL,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.NORMAL,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.EFFECTIVE,
      /* Ghost: */ Effectiveness.EFFECTIVE,
      /* Dark: */ Effectiveness.RESIST,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.NORMAL,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.RESIST,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.POISON]: {
    cat: TypeCategory.PHYSICAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.NORMAL,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.EFFECTIVE,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.RESIST,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.RESIST,
      /* Ground: */ Effectiveness.RESIST,
      /* Rock: */ Effectiveness.RESIST,
      /* Steel: */ Effectiveness.IMMUNE,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.GROUND]: {
    cat: TypeCategory.PHYSICAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.EFFECTIVE,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.RESIST,
      /* Electric: */ Effectiveness.EFFECTIVE,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.EFFECTIVE,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.EFFECTIVE,
      /* Steel: */ Effectiveness.EFFECTIVE,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.IMMUNE,
      /* Bug: */ Effectiveness.RESIST,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.ROCK]: {
    cat: TypeCategory.PHYSICAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.EFFECTIVE,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.NORMAL,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.EFFECTIVE,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.RESIST,
      /* Rock: */ Effectiveness.NORMAL,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.RESIST,
      /* Flying: */ Effectiveness.EFFECTIVE,
      /* Bug: */ Effectiveness.EFFECTIVE,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.STEEL]: {
    cat: TypeCategory.PHYSICAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.RESIST,
      /* Water: */ Effectiveness.RESIST,
      /* Grass: */ Effectiveness.NORMAL,
      /* Electric: */ Effectiveness.RESIST,
      /* Ice: */ Effectiveness.EFFECTIVE,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.EFFECTIVE,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.FIGHTING]: {
    cat: TypeCategory.PHYSICAL,
    chart: [
      /* Normal: */ Effectiveness.EFFECTIVE,
      /* Fire: */ Effectiveness.NORMAL,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.NORMAL,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.EFFECTIVE,
      /* Psychic: */ Effectiveness.RESIST,
      /* Ghost: */ Effectiveness.IMMUNE,
      /* Dark: */ Effectiveness.EFFECTIVE,
      /* Poison: */ Effectiveness.RESIST,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.EFFECTIVE,
      /* Steel: */ Effectiveness.EFFECTIVE,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.RESIST,
      /* Bug: */ Effectiveness.RESIST,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.FLYING]: {
    cat: TypeCategory.PHYSICAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.NORMAL,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.EFFECTIVE,
      /* Electric: */ Effectiveness.RESIST,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.RESIST,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.EFFECTIVE,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.EFFECTIVE,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.BUG]: {
    cat: TypeCategory.PHYSICAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.RESIST,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.EFFECTIVE,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.EFFECTIVE,
      /* Ghost: */ Effectiveness.RESIST,
      /* Dark: */ Effectiveness.EFFECTIVE,
      /* Poison: */ Effectiveness.RESIST,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.NORMAL,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.RESIST,
      /* Flying: */ Effectiveness.RESIST,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.NORMAL
    ]
  },
  [MonType.DRAGON]: {
    cat: TypeCategory.SPECIAL,
    chart: [
      /* Normal: */ Effectiveness.NORMAL,
      /* Fire: */ Effectiveness.NORMAL,
      /* Water: */ Effectiveness.NORMAL,
      /* Grass: */ Effectiveness.NORMAL,
      /* Electric: */ Effectiveness.NORMAL,
      /* Ice: */ Effectiveness.NORMAL,
      /* Psychic: */ Effectiveness.NORMAL,
      /* Ghost: */ Effectiveness.NORMAL,
      /* Dark: */ Effectiveness.NORMAL,
      /* Poison: */ Effectiveness.NORMAL,
      /* Ground: */ Effectiveness.NORMAL,
      /* Rock: */ Effectiveness.NORMAL,
      /* Steel: */ Effectiveness.RESIST,
      /* Fighting: */ Effectiveness.NORMAL,
      /* Flying: */ Effectiveness.NORMAL,
      /* Bug: */ Effectiveness.NORMAL,
      /* Dragon: */ Effectiveness.EFFECTIVE
    ]
  }
};
