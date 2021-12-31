export const networkCollections = {

  "ganache":
   //"Local Chain"
  {
    image:
    "https://gateway.ipfs.io/ipfs/QmRG7cGWQehPhBGYDLbJhJvRMaM3A3jXSRMeosEZaN73bD/15.png",
  name: "Crypto Devs",
  addrs: "0xF13AbF133559069671aA7A53efD748c4745376B8",
  },
 



  "0x13881": [
    //Add Your Collections here
    {
      image:
        "https://gateway.ipfs.io/ipfs/QmRG7cGWQehPhBGYDLbJhJvRMaM3A3jXSRMeosEZaN73bD/15.png",
      name: "mumbai test",
      addrs: "0x351bbee7C6E9268A1BF741B098448477E08A0a53",
     
    },

    {
      image:
        "https://gateway.ipfs.io/ipfs/QmRG7cGWQehPhBGYDLbJhJvRMaM3A3jXSRMeosEZaN73bD/15.png",
      name: "Other Collection",
      addrs: "0x33AEbBF9a6Cc2aa385095149A06219B6728b0D02",
      
    },


  ],

  "0xa869": [
    //Avalanche testnet
    {
      image:
        "https://gateway.ipfs.io/ipfs/QmRG7cGWQehPhBGYDLbJhJvRMaM3A3jXSRMeosEZaN73bD/7.png",
      name: "Outsiders Test Collection Avax Test",
      addrs: "0x9abf023631108ad4c246b00ef042e3b5a980c851",
    },

    {
      image:
      "https://ipfs.moralis.io:2053/ipfs/QmeTseSsgWXRuYVUcG5FvhAXSWgddsaCLZdFyNEgJaHa32",
      name: "Our NFT Factory",
      addrs: "0x55c30B939AEDe26401e4169973469bc06cc7F42a",
    }
  ],

  "0x1": [
    {
      image:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130",
      name: "Bored Ape Yacht Club",
      addrs: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    },
    {
      image:
        "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130",
      name: "Crypto Punks",
      addrs: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    },
    {
      image:
        "https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s0",
      name: "Bored Ape Kennel Club",
      addrs: "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
    },
    {
      image:
        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
      name: "Doodles",
      addrs: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
    },
    {
      image:
        "https://lh3.googleusercontent.com/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s=s0",
      name: "0N1 Force",
      addrs: "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D",
    },
    {
      image:
        "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s0",
      name: "Mutant Ape Yacht Club",
      addrs: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
    },
    {
      image:
        "https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s0",
      name: "CyberKongz",
      addrs: "0x57a204AA1042f6E66DD7730813f4024114d74f37",
    },
    {
      image:
        "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s0",
      name: "Cool Cats NFT",
      addrs: "0x1A92f7381B9F03921564a437210bB9396471050C",
    },
  ],
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
