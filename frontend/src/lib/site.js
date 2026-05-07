// Brand constants for Retro Bakes Store
export const SITE = {
  name: "Retro Bakes Store",
  tagline: "Bangalore's Favorite Dessert Spot",
  description:
    "Freshly baked cakes, cheesecakes, brownies & custom celebrations made with love.",
  rating: 4.8,
  reviews: 197,
  address: "107, 8th Main Rd, Vijayanagar, Bengaluru",
  phone: "073376 63417",
  phoneIntl: "+917337663417",
  whatsapp: "917337663417",
  hours: [
    { day: "Mon – Thu", time: "11:00 AM — 10:30 PM" },
    { day: "Fri – Sun", time: "10:30 AM — 11:30 PM" },
  ],
  instagram: "https://instagram.com/retrobakesstore",
  mapsEmbed:
    "https://www.google.com/maps?q=107%2C+8th+Main+Rd%2C+Vijayanagar%2C+Bengaluru&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Retro+Bakes+Store+Vijayanagar+Bengaluru",
};

export const FEATURED = [
  {
    id: "rasmalai",
    name: "Rasmalai Cake",
    desc: "Saffron-kissed sponge layered with rasmalai cream and pistachio shards.",
    price: 169,
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1759324351433-c5a1063f8ac6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc2xpY2UlMjBkZXNzZXJ0JTIwY2FrZXxlbnwwfHx8fDE3NzgxNzA3MDZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "blueberry",
    name: "Blueberry Cheesecake",
    desc: "Slow-baked New York cheesecake under wild blueberry compote.",
    price: 189,
    tag: "Chef's Pick",
    img: "https://images.unsplash.com/photo-1773620496695-73c2086abf39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwc2xpY2UlMjBkZXNzZXJ0JTIwY2FrZXxlbnwwfHx8fDE3NzgxNzA3MDZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "chocolate",
    name: "Sinful Chocolate Cake",
    desc: "Triple-layer Belgian chocolate with molten ganache centre.",
    price: 199,
    tag: "Cult Favourite",
    img: "https://images.unsplash.com/photo-1774119633885-ed59d028e3c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwc2xpY2UlMjBkZXNzZXJ0JTIwY2FrZXxlbnwwfHx8fDE3NzgxNzA3MDZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "hazelnut",
    name: "Brownie with Hazelnut",
    desc: "Fudgy dark brownie crowned with hazelnut praline & gold flakes.",
    price: 149,
    tag: "Loved by 197+",
    img: "https://images.unsplash.com/photo-1777630321592-6e0f3e3c4f41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwc2xpY2UlMjBkZXNzZXJ0JTIwY2FrZXxlbnwwfHx8fDE3NzgxNzA3MDZ8MA&ixlib=rb-4.1.0&q=85",
  },
];

export const REVIEWS = [
  {
    name: "Aanya R.",
    role: "Birthday Celebration · Vijayanagar",
    text: "The chocolate hazelnut cake was unreal — molten centre, soft crumb, and gold flakes that made the photos pop. Every guest asked where it was from.",
    stars: 5,
  },
  {
    name: "Karan & Meera",
    role: "Anniversary Custom Cake",
    text: "We sent a Pinterest reference at midnight and Retro Bakes nailed it. Premium taste at a price that didn't break us. New family favourite.",
    stars: 5,
  },
  {
    name: "Shreya N.",
    role: "Couple's Cafe Date",
    text: "Came for cheesecake, stayed for the vibe. Warm lighting, gentle jazz, and the rasmalai cake actually tasted like home. So Instagram-worthy.",
    stars: 5,
  },
  {
    name: "Rahul T.",
    role: "Custom Birthday Cake",
    text: "Ordered a theme cake for my daughter — they hand-piped every detail. Affordable luxury done right. Already booking the next one.",
    stars: 5,
  },
  {
    name: "Priya M.",
    role: "Office Surprise",
    text: "Brownies arrived warm, cheesecake travelled perfectly. The packaging itself felt like a gift. Easily the best dessert spot in Bengaluru.",
    stars: 5,
  },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1775830154800-2b5c539c7fd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY3VzdG9tJTIwYmlydGhkYXklMjBjYWtlfGVufDB8fHx8MTc3ODE3MDcwNnww&ixlib=rb-4.1.0&q=85",
    span: "col-span-2 row-span-2",
    label: "Anniversary Cake",
  },
  {
    src: "https://images.unsplash.com/photo-1773620496695-73c2086abf39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwc2xpY2UlMjBkZXNzZXJ0JTIwY2FrZXxlbnwwfHx8fDE3NzgxNzA3MDZ8MA&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 row-span-1",
    label: "Cheesecake",
  },
  {
    src: "https://images.unsplash.com/photo-1759324351433-c5a1063f8ac6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc2xpY2UlMjBkZXNzZXJ0JTIwY2FrZXxlbnwwfHx8fDE3NzgxNzA3MDZ8MA&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 row-span-1",
    label: "Rasmalai",
  },
  {
    src: "https://images.unsplash.com/photo-1726828952313-385d63df2514?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwY3VzdG9tJTIwYmlydGhkYXklMjBjYWtlfGVufDB8fHx8MTc3ODE3MDcwNnww&ixlib=rb-4.1.0&q=85",
    span: "col-span-2 row-span-1",
    label: "Cake Setup",
  },
  {
    src: "https://images.unsplash.com/photo-1777630321592-6e0f3e3c4f41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwc2xpY2UlMjBkZXNzZXJ0JTIwY2FrZXxlbnwwfHx8fDE3NzgxNzA3MDZ8MA&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 row-span-1",
    label: "Brownie",
  },
  {
    src: "https://images.unsplash.com/photo-1774119633885-ed59d028e3c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwc2xpY2UlMjBkZXNzZXJ0JTIwY2FrZXxlbnwwfHx8fDE3NzgxNzA3MDZ8MA&ixlib=rb-4.1.0&q=85",
    span: "col-span-1 row-span-1",
    label: "Chocolate",
  },
  {
    src: "https://images.unsplash.com/photo-1714328864044-9b3af0a6b48b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxkYXJrJTIwbHV4dXJ5JTIwYmFrZXJ5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzc4MTcwNzA2fDA&ixlib=rb-4.1.0&q=85",
    span: "col-span-2 row-span-1",
    label: "Bakery Ambience",
  },
];
