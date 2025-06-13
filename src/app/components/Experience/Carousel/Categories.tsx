import chambre1 from "../../../../../public/assets/Categories/Chambres/chambre1.jpeg";
import chambre2 from "../../../../../public/assets/Categories/Chambres/chambre2.jpeg";
// import chambre3 from "../../../../../public/assets/Categories/Chambres/chambre3.jpeg";
// import chambre4 from "../../../../../public/assets/Categories/Chambres/chambre4.jpeg";

import restaurant1 from "../../../../../public/assets/Categories/Restaurant/restaurant1.jpeg";

import massage1 from "../../../../../public/assets/Categories/Massage/massage1.jpeg";
import massage2 from "../../../../../public/assets/Categories/Massage/massage2.jpeg";

import plage1 from "../../../../../public/assets/Categories/Plage/plage1.jpeg";

export const categories = [
    {
      name: "Chambre",
      description: "Profitez du confort de nos chambres spacieuses, décorées avec soin et équipées pour un séjour relaxant. Chaque chambre offre une vue apaisante et un cadre idéal pour se ressourcer après une journée à la plage ou d’excursion.",
      images: [
        chambre1,
        chambre2,
        // chambre3,
        // chambre4,
      ],
    },
    {
      name: "Restaurant",
      description: "Savourez une cuisine locale et internationale dans notre restaurant lumineux. Nos chefs sélectionnent des produits frais pour vous offrir des plats gourmands, à déguster dans une ambiance conviviale face à la mer.",
      images: [
        restaurant1,
      ],
    },
    {
      name: "Massage",
      description: "Offrez-vous un moment de détente absolue avec nos massages bien-être. Nos praticiens expérimentés vous accueillent dans un espace zen pour des soins relaxants, parfaits pour relâcher toutes les tensions.",
      images: [
        massage1,
        massage2,
      ],
    },
    {
      name: "Plage",
      description: "Accédez directement à une plage de sable fin, idéale pour la baignade, le farniente ou les balades au coucher du soleil. Un cadre naturel préservé pour profiter pleinement de l’océan Indien.",
      images: [
        plage1,
      ],
    },
  ];