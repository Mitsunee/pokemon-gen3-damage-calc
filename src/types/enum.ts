export const enum UiColor {
  BLUE = "",
  RED = "ui-red",
  GREEN = "ui-green",
  ORANGE = "ui-orange"
}

export const enum MonType {
  NORMAL,
  FIRE,
  WATER,
  GRASS,
  ELECTRIC,
  ICE,
  PSYCHIC,
  GHOST,
  DARK,
  POISON,
  GROUND,
  ROCK,
  STEEL,
  FIGHTING,
  FLYING,
  BUG,
  DRAGON
}

export const enum Effectiveness {
  IMMUNE = 0,
  RESIST = 50,
  NORMAL = 100,
  EFFECTIVE = 200
}

export const enum MoveEffectiveness {
  IMMUNE = 0,
  RESIST_DOUBLE = 25,
  RESIST = 50,
  NORMAL = 100,
  EFFECTIVE = 200,
  EFFECTIVE_DOUBLE = 400
}

export const enum TypeCategory {
  PHYSICAL = "phys",
  SPECIAL = "spec"
}
