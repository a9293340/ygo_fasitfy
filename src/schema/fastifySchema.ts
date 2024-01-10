const admin = {
  response: {
    '200': {
      type: 'object',
      properties: {
        type: { type: 'any' },
        name: { type: 'any' },
        create_date: { type: 'any' },
        photo: { type: 'any' },
        status: { type: 'any' },
        account: { type: 'any' },
        password: { type: 'any' },
        email: { type: 'any' },
      },
    },
  },
};
const series_introduction = {
  response: {
    '200': {
      type: 'object',
      properties: {
        type: { type: 'any' },
        title: { type: 'any' },
        publish_date: { type: 'any' },
        photo: { type: 'any' },
        content: { type: 'any' },
        status: { type: 'any' },
        to_top: { type: 'any' },
        admin_id: { type: 'any' },
        author_name: { type: 'any' },
        tag: { type: 'any' },
      },
    },
  },
};
const useful_card_introduction = {
  response: {
    '200': {
      type: 'object',
      properties: {
        type: { type: 'any' },
        title: { type: 'any' },
        publish_date: { type: 'any' },
        photo: { type: 'any' },
        content: { type: 'any' },
        status: { type: 'any' },
        to_top: { type: 'any' },
        admin_id: { type: 'any' },
        author_name: { type: 'any' },
        tag: { type: 'any' },
      },
    },
  },
};
const meta_deck = {
  response: {
    '200': {
      type: 'object',
      properties: {
        type: { type: 'any' },
        title: { type: 'any' },
        publish_date: { type: 'any' },
        photo: { type: 'any' },
        content: { type: 'any' },
        status: { type: 'any' },
        to_top: { type: 'any' },
        admin_id: { type: 'any' },
        author_name: { type: 'any' },
        tag: { type: 'any' },
      },
    },
  },
};
const product_information = {
  response: {
    '200': {
      type: 'object',
      properties: {
        type: { type: 'any' },
        title: { type: 'any' },
        publish_date: { type: 'any' },
        photo: { type: 'any' },
        content: { type: 'any' },
        status: { type: 'any' },
        to_top: { type: 'any' },
        admin_id: { type: 'any' },
        author_name: { type: 'any' },
        tag: { type: 'any' },
      },
    },
  },
};
const rules = {
  response: {
    '200': {
      type: 'object',
      properties: {
        type: { type: 'any' },
        title: { type: 'any' },
        publish_date: { type: 'any' },
        photo: { type: 'any' },
        content: { type: 'any' },
        status: { type: 'any' },
        to_top: { type: 'any' },
        admin_id: { type: 'any' },
        author_name: { type: 'any' },
        tag: { type: 'any' },
      },
    },
  },
};
const series_story = {
  response: {
    '200': {
      type: 'object',
      properties: {
        title: { type: 'any' },
        publish_date: { type: 'any' },
        photo: { type: 'any' },
        content: { type: 'any' },
        status: { type: 'any' },
        to_top: { type: 'any' },
        admin_id: { type: 'any' },
        author_name: { type: 'any' },
        tag: { type: 'any' },
      },
    },
  },
};
const battle_paper = {
  response: {
    '200': {
      type: 'object',
      properties: {
        type: { type: 'any' },
        title: { type: 'any' },
        publish_date: { type: 'any' },
        photo: { type: 'any' },
        content: { type: 'any' },
        status: { type: 'any' },
        to_top: { type: 'any' },
        admin_id: { type: 'any' },
        author_name: { type: 'any' },
        tag: { type: 'any' },
      },
    },
  },
};
const cards = {
  response: {
    '200': {
      type: 'object',
      properties: {
        number: { type: 'any' },
        name: { type: 'any' },
        type: { type: 'any' },
        race: { type: 'any' },
        star: { type: 'any' },
        attribute: { type: 'any' },
        rarity: { type: 'any' },
        atk: { type: 'any' },
        def: { type: 'any' },
        product_information_type: { type: 'any' },
        effect: { type: 'any' },
        price_info: { type: 'any' },
        price_yuyu: { type: 'any' },
        id: { type: 'any' },
      },
    },
  },
};
const decks = {
  response: {
    '200': {
      type: 'object',
      properties: {
        admin_id: { type: 'any' },
        title: { type: 'any' },
        create_date: { type: 'any' },
        last_edit_date: { type: 'any' },
        main_deck: { type: 'any' },
        extra_deck: { type: 'any' },
        side_deck: { type: 'any' },
      },
    },
  },
};
const calendar = {
  response: {
    '200': {
      type: 'object',
      properties: {
        title: { type: 'any' },
        date: { type: 'any' },
        url: { type: 'any' },
        type: { type: 'any' },
        content: { type: 'any' },
      },
    },
  },
};
const banner = {
  response: {
    '200': {
      type: 'object',
      properties: {
        title: { type: 'any' },
        subtitle: { type: 'any' },
        date: { type: 'any' },
        photo_pc: { type: 'any' },
        photo_mobile: { type: 'any' },
        url: { type: 'any' },
      },
    },
  },
};
const product_information_type = {
  response: {
    '200': {
      type: 'object',
      properties: {
        packType: { type: 'any' },
        subType: { type: 'any' },
        mainType: { type: 'any' },
        status: { type: 'any' },
        name: { type: 'any' },
      },
    },
  },
};
const tag = {
  response: { '200': { type: 'object', properties: { tag: { type: 'any' } } } },
};
const frontend_token = {
  response: {
    '200': {
      type: 'object',
      properties: {
        token: { type: 'any' },
        date: { type: 'any' },
        tokenReq: { type: 'any' },
      },
    },
  },
};
const backend_token = {
  response: {
    '200': {
      type: 'object',
      properties: {
        token: { type: 'any' },
        date: { type: 'any' },
        tokenReq: { type: 'any' },
      },
    },
  },
};
const cards_image = {
  response: {
    '200': {
      type: 'object',
      properties: { number: { type: 'any' }, photo: { type: 'any' } },
    },
  },
};
const permission = {
  response: {
    '200': {
      type: 'object',
      properties: {
        name: { type: 'any' },
        permission: { type: 'any' },
        type: { type: 'any' },
      },
    },
  },
};

export {
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
