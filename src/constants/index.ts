import type { UserT } from 'src/contexts/UserProvider/types'
import { EnchantsEnum, EnchantsTypesEnum, VipEnum } from 'src/types'

export const FETCH_URL = import.meta.env.VITE_URL_BY_BACKEND

export const FETCH_URL_IMG = `${FETCH_URL}/public`

export const WL_END_COST = 64 * 2

export const TWINKS_COUNT = 3

export const TWINKS_PRICE = {
  FIRST_TWINK: 64 * 2,
  SECOND_TWINK: 64 * 3,
  THIRD_TWINK: 64 * 4,
}

export enum SocketTypes {
  INCREMENT_MONEY,
  DECREMENT_MONEY,
  ADD_ITEMS,
  REMOVE_ITEMS,
  ADD_SHULKER,
  REMOVE_SHULKER,
}

export enum Role {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  HELPER = 'helper',
  POLICE = 'police',
  USER = 'user',
  NOT_AUTH = '',
}

export enum CategoryEnum {
  BUILD_BLOCKS = 'build_blocks',
  COLOR_BLOCKS = 'color_blocks',
  FOODS_AND_POTIONS = 'foods_and_potions',
  FUNCTIONAL_BLOCKS = 'functional_blocks',
  NATURE_BLOCKS = 'nature_blocks',
  INGREDIENTS = 'ingredients',
  REDSTONE_BLOCKS = 'redstone_blocks',
  TOOLS = 'tools',
  WEAPONS = 'weapons',
  SHULKERS = 'shulkers',
}

export enum RoleUA {
  ADMIN = 'Адмін',
  MODERATOR = 'Модератор',
  HELPER = 'Хелпер',
  POLICE = 'Поліція',
  USER = 'Гравець',
}

export enum AdvancementsIcons {
  SQUARE = 'square',
  STAR = 'star',
  OVAL = 'oval',
}

export enum SelectAreaColors {
  Red = 'red',
  Green = 'green',
}

export enum CacheKeys {
  WHITELIST = 'whitelist',
  USER = 'user',
  USER_ITEMS = 'user_items',
  USER_ITEM_TICKETS = 'user_item_tickets',
  USER_LOTS = 'user_lots',
  PP = 'pp',
  ENCHANT_LOTS = 'enchant_lots',
  LOTS = 'lots',
  ITEM_TICKET = 'item_ticket',
  USER_SKIN = 'user_skin',
  ALL_USERS = 'all_users',
  USER_ADVANCEMENTS = 'user_advancements',
  USER_PLAY_TIME = 'user_play_time',
  USER_SHULKERS = 'user_shulkers',
  USER_SHULKER_ITEMS = 'user_shulker_items',
  USER_CRYSTALS = 'user_crystals',
  WL_END = 'wl_end',
  SELLER_TRADE_HISTORY = 'seller_trade_history',
  BUYER_TRADE_HISTORY = 'buyer_trade_history',
  TRADE_HISTORY_PRICE = 'trade_history_price',
  TWINKS = 'twinks',
  WORLD_EXPANSION = 'world_expansion',
}

export enum AuctionFragment {
  BUY_LOTS = 'buy_lots',
  CREATE_LOTS = 'create_lots',
  USER_LOTS = 'user_lots',
  ENCHANT_LOTS = 'enchant_lots',
  TRADE_HISTORY = 'trade_history',
}

export enum CrystalTypeEnum {
  AMETIST = 'ametist',
  EMERALD = 'emerald',
  GODDES = 'goddes',
}

export enum CrystalItemTypeEnum {
  TOOLS_AND_MELEE = 'toolsAndMelee',
  BOWS = 'bows',
  CROSSBOW = 'crossbow',
}

export enum FetchEndpoint {
  USER = 'user',
  USER_ITEMS = 'user/items',
  USER_SKIN = 'user/skin',
  USER_VIP = 'user/vip',
  USER_ADVANCEMENTS = 'user/stats/advancements',
  USER_PLAY_TIME = 'user/stats/playtime',
  USER_ITEM_TICKETS = 'user/tickets',
  USER_SHULKERS = 'user/shulkers',
  USER_CTYSTALS = 'user/crystals',
  LOT_SHULKER = 'lot/shulker',
  LOT = 'lot',
  LOT_ENCHANT_ITEMS = 'lot/enchant_items',
  LOT_ITEM = 'lot/item',
  LOT_USER = 'lot/user',
  ITEM_TICKET = 'user/tickets',
  SIGN_IN = 'auth/sign_in',
  LOG_OUT = 'auth/log_out',
  REFRESH_TOKEN = 'auth/refresh_token',
  WHITELIST = 'whitelist',
  PP = 'pp',
  WL_END = 'wl_end',
  TRADE_HISTORY = 'lot/trade_history',
  TRADE_HISTORY_PRICE = 'lot/trade_history/price',
  TWINK = 'twink',
  WORLD_EXPANSION = 'world_expansion',
  WORLD_EXPANSION_PAYMENTS = 'world_expansion/payments',
}

export enum LocalStorageKey {
  ACCESS_TOKEN = 'accessToken',
  NOTIFICATION = 'notification',
  IS_INIT_NOTIFICATION = 'is_init_notification',
}

export const STALE_TIME = 60 * 1000 * 24

export const defaultUser: UserT = {
  id: 0,
  username: '',
  money: 0,
  role: [Role.NOT_AUTH],
  vip: null,
  vipExpirationDate: null,
}

export const vipTranslation: Record<VipEnum, string> = {
  [VipEnum.IRON]: 'Залізна',
  [VipEnum.GOLD]: 'Золота',
  [VipEnum.DIAMOND]: 'Діамантова',
  [VipEnum.NETHERITE]: 'Незеритова',
}

export const enchantsLvl: { [key: string]: string } = {
  '1': 'I',
  '2': 'II',
  '3': 'III',
  '4': 'IV',
  '5': 'V',
}

export const enchantVariables = {
  [EnchantsTypesEnum.HELMET]: [EnchantsEnum.AQUA_AFFINITY, EnchantsEnum.RESPIRATION],
  [EnchantsTypesEnum.CHESTPLATE]: [],
  [EnchantsTypesEnum.LEGGINGS]: [EnchantsEnum.SWIFT_SNEAK],
  [EnchantsTypesEnum.BOOTS]: [
    [EnchantsEnum.DEPTH_STRIDER, EnchantsEnum.FROST_WALKER],
    EnchantsEnum.FEATHER_FALLING,
    EnchantsEnum.SOUL_SPEED,
  ],
  [EnchantsTypesEnum.ELYTRA]: [EnchantsEnum.BINDING_CURSE],
  [EnchantsTypesEnum.SWORD]: [
    [EnchantsEnum.BANE_OF_ARTHROPODS, EnchantsEnum.SMITE, EnchantsEnum.SHARPNESS],
    EnchantsEnum.SWEEPING_EDGE,
    EnchantsEnum.FIRE_ASPECT,
    EnchantsEnum.KNOCKBACK,
    EnchantsEnum.LOOTING,
  ],
  [EnchantsTypesEnum.AXE]: [
    [EnchantsEnum.SHARPNESS, EnchantsEnum.BANE_OF_ARTHROPODS, EnchantsEnum.SMITE],
  ],
  [EnchantsTypesEnum.TRIDENT]: [
    [[EnchantsEnum.CHANNELING, EnchantsEnum.LOYALTY], EnchantsEnum.RIPTIDE],
    EnchantsEnum.IMPALING,
  ],
  [EnchantsTypesEnum.MACE]: [
    [
      EnchantsEnum.SMITE,
      EnchantsEnum.BREACH,
      EnchantsEnum.DENSITY,
      EnchantsEnum.BANE_OF_ARTHROPODS,
    ],
    EnchantsEnum.WIND_BURST,
    EnchantsEnum.FIRE_ASPECT,
  ],
  [EnchantsTypesEnum.PICKAXE]: [],
  [EnchantsTypesEnum.SHOVEL]: [],
  [EnchantsTypesEnum.HOE]: [],
  [EnchantsTypesEnum.BOW]: [
    [EnchantsEnum.INFINITY, EnchantsEnum.MENDING],
    EnchantsEnum.FLAME,
    EnchantsEnum.POWER,
    EnchantsEnum.PUNCH,
  ],
  [EnchantsTypesEnum.CROSSBOW]: [
    [EnchantsEnum.MULTISHOT, EnchantsEnum.PIERCING],
    EnchantsEnum.QUICK_CHARGE,
  ],
  [EnchantsTypesEnum.FISHING_ROD]: [EnchantsEnum.LUCK_OF_THE_SEA, EnchantsEnum.LURE],
  all: [EnchantsEnum.MENDING, EnchantsEnum.UNBREAKING],
  armor: [
    [
      EnchantsEnum.BLAST_PROTECTION,
      EnchantsEnum.FIRE_PROTECTION,
      EnchantsEnum.PROJECTILE_PROTECTION,
      EnchantsEnum.PROTECTION,
    ],
    EnchantsEnum.THORNS,
  ],
  tools: [[EnchantsEnum.FORTUNE, EnchantsEnum.SILK_TOUCH], EnchantsEnum.EFFICIENCY],
}

type itemTypesEnchantsFinderTranslationsT = {
  [key: string]: string
}

export const itemTypesEnchantsFinderTranslations: itemTypesEnchantsFinderTranslationsT =
  {
    chainmail_helmet: 'Кольчужний шолом',
    leather_helmet: 'Шкіряна шапка',
    diamond_helmet: 'Діамантовий шолом',
    netherite_helmet: 'Незеритовий шолом',
    iron_helmet: 'Залізний шолом',
    golden_helmet: 'Золотий шолом',
    chainmail_chestplate: 'Кольчужний нагрудник',
    leather_chestplate: 'Шкіряна туніка',
    diamond_chestplate: 'Діамантовий нагрудник',
    netherite_chestplate: 'Незеритовий нагрудник',
    iron_chestplate: 'Залізний нагрудник',
    golden_chestplate: 'Золотий нагрудник',
    chainmail_leggings: 'Кольчужні наголінники',
    leather_leggings: 'Шкіряні штани',
    diamond_leggings: 'Діамантові наголінники',
    netherite_leggings: 'Незеритові наголінники',
    iron_leggings: 'Залізні наголінники',
    golden_leggings: 'Золоті наголінники',
    chainmail_boots: 'Кольчужні чоботи',
    leather_boots: 'Шкіряні чоботи',
    diamond_boots: 'Діамантові чоботи',
    netherite_boots: 'Незеритові чоботи',
    iron_boots: 'Залізні чоботи',
    golden_boots: 'Золоті чоботи',
    stone_sword: "Кам'яний меч",
    wooden_sword: "Дерев'яний меч",
    diamond_sword: 'Діамантовий меч',
    netherite_sword: 'Незеритовий меч',
    iron_sword: 'Залізний меч',
    golden_sword: 'Золотий меч',
    stone_pickaxe: "Кам'яне кайло",
    wooden_pickaxe: "Дерев'яне кайло",
    diamond_pickaxe: 'Діамантове кайло',
    netherite_pickaxe: 'Незеритове кайло',
    iron_pickaxe: 'Залізне кайло',
    golden_pickaxe: 'Золоте кайло',
    stone_axe: "Кам'яна сокира",
    wooden_axe: "Дерев'яна сокира",
    diamond_axe: 'Діамантова сокира',
    netherite_axe: 'Незеритова сокира',
    iron_axe: 'Залізна сокира',
    golden_axe: 'Золота сокира',
    stone_hoe: "Кам'яна мотика",
    wooden_hoe: "Дерев'яна мотика",
    diamond_hoe: 'Діамантова мотика',
    netherite_hoe: 'Незеритова мотика',
    iron_hoe: 'Залізна мотика',
    golden_hoe: 'Золота мотика',
    stone_shovel: "Кам'яна лопата",
    wooden_shovel: "Дерев'яна лопата",
    diamond_shovel: 'Діамантова лопата',
    netherite_shovel: 'Незеритова лопата',
    iron_shovel: 'Залізна лопата',
    golden_shovel: 'Золота лопата',
    elytra: 'Елітри',
    crossbow: 'Арбалет',
    bow: 'Лук',
    fishing_rod: 'Вудка',
    trident: 'Тризубець',
    mace: 'Булава',
  }

export const enchantTranslations: { [key: string]: string } = {
  [EnchantsEnum.BANE_OF_ARTHROPODS]: 'Загибель членистоногих',
  [EnchantsEnum.BLAST_PROTECTION]: 'Захист від вибухів',
  [EnchantsEnum.BREACH]: 'Пробивання',
  [EnchantsEnum.DENSITY]: 'Щільність',
  [EnchantsEnum.DEPTH_STRIDER]: 'Глибинний бігун',
  [EnchantsEnum.EFFICIENCY]: 'Ефективність',
  [EnchantsEnum.FEATHER_FALLING]: 'Невагомість',
  [EnchantsEnum.FIRE_ASPECT]: 'Сила вогню',
  [EnchantsEnum.FIRE_PROTECTION]: 'Захист від вогню',
  [EnchantsEnum.FORTUNE]: 'Удача',
  [EnchantsEnum.FROST_WALKER]: 'Льодохід',
  [EnchantsEnum.IMPALING]: 'Протикання',
  [EnchantsEnum.KNOCKBACK]: 'Відкидання',
  [EnchantsEnum.LOOTING]: 'Грабунок',
  [EnchantsEnum.LOYALTY]: 'Вірність',
  [EnchantsEnum.LUCK_OF_THE_SEA]: 'Морська фортуна',
  [EnchantsEnum.LURE]: 'Приманка',
  [EnchantsEnum.PIERCING]: 'Пронизування',
  [EnchantsEnum.POWER]: 'Сила',
  [EnchantsEnum.PROJECTILE_PROTECTION]: 'Захист від снарядів',
  [EnchantsEnum.PROTECTION]: 'Захист',
  [EnchantsEnum.PUNCH]: 'Удар',
  [EnchantsEnum.QUICK_CHARGE]: 'Швидке заряджання',
  [EnchantsEnum.RESPIRATION]: 'Дихання',
  [EnchantsEnum.RIPTIDE]: 'Тягун',
  [EnchantsEnum.SHARPNESS]: 'Гострота',
  [EnchantsEnum.SMITE]: 'Небесна кара',
  [EnchantsEnum.SOUL_SPEED]: 'Швидкість душ',
  [EnchantsEnum.SWEEPING_EDGE]: 'Нищівне лезо',
  [EnchantsEnum.SWIFT_SNEAK]: 'Біг крадькома',
  [EnchantsEnum.THORNS]: 'Шипи',
  [EnchantsEnum.UNBREAKING]: 'Незламність',
  [EnchantsEnum.WIND_BURST]: 'Порив вітру',
  [EnchantsEnum.AQUA_AFFINITY]: 'Рідність води',
  [EnchantsEnum.BINDING_CURSE]: "Прокляття прив'язування",
  [EnchantsEnum.CHANNELING]: 'Блискавиця',
  [EnchantsEnum.VANISHING_CURSE]: 'Прокляття зникнення',
  [EnchantsEnum.SILK_TOUCH]: 'Шовковий дотик',
  [EnchantsEnum.MENDING]: 'Лагодження',
  [EnchantsEnum.MULTISHOT]: 'Мультипостріл',
  [EnchantsEnum.INFINITY]: 'Нескінченність',
  [EnchantsEnum.FLAME]: "Полум'я",
}

// export const enchantImages: { [key: string]: string } = {
//   [EnchantsEnum.BANE_OF_ARTHROPODS]: 'string.png',
//   [EnchantsEnum.BLAST_PROTECTION]: 'tnt.png',
//   [EnchantsEnum.BREACH]: 'spectral_arrow.png',
//   [EnchantsEnum.DENSITY]: 'Щільність',
//   [EnchantsEnum.DEPTH_STRIDER]: 'sand.png',
//   [EnchantsEnum.EFFICIENCY]: 'haste.webp',
//   [EnchantsEnum.FEATHER_FALLING]: 'Невагомість',
//   [EnchantsEnum.FIRE_ASPECT]: 'blaze_powder.png',
//   [EnchantsEnum.FIRE_PROTECTION]: 'fire_resistance.webp',
//   [EnchantsEnum.FORTUNE]: 'luck.webp',
//   [EnchantsEnum.FROST_WALKER]: 'blue_ice.png',
//   [EnchantsEnum.IMPALING]: 'Протикання',
//   [EnchantsEnum.KNOCKBACK]: 'Відкидання',
//   [EnchantsEnum.LOOTING]: 'wither_skeleton_skull.png',
//   [EnchantsEnum.LOYALTY]: 'lead.png',
//   [EnchantsEnum.LUCK_OF_THE_SEA]: '',
//   [EnchantsEnum.LURE]: '',
//   [EnchantsEnum.PIERCING]: 'Пронизування',
//   [EnchantsEnum.POWER]: 'streng.webp',
//   [EnchantsEnum.PROJECTILE_PROTECTION]: 'bow.png',
//   [EnchantsEnum.PROTECTION]: 'resistance.webp',
//   [EnchantsEnum.PUNCH]: 'Удар',
//   [EnchantsEnum.QUICK_CHARGE]: 'Швидке заряджання',
//   [EnchantsEnum.RESPIRATION]: 'bubble_air.png',
//   [EnchantsEnum.RIPTIDE]: 'Тягун',
//   [EnchantsEnum.SHARPNESS]: 'streng.webp',
//   [EnchantsEnum.SMITE]: 'rotten_flesh.png',
//   [EnchantsEnum.SOUL_SPEED]: 'soul_sand.png',
//   [EnchantsEnum.SWEEPING_EDGE]: 'sweeping.png',
//   [EnchantsEnum.SWIFT_SNEAK]: 'sculk_sensor.png',
//   [EnchantsEnum.THORNS]: 'silverfish.webp',
//   [EnchantsEnum.UNBREAKING]: 'iron_ingot.png',
//   [EnchantsEnum.WIND_BURST]: 'wind_charge.webp',
//   [EnchantsEnum.AQUA_AFFINITY]: 'water_bottle.png',
//   [EnchantsEnum.BINDING_CURSE]: '',
//   [EnchantsEnum.CHANNELING]: 'lightning.png',
//   [EnchantsEnum.VANISHING_CURSE]: 'Прокляття зникнення',
//   [EnchantsEnum.SILK_TOUCH]: 'stone.png',
//   [EnchantsEnum.MENDING]: 'experience_bottle.png',
//   [EnchantsEnum.MULTISHOT]: 'three_arrow.png',
//   [EnchantsEnum.INFINITY]: 'Нескінченність',
//   [EnchantsEnum.FLAME]: 'blaze_powder.png',
// }

export const ITEMS_COUNT = 27

export const LOTS_COUNT = 8

export const SHULKERS_COUNT = 2

export const vipMultipliers: Record<VipEnum, number> = {
  [VipEnum.IRON]: 2,
  [VipEnum.GOLD]: 4,
  [VipEnum.DIAMOND]: 6,
  [VipEnum.NETHERITE]: 8,
}

export const vipPrice: Record<VipEnum, number> = {
  [VipEnum.IRON]: 8,
  [VipEnum.GOLD]: 16,
  [VipEnum.DIAMOND]: 24,
  [VipEnum.NETHERITE]: 32,
}

export const enchantsWithMaxLvl: { [key: string]: number } = {
  [EnchantsEnum.BANE_OF_ARTHROPODS]: 5,
  [EnchantsEnum.BLAST_PROTECTION]: 4,
  [EnchantsEnum.BREACH]: 4,
  [EnchantsEnum.DENSITY]: 5,
  [EnchantsEnum.DEPTH_STRIDER]: 3,
  [EnchantsEnum.EFFICIENCY]: 5,
  [EnchantsEnum.FEATHER_FALLING]: 4,
  [EnchantsEnum.FIRE_ASPECT]: 2,
  [EnchantsEnum.FIRE_PROTECTION]: 4,
  [EnchantsEnum.FORTUNE]: 3,
  [EnchantsEnum.FROST_WALKER]: 2,
  [EnchantsEnum.IMPALING]: 5,
  [EnchantsEnum.KNOCKBACK]: 2,
  [EnchantsEnum.LOOTING]: 3,
  [EnchantsEnum.LOYALTY]: 3,
  [EnchantsEnum.LUCK_OF_THE_SEA]: 3,
  [EnchantsEnum.LURE]: 3,
  [EnchantsEnum.PIERCING]: 4,
  [EnchantsEnum.POWER]: 5,
  [EnchantsEnum.PROJECTILE_PROTECTION]: 4,
  [EnchantsEnum.PROTECTION]: 4,
  [EnchantsEnum.PUNCH]: 2,
  [EnchantsEnum.QUICK_CHARGE]: 3,
  [EnchantsEnum.RESPIRATION]: 3,
  [EnchantsEnum.RIPTIDE]: 3,
  [EnchantsEnum.SHARPNESS]: 5,
  [EnchantsEnum.SMITE]: 5,
  [EnchantsEnum.SOUL_SPEED]: 3,
  [EnchantsEnum.SWEEPING_EDGE]: 3,
  [EnchantsEnum.SWIFT_SNEAK]: 3,
  [EnchantsEnum.THORNS]: 3,
  [EnchantsEnum.UNBREAKING]: 3,
  [EnchantsEnum.WIND_BURST]: 3,
  [EnchantsEnum.AQUA_AFFINITY]: 1,
  [EnchantsEnum.BINDING_CURSE]: 1,
  [EnchantsEnum.CHANNELING]: 1,
  [EnchantsEnum.VANISHING_CURSE]: 1,
  [EnchantsEnum.SILK_TOUCH]: 1,
  [EnchantsEnum.MENDING]: 1,
  [EnchantsEnum.MULTISHOT]: 1,
  [EnchantsEnum.INFINITY]: 1,
  [EnchantsEnum.FLAME]: 1,
}

export const ppStyles = ['feet', 'move', 'normal', 'thick', 'trail', 'swords']

export const ppEffects = [
  'angry_villager',
  'ash',
  'bubble_pop',
  'campfire_cosy_smoke',
  'cherry_leaves',
  'cloud',
  'composter',
  'crimson_spore',
  'crit',
  'damage_indicator',
  'dolphin',
  'dragon_breath',
  'dust',
  'dust_color_transition',
  'dust_plume',
  'electric_spark',
  'enchant',
  'enchanted_hit',
  'end_rod',
  'entity_effect',
  'falling_dust',
  'falling_honey',
  'falling_lava',
  'falling_nectar',
  'falling_obsidian_tear',
  'falling_spore_blossom',
  'falling_water',
  'firework',
  'fishing',
  'flame',
  'glow',
  'heart',
  'infested',
  'instant_effect',
  'item_cobweb',
  'item_slime',
  'item_snowball',
  'large_smoke',
  'lava',
  'mycelium',
  'nautilus',
  'note',
  'ominous_spawning',
  'poof',
  'portal',
  'raid_omen',
  'reverse_portal',
  'scrape',
  'sculk_charge',
  'sculk_charge_pop',
  'sculk_soul',
  'small_flame',
  'small_gust',
  'smoke',
  'sneeze',
  'snowflake',
  'soul',
  'soul_fire_flame',
  'spell',
  'spore_blossom_air',
  'squid_ink',
  'totem_of_undying',
  'trial_spawner_detection',
  'trial_spawner_detection_ominous',
  'underwater',
  'vault_connection',
  'warped_spore',
  'wax_off',
  'wax_on',
  'white_ash',
  'witch',
]

export const romeNumbersObject: { [key: number]: string } = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
}
