// Contraste base
const WHITE = '#ffffff'
const BLACK = '#000000'

// Colores base
const OLIVE_GREEN = '#739f40'
const CHARCOAL_GRAY = '#707070'
const SUN_YELLOW = '#eed535'
const COTTON_CANDY_PINK = '#fcb9e9'
const RUST_ORANGE = '#d56724'
const PUMPKIN_ORANGE = '#fd7d25'
const LAVENDER_PURPLE = '#7b62a3'
const LIME_GREEN = '#9bcb50'
const SKY_BLUE = '#51c3e7'
const SILVER_GRAY = '#a3acaf'
const AMETHYST_PURPLE = '#b97fc8'
const HOT_PINK = '#f366b9'
const MUSTARD_BROWN = '#a38c22'
const PALE_TEAL = '#9eb7b7'
const CERULEAN_BLUE = '#4592c3'

// Colores para degradados
const STEEL_BLUE = '#54a4cf'
const CORAL_RED = '#f16e58'
const AQUA_BLUE = '#3cc7ef'
const ASH_GRAY = '#bcbab9'
const BRIGHT_GOLD = '#f7de3f'
const ANTIQUE_BRASS = '#ab9843'

const colors = {
  bug: [OLIVE_GREEN, WHITE],
  dark: [CHARCOAL_GRAY, WHITE],
  electric: [SUN_YELLOW, BLACK],
  fairy: [COTTON_CANDY_PINK, BLACK],
  fighting: [RUST_ORANGE, WHITE],
  fire: [PUMPKIN_ORANGE, WHITE],
  ghost: [LAVENDER_PURPLE, WHITE],
  grass: [LIME_GREEN, BLACK],
  ice: [SKY_BLUE, WHITE],
  normal: [SILVER_GRAY, WHITE],
  poison: [AMETHYST_PURPLE, WHITE],
  psychic: [HOT_PINK, WHITE],
  rock: [MUSTARD_BROWN, WHITE],
  steel: [PALE_TEAL, WHITE],
  water: [CERULEAN_BLUE, WHITE]
}

const gradiants = {
  dragon: [STEEL_BLUE, CORAL_RED, WHITE],
  flying: [AQUA_BLUE, ASH_GRAY, WHITE],
  ground: [BRIGHT_GOLD, ANTIQUE_BRASS, BLACK]
}

const mapColors = Object.fromEntries(
  Object.entries(colors).map(([type, [bg, fg]]) => [
    type,
    {
      bg: { background: bg, color: fg },
      text: { color: bg }
    }
  ])
)

const mapGradiants = Object.fromEntries(
  Object.entries(gradiants).map(([type, [bg1, bg2, fg]]) => [
    type,
    {
      bg: { background: `linear-gradient(90deg,${bg1} 0%, ${bg2} 100%)`, color: fg },
      text: { color: bg1 }
    }
  ])
)

export default { ...mapColors, ...mapGradiants }
