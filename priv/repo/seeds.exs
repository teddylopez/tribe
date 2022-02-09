alias Tribe.Accounts
alias Tribe.Products.Product
alias Tribe.Repo

Accounts.register_user(%{
  email: "ted@tribe.com",
  password: "password"
})

Repo.insert!(%Product{
  name: "New Era Washington Nationals Black 2019 World Series Champions Locker Room Knit Hat",
  price: 19.95,
  rating: 4.0,
  image_url: "https://m.media-amazon.com/images/I/71SVBe1f+mL._AC_UL640_FMwebp_QL65_.jpg"
})

Repo.insert!(%Product{
  name: "Rawlings Heart of The Hide Baseball Glove Series",
  price: 294.88,
  rating: 4.0,
  image_url: "https://m.media-amazon.com/images/I/81jmFCYnkKL._AC_UL640_FMwebp_QL65_.jpg"
})

Repo.insert!(%Product{
  name: "Gibson Firebird 1997",
  price: 2300.19,
  rating: 4.0,
  image_url:
    "https://images.reverb.com/image/upload/s--H_z8bT5Z--/f_auto,t_supersize/v1570209321/jd1hda2rvfjgsaltyoc8.png"
})

Repo.insert!(%Product{
  name: "DHD Mini Twin Surfboard",
  price: 849.99,
  rating: 5.0,
  image_url:
    "https://cdn.shopify.com/s/files/1/0242/3305/0167/products/DHD-Mini-Twin-Mandala-Sky-PU_shopify_1080x.png?v=1590471264"
})

Repo.insert!(%Product{
  name: "Martin 000-28 Guitar",
  price: 3899.09,
  rating: 5.0,
  image_url: "https://www.martinguitar.com/media/10449/00028_f.jpg"
})

Repo.insert!(%Product{
  name: "The Big Lebowski The Dude Pajama Pants (Adult X-Large)",
  price: 35.99,
  rating: 4.0,
  image_url: "https://m.media-amazon.com/images/I/61QEuxafNAL._AC_UY436_FMwebp_QL65_.jpg"
})

Repo.insert!(%Product{
  name: "Meat Shredder Claws",
  price: 39.99,
  rating: 4.0,
  image_url:
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571689550-51Q0xuEOjRL.jpg?crop=1xw:1.00xh;center,top&resize=768:*"
})

Repo.insert!(%Product{
  name: "Fender American Ultra Telecaster RW Arctic Pearl w/Hardshell Case",
  price: 1899.99,
  rating: 5.0,
  image_url: "https://images-na.ssl-images-amazon.com/images/I/61AOc3sn14L._AC_SL1500_.jpg"
})

Repo.insert!(%Product{
  name: "Taco Sleeping Bag",
  price: 49.99,
  rating: 5.0,
  image_url:
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571765609-tacoblanket-1571765561.jpg?crop=1xw:1xh;center,top&resize=768:*"
})

Repo.insert!(%Product{
  name: "Karaoke Earphone",
  price: 29.99,
  rating: 2.0,
  image_url:
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571686268-51ZIPzbooyL.jpg?crop=0.608xw:0.689xh;0.392xw,0.311xh&resize=768:*"
})

Repo.insert!(%Product{
  name: "AK-47 bullet ice cube tray",
  price: 4.99,
  rating: 5.0,
  image_url: "https://www.rd.com/wp-content/uploads/2019/07/35.jpg"
})

Repo.insert!(%Product{
  name: "An engagement ring",
  price: 1799.99,
  rating: 3.0,
  image_url: "https://www.rd.com/wp-content/uploads/2019/07/39.jpg"
})

IO.puts("Database updated...")
