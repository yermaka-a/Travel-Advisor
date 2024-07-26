const testData = [
  {
    "xid": "N1436114956",
    "name": "Троицкий собор",
    "rate": 7,
    "osm": "node/1436114956",
    "wikidata": "Q4411464",
    "kinds": "religion,other_temples,interesting_places",
    "point": {
      "lon": 103.87093353271484,
      "lat": 52.528018951416016,
    },
  },
  {
    "xid": "N2126013973",
    "name": "Самородок детский клуб",
    "rate": 1,
    "osm": "node/2126013973",
    "kinds": "other,unclassified_objects,interesting_places,tourist_object",
    "point": {
      "lon": 103.85769653320312,
      "lat": 52.51123809814453,
    },
  },
  {
    "xid": "N2126537295",
    "name": "Ветеранам Великой Отечественной",
    "rate": 1,
    "osm": "node/2126537295",
    "kinds": "historic,burial_places,interesting_places,war_memorials",
    "point": {
      "lon": 103.86161041259766,
      "lat": 52.512168884277344,
    },
  },
  {
    "xid": "N2126537427",
    "name": "Спасская часовня",
    "rate": 1,
    "osm": "node/2126537427",
    "kinds": "religion,other_temples,interesting_places",
    "point": {
      "lon": 103.86402130126953,
      "lat": 52.51213836669922,
    },
  },
  {
    "xid": "N5923510430",
    "name": 'Цветочная клумба "Кувшин"',
    "rate": 1,
    "osm": "node/5923510430",
    "kinds": "cultural,urban_environment,interesting_places,installation",
    "point": {
      "lon": 103.87960052490234,
      "lat": 52.511436462402344,
    },
  },
  {
    "xid": "W202704005",
    "name": "Старое кладбище",
    "rate": 1,
    "osm": "way/202704005",
    "kinds": "cemeteries,historic,burial_places,interesting_places",
    "point": {
      "lon": 103.85833740234375,
      "lat": 52.52016067504883,
    },
  },
  {
    "xid": "N2126573380",
    "name": "Перспектива",
    "rate": 1,
    "osm": "node/2126573380",
    "kinds": "other,unclassified_objects,interesting_places,tourist_object",
    "point": {
      "lon": 103.860595703125,
      "lat": 52.51829528808594,
    },
  },
  {
    "xid": "N6180967506",
    "name": "В.С.Высоцкому",
    "rate": 1,
    "osm": "node/6180967506",
    "kinds":
      "historic,monuments_and_memorials,cultural,urban_environment,interesting_places,sculptures,monuments",
    "point": {
      "lon": 103.86466979980469,
      "lat": 52.52524185180664,
    },
  },
  {
    "xid": "N2032780679",
    "name": "Церковь Байкальская",
    "rate": 1,
    "osm": "node/2032780679",
    "kinds": "religion,other_temples,interesting_places",
    "point": {
      "lon": 103.88622283935547,
      "lat": 52.51810836791992,
    },
  },
  {
    "xid": "N3141740760",
    "name": "святым Петру и Февронии Муромским",
    "rate": 1,
    "osm": "node/3141740760",
    "kinds": "historic,monuments_and_memorials,interesting_places,monuments",
    "point": {
      "lon": 103.87046813964844,
      "lat": 52.52699661254883,
    },
  },

  {
    "xid": "W80512597",
    "name": "Иркутск-пассажирский",
    "rate": 7,
    "osm": "way/80512597",
    "wikidata": "Q4203274",
    "kinds":
      "railway_stations,industrial_facilities,museums,cultural,interesting_places,history_museums",
    "point": {
      "lon": 104.25969696044922,
      "lat": 52.28313446044922,
    },
  },
  {
    "xid": "N5691045840",
    "name": "Иркутск-Пассажирский",
    "rate": 7,
    "osm": "node/5691045840",
    "wikidata": "Q4203274",
    "kinds": "railway_stations,industrial_facilities,interesting_places",
    "point": {
      "lon": 104.26029205322266,
      "lat": 52.283180236816406,
    },
  },
  {
    "xid": "W161547511",
    "name": "Спасская церковь",
    "rate": 7,
    "osm": "way/161547511",
    "wikidata": "Q2015693",
    "kinds":
      "religion,churches,museums,cultural,interesting_places,eastern_orthodox_churches,art_galleries",
    "point": {
      "lon": 104.28131866455078,
      "lat": 52.29112243652344,
    },
  },
  {
    "xid": "W161547515",
    "name": "Входо-Иерусалимский храм",
    "rate": 7,
    "osm": "way/161547515",
    "wikidata": "Q4128474",
    "kinds": "religion,churches,interesting_places,other_churches",
    "point": {
      "lon": 104.29727172851562,
      "lat": 52.2769660949707,
    },
  },
  {
    "xid": "N8297357918",
    "name": "Белый дом",
    "rate": 7,
    "osm": "node/8297357918",
    "wikidata": "Q16536340",
    "kinds":
      "architecture,historic_architecture,interesting_places,other_buildings_and_structures",
    "point": {
      "lon": 104.27726745605469,
      "lat": 52.27632522583008,
    },
  },
  {
    "xid": "N7259914284",
    "name": "Ангара ледокол",
    "rate": 7,
    "osm": "node/7259914284",
    "wikidata": "Q4065039",
    "kinds":
      "architecture,historic_architecture,interesting_places,other_buildings_and_structures",
    "point": {
      "lon": 104.34426879882812,
      "lat": 52.2499885559082,
    },
  },
  {
    "xid": "W109086062",
    "name": "Иркутский академический драматический театр им. Н. П. Охлопкова",
    "rate": 7,
    "osm": "way/109086062",
    "wikidata": "Q4203301",
    "kinds":
      "cultural,theatres_and_entertainments,interesting_places,other_theatres",
    "point": {
      "lon": 104.28138732910156,
      "lat": 52.27769088745117,
    },
  },
  {
    "xid": "W161547494",
    "name": "Крестовоздвиженская церковь",
    "rate": 7,
    "osm": "way/161547494",
    "wikidata": "Q4240386",
    "kinds": "religion,churches,interesting_places,eastern_orthodox_churches",
    "point": {
      "lon": 104.28837585449219,
      "lat": 52.27635955810547,
    },
  },
  {
    "xid": "N410838185",
    "name": "Памятник императору Александру III",
    "rate": 7,
    "osm": "node/410838185",
    "wikidata": "Q13161",
    "kinds":
      "historic,monuments_and_memorials,urban_environment,cultural,interesting_places,sculptures,monuments",
    "point": {
      "lon": 104.27720642089844,
      "lat": 52.27548599243164,
    },
  },
  {
    "xid": "W192900603",
    "name": "Ледокол «Ангара»",
    "rate": 7,
    "osm": "way/192900603",
    "wikidata": "Q4065039",
    "kinds":
      "cultural,museums,interesting_places,history_museums,local_museums",
    "point": {
      "lon": 104.34382629394531,
      "lat": 52.2501106262207,
    },
  },
]

// export const testDataObj = {
//   "xid": "N1436114956",
//   "name": "Троицкий собор",
//   "address": {
//     "city": "Ангарск",
//     "state": "Иркутская область",
//     "county": "Ангарский городской округ",
//     "suburb": "7-й микрорайон",
//     "country": "Россия",
//     "country_code": "ru",
//     "neighbourhood": "84-й квартал",
//   },
//   "rate": "3",
//   "osm": "node/1436114956",
//   "wikidata": "Q4411464",
//   "kinds": "religion,other_temples,interesting_places",
//   "url": "http://st-sobor.ru",
//   "sources": {
//     "geometry": "osm",
//     "attributes": ["osm", "wikidata"],
//   },
//   "otm": "https://opentripmap.com/ru/card/N1436114956",
//   "wikipedia":
//     "https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B1%D0%BE%D1%80%20%28%D0%90%D0%BD%D0%B3%D0%B0%D1%80%D1%81%D0%BA%29",
//   "image":
//     "https://commons.wikimedia.org/wiki/File:%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%90%D0%BD%D0%B3%D0%B0%D1%80%D1%81%D0%BA%29.jpg",
//   "preview": {
//     "source":
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%90%D0%BD%D0%B3%D0%B0%D1%80%D1%81%D0%BA%29.jpg/400px-%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%90%D0%BD%D0%B3%D0%B0%D1%80%D1%81%D0%BA%29.jpg",
//     "height": 148,
//     "width": 400,
//   },
//   "wikipedia_extracts": {
//     "title": "ru:Свято-Троицкий кафедральный собор (Ангарск)",
//     "text":
//       "Свято-Троицкий кафедральный собор — второй кафедральный собор Иркутской и Ангарской епархии Русской православной церкви. Расположен в городе Ангарске (Иркутской области).Рассказывает настоятель храма протоиерей Владимир Килин:В Ангарске до меня не было священника. Когда в городе создавалась православная община, в августе 1991 года, меня направили туда служить. Поначалу храма в Ангарске не было, и большими усилиями удалось выбить под него здание. Суд Божий не без юмора — храм обустроился в бывшем клубе „Октябрь“. Служить мы там начали с Успения, почему храм и назвали Успенским.",
//     "html":
//       "<p><b>Свято-Троицкий кафедральный собор</b>&nbsp;— второй кафедральный собор Иркутской и Ангарской епархии Русской православной церкви. Расположен в городе Ангарске (Иркутской области).</p><p>Рассказывает настоятель храма протоиерей Владимир Килин:</p><p>В Ангарске до меня не было священника. Когда в городе создавалась православная община, в августе 1991 года, меня направили туда служить. Поначалу храма в Ангарске не было, и большими усилиями удалось выбить под него здание. Суд Божий не без юмора&nbsp;— храм обустроился в бывшем клубе „Октябрь“. Служить мы там начали с Успения, почему храм и назвали Успенским.</p>",
//   },
//   "point": {
//     "lon": 103.87093353271484,
//     "lat": 52.528018951416016,
//   },
// }

export const testDataObj = {
  "xid": "W192900603",
  "name": "Ледокол «Ангара»",
  "address": {
    "city": "Иркутск",
    "road": "проспект Маршала Жукова",
    "house": "Ангара",
    "state": "Иркутская область",
    "county": "городской округ Иркутск",
    "suburb": "Байкальский",
    "country": "Россия",
    "postcode": "664050",
    "country_code": "ru",
    "house_number": "36А/1",
    "city_district": "Октябрьский административный округ",
    "neighbourhood": "микрорайон Крылатый",
  },
  "rate": "3h",
  "osm": "way/192900603",
  "bbox": {
    "lon_min": 104.343593,
    "lon_max": 104.344077,
    "lat_min": 52.249882,
    "lat_max": 52.250354,
  },
  "wikidata": "Q4065039",
  "kinds": "cultural,museums,interesting_places,history_museums,local_museums",
  "sources": {
    "geometry": "osm",
    "attributes": ["osm", "wikidata"],
  },
  "otm": "https://opentripmap.com/ru/card/W192900603",
  "wikipedia":
    "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B3%D0%B0%D1%80%D0%B0%20%28%D0%BB%D0%B5%D0%B4%D0%BE%D0%BA%D0%BE%D0%BB%29",
  "info": {
    "src": "culture.ru",
    "url":
      "https://www.culture.ru/institutes/38464/otdel-ledokol-angara-irkutskogo-oblastnogo-kraevedcheskogo-muzeya",
    "descr":
      "<p> Самый старый из сохранившихся ледоколов в мире был изготовлен более 100 лет назад на верфи «Сэр В. Г. Армстронг, Витворт и Ко» в Ньюкасле (Великобритания) и предназначался для прокладки пути во льдах для парома «Байкал». </p><p>На ледоколе представлена экспозиция, посвященная развитию судоходства на озере Байкал и сибирских реках. Во время экскурсии можно осмотреть весь корабль и даже спуститься в машинное отделение. Проводятся встречи, кинопоказы, концерты. </p>",
    "image": "culture.ru:f434e04a8a84093e6d94ed0403f5168f.JPG",
    "src_id": 36639,
  },
  "image":
    "https://all.culture.ru/uploads/f434e04a8a84093e6d94ed0403f5168f.JPG",
  "preview": {
    "source":
      "https://all.culture.ru/uploads/f434e04a8a84093e6d94ed0403f5168f_w400_h400.JPG",
    "height": 400,
    "width": 400,
  },
  "wikipedia_extracts": {
    "title": "ru:Ангара (ледокол)",
    "text":
      "«Ангара́» — пароход-ледокол российского и советского флотов, в настоящее время корабль-музей, один из пяти дореволюционной постройки. Один из самых старых сохранившихся ледоколов в мире (наряду со шведским S/S «Bore» (1894) и финским «Tarmo» (1907)).",
    "html":
      '<p><b>«Ангара́»</b>&nbsp;— пароход-ледокол российского и советского флотов, в настоящее время корабль-музей, один из пяти дореволюционной постройки. Один из самых старых сохранившихся ледоколов в мире (наряду со шведским S/S «<span data-interwiki-lang="sv" data-interwiki-article="Bore (isbrytare)">Bore</span><span></span>» (1894) и финским «Tarmo» (1907)).</p>',
  },
  "point": {
    "lon": 104.34382629394531,
    "lat": 52.2501106262207,
  },
}

export default testData
