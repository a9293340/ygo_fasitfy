const admin = {
  type: { type: Number },
  name: { type: String },
  create_date: { type: Date },
  photo: { type: String },
  status: { type: Number },
  account: { type: String },
  password: { type: String },
  email: { type: String },
};

const series_introduction = {
  type: { type: Number },
  title: { type: String },
  publish_date: { type: Date },
  photo: { type: String },
  content: { type: String },
  status: { type: Number },
  to_top: { type: Boolean },
  admin_id: { type: String },
  author_name: { type: String },
  tag: { type: Array },
};

const useful_card_introduction = {
  type: { type: Number },
  title: { type: String },
  publish_date: { type: Date },
  photo: { type: String },
  content: { type: String },
  status: { type: Number },
  to_top: { type: Boolean },
  admin_id: { type: String },
  author_name: { type: String },
  tag: { type: Array },
};

const meta_deck = {
  type: { type: Number },
  title: { type: String },
  publish_date: { type: Date },
  photo: { type: String },
  content: { type: String },
  status: { type: Number },
  to_top: { type: Boolean },
  admin_id: { type: String },
  author_name: { type: String },
  tag: { type: Array },
};

const product_information = {
  type: { type: Number },
  title: { type: String },
  publish_date: { type: Date },
  photo: { type: String },
  content: { type: String },
  status: { type: Number },
  to_top: { type: Boolean },
  admin_id: { type: String },
  author_name: { type: String },
  tag: { type: Array },
};

const rules = {
  type: { type: Number },
  title: { type: String },
  publish_date: { type: Date },
  photo: { type: String },
  content: { type: String },
  status: { type: Number },
  to_top: { type: Boolean },
  admin_id: { type: String },
  author_name: { type: String },
  tag: { type: Array },
};

const series_story = {
  title: { type: String },
  publish_date: { type: Date },
  photo: { type: String },
  content: { type: String },
  status: { type: Number },
  to_top: { type: Boolean },
  admin_id: { type: String },
  author_name: { type: String },
  tag: { type: Array },
};

const battle_paper = {
  type: { type: Number },
  title: { type: String },
  publish_date: { type: Date },
  photo: { type: String },
  content: { type: String },
  status: { type: Number },
  to_top: { type: Boolean },
  admin_id: { type: String },
  author_name: { type: String },
  tag: { type: Array },
};

const cards = {
  number: { type: String },
  name: { type: String },
  type: { type: String },
  race: { type: String },
  star: { type: String },
  attribute: { type: String },
  rarity: { type: Array },
  atk: { type: Number },
  def: { type: Number },
  product_information_type: { type: String },
  effect: { type: String },
  price_info: { type: Array },
  price_yuyu: { type: Array },
  id: { type: String },
};

const cards_image = {
  number: { type: String },
  photo: { type: String },
};

const decks = {
  admin_id: { type: String },
  title: { type: String },
  create_date: { type: Date },
  last_edit_date: { type: Date },
  main_deck: { type: Array },
  extra_deck: { type: Array },
  side_deck: { type: Array },
};

const calendar = {
  title: { type: String },
  date: { type: Date },
  url: { type: String },
  type: { type: Number },
  content: { type: String },
};

const banner = {
  title: { type: String },
  subtitle: { type: String },
  date: { type: Date },
  photo_pc: { type: String },
  photo_mobile: { type: String },
  url: { type: String },
};

const product_information_type = {
  packType: { type: String },
  subType: { type: String },
  mainType: { type: Number },
  status: { type: Number },
  name: { type: String },
};

const tag = {
  tag: { type: String },
};

const frontend_token = {
  token: { type: String },
  date: { type: Date },
  tokenReq: { type: String },
};

const backend_token = {
  token: { type: String },
  date: { type: Date },
  tokenReq: { type: String },
};

const permission = {
  name: { type: String },
  permission: { type: Array },
  type: { type: Number },
};

module.exports = {
  admin,
  series_introduction,
  useful_card_introduction,
  meta_deck,
  product_information,
  rules,
  series_story,
  battle_paper,
  cards,
  decks,
  calendar,
  banner,
  product_information_type,
  tag,
  frontend_token,
  backend_token,
  cards_image,
  permission,
};
