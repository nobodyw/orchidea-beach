import chambre1 from "../../../../../public/assets/Categories/Chambres/chambre1.jpeg";
import chambre2 from "../../../../../public/assets/Categories/Chambres/chambre2.jpeg";
import chambre3 from "../../../../../public/assets/Categories/Chambres/chambre3.jpeg";
import chambre4 from "../../../../../public/assets/Categories/Chambres/chambre4.jpeg";

import restaurant1 from "../../../../../public/assets/Categories/Restaurant/restaurant1.jpeg";

import massage1 from "../../../../../public/assets/Categories/Massage/massage1.jpeg";
import massage2 from "../../../../../public/assets/Categories/Massage/massage2.jpeg";

import plage1 from "../../../../../public/assets/Categories/Plage/plage1.jpeg";

export const categories = [
    {
      name: "Chambre",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      images: [
        chambre1,
        chambre2,
        // chambre3,
        // chambre4,
      ],
    },
    {
      name: "Restaurant",
      description: "Texte restaurant",
      images: [
        restaurant1,
      ],
    },
    {
      name: "Massage",
      description: "Texte massage",
      images: [
        massage1,
        massage2,
      ],
    },
    {
      name: "Plage",
      description: "Texte plage",
      images: [
        plage1,
      ],
    },
  ];