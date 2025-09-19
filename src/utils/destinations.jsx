// // utils/destinations.js

// export const destinations = [
//   // 1. Littoral Region - Douala
//   {
//     region: "Littoral Region",
//     cities: [
//       {
//         name: "Douala",
//         slug: "douala",
//         hotels: [
//           {
//             name: "Akwa Palace",
//             slug: "akwa-palace",
//             image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
//               "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
//             ],
//             description: "Luxury stay in central Douala.",
//             amenities: ["Free WiFi", "Breakfast included", "Pool"],
//             price: "XAF 144,500 / night",
//             rating: "8.5",
//             reviews: 171
//           },
//           {
//             name: "Krystal Palace",
//             slug: "krystal-palace",
//             image: "https://images.pexels.com/photos/221064/pexels-photo-221064.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/221064/pexels-photo-221064.jpeg",
//               "https://images.pexels.com/photos/221066/pexels-photo-221066.jpeg"
//             ],
//             description: "Elegant hotel with modern rooms.",
//             amenities: ["Free WiFi", "Breakfast included", "Pool", "Spa"],
//             price: "XAF 279,906 / night",
//             rating: "8.3",
//             reviews: 142
//           },
//           {
//             name: "FAYA Hotel",
//             slug: "faya-hotel",
//             image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
//               "https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"
//             ],
//             description: "Affordable hotel near the city center.",
//             amenities: ["Free WiFi", "Breakfast included", "24-hour front desk"],
//             price: "XAF 89,100 / night",
//             rating: "8.0",
//             reviews: 95
//           },
//           {
//             name: "ONOMO Hotel",
//             slug: "onomo-hotel",
//             image: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
//               "https://images.pexels.com/photos/271668/pexels-photo-271668.jpeg"
//             ],
//             description: "Modern hotel with pool and business facilities.",
//             amenities: ["Free WiFi", "Breakfast included", "Pool", "Business center"],
//             price: "XAF 133,974 / night",
//             rating: "8.4",
//             reviews: 120
//           },
//           {
//             name: "La Falaise",
//             slug: "la-falaise",
//             image: "https://images.pexels.com/photos/261047/pexels-photo-261047.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/261047/pexels-photo-261047.jpeg",
//               "https://images.pexels.com/photos/261048/pexels-photo-261048.jpeg"
//             ],
//             description: "Luxury hotel with sea views.",
//             amenities: ["Free WiFi", "Breakfast included", "Pool", "Spa", "Beach access"],
//             price: "XAF 151,200 / night",
//             rating: "8.6",
//             reviews: 130
//           }
//         ]
//       }
//     ]
//   },

//   // 2. Centre Region - Yaoundé
//   {
//     region: "Centre Region",
//     cities: [
//       {
//         name: "Yaoundé",
//         slug: "yaounde",
//         hotels: [
//           {
//             name: "Hilton Yaoundé",
//             slug: "hilton-yaounde",
//             image: "https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg",
//               "https://images.pexels.com/photos/261188/pexels-photo-261188.jpeg"
//             ],
//             description: "Upscale hotel with pool and conference center.",
//             amenities: ["Free WiFi", "Breakfast included", "Pool", "Fitness center"],
//             price: "XAF 180,000 / night",
//             rating: "8.7",
//             reviews: 200
//           },
//           {
//             name: "Hotel Mont Fébé",
//             slug: "hotel-mont-febe",
//             image: "https://images.pexels.com/photos/261200/pexels-photo-261200.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/261200/pexels-photo-261200.jpeg",
//               "https://images.pexels.com/photos/261201/pexels-photo-261201.jpeg"
//             ],
//             description: "Mountain-view hotel with golf course.",
//             amenities: ["Free WiFi", "Breakfast included", "Pool"],
//             price: "XAF 150,000 / night",
//             rating: "8.4",
//             reviews: 145
//           },
//           {
//             name: "Djeuga Palace",
//             slug: "djeuga-palace",
//             image: "https://images.pexels.com/photos/261211/pexels-photo-261211.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/261211/pexels-photo-261211.jpeg",
//               "https://images.pexels.com/photos/261212/pexels-photo-261212.jpeg"
//             ],
//             description: "Modern hotel with spacious suites.",
//             amenities: ["Free WiFi", "Breakfast included", "Pool", "Restaurant"],
//             price: "XAF 120,000 / night",
//             rating: "8.1",
//             reviews: 110
//           },
//           {
//             name: "Franco Hotel",
//             slug: "franco-hotel",
//             image: "https://images.pexels.com/photos/261220/pexels-photo-261220.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/261220/pexels-photo-261220.jpeg",
//               "https://images.pexels.com/photos/261221/pexels-photo-261221.jpeg"
//             ],
//             description: "Contemporary hotel with rooftop restaurant.",
//             amenities: ["Free WiFi", "Breakfast included", "Pool", "Rooftop bar"],
//             price: "XAF 98,000 / night",
//             rating: "8.0",
//             reviews: 90
//           },
//           {
//             name: "La Falaise Yaoundé",
//             slug: "la-falaise-yaounde",
//             image: "https://images.pexels.com/photos/261230/pexels-photo-261230.jpeg",
//             gallery: [
//               "https://images.pexels.com/photos/261230/pexels-photo-261230.jpeg",
//               "https://images.pexels.com/photos/261231/pexels-photo-261231.jpeg"
//             ],
//             description: "Boutique hotel with chic rooms.",
//             amenities: ["Free WiFi", "Breakfast included", "Pool", "Spa"],
//             price: "XAF 135,000 / night",
//             rating: "8.5",
//             reviews: 125
//           }
//         ]
//       }
//     ]
//   }
// ];


export const destinations = [
  {
    region: "Littoral Region",
    cities: [
      {
        name: "Douala",
        slug: "douala",
        hotels: [
          { name: "Akwa Palace", slug: "akwa-palace", image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg", gallery: ["https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg","https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"], description: "Luxury stay in central Douala.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 144,500 / night", rating: "8.5", reviews: 171 },
          { name: "Krystal Palace", slug: "krystal-palace", image: "https://images.pexels.com/photos/221064/pexels-photo-221064.jpeg", gallery: ["https://images.pexels.com/photos/221064/pexels-photo-221064.jpeg","https://images.pexels.com/photos/221066/pexels-photo-221066.jpeg"], description: "Elegant hotel with modern rooms.", amenities: ["Free WiFi","Breakfast included","Pool","Spa"], price: "XAF 279,906 / night", rating: "8.3", reviews: 142 },
          { name: "FAYA Hotel", slug: "faya-hotel", image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg", gallery: ["https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg","https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg"], description: "Affordable hotel near the city center.", amenities: ["Free WiFi","Breakfast included","24-hour front desk"], price: "XAF 89,100 / night", rating: "8.0", reviews: 95 },
          { name: "ONOMO Hotel", slug: "onomo-hotel", image: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg", gallery: ["https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg","https://images.pexels.com/photos/271668/pexels-photo-271668.jpeg"], description: "Modern hotel with pool and business facilities.", amenities: ["Free WiFi","Breakfast included","Pool","Business center"], price: "XAF 133,974 / night", rating: "8.4", reviews: 120 },
          { name: "La Falaise", slug: "la-falaise", image: "https://images.pexels.com/photos/261047/pexels-photo-261047.jpeg", gallery: ["https://images.pexels.com/photos/261047/pexels-photo-261047.jpeg","https://images.pexels.com/photos/261048/pexels-photo-261048.jpeg"], description: "Luxury hotel with sea views.", amenities: ["Free WiFi","Breakfast included","Pool","Spa","Beach access"], price: "XAF 151,200 / night", rating: "8.6", reviews: 130 }
        ]
      }
    ]
  },
{
  region: "Centre Region",
  cities: [
    {
      name: "Yaoundé",
      slug: "yaounde",
      hotels: [
        { name: "Hilton Yaoundé", slug: "hilton-yaounde", image: "https://images.pexels.com/photos/310084/pexels-photo-310084.jpeg", gallery: ["https://images.pexels.com/photos/310084/pexels-photo-310084.jpeg","https://images.pexels.com/photos/310085/pexels-photo-310085.jpeg"], description: "Upscale hotel with pool, gym, tennis court and central location.", amenities: ["Free WiFi","Breakfast included","Pool","Fitness center","Conference rooms"], price: "XAF 220,000 / night", rating: "9.0", reviews: 250 },
        { name: "Djeuga Palace", slug: "djeuga-palace", image: "https://images.pexels.com/photos/310095/pexels-photo-310095.jpeg", gallery: ["https://images.pexels.com/photos/310095/pexels-photo-310095.jpeg","https://images.pexels.com/photos/310096/pexels-photo-310096.jpeg"], description: "Elegant hotel with swimming pool, restaurants and nightlife nearby.", amenities: ["Free WiFi","Breakfast included","Pool","Bar","Business center"], price: "XAF 150,000 / night", rating: "8.7", reviews: 180 },
        { name: "Hotel La Falaise Yaoundé", slug: "hotel-la-falaise-yaounde", image: "https://images.pexels.com/photos/310107/pexels-photo-310107.jpeg", gallery: ["https://images.pexels.com/photos/310107/pexels-photo-310107.jpeg","https://images.pexels.com/photos/310108/pexels-photo-310108.jpeg"], description: "Modern rooms with city views, pool and fitness center.", amenities: ["Free WiFi","Breakfast included","Pool","Fitness center"], price: "XAF 120,000 / night", rating: "8.4", reviews: 140 },
        { name: "Résidence Hôtelière Jouvence", slug: "residence-hoteliere-jouvence", image: "https://images.pexels.com/photos/310119/pexels-photo-310119.jpeg", gallery: ["https://images.pexels.com/photos/310119/pexels-photo-310119.jpeg","https://images.pexels.com/photos/310120/pexels-photo-310120.jpeg"], description: "Comfortable serviced apartments ideal for long stays.", amenities: ["Free WiFi","Breakfast included","Kitchenettes"], price: "XAF 90,000 / night", rating: "8.0", reviews: 95 },
        { name: "Franco Hotel Yaoundé", slug: "franco-hotel-yaounde", image: "https://images.pexels.com/photos/310130/pexels-photo-310130.jpeg", gallery: ["https://images.pexels.com/photos/310130/pexels-photo-310130.jpeg","https://images.pexels.com/photos/310131/pexels-photo-310131.jpeg"], description: "Well-rated hotel with bar, restaurant and city access.", amenities: ["Free WiFi","Breakfast included","Pool","Bar"], price: "XAF 100,000 / night", rating: "8.2", reviews: 110 }
      ]
    }
  ]
},
// 3. Northwest Region – Bamenda
{
  region: "Northwest Region",
  cities: [
    {
      name: "Bamenda",
      slug: "bamenda",
      hotels: [
        { name: "Ayaba Hotel", slug: "ayaba-hotel", image: "https://images.pexels.com/photos/276084/pexels-photo-276084.jpeg", gallery: ["https://images.pexels.com/photos/276084/pexels-photo-276084.jpeg","https://images.pexels.com/photos/276085/pexels-photo-276085.jpeg"], description: "Well-known hotel in the heart of Bamenda.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 90,000 / night", rating: "8.0", reviews: 88 },
        { name: "Blue Pearl Hotel", slug: "blue-pearl-hotel", image: "https://images.pexels.com/photos/276095/pexels-photo-276095.jpeg", gallery: ["https://images.pexels.com/photos/276095/pexels-photo-276095.jpeg","https://images.pexels.com/photos/276096/pexels-photo-276096.jpeg"], description: "Modern hotel with city views.", amenities: ["Free WiFi","Breakfast included","Restaurant"], price: "XAF 78,000 / night", rating: "7.8", reviews: 65 },
        { name: "Upstation Hotel", slug: "upstation-hotel", image: "https://images.pexels.com/photos/276107/pexels-photo-276107.jpeg", gallery: ["https://images.pexels.com/photos/276107/pexels-photo-276107.jpeg","https://images.pexels.com/photos/276108/pexels-photo-276108.jpeg"], description: "Budget-friendly hotel with conference hall.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.5", reviews: 40 },
        { name: "Chariot Hotel", slug: "chariot-hotel", image: "https://images.pexels.com/photos/276119/pexels-photo-276119.jpeg", gallery: ["https://images.pexels.com/photos/276119/pexels-photo-276119.jpeg","https://images.pexels.com/photos/276120/pexels-photo-276120.jpeg"], description: "Comfortable stay with restaurant & lounge.", amenities: ["Free WiFi","Breakfast included","Bar"], price: "XAF 60,000 / night", rating: "7.6", reviews: 55 },
        { name: "Mondial Hotel", slug: "mondial-hotel", image: "https://images.pexels.com/photos/276130/pexels-photo-276130.jpeg", gallery: ["https://images.pexels.com/photos/276130/pexels-photo-276130.jpeg","https://images.pexels.com/photos/276131/pexels-photo-276131.jpeg"], description: "Boutique hotel with clean and quiet rooms.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 65,000 / night", rating: "7.9", reviews: 43 }
      ]
    }
  ]
},

// 4. Southwest Region – Buea
{
  region: "Southwest Region",
  cities: [
    {
      name: "Buea",
      slug: "buea",
      hotels: [
        { name: "Mountain Hotel", slug: "mountain-hotel", image: "https://images.pexels.com/photos/277084/pexels-photo-277084.jpeg", gallery: ["https://images.pexels.com/photos/277084/pexels-photo-277084.jpeg","https://images.pexels.com/photos/277085/pexels-photo-277085.jpeg"], description: "Famous for its mountain view and gardens.", amenities: ["Free WiFi","Breakfast included","Pool","Restaurant"], price: "XAF 95,000 / night", rating: "8.2", reviews: 102 },
        { name: "Parliamentarian Flats", slug: "parliamentarian-flats", image: "https://images.pexels.com/photos/277095/pexels-photo-277095.jpeg", gallery: ["https://images.pexels.com/photos/277095/pexels-photo-277095.jpeg","https://images.pexels.com/photos/277096/pexels-photo-277096.jpeg"], description: "Long-stay apartments with hotel services.", amenities: ["Free WiFi","Breakfast included","Kitchenette"], price: "XAF 80,000 / night", rating: "8.0", reviews: 67 },
        { name: "Palace Hotel Buea", slug: "palace-hotel-buea", image: "https://images.pexels.com/photos/277107/pexels-photo-277107.jpeg", gallery: ["https://images.pexels.com/photos/277107/pexels-photo-277107.jpeg","https://images.pexels.com/photos/277108/pexels-photo-277108.jpeg"], description: "Centrally located with conference halls.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.8", reviews: 50 },
        { name: "Hiton Buea Hotel", slug: "hiton-buea-hotel", image: "https://images.pexels.com/photos/277119/pexels-photo-277119.jpeg", gallery: ["https://images.pexels.com/photos/277119/pexels-photo-277119.jpeg","https://images.pexels.com/photos/277120/pexels-photo-277120.jpeg"], description: "Affordable rooms with restaurant.", amenities: ["Free WiFi","Breakfast included","Bar"], price: "XAF 50,000 / night", rating: "7.6", reviews: 38 },
        { name: "Etana Hotel", slug: "etana-hotel", image: "https://images.pexels.com/photos/277130/pexels-photo-277130.jpeg", gallery: ["https://images.pexels.com/photos/277130/pexels-photo-277130.jpeg","https://images.pexels.com/photos/277131/pexels-photo-277131.jpeg"], description: "Boutique hotel with cozy rooms.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.9", reviews: 42 }
      ]
    }
  ]
},

// 5. West Region – Bafoussam
{
  region: "West Region",
  cities: [
    {
      name: "Bafoussam",
      slug: "bafoussam",
      hotels: [
        { name: "Hotel Zingana", slug: "hotel-zingana", image: "https://images.pexels.com/photos/278084/pexels-photo-278084.jpeg", gallery: ["https://images.pexels.com/photos/278084/pexels-photo-278084.jpeg","https://images.pexels.com/photos/278085/pexels-photo-278085.jpeg"], description: "Upscale hotel with modern decor.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 95,000 / night", rating: "8.1", reviews: 70 },
        { name: "La Vallée Hotel", slug: "la-vallee-hotel", image: "https://images.pexels.com/photos/278095/pexels-photo-278095.jpeg", gallery: ["https://images.pexels.com/photos/278095/pexels-photo-278095.jpeg","https://images.pexels.com/photos/278096/pexels-photo-278096.jpeg"], description: "Charming hotel with mountain views.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.8", reviews: 45 },
        { name: "Talotel", slug: "talotel", image: "https://images.pexels.com/photos/278107/pexels-photo-278107.jpeg", gallery: ["https://images.pexels.com/photos/278107/pexels-photo-278107.jpeg","https://images.pexels.com/photos/278108/pexels-photo-278108.jpeg"], description: "Central location with restaurant.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 40 },
        { name: "Manoir des Princes", slug: "manoir-des-princes", image: "https://images.pexels.com/photos/278119/pexels-photo-278119.jpeg", gallery: ["https://images.pexels.com/photos/278119/pexels-photo-278119.jpeg","https://images.pexels.com/photos/278120/pexels-photo-278120.jpeg"], description: "Boutique stay with garden.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 58,000 / night", rating: "7.9", reviews: 42 },
        { name: "Résidence Saint David", slug: "residence-saint-david", image: "https://images.pexels.com/photos/278130/pexels-photo-278130.jpeg", gallery: ["https://images.pexels.com/photos/278130/pexels-photo-278130.jpeg","https://images.pexels.com/photos/278131/pexels-photo-278131.jpeg"], description: "Family-friendly hotel.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 52,000 / night", rating: "7.7", reviews: 33 }
      ]
    }
  ]
},

// 6. North Region – Garoua
{
  region: "North Region",
  cities: [
    {
      name: "Garoua",
      slug: "garoua",
      hotels: [
        { name: "Bénoué Hotel", slug: "benoue-hotel", image: "https://images.pexels.com/photos/279084/pexels-photo-279084.jpeg", gallery: ["https://images.pexels.com/photos/279084/pexels-photo-279084.jpeg","https://images.pexels.com/photos/279085/pexels-photo-279085.jpeg"], description: "Classic hotel by the river.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 75,000 / night", rating: "7.9", reviews: 55 },
        { name: "Relais St Hubert", slug: "relais-st-hubert", image: "https://images.pexels.com/photos/279095/pexels-photo-279095.jpeg", gallery: ["https://images.pexels.com/photos/279095/pexels-photo-279095.jpeg","https://images.pexels.com/photos/279096/pexels-photo-279096.jpeg"], description: "Comfortable hotel with restaurant.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.6", reviews: 38 },
        { name: "Hotel Elite", slug: "hotel-elite", image: "https://images.pexels.com/photos/279107/pexels-photo-279107.jpeg", gallery: ["https://images.pexels.com/photos/279107/pexels-photo-279107.jpeg","https://images.pexels.com/photos/279108/pexels-photo-279108.jpeg"], description: "Budget hotel in central Garoua.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 25 },
        { name: "Boukarou Hotel", slug: "boukarou-hotel", image: "https://images.pexels.com/photos/279119/pexels-photo-279119.jpeg", gallery: ["https://images.pexels.com/photos/279119/pexels-photo-279119.jpeg","https://images.pexels.com/photos/279120/pexels-photo-279120.jpeg"], description: "Boutique stay with garden.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.7", reviews: 30 },
        { name: "Résidence la Belle Vue", slug: "residence-la-belle-vue", image: "https://images.pexels.com/photos/279130/pexels-photo-279130.jpeg", gallery: ["https://images.pexels.com/photos/279130/pexels-photo-279130.jpeg","https://images.pexels.com/photos/279131/pexels-photo-279131.jpeg"], description: "Family-friendly residence.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 50,000 / night", rating: "7.5", reviews: 28 }
      ]
    }
  ]
},

// 7. Far North Region – Maroua
// 8. East Region – Bertoua
// 9. South Region – Ebolowa
// 10. Adamawa Region – Ngaoundéré
// 7. Far North Region – Maroua
{
  region: "Far North Region",
  cities: [
    {
      name: "Maroua",
      slug: "maroua",
      hotels: [
        { name: "Hotel Mizao", slug: "hotel-mizao", image: "https://images.pexels.com/photos/280084/pexels-photo-280084.jpeg", gallery: ["https://images.pexels.com/photos/280084/pexels-photo-280084.jpeg","https://images.pexels.com/photos/280085/pexels-photo-280085.jpeg"], description: "Popular stay with a pool and conference hall.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 70,000 / night", rating: "7.9", reviews: 52 },
        { name: "Relais Porte du Sahel", slug: "relais-porte-du-sahel", image: "https://images.pexels.com/photos/280095/pexels-photo-280095.jpeg", gallery: ["https://images.pexels.com/photos/280095/pexels-photo-280095.jpeg","https://images.pexels.com/photos/280096/pexels-photo-280096.jpeg"], description: "Comfortable hotel with restaurant & terrace.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.7", reviews: 39 },
        { name: "Sahel Inn", slug: "sahel-inn", image: "https://images.pexels.com/photos/280107/pexels-photo-280107.jpeg", gallery: ["https://images.pexels.com/photos/280107/pexels-photo-280107.jpeg","https://images.pexels.com/photos/280108/pexels-photo-280108.jpeg"], description: "Budget-friendly rooms near city center.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 26 },
        { name: "Oasis Hotel Maroua", slug: "oasis-hotel-maroua", image: "https://images.pexels.com/photos/280119/pexels-photo-280119.jpeg", gallery: ["https://images.pexels.com/photos/280119/pexels-photo-280119.jpeg","https://images.pexels.com/photos/280120/pexels-photo-280120.jpeg"], description: "Calm environment with garden & bar.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 30 },
        { name: "Résidence du Sahel", slug: "residence-du-sahel", image: "https://images.pexels.com/photos/280130/pexels-photo-280130.jpeg", gallery: ["https://images.pexels.com/photos/280130/pexels-photo-280130.jpeg","https://images.pexels.com/photos/280131/pexels-photo-280131.jpeg"], description: "Family-friendly residence with terrace.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 50,000 / night", rating: "7.5", reviews: 28 }
      ]
    }
  ]
},

// 8. East Region – Bertoua
{
  region: "East Region",
  cities: [
    {
      name: "Bertoua",
      slug: "bertoua",
      hotels: [
        { name: "Hotel Relais de Bertoua", slug: "hotel-relais-bertoua", image: "https://images.pexels.com/photos/281084/pexels-photo-281084.jpeg", gallery: ["https://images.pexels.com/photos/281084/pexels-photo-281084.jpeg","https://images.pexels.com/photos/281085/pexels-photo-281085.jpeg"], description: "Central hotel with restaurant & pool.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 75,000 / night", rating: "7.9", reviews: 48 },
        { name: "Hotel Elephant", slug: "hotel-elephant", image: "https://images.pexels.com/photos/281095/pexels-photo-281095.jpeg", gallery: ["https://images.pexels.com/photos/281095/pexels-photo-281095.jpeg","https://images.pexels.com/photos/281096/pexels-photo-281096.jpeg"], description: "Well-known in Bertoua for its spacious rooms.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.7", reviews: 37 },
        { name: "Safari Hotel Bertoua", slug: "safari-hotel-bertoua", image: "https://images.pexels.com/photos/281107/pexels-photo-281107.jpeg", gallery: ["https://images.pexels.com/photos/281107/pexels-photo-281107.jpeg","https://images.pexels.com/photos/281108/pexels-photo-281108.jpeg"], description: "Budget-friendly hotel near city center.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.4", reviews: 24 },
        { name: "Résidence Tropicale", slug: "residence-tropicale", image: "https://images.pexels.com/photos/281119/pexels-photo-281119.jpeg", gallery: ["https://images.pexels.com/photos/281119/pexels-photo-281119.jpeg","https://images.pexels.com/photos/281120/pexels-photo-281120.jpeg"], description: "Quiet place with garden & bar.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 28 },
        { name: "Hotel Pousada Bertoua", slug: "hotel-pousada-bertoua", image: "https://images.pexels.com/photos/281130/pexels-photo-281130.jpeg", gallery: ["https://images.pexels.com/photos/281130/pexels-photo-281130.jpeg","https://images.pexels.com/photos/281131/pexels-photo-281131.jpeg"], description: "Family-friendly hotel.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 50,000 / night", rating: "7.5", reviews: 26 }
      ]
    }
  ]
},

// 9. South Region – Ebolowa
{
  region: "South Region",
  cities: [
    {
      name: "Ebolowa",
      slug: "ebolowa",
      hotels: [
        { name: "Hotel d’Ebolowa", slug: "hotel-debolowa", image: "https://images.pexels.com/photos/282084/pexels-photo-282084.jpeg", gallery: ["https://images.pexels.com/photos/282084/pexels-photo-282084.jpeg","https://images.pexels.com/photos/282085/pexels-photo-282085.jpeg"], description: "Central hotel with restaurant & terrace.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 65,000 / night", rating: "7.8", reviews: 33 },
        { name: "Résidence du Sud", slug: "residence-du-sud", image: "https://images.pexels.com/photos/282095/pexels-photo-282095.jpeg", gallery: ["https://images.pexels.com/photos/282095/pexels-photo-282095.jpeg","https://images.pexels.com/photos/282096/pexels-photo-282096.jpeg"], description: "Spacious rooms with free WiFi.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 25 },
        { name: "Hotel Royal Ebolowa", slug: "hotel-royal-ebolowa", image: "https://images.pexels.com/photos/282107/pexels-photo-282107.jpeg", gallery: ["https://images.pexels.com/photos/282107/pexels-photo-282107.jpeg","https://images.pexels.com/photos/282108/pexels-photo-282108.jpeg"], description: "Comfortable stay with bar.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 50,000 / night", rating: "7.5", reviews: 24 },
        { name: "Résidence Prestige", slug: "residence-prestige", image: "https://images.pexels.com/photos/282119/pexels-photo-282119.jpeg", gallery: ["https://images.pexels.com/photos/282119/pexels-photo-282119.jpeg","https://images.pexels.com/photos/282120/pexels-photo-282120.jpeg"], description: "Modern hotel with parking & garden.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 58,000 / night", rating: "7.6", reviews: 26 },
        { name: "Palace Inn Ebolowa", slug: "palace-inn-ebolowa", image: "https://images.pexels.com/photos/282130/pexels-photo-282130.jpeg", gallery: ["https://images.pexels.com/photos/282130/pexels-photo-282130.jpeg","https://images.pexels.com/photos/282131/pexels-photo-282131.jpeg"], description: "Budget-friendly rooms.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 20 }
      ]
    }
  ]
},

// 10. Adamawa Region – Ngaoundéré
{
  region: "Adamawa Region",
  cities: [
    {
      name: "Ngaoundéré",
      slug: "ngaoundere",
      hotels: [
        { name: "Hotel Transcam", slug: "hotel-transcam", image: "https://images.pexels.com/photos/283084/pexels-photo-283084.jpeg", gallery: ["https://images.pexels.com/photos/283084/pexels-photo-283084.jpeg","https://images.pexels.com/photos/283085/pexels-photo-283085.jpeg"], description: "Central hotel with conference facilities.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 65,000 / night", rating: "7.8", reviews: 34 },
        { name: "Résidence Adamawa", slug: "residence-adamawa", image: "https://images.pexels.com/photos/283095/pexels-photo-283095.jpeg", gallery: ["https://images.pexels.com/photos/283095/pexels-photo-283095.jpeg","https://images.pexels.com/photos/283096/pexels-photo-283096.jpeg"], description: "Family-friendly residence.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 25 },
        { name: "Hotel Plateau", slug: "hotel-plateau", image: "https://images.pexels.com/photos/283107/pexels-photo-283107.jpeg", gallery: ["https://images.pexels.com/photos/283107/pexels-photo-283107.jpeg","https://images.pexels.com/photos/283108/pexels-photo-283108.jpeg"], description: "Budget-friendly hotel near train station.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 22 },
        { name: "Résidence Horizon", slug: "residence-horizon", image: "https://images.pexels.com/photos/283119/pexels-photo-283119.jpeg", gallery: ["https://images.pexels.com/photos/283119/pexels-photo-283119.jpeg","https://images.pexels.com/photos/283120/pexels-photo-283120.jpeg"], description: "Calm environment with garden.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 58,000 / night", rating: "7.6", reviews: 26 },
        { name: "Palace Inn Ngaoundéré", slug: "palace-inn-ngaoundere", image: "https://images.pexels.com/photos/283130/pexels-photo-283130.jpeg", gallery: ["https://images.pexels.com/photos/283130/pexels-photo-283130.jpeg","https://images.pexels.com/photos/283131/pexels-photo-283131.jpeg"], description: "Affordable stay in the city center.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 20 }
      ]
    }
  ]
}
];