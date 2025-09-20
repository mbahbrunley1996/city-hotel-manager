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
        image: "https://i.ytimg.com/vi/_5z1gxelv8M/maxresdefault.jpg",
        hotels: [
          { name: "Akwa Palace", slug: "akwa-palace", image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/AKWA_PALACE.JPG", gallery: ["https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg","https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"], description: "Luxury stay in central Douala.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 144,500 / night", rating: "8.5", reviews: 171 },
          { name: "Krystal Palace", slug: "krystal-palace", image: "/hotels in doaual/krystal hotel.png", gallery: ["https://images.pexels.com/photos/221064/pexels-photo-221064.jpeg","https://images.pexels.com/photos/221066/pexels-photo-221066.jpeg"], description: "Elegant hotel with modern rooms.", amenities: ["Free WiFi","Breakfast included","Pool","Spa"], price: "XAF 279,906 / night", rating: "8.3", reviews: 142 },
          { name: "FAYA Hotel", slug: "faya-hotel", image: "https://visit-douala.com/wp-content/uploads/2023/08/faya-hotel--1024x910.png", gallery: ["https://lh5.googleusercontent.com/p/AF1QipOgnGa4LeR5-xKqUcMtIJdGXiWdS4xfjS6OnTUx=w592-h404-n-k-no-v1","https://lh5.googleusercontent.com/p/AF1QipNVmSCbdN1zwAwZpi7sk0CRuD2u4RQCe1_Y4_-a=w592-h404-n-k-no-v1"], description: "Affordable hotel near the city center.", amenities: ["Free WiFi","Breakfast included","24-hour front desk"], price: "XAF 89,100 / night", rating: "8.0", reviews: 95 },
          { name: "ONOMO Hotel", slug: "onomo-hotel", image: "https://visit-douala.com/wp-content/uploads/2023/08/ONOMO-Hotel-Douala.jpg", gallery: ["https://lh5.googleusercontent.com/p/AF1QipPUjMExJuMnHQSIjAQaDLewyczYo9F_wzRe3bov=w592-h404-n-k-no-v1","https://lh5.googleusercontent.com/p/AF1QipMvfW5QJjQXbdFijJ029ea79FRXgYm-vkmwXASN=w592-h404-n-k-no-v1"], description: "Modern hotel with pool and business facilities.", amenities: ["Free WiFi","Breakfast included","Pool","Business center"], price: "XAF 133,974 / night", rating: "8.4", reviews: 120 },
          { name: "La Falaise", slug: "la-falaise", image: "https://visit-douala.com/wp-content/uploads/2023/08/Hotel_Residence_la_Falaise_Akwa_Douala-1024x768.jpg", gallery: ["https://lafalaisebonapriso.com/wp-content/uploads/2024/07/banner02.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/81/6d/30/piscine.jpg?w=900&h=500&s=1"], description: "Luxury hotel with sea views.", amenities: ["Free WiFi","Breakfast included","Pool","Spa","Beach access"], price: "XAF 151,200 / night", rating: "8.6", reviews: 130 }
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
      image: "https://media.gettyimages.com/id/sb10066698pr-001/fr/photo/presidents-palace-yaounde-cameroon.jpg?s=2048x2048&w=gi&k=20&c=w0qaWEYsTU41C3ZyTA_q-pdDViXT0Z19qMvPCcZlKok=",
      hotels: [
        { name: "Hilton Yaoundé", slug: "hilton-yaounde", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/cc/85/e4/pool-exterior.jpg?w=600&h=-1&s=1", gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/d2/36/d2/hilton-yaounde.jpg?w=1000&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/56/c3/83/hilton-yaounde.jpg?w=1000&h=-1&s=1"], description: "Upscale hotel with pool, gym, tennis court and central location.", amenities: ["Free WiFi","Breakfast included","Pool","Fitness center","Conference rooms"], price: "XAF 220,000 / night", rating: "9.0", reviews: 250 },
        { name: "Djeuga Palace", slug: "djeuga-palace", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ec/44/c4/entrance.jpg?w=1000&h=-1&s=1", gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d7/5a/ee/photo1jpg.jpg?w=1000&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/64/ed/70/chambre-standard-twin.jpg?w=1000&h=-1&s=1"], description: "Elegant hotel with swimming pool, restaurants and nightlife nearby.", amenities: ["Free WiFi","Breakfast included","Pool","Bar","Business center"], price: "XAF 150,000 / night", rating: "8.7", reviews: 180 },
        { name: "Hotel Marina", slug: "hotel-la-falaise-yaounde", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/b7/ca/14/caption.jpg?w=1000&h=-1&s=1", gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/fe/0d/f2/king-suit-la-chambre.jpg?w=1000&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/7f/51/de/offrez-vous-un-moment.jpg?w=1000&h=-1&s=1"], description: "Modern rooms with city views, pool and fitness center.", amenities: ["Free WiFi","Breakfast included","Pool","Fitness center"], price: "XAF 120,000 / night", rating: "8.4", reviews: 140 },
        { name: "Star Land Hotel", slug: "residence-hoteliere-jouvence", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/22/00/38/caption.jpg?w=1000&h=-1&s=1", gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/7c/4d/a0/caption.jpg?w=500&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/d1/8f/84/studio-meuble-mini-prix.jpg?w=1000&h=-1&s=1"], description: "Comfortable serviced apartments ideal for long stays.", amenities: ["Free WiFi","Breakfast included","Kitchenettes"], price: "XAF 90,000 / night", rating: "8.0", reviews: 95 },
        { name: "La Perle Hotel", slug: "franco-hotel-yaounde", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f6/b2/cb/caption.jpg?w=1000&h=-1&s=1", gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f6/6b/91/caption.jpg?w=1000&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f6/6b/8d/caption.jpg?w=1000&h=-1&s=1"], description: "Well-rated hotel with bar, restaurant and city access.", amenities: ["Free WiFi","Breakfast included","Pool","Bar"], price: "XAF 100,000 / night", rating: "8.2", reviews: 110 }
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
      image: "https://t4.ftcdn.net/jpg/07/09/51/09/360_F_709510932_0xdJMNijjTOZQw7FfWQnN9Cl6utwPDW0.jpg",
      hotels: [
        { name: "AZAM Hotel", slug: "ayaba-hotel", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9b/f8/8a/azam-hotel.jpg?w=900&h=500&s=1", gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9b/f8/6b/azam-hotel.jpg?w=1000&h=-1&s=1","https://images.pexels.com/photos/276085/pexels-photo-276085.jpeg"], description: "Well-known hotel in the heart of Bamenda.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 90,000 / night", rating: "8.0", reviews: 88 },
        { name: "MAWA Hotel", slug: "blue-pearl-hotel", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/4a/9b/d4/mawa-hotel-bamenda.jpg?w=1000&h=-1&s=1", gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/4a/9c/da/mawa-hotel-bamenda.jpg?w=1000&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/4a/9c/c0/mawa-hotel-bamenda.jpg?w=1000&h=-1&s=1"], description: "Modern hotel with city views.", amenities: ["Free WiFi","Breakfast included","Restaurant"], price: "XAF 78,000 / night", rating: "7.8", reviews: 65 },
        { name: "Top Star Hotel", slug: "upstation-hotel", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/a5/e3/79/getlstd-property-photo.jpg?w=600&h=-1&s=1", gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/ab/fe/30/top-star-hotel.jpg?w=600&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/ab/fe/2f/top-star-hotel.jpg?w=600&h=-1&s=1"], description: "Budget-friendly hotel with conference hall.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.5", reviews: 40 },
        { name: "MansField Plaza Hotel", slug: "chariot-hotel", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrn-4lBWUc2R77R4dIpdn3kg-_EyR2b2TD4nFAUCFjR89nQeQslr0v82xvx3lobmbhhnUk_MzKqVn66fJglffmyuNAeKORTCj0R4zZ0J9gf414E23_QCQTI6slU0sqOxTRejuhe=w252-h189-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4noFirTa5yAsVunoFREHcdVjk_Cg83pCIHnrddTotpjUMegsmn4CAK-rgnbfmtPwi_5DcyEyzJrq8HrfYA0QnfdYqdcoN4X-jaDGjO5aNiFp15WPxsTeIck7H6BngzFzEMHG4nUAOg=w253-h449-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq0b4OSETVbuJ37qWWhaeHV0GehwgDiQ0yM6Aqv8MCcpykI4gAEVHH152N2KJS3htFu3N9eoE1gzzk1mzRnQEt4822Hkvuk4ygwMOp_Z5vaa0XNFFSVD9VNDarIYfolGt9HdvbZAg=w253-h337-k-no"], description: "Comfortable stay with restaurant & lounge.", amenities: ["Free WiFi","Breakfast included","Bar"], price: "XAF 60,000 / night", rating: "7.6", reviews: 55 },
        { name: "BLue Pearl Hotel", slug: "mondial-hotel", image: "https://lh3.googleusercontent.com/p/AF1QipNDjwqRwPkZVyNm5rq6xS78ZXJyttE-N6zK5VGO=w252-h168-k-no", gallery: ["https://lh6.googleusercontent.com/proxy/Wo2SpatxUPWZm0wPUzAqbKu3NDl3vC1SpdPVsSw3FJP6i1LFzP9LsJPDjFIrCPNx_g-7syhTScdSwW5PJiyRzt7_4U0-2hlr_97EHJfGkNaD7Cgd5FF5h0y9WALFhSAaqAyB-iMQ1KZE-nSZQOJqsvRJpajntQ=w253-h186-k-no","https://lh3.googleusercontent.com/gvs/AKFkxhv9kGO_njNcx33Aszi3CrbKEb4cpk7Z-zyzFTt4x9K2WBSyBSdTotIBi-geenimyFWsG5pKplwwLugNHoL7KiODjSY9dHDPHrJU"], description: "Boutique hotel with clean and quiet rooms.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 65,000 / night", rating: "7.9", reviews: 43 }
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
      image: "https://live.staticflickr.com/3792/13895086893_894467b6cd_b.jpg",
      hotels: [
        { name: "Hotel L'empire", slug: "hotel-l'empire", image: "https://lh3.googleusercontent.com/p/AF1QipPLUA49FiR01RoTwvt0lyCv4FjudJoJdIPfYWJe=w252-h189-k-no", gallery: ["https://lh4.googleusercontent.com/proxy/FX2XGrce6FNeFsbVzrpoNV9cizhKX_Xx-W8ViJy6z1luIxPfFne_h1Ap6lq16FOT6Jq9vprwXoNTT6ner3Q2Lak8jOI7r2WUZV2Ru0ml3lKr4osOxZzhJxWEuXle1H9FdhRGbaBa1IzWArwSOrVM-5pTGLqf3EA=w252-h189-k-no "," https://lh3.googleusercontent.com/p/AF1QipMGklAurgy4hZCrykLf7LFJF0Oo5nfQK2Qx_YmJ=w252-h189-k-no"], description: "Famous for its mountain view and gardens.", amenities: ["Free WiFi","Breakfast included","Pool","Restaurant"], price: "XAF 95,000 / night", rating: "8.2", reviews: 102 },
        { name: "Hotel Pinorich", slug: "hotel-pinorich", image: "https://lh3.googleusercontent.com/p/AF1QipOJzTx7OKLeF_2_0LdveqYUnX3Z6mqNHujSqHGK=w253-h337-k-no", gallery: [" https://lh3.googleusercontent.com/p/AF1QipMoVnkYiFm1VmuTbQPEcIdOjmkRCzgk2mQVq1aE=w253-h168-k-no"," https://lh4.googleusercontent.com/proxy/Q751B0z9oyKN48LCu_RihwO59BUX_Epz9fbFsSssPdtqHOgTyOjLCWJsWiNAGCnficgo89N7esA1D1rmbfNFeI0EBTtGtgcWtzPIe9Bp2yvinxymggab0JLUaRDqyU7C8uBmq2YPHFhCU-y_1U4-nZ5Lnq20Qw=w252-h168-k-no"], description: "Long-stay apartments with hotel services.", amenities: ["Free WiFi","Breakfast included","Kitchenette"], price: "XAF 80,000 / night", rating: "8.0", reviews: 67 },
        { name: "Hotel Saint Claire", slug: "hotel-saint-claire", image: "https://lh3.googleusercontent.com/p/AF1QipMm6tYAsXdDGSG5WXvaFK6yCRXUwvH5jwjyH0g_=w252-h189-k-no", gallery: [" https://lh3.googleusercontent.com/p/AF1QipMO10f9wOWAQNqTnyTLaUi5m4mqG6bDEEq4tQSV=w252-h336-k-no"," https://lh3.googleusercontent.com/p/AF1QipO54ZVREWPIbxx0BAWSwmxWUL0Ziol-K1x7Mglm=w252-h189-k-no"], description: "Centrally located with conference halls.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.8", reviews: 50 },
        { name: "Capitol Hotel Residence", slug: "capitol-hotel-residence", image: "https://lh3.googleusercontent.com/p/AF1QipMVwm3AmpAkOdwwjK4ggmG0qYAyMZ7JploLt-5N=w252-h189-k-no", gallery: [" https://lh3.googleusercontent.com/gps-cs-s/AC9h4noFVSmM1NcWFT7lIxFsFqM1mzQ9Ybpxx_I0lurjxIdyYri3VhO2JQC8T1M5igHDREdgYoP29808bGJNuEvSGEd8a-j2OxJAZl21ZFO_X5L6GwU7fhenncu4Qmq9j5oUH0_z0IU=w252-h189-k-no"," https://lh3.googleusercontent.com/p/AF1QipMJTwky4Ut30D4Nv-nCd-Jk3KW_Tdmx2pBoAW7D=w252-h189-k-no"], description: "Affordable rooms with restaurant.", amenities: ["Free WiFi","Breakfast included","Bar"], price: "XAF 50,000 / night", rating: "7.6", reviews: 38 },
        { name: "Mountain Hotel", slug: "mountain-hotel", image: "https://lh3.googleusercontent.com/proxy/8-ooj9aXf6fqXhhtccmN-HiRzwxL0IZdRstZdqdc9UT3IYNK_TY1C1LRU8d1qiL75Z-At_ANXWUGjmvCk0igb1T8-7a0SDXOl-jToqUQ8hl9i-Kj96e4VXtp037hb0GQnEJV74BRCKsEFn5uqi-9aAFjqGmvuKE=w252-h183-k-no", gallery: [" https://lh3.googleusercontent.com/gps-cs-s/AC9h4noXr7BV1TtqNHMvcdzE1-dlikHPnQ5y8golBAVzNmi3CueBaRVNZgx155x9Smo_4oL6iz3NQFN27ccr7lbv1d3OqkfH0uspKMAdIT6oBmuUFVVUtIr67DG58BwF_P_lCfARerSX=w252-h189-k-no"," https://lh3.googleusercontent.com/gps-cs-s/AC9h4npKBgzdPBoIC4KttV6Ms6v6hxYfxcH8aXDMpxJH4uke659dhpvvY3r-SoYLS7VUGlpYOjmub_ai1GvR5Wv0O2ZB6MxTGEpmXn3FKbzkkESRoGSfv-8yW6KW1hlJ5Xw2Msz0jML81A=w252-h189-k-no"], description: "Boutique hotel with cozy rooms.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.9", reviews: 42 }
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
      image: "https://www.shutterstock.com/shutterstock/photos/2308753449/display_1500/stock-photo-bafoussam-west-cameroon-february-youth-parade-at-the-youth-festival-in-bafoussam-2308753449.jpg",
      hotels: [
        { name: "Hotel Zingana", slug: "hotel-zingana", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/39/52/31/hotel-zingana.jpg?w=1000&h=-1&s=1", gallery: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c9/7c/50/caption.jpg?w=1000&h=-1&s=1","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c9/7c/51/caption.jpg?w=1000&h=-1&s=1"], description: "Upscale hotel with modern decor.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 95,000 / night", rating: "8.1", reviews: 70 },
        { name: "Hotel Altiltel", slug: "la-vallee-hotel", image: "https://lh3.googleusercontent.com/p/AF1QipNiqGfvLt9u8NRsaGbOvlZyHG7iheJ_zw3vd_c=w253-h253-k-no", gallery: ["https://lh3.googleusercontent.com/p/AF1QipNJc8Es8m_1E3y8f_N9j8J-Xup5xomzX9kdbNM=w253-h288-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4npaY9sogphFTDZ5eaw6qbHRa_E0dM9RimI1BS4wukPUvBlckiAnVxGh9e9EjictRNKlf07TzLz_ncbmkCgfPlUZ3tb5HoTMS8XkxCP2RfjAfioDIJ3ZEB1v_EMXjdC1_5zU9TjrMw=w252-h336-k-no"], description: "Charming hotel with mountain views.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.8", reviews: 45 },
        { name: "Cergy Pontiose Hotel", slug: "talotel", image: "https://lh3.googleusercontent.com/p/AF1QipOfCbj-5XFg3D1mcPyFivrSl3U-SRd90hkZeAbD=w252-h155-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4np05_wxAPsiyTIhmkA4zB1k2zEOPYkdnIIc415_0nijMrDsp9v9V4inXMP84x-ZC5eIRM_h_kqyx6tBTPmaNGn65XyCAS5-JJBF2tyMO-5aDdlKpUdffRx_a7yJyEp2vsmoj7OJsQ=w252-h167-k-no","https://lh5.googleusercontent.com/proxy/B3S_apttiwe2XBy2W-mgTRhtB9COzKs0nDP6g2PTEUQVXu2Hy4CD1ylE6mMbmFWdbt-sLoaYvdCARX0wosrqclp8ZRgKvjoPlSkinzOvpCrllMMAC2DC6NxZoD2UxQWbjshfLRTlvl4AhE__tJ_uGuH7xEmQSQ=w252-h168-k-no"], description: "Central location with restaurant.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 40 },
        { name: "Hotel Talotel", slug: "manoir-des-princes", image: "https://lh4.googleusercontent.com/proxy/i05QeDKm1ej1iL5IxbO__1nqoZS1Iua1sJNabBYTk9Y_QxbegGHnpAQknBUi63DVvAfJqTr-n4PBEGr_e8f4XmwEnLEWUyZeagWn1Rtl6_ho6El048_GRHRxmKvIpjhOJgyfjl-WjBfgghjJj1qteTUIHn7jrPo=w252-h185-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4no7JFr1EHMCoNMvoItLIRaDEhtqOMP9h8aP8DT6FPsKnN_qniehYIHmsbcFMYPMWT2vya5sA8qptjrkmxc9I6CKq9JX_J6pjqzZGdKl9s-0hShkTVXNrmdJmXpxSm6yKazn4XR-=w252-h189-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4npm_dWFTlKhGqsJEAVpl_okoNSf5Qf0-5oyE0h7aJ9KZIkXcyk8qIYASeoFy7DGVMTz_8Xh5FG0eUpjwOm_UImKWDBgerCV42EDgc9Pm75yiFcS6uNMh2QyViR2EfiPyr9onpF2=w252-h168-k-no"], description: "Boutique stay with garden.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 58,000 / night", rating: "7.9", reviews: 42 },
        { name: "Résidence Sare Hotel", slug: "residence-saint-david", image: "https://lh3.googleusercontent.com/proxy/2fN3zyDnqn85ZTfmDo3VgVSCDXZ8a4xeC9RNuCrksFtR2dhJkTkRc0eLnMNZBT7mmiFDEkc0RH6cRFslQhNt7wVokGWt3oO9x8IvclrAHxla5GYUCzWDlptiwaBV0hxQMbxO9V-At6_q-SmSPrLzvQCPThZ_hQ=w252-h185-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4npVoePxr8QY7idnVXyWJZAdDjfLixywF4u92fvdQfj1AaurleNkTfwQHGORml4oYkGR2Ce91Dbu2e4Bv96w_KLh_7zTENqWSsw7zurjsIyq-IAJxML6w3mqoBLeC2jDJ3MMOrQ=w252-h189-k-no","https://lh5.googleusercontent.com/proxy/g-MDc_me3DlK3cu0sgIPPTYvOQvXuujj7Ca2U33C5ScQY-_By_c1dFocKreHpNugl_tBisneqgq2DFijTaGjxhuJFMcHoVpPKbBk8CcRedYE9Dq_4H4EZUta6_IV0mxVlijOmoZ03yNikEb5-El41fqxe_VeCw=w252-h185-k-no"], description: "Family-friendly hotel.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 52,000 / night", rating: "7.7", reviews: 33 }
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
      image: "https://irawotalents.com/wp-content/uploads/2018/02/ID4.png",
      hotels: [
        { name: "New town palace hotel", slug: "new-town-palace-hotel", image: "https://lh5.googleusercontent.com/proxy/cdCDsBDWujxDU-jJWBVFkWsV4bRMbnImxGDxt9eFYpQhBc11hxHO7RPLAiarOn53tT12MJLRYKWW_rLL9LQRlj-bILj3U1ZlyVRhH7Gfh2ByuR_yqmbxchwPVejbFs_7eiz9G42TSYABFRl0T8S1J1wstlomcP4=w253-h122-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrDBUXkxVOAiiqynWYRZ2aHoIe1NXYlX6M4ntefrDeSqStBu7YEsKK2wuWLcIgFoumNI-3yzhwzqic2I70Ic56_zA7FpfHbhQDnmfUvPnz8WScwOKhkGaMGTTA5czGHWVJzhHga=w253-h189-k-no"," https://lh3.googleusercontent.com/gps-cs-s/AC9h4no4wizRM12ubsj7TjN1twuqSPbkhyYSvX_2wWQNmvYr3A8Y2X4WA4v_jKubwdvshfoG4zMDyL0BW8iTwm45PwjuVa4EjRfLGdEmA12ZA2Lx0nvUMk3E0c_qSWaniGc99Jq1qk8pKg=w253-h142-k-no"], description: "Classic hotel by the river.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 75,000 / night", rating: "7.9", reviews: 55 },
        { name: "Hotel Rebadou ", slug: "hotel-rebadou", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npsxmI3FmJSNGE5yMzneQg0APIfKtCnRAW9-60VhXCLra3e-BMrBzjIQ9piMAsN6ulXuYqJNWG5b9RuxjqKr-c3Zwd-9Ega5LXt8iivByYSLFYmEnYLUwI08t_K1BuVRLSZPA0E=w252-h189-k-no", gallery: [" https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqYYskCMRcTobOK-f0NuAAUCaqXXmmYn_R7mLyrStb2yPUj0jsNn-oqWin3AGuLlmv99o5m-AqJAIwCirV8GPcX_mtOOht-thtXw4U0v_ie2QU_CaFsPilzWIKGh9hedTpJOgff=w252-h189-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr-IzMGgVUSpvvmjg4yv587tIeCdk5MK2P2f1IIWuC9A4BTbcG39orsT1vTyDEu5pdEzvLaIYWm3-RJcDZUwFm9VVa7680QO-wDj5JMUSvOHD1YaJGubUoInBroJEZtZeBUmWlQJw=w252-h189-k-no "], description: "Comfortable hotel with restaurant.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.6", reviews: 38 },
        { name: "Hotel La Benoue", slug: "hotel-la-benoue", image: "https://lh4.googleusercontent.com/proxy/ukwTw2r5_g_x8wsP5Zrf7CqjPLHOjadtCVAhAZ77XSyqRHH-oj44mPGKx80VKnOzS55hoScHshV5cu8VhqaJLJNTJZ2t_oqfbp_yQ9xZZuRH5tt572V_W_1rHmDEUJI8ol7AxxiPWFZuYlXiIc7HTmJ-9V5JJw=w252-h146-k-no", gallery: [" https://lh5.googleusercontent.com/proxy/zRpjOJo1f72_IIBRhavlSSl8K407rKubGlnTI6K58GYv9yf2oGJuWqgho3iE5MdC4joZ7V27Saxvalm626J5DwF8XH9NCAH9oyc5Ut93XcDQUOqGOAZOKsQ_LviaBOs1Yw7-sospIr5DemKiEYiq9nHj8NYbCA=w252-h168-k-no"," https://lh3.googleusercontent.com/gps-cs-s/AC9h4np_wyJBvCC6agAIKEFQTIWo66XVsciV3AyAscBwrK8kJyVZGeC_GEjEtNixA_3rcsSVJku7vihSKks17ldQkFjoI5RHvP1-PNuf37G7UzSrgAeaYTzTt8lSd2qQUSvJ3hK0r9vzpQ=w252-h189-k-no"], description: "Budget hotel in central Garoua.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 25 },
        { name: "Shalom City Hotel", slug: "shalom-city-hotel", image: "https://lh3.googleusercontent.com/p/AF1QipORUf8gjwU1qE89gZTXFp4az0Xbzpko5L0gjpJl=w252-h378-k-no", gallery: [" https://lh3.googleusercontent.com/p/AF1QipNm6Ma331PmGv64OgCNaEANVa68WAzSEnpvXVeO=w252-h320-k-no"," https://lh3.googleusercontent.com/gps-cs-s/AC9h4npqLYsJ5ik_kcM1w_TOHDh_vKNvuhW3wKBufZKSPLezLoAzrgYz1VQ7tpGT4KcMRNrkAXInT4VO7S3RwmMTYaZeM4HTfJ4uK38BlIC1BcYVo_EHYAuqMq6Rj20bI7nzayofNZvl=w252-h189-k-no"], description: "Boutique stay with garden.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.7", reviews: 30 },
        { name: "Christella Hotel", slug: "christella-hotel", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npMUcM_JtbPqMiPPdWb1vsX-qPQunJ2UxKPIrkOrsIV1jLz_fZ4hYktUzXM8Y0V0lxbBx3YWJpvVjC5jtq7bka4MLVRjQM9bmCRYEmIHbpiI5YaHDNqr93mSiuMTUMZs6Qfzj0omA=w252-h448-k-no", gallery: [" https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqesMM5c2DKy480e36HonJBL8fyF8xM4CV2RsfZpHn166b8bgODEcoefARjBTF4EElGSDh18ecW_3YJ-oyRQb2VGm1nB2FiPtY0Ge-w0S2kqHtLKphiPDMYK2Y1aQR1HFCtEO3G=w253-h449-k-no"," https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqgC640fnGVzeEUwaJAl0xOeTZN9ngnLTy2Egx7P9xcJZf8hJ8rrMzBtMKEmjFumDhu34kH58eMIhkXi64_H77SpQYOv7TRq2NcU6TE-kK8Bo5B9pwYAKOjxdy6mfkhzjDC_lE=w253-h316-k-no"], description: "Family-friendly residence.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 50,000 / night", rating: "7.5", reviews: 28 }
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
      image: "https://i.ytimg.com/vi/tTFBy2Vyonw/maxresdefault.jpg",
      hotels: [
        { name: "Maroua palace Hotel", slug: "maroua-palace-hotel", image: "https://lh3.googleusercontent.com/proxy/v7o5K4fkMuS18xHQV0OVHRw4VpxM4LMYvev6d57rj7Rsn8BZobGIp6EpqJXB8no60UasYRlz9IMI5FalxucNaTzEHNyTacy6sPlMzzg522EMtSp8rdqCJ714lJph3V5zLD7dxBqsmLOiDU553qx4PoiFL8V8HA=w252-h168-k-no", gallery: [" https://lh3.googleusercontent.com/proxy/1Z0Dilpf5EYD9YkUscxfFZabhUQs5KQAl1hV0s7fGfi9-9qiaQl7PjQeH2osNcyu-ryuntP3VUvESd_lofqlSg3YaPGDoWA5rrBx3Vni09gwtrMQFT4Eszgw3s_AhKKe804J9baXaxahdznOWi7E1mrE0DbBnPo=w252-h168-k-no","https://lh6.googleusercontent.com/proxy/_KQgkC8jdQqUm0Hf21cAYzPR7YRFEyyggrGQeLGDbXl84ae04wpugvcACY0FMn95N7djxLntW-2C8knrduo0uF0DKRaoExw6ICmX_yu3fxmk7-Ge6AifSTlRaMGKFt312Hd-7E9iCk36YmpC70Uw2AdswA2-IIQ=w252-h168-k-no"], description: "Popular stay with a pool and conference hall.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 70,000 / night", rating: "7.9", reviews: 52 },
        { name: "Hotel Bam Company", slug: "hotel-bam-company", image: "https://lh3.googleusercontent.com/p/AF1QipMPpy2QmrHbx2TyL9s5QyeMwce00Q444R2k5Kdy=w252-h167-k-no", gallery: ["https://lh3.googleusercontent.com/p/AF1QipMLZg7kPYrdldKHwAmHQ0DcIYC6xg0ERLtt017F=w252-h167-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4noZQCZt4ijPBtiI4J9bXUJpbKsb8NLr6QDOGWRvj9qRur-tkVIgnPOBQmrDCQ5e3wK-_xVaICyZpOLL4vZ0ry1EzlPVEiNoCPZBvDe3tz84Y-nOalsbWAjfc5_u24OB1WL6evAmvg=w252-h243-k-no"], description: "Comfortable hotel with restaurant & terrace.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.7", reviews: 39 },
        { name: "Sahel Hotel", slug: "sahel-hotel", image: "https://lh4.googleusercontent.com/proxy/LL_4maD8Hph3AY_1gLDwG8AnfpSSfWWTdRh4loVqNc0pBhQQW0yr8QuflrKylx-5hNL68899_3zyXnZCLvqL3neM6iuTNJSS3kfXvfzjCZZs1Vn90G9OUWpljHCfDugWEHGLWQ7zT_NbfOQIIMYXV127BJ6C9w=w252-h183-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq2kkugcIV-bVReDvJh2a6N8jEg7AzrWPO-IpT3a00x_unBPaMG2qzLzKSp7XAXz79QFzVVXnIy7Th-37qfqmOY_Loyr-1zpZHJli3uY1DwVibOUoOYvYnz0uQ_CYE6DCoBaAFZiA=w252-h189-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4npYSZMH7guSLrLGD06BuYw1istRrC1cFJYQvOjz9pEX2sj5lu1NIFzcU0_bm1_JcF2wB6snoBuNYUhBsWW5Yko3yNbMuASDFLpcKA2h602LxCVC6rIkwAvBR5xMHJP-QT-ILvxBJg=w253-h449-k-no"], description: "Budget-friendly rooms near city center.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 26 },
        { name: "Hotel Saphir", slug: "hotel-saphir", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq6hFroQbeVxlk6-Ebe0vDsE2NM80iR8JDdWBHpZyZbbiCfAMsrgPUTY0LGFvoBMKTQw7fjNqNnQysjZjwkjAOsTXZttJRTFGZwJi7O0YNn8TASprZ2QChtNp-iOzaXvtOLT2j5yw=w252-h252-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrFDPuX10G2jLh6bli-s_xeqH1EZQo-pXTzRWReLLocOZtzcLq__wzqR-fWU-yn8MyElrCvTpsEW-L0EkllS0_5LujKjIrEN-b3Q8hUgNWQQaH_k_R8Ucmfooaxbxz8_VkckLu9=w252-h189-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4nodFa1u3ZKUWg6hccl6XvXAQBs7lpW_DmUEzBSzslEQMZ8nArUZxX-47cHA_1ewjYH9T-cI55gSb70RDwbRbhyeOcjqziVQE2jj8TD0_KMRJxa3pMeLCeRzL4zCeFj36wRbhE1A=w252-h189-k-no"], description: "Calm environment with garden & bar.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 30 },
        { name: "Hirgoyo Hotel", slug: "hirgoyo-hotel", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noLiRkmb4iiJzaEnzvyaWGt2FhLd0whl7I7DAQzqlXLMUbhcnI0-Q5onSxqekAhk9lDNxazLtb5erZ7OIYcM3BbHcpIsjDy5L6MZ1heZU6iRTh3RkoMe7lnZCBK5h0DR1OvG8lxgw=w252-h168-k-no", gallery: [" https://lh3.googleusercontent.com/gps-cs-s/AC9h4np_-fYQXa533I0eNQ3jSqVKUNJY09jeF81e3xU47sT9Fm7Ubn-6359pLU9MjREOHAhjfvgO0sLANkZ6ANWgFrSjwkgqFKqllEb8reIOTCL1i5o5k6frii3auLRCHSpAsHCCukZ_LQ=w252-h168-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4np4EjZme5cJJ-IZOOVrx_HsBH5UkgYM5qBuY-agROf9FtbhqQU9nEfKfd0NwaRecRbd5jlPAAtYKqGPt1TSTjgr6Kc4POlCLB0sXuiLKWKj90_iFSbtCLqhMTcQx7P0QPFb8t4O=w253-h449-k-no"], description: "Family-friendly residence with terrace.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 50,000 / night", rating: "7.5", reviews: 28 }
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
      image: "https://discover-cameroon.com/wp-content/uploads/2015/04/Bertoua.jpg",
      hotels: [
        { name: "Hotel Martino", slug: "hotel-martino", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqMQUrrIkW2Yz1Bq-Fep4kttcdZAFlSudUwoCBa160vt9pJkuIX4oF_jkn1tfLvKf4Yye25k7rCpl94Cr6PWpV3IloMv27PCXOj-AntyF1LwqvHxababaRvn1nT0fOuPaL2LKBm=w253-h449-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrGmc-EX2g9UKHe6Cvy5f0yyFUmGeo59v_JTv1nvIa5CcGrcF9oCKAJB2xHqkAtuHtudQrzvefMfP1y-KS08W1UCGimaB8w9ViMtDPnz4lckujzKCJbCaZzi6wtw1w1SM9Gfqk=w253-h337-k-no "," https://lh3.googleusercontent.com/gps-cs-s/AC9h4noXL8dkmTR9cp88Ft5k7-yT1MGGt-2d1jh2YdYD5l-KP8s73qfRTbvOqTiDmtZeuK3nTvPlKrDOiXowozLo67TD3dOI5uZc1ASNKU0Nho3A0FhhsH4t1LKhJK-PeWzxZfHB5AL-=w253-h189-k-no"], description: "Central hotel with restaurant & pool.", amenities: ["Free WiFi","Breakfast included","Pool"], price: "XAF 75,000 / night", rating: "7.9", reviews: 48 },
        { name: "Hotel Mansa", slug: "hotel-mansa", image: "https://lh6.googleusercontent.com/proxy/mUIk9VvD7-Cjl_9sBda-k9Ka9yd2gJOmvDcI0u9WNXJz_UA24XzbRR1ONO-7umLgm9jeZrcFcT6bz2Icd5ucWs9XqXNKd5jWj5I8EFPaO2PcvRDEuoZgyECPuNeqZxk3v7oSYdiUl54REy0dWsOIKxsJMCpE1ok=w252-h168-k-no", gallery: [" https://lh6.googleusercontent.com/proxy/owWeSffu8jTXN1reQEY-aWM3WzXRUywxZhYUjJZCB29CxbohgsfFM16cNGU-x12jeH7t07mjYQqmY6d3vdZXa3UlE6Z_L7qM7DNsopgGEsJ99t_gLngYdNZQNpvifj6EGEg1pwPgpavcVx0DZwZEXvnkQURGIA=w252-h168-k-no"," https://lh3.googleusercontent.com/gps-cs-s/AC9h4nooY6zlTyldEFljdIMVFo6iNt6iY14_ys-mPNqyVvevOqFifJLBmvRoQVD2UFiIAITJdqjyVG3_rU7qIpdzzeWqNE9QTTdf-6En3BQRdd66tZ8sUJZTe9waXfFcefJ8GNrjfS6l=w252-h189-k-no"], description: "Well-known in Bertoua for its spacious rooms.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 60,000 / night", rating: "7.7", reviews: 37 },
        { name: "Hotel Massoh", slug: "hotel-massoh", image: "https://lh5.googleusercontent.com/proxy/VgiPuidDBHp2nX0oYV39zZUeoc8h0G52pM2FVb8Yo00nxKS0abP9JL6in0bRBEMg7VHnz4u6kiTS5mrq3NauBJnYxG0Oc3Jc3hYpydkwu5ZvhhwEf0YphlL2Rs72z1DmVqIfH6Ss87CC2Wns-0EciIIrzkFoDA=w252-h168-k-no", gallery: [" https://lh4.googleusercontent.com/proxy/O2fvE0qNUEOTh9zkJro8ZFGPQyXQrDhIL5AkDguncNdcxZNeuj_rAv3Zpjpc4B18KlYgZRui6a4kqCbU_j-EsnvfLcvbiF3W2_trPzRlVjMcCnrJFxmBFrdHAYIRFKMh_nofy1yX3qIGdotT06aGKDuMX04k4w=w252-h168-k-no"," https://lh4.googleusercontent.com/proxy/8k0ePvUcxSo7vLT8vN1yOCFQNrxigDmNwWLbpH9C3FbTM9byZ4Kgu9Qkfo7qjqMfk-osMvsxPwMUZVHXm8jPZRNncxAZrZwipielZnANrqZtg6iocH_Mbr5AqoJZryy_bimarqlsW1GV6kAhFgqffsGHz7kWKA=w252-h168-k-no"], description: "Budget-friendly hotel near city center.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.4", reviews: 24 },
        { name: "Hotel Montagnia", slug: "hotel-montagnia", image: "https://lh5.googleusercontent.com/proxy/AKDUu-WNVsvjCQqWoFfoOBUiQ6xtqt3NtWBtYJGLwSsaNZn4CPOiTIlwRQ5IF7-3mBgTFdBRC3UNHzsD9vlA9S-0BhRF3MJAsFw2ZNbQF0K2UjwcGYtfw8O9IznqzwIRrSdhwcDUQdkafelFo7lpr36QKK8eoQ=w252-h189-k-no", gallery: [" https://lh3.googleusercontent.com/gps-cs-s/AC9h4no42lYJZ-0-KQonO1ZyCcphXyFrsXkDs09JMvnu3DklMQxDRAGlh1vbH_z2vx4fZnFJH8EYN82c7vAitwgzwJRfdn38bmSgY7KU1NfkzrW43KjNlWUnypN9nM0dwgzSG-VlT9tn=w253-h253-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4nruPQqlTHnPVy5s1KAJaIIfr1kBN7CRmqiePxo6OiuLWrPEujGeQ3g2gS_u0-xW3kQu8p-_lhnaquW-_uJ5QR2nM-AiwmPRKcjVSikcYsygj4s1gfb6z9CNb8hNVK-X_EQu11k=w253-h449-k-no"], description: "Quiet place with garden & bar.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 28 },
        { name: "Hotel Pheonix", slug: "hotel-pheonix", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npaRft2erQQN-e9aeSVeKl2gXsMk2CcWHLG-yuFHTCHbOnByEj6GHdTxCJe1Nl1zVphR6EGtULTaOz_X6qv_kzd6K0aQyeNAj0ql4EFsOFdJalb4mUhTNbLdigPv8ZYJRqbon77bg=w252-h336-k-no", gallery: [" https://lh3.googleusercontent.com/gps-cs-s/AC9h4np6pixFmBmqITeFbT-_ljfpb1YGL_ryaFvzLNPJshDRFMPIMgbFZN4xDumLLurke5krkXur3dBIyrAVu71EIj9JLxZYtNsj1u4r5bQtTAn_b1ivau_oIdmzn93cCAtXKAbaMVXO=w252-h336-k-no"," https://lh3.googleusercontent.com/gps-cs-s/AC9h4norIqbXjP9yOG9GjlxHHQ8XTNcpojuQz3OIRRuRjIbMN-gyw0Xj4Ddf4cvYTgt3-6KMPZ6FOYw2MxC6eJmGjfuHIEOTZWR6_ewMt-KzohKfG0nFTPu8Rej8Oss38moqLwLJbI5U=w252-h336-k-no"], description: "Family-friendly hotel.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 50,000 / night", rating: "7.5", reviews: 26 }
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
      image: "https://i.ytimg.com/vi/mLZkPo17Kxk/maxresdefault.jpg",
      hotels: [
        { name: "Hotel Ndancy", slug: "hotel-ndancy", image: "https://lh4.googleusercontent.com/proxy/iQX8nBmO9Ufwbru0nyyw_maxxxwdpQd12R1I9Fta16feJmqKvqksJDBm3HoKRgPN_maGLOfCAvDjld-BHYrbUtnB1kgqSrc7XLEPFHfV_D8f8e8sULHQajq4BvOeWCr6MNE32sF1Ccs5XdAtX2VmzdHpjt6LG6o=w252-h168-k-no", gallery: ["https://lh4.googleusercontent.com/proxy/9ln8qA2UzbgGFR4zjltqzpiO7p5ZZPUP7pEU_PGStqemSeeQro3S9Xq6WAReDGfOJfUy8Ton_Rjt3dRqB-jgw1HfsqXYY9fo17mckprzWAN7OLb0piGcW9ao-bZz7D3WzmHWpxL8oi8Z0ulvs0ErpjnHS4GMOw=w252-h168-k-no","https://lh3.googleusercontent.com/p/AF1QipNrdUOMOWKqx1GJ3u9UMSdoz9vsizvJeM_idw2Q=w252-h189-k-no"], description: "Central hotel with restaurant & terrace.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 65,000 / night", rating: "7.8", reviews: 33 },
        { name: "Hotel Boulon", slug: "hotel-boulon", image: "https://lh3.googleusercontent.com/p/AF1QipOWO8hq_LCHo8b7fhqWMBrqrapQqUfncwRPgWNv=w252-h189-k-no", gallery: ["https://lh4.googleusercontent.com/proxy/yPQfdgYFRjy_8CRXu0-8D7vINf3rkvpjIWR6ysjdpOEGAZQ5BztR18m-dCAuQwXevsrhiY1DVO9X69bdM3u7Ty5E0VIOX0jdJwq6AO225wns_Yjq9F8xTPBQYUCMqDPKwWx5maGIn2mkbG8kwd9jYCsuGerLV3o=w252-h168-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrx_X5V7sv7-KVk4-sbRKTTLl6fM9Q2y4A82_yPpyyw1QKFcyg2xL_IOssxPF6pX-OYGSTiYLD-hu9GS7KVmWWLKxrjdJkQbq6gwDEmpJ8IHhchApAKhfu1pZtNmcAQYJDSKKjAKQ=w252-h168-k-no"], description: "Spacious rooms with free WiFi.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 25 },
        { name: "Hotel Bengo", slug: "hotel-bengo", image: "https://lh6.googleusercontent.com/proxy/sg0Yu2XP40hONbmgdM03_IqyohqUctCQMwh4B-MkmrF0QeN5WjkZOzfX5vksrRI_HQCn9E89jeP24-c227LjOeIkDhUto2uD6MO1DbV8lBU77mWI76mhGSacyFc0JKKg_uEQgaJIoE9O3hfc6Kdaw5XFtR-giZA=w253-h142-k-no", gallery: ["https://lh6.googleusercontent.com/proxy/iR03FF8aSjv5ToXGrWe4V_JqZI1YIiHWnZJRHlgefbcp3Q3ctsJZ9QqARyMxMdeLfbqs2n2mzwwNPg8CPEN8jM4gXp-kYL8Vg5xJWOAk0RFPDc9flBR9_biekSpsi12of9NHLKKdHS0xXIph7_nFKypaUc1nYqU=w253-h142-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4notH9zOMf2QjRBQZIV0_dzl9OtMjbrtrvwIPi_j0ddrozYiNBvb7sDkCkFWU0tiVKfeEur67V5ne5xvKpWoRI5wBOy6ZW1PnINyIl1RsQL2WNLv8twRY3m_JPa7CZBW9zSf2XY=w253-h142-k-no"], description: "Comfortable stay with bar.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 50,000 / night", rating: "7.5", reviews: 24 },
        { name: "Kapso Hotel", slug: "kapso-hotel", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrLQjdMy6pUbu4M2cHpaBQKJS7azBtOVB6kdq-cAisftPsHh2MTVczBqZPCB99iS4S6faPAAh8Aj-qM1XueP_mMgJBRLARXSF6S3liylyJbQJc1CglE8dCC8xCbytSOa6YMbRzZFg=w253-h113-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrbQdPuza4p4lhebOHV072qIYRDT8ORp2BIr1qmgRy5BlLMeXOEfCfT9HANdEbAcC1EyPGKPiSFiNzrCjd-ZYZKVIGqJDkZrE8NSlqmf6-2qoCC1W5z7_lhkiudWUCBh6TMvhDM=w252-h448-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqJvu4wXeIhYMRtBVs-9KOZp3aLspZMhtS23pJfj_5URP65mRX0XTRbW_UOVJyksE1i05U6_z-wssmcKyPfMCK80XwsvrF6tCaFADLPqmrUI0GUeEQXrBoxT0eHG5jB_abTB7kS=w253-h142-k-no"], description: "Modern hotel with parking & garden.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 58,000 / night", rating: "7.6", reviews: 26 },
        { name: "Hotel Pluminite", slug: "hotel-pluminite", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noIdOircQikvRSAaHc5ubakb44hfydcKtWT8Ev-GJqJ_rHU_4II6SP_6cxcsHBj3to05Z0Ffg0k07mu7pj0_ff0Lq8TQD-ZSIPh99v8n8zCWfttg4voWucSN1lv4YiGy6yTLoU=w253-h337-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4no8m_InJ76Vp8w5NeC3uqihPb1a_fvR4hHfrp_pKijxPx5pSNGQROOg9_GG7G_HRoMv-3oqhDDi0Owpw79eevCBnyBeVqT2bZcVM6iXQOQ5kCudaAbJgFLwHC_C8PjDR6-qN7krpePGybfC=w253-h190-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4npJElHuXZe5bC59Ai4_K3YHyyrahIo0GIGlLFMjLbgFJ2UMzQa_g_71RwGexubJIoH0AsbhbDciQvwLNXdk3LSihGhX_fgF9UJzSlqw2dfLCHxz6iXEGHModuN1L-pjagoiKMSxIcUqqEA5=w252-h218-k-no"], description: "Budget-friendly rooms.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 20 }
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
      image: "https://www.shutterstock.com/shutterstock/photos/2456142031/display_1500/stock-photo-aerial-of-lake-tison-ngaoundere-adamawa-region-northern-cameroon-africa-2456142031.jpg",
      hotels: [
        { name: "Hotel Plus Sarl", slug: "hotel-plus-sarl", image: "https://lh3.googleusercontent.com/proxy/2uXBaxUdyQ_1T_dwyzKVmYDZq9ZdqR9YHS0XWonWKiSU5Wj9587D_PK3xC7VXE4R98O97J--cmPROkno0KZSUriVA1STzkR-HDSxMoFfh-Lx9PDdfY6l14PkTqAQO7TxRDQrfPT1PWIUfoP_seeFYSOyRw3lSj4=w252-h168-k-no", gallery: [" https://lh4.googleusercontent.com/proxy/XS5mc2WIuhdhMQE4cmdeqCoPwKmFDdjxeTud8rLpnyeCItTgX-b0eXSReQx63I2tghJ7j2la_v84Akwa0FNzKMOqeeioBhTd3OKvVlnX99URkUBAUUiTSzXjowKP0sIp3XynKxI09OWxzpSu59x-lZpBOXAW1g=w252-h168-k-no"," https://lh3.googleusercontent.com/gps-cs-s/AC9h4npj_FFwvsyd0UQEzdHg7A6TyqbdmfQSowrg0_UdXfAcF5ahQU4y75sHhY9SKaUd1DpZ-jchwONA-bPBcowKyN9z3-Itgt_sOHaH8HkRk-WZ7ndVmIJd-6h4MDrzfn71aSksSAjS=w253-h562-k-no"], description: "Central hotel with conference facilities.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 65,000 / night", rating: "7.8", reviews: 34 },
        { name: "ZEN Hotel", slug: "zen-hotel", image: "https://lh3.googleusercontent.com/p/AF1QipMMan5SVkZCNaYg1guFQIyjFGFDO_nP312Osb4=w252-h166-k-no", gallery: ["https://lh3.googleusercontent.com/p/AF1QipODlXy_KmpNm3hIIIWnb3HO3jAspdQzyj3yNHE=w252-h167-k-no","https://lh3.googleusercontent.com/p/AF1QipM-UFMoBAZv94y9lhoMmt3owTAtWchndaQyyjc=w252-h167-k-no"], description: "Family-friendly residence.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 55,000 / night", rating: "7.6", reviews: 25 },
        { name: "Hotel Vina Palace", slug: "hotel-vina-palace", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqthEzfWkzTfMhbJMT-EsVKU-bai9IcfDBadQbxjAIiT6cTVX4y5W5ig_EsB2fB_RGdf36P7ek-b0LLpczTs5_Y--7Of0PzrvqesTCNhvKQolIMGHRmkNy1OPs7j3ufvK__SDlu=w252-h336-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqMgSeE1bnW-y78l5zSdw1_K-_mCYfuUEoOkzXCmOKdlz-wYp4NAIZ5HRlVRMIOjU3738h7tkw_bd83ct1zT33G42pvAu0c0mBohyU-NtrI36Z1YViaI5L7B8BTBiZd1dkT4C0h=w253-h142-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4npkuOmV2sk1L2ejz07c4G9y_MJFxJjDRAKcJ9UuDjo-GIeyryz_eim8JHukZsnqMweEDYUxTLw40aqpuJ_bIxqQZmu07zs7dM1a_d-E4LX3Uoskr75uvuwM6q7ddXtvRyMR5VMF=w253-h337-k-no"], description: "Budget-friendly hotel near train station.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 22 },
        { name: "Transcam Hotel", slug: "transcam hotel", image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no4z2VV4w9bHXeSvMQd5GL10eFPdBktVn_u5LcNuZmkWCg_xCjygvA3NS0DXyO_5hEI1wB3UoMVOdl9oiFWDmSiWQpwhc9WOYxjCfKCO4Q6sCVtUmFdcumstl-TIBfUmOgxLko=w253-h189-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrFUtVTbfkwpSObsALAVf5yKUARJXkAVzWuDPqF9s2IHKCy9cvQBsFq6WEKe_Bp12PjeAqL23NV6Yj_hbCPeh-yvWWpH49ROpxkJePk4n-kZR3Trwddpy_320r5Ck1XuWPjNw73=w253-h189-k-no","https://lh6.googleusercontent.com/proxy/Mab16cKGYxfyGgtBpW32WCqfixGYdMOfjejK4oBDb8NNpX76i0jO8A1090P2VrZTI7nUo5TlCGwVjDNhPg5miQ0p-cJ8FygitEM_HB2Q_Uuxia0K_oEgsjLExuGz6PlAViQeBnTgVxf4JwJ2SzdGQc73rJlRcw=w252-h168-k-no"], description: "Calm environment with garden.", amenities: ["Free WiFi","Breakfast included"], price: "XAF 58,000 / night", rating: "7.6", reviews: 26 },
        { name: "Hotel Mentong", slug: "hotel-mentong", image: "https://lh3.googleusercontent.com/p/AF1QipP2gakiE_qNiuuvxDBjFI8FbKpKbkU83hN--aY=w252-h167-k-no", gallery: ["https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrGhL5tkbaLCw9yk-RwAAgHzi4xd8mG_slja06aoFtfYJ_CXSleE0r_tVqS-vzgHTSOVCW3ZXaoQQux0pO6NueHcRu3eo5X0g_356EqFGGVLGMJ34dTFVdWvBPcACe_JYBJTNdl=w252-h167-k-no","https://lh3.googleusercontent.com/gps-cs-s/AC9h4np0disCWeTcJWc-ho22TDNkjOaqNsLYoafmwNf3jDj8gMJCJ3HTDk4RRyDDvZXOka7LahB6pw41ePf6mhWGuwOzg-I6JESvBq5ti-zsKNwhtQI9amo3E2p0g8yaOSgeq2XJCTyl=w252-h167-k-no"], description: "Affordable stay in the city center.", amenities: ["Free WiFi"], price: "XAF 45,000 / night", rating: "7.3", reviews: 20 }
      ]
    }
  ]
}
];