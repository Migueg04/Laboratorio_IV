type Peleador = {
  id: number;
  nombreCompleto: string;
  edad: number;
  serie: string;
  imagen: string;
};

export function getPeleadores(): Peleador[] {
  return [
    {
      id: 1,
      nombreCompleto: "Ed",
      edad: 12,
      serie: "Ed, Edd n Eddy",
      imagen:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/vlcsnap_2015_11_18_23h23m31s319.png",
    },
    {
      id: 2,
      nombreCompleto: "Johnny Bravo",
      edad: 27,
      serie: "Johnny Bravo",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BMTMxMjI2NzU1NV5BMl5BanBnXkFtZTcwOTY0OTAwMw@@._V1_.jpg",
    },
    {
      id: 3,
      nombreCompleto: "Mordecai Bluejay",
      edad: 23,
      serie: "Regular Show",
      imagen:
        "https://m.media-amazon.com/images/S/pv-target-images/8ed32fa85a403d6ffd0b628a9f2e73d700f59b6ab8a5a5fcf138694718811f3c.jpg",
    },
    {
      id: 4,
      nombreCompleto: "Shaggy Rogers",
      edad: 17,
      serie: "Scooby-Doo mistery incorporated",
      imagen:
        "https://www.excelsior.com.mx/800x600/filters:format(webp):quality(75)/media/pictures/2022/10/06/2835185.jpg",
    },
    {
      id: 5,
      nombreCompleto: "Ben Tennyson",
      edad: 10,
      serie: "Ben 10",
      imagen:
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/static-assets-upload13185194768052720097-Cropped.jpg",
    },
    {
      id: 6,
      nombreCompleto: "Samurai Jack",
      edad: 25,
      serie: "Samurai Jack",
      imagen:
        "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/3e782d6a-3f32-4494-af91-9110dd9ec558/775cdbeb-3a43-4a55-98b9-cddb50a5ef07?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    },
    {
      id: 7,
      nombreCompleto: "Dexter McPherson",
      edad: 8,
      serie: "Dexter's Laboratory",
      imagen:
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/04/Best-Creations-From-Dexters-Laboratory.jpg",
    },
    {
      id: 8,
      nombreCompleto: "Billy",
      edad: 10,
      serie: "The Grim Adventures of Billy & Mandy",
      imagen:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYegFbTdUuJuV0NDmiNuW6pNtkCS_1VUGLSpHQFZOgJG1XazntE1U8jsJGCnkul4-jbpCkbYiBuuSBrjiqCi1X0W286nNpsYPO5BfTS_GMRLgqYnW2eQf6STR5eMMfetDbfalf2plKzQQy/s400/billy+mandy+1.jpg",
    },
    {
      id: 9,
      nombreCompleto: "Clarence Wendle",
      edad: 10,
      serie: "Clarence",
      imagen:
        "https://m.media-amazon.com/images/S/pv-target-images/cc76342dcd8f543700d1198fd81bb5eb65a8efceb81cfa6e4d5665bb3d18ffbe._SX1080_FMjpg_.jpg",
    },
    {
      id: 10,
      nombreCompleto: "Buttercup Utonium",
      edad: 5,
      serie: "The Powerpuff Girls",
      imagen:
        "https://cdn.hanna-barberawiki.com/thumb/6/6d/Buttercup_Utonium.png/1200px-Buttercup_Utonium.png",
    },
    {
      id: 11,
      nombreCompleto: "Steven Universe",
      edad: 14,
      serie: "Steven Universe",
      imagen:
        "https://assets.teenvogue.com/photos/5da4a5ffa554aa00097346a6/4:3/w_1080,h_810,c_limit/Ent_Steven-Universe_PROMO.jpg",
    },
    {
      id: 12,
      nombreCompleto: "Gumball Watterson",
      edad: 12,
      serie: "The Amazing World of Gumball",
      imagen:
        "https://cdn.hanna-barberawiki.com/thumb/9/9c/Gumball_Watterson.png/1200px-Gumball_Watterson.png",
    },
    {
      id: 13,
      nombreCompleto: "Chowder",
      edad: 10,
      serie: "Chowder",
      imagen:
        "https://m.media-amazon.com/images/S/pv-target-images/57d3ad5d1b5a021dd5efdf2fe0ce9d5d474b6abae665b6583f0d466f407f6405._SX1080_FMjpg_.jpg",
    },
    {
      id: 14,
      nombreCompleto: "Courage",
      edad: 7,
      serie: "Courage the Cowardly Dog",
      imagen:
        "https://m.media-amazon.com/images/S/pv-target-images/260022f5616ccd942da978bda99b5f35d63fc4ef1bf589a9331d72b4714a58f9._SX1080_FMjpg_.jpg",
    },
    {
      id: 15,
      nombreCompleto: "Robin",
      edad: 13,
      serie: "Teen Titans",
      imagen:
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/teen-titans-robin-featured-image-cropped.jpg",
    },
    {
      id: 16,
      nombreCompleto: "Finn Mertens",
      edad: 17,
      serie: "Adventure Time",
      imagen:
        "https://pm1.aminoapps.com/6419/2916e33b3e0a7a34ca8fcd643a94382c0dee8a0b_hq.jpg",
    },
  ];
}
