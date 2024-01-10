interface IAdmin {
  type: any;
  name: any;
  create_date: any;
  photo: any;
  status: any;
  account: any;
  password: any;
  email: any;
}
interface ISeriesIntroduction {
  type: any;
  title: any;
  publish_date: any;
  photo: any;
  content: any;
  status: any;
  to_top: any;
  admin_id: any;
  author_name: any;
  tag: any;
}
interface IUsefulCardIntroduction {
  type: any;
  title: any;
  publish_date: any;
  photo: any;
  content: any;
  status: any;
  to_top: any;
  admin_id: any;
  author_name: any;
  tag: any;
}
interface IMetaDeck {
  type: any;
  title: any;
  publish_date: any;
  photo: any;
  content: any;
  status: any;
  to_top: any;
  admin_id: any;
  author_name: any;
  tag: any;
}
interface IProductInformation {
  type: any;
  title: any;
  publish_date: any;
  photo: any;
  content: any;
  status: any;
  to_top: any;
  admin_id: any;
  author_name: any;
  tag: any;
}
interface IRules {
  type: any;
  title: any;
  publish_date: any;
  photo: any;
  content: any;
  status: any;
  to_top: any;
  admin_id: any;
  author_name: any;
  tag: any;
}
interface ISeriesStory {
  title: any;
  publish_date: any;
  photo: any;
  content: any;
  status: any;
  to_top: any;
  admin_id: any;
  author_name: any;
  tag: any;
}
interface IBattlePaper {
  type: any;
  title: any;
  publish_date: any;
  photo: any;
  content: any;
  status: any;
  to_top: any;
  admin_id: any;
  author_name: any;
  tag: any;
}
interface ICards {
  number: any;
  name: any;
  type: any;
  race: any;
  star: any;
  attribute: any;
  rarity: any;
  atk: any;
  def: any;
  product_information_type: any;
  effect: any;
  price_info: any;
  price_yuyu: any;
  id: any;
}
interface IDecks {
  admin_id: any;
  title: any;
  create_date: any;
  last_edit_date: any;
  main_deck: any;
  extra_deck: any;
  side_deck: any;
}
interface ICalendar {
  title: any;
  date: any;
  url: any;
  type: any;
  content: any;
}
interface IBanner {
  title: any;
  subtitle: any;
  date: any;
  photo_pc: any;
  photo_mobile: any;
  url: any;
}
interface IProductInformationType {
  packType: any;
  subType: any;
  mainType: any;
  status: any;
  name: any;
}
interface ITag {
  tag: any;
}
interface IFrontendToken {
  token: any;
  date: any;
  tokenReq: any;
}
interface IBackendToken {
  token: any;
  date: any;
  tokenReq: any;
}
interface ICardsImage {
  number: any;
  photo: any;
}
interface IPermission {
  name: any;
  permission: any;
  type: any;
}
