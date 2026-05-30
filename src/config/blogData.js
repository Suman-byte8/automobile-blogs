// Blog Data - Sample blog posts organized by category

const blogPosts = [
  // ---- NEWS / CAR NEWS ----
  {
    id: "post-1",
    slug: "2026-toyota-camry-hybrid-review-launch",
    title: "2026 Toyota Camry Hybrid Launches with 50+ MPG and All-Wheel Drive",
    excerpt:
      "Toyota has unveiled the 2026 Camry Hybrid featuring a redesigned powertrain that delivers over 50 MPG combined, now available with all-wheel drive for the first time in the hybrid lineup.",
    content: `<p>The 2026 Toyota Camry Hybrid represents a significant leap forward for Toyota's best-selling sedan. With the new fifth-generation hybrid system, the Camry achieves an impressive 52 MPG combined while producing 225 horsepower.</p>
    <p>For the first time ever, Toyota is offering the Camry Hybrid with an electronic on-demand all-wheel-drive system. This system uses a separate electric motor to power the rear wheels when additional traction is needed, making the Camry more versatile for drivers in all climates.</p>
    <h2>Redesigned Interior</h2>
    <p>The interior has been completely redesigned with a driver-focused cockpit featuring a standard 12.3-inch touchscreen infotainment system with wireless Apple CarPlay and Android Auto. Premium materials throughout the cabin elevate the Camry's position in the midsize sedan segment.</p>
    <p>Toyota's latest Safety Sense 3.0 suite comes standard across all trims, including pre-collision warning, lane departure alert, adaptive cruise control, and road sign assist.</p>
    <h2>Pricing and Availability</h2>
    <p>The 2026 Camry Hybrid starts at $29,500 for the LE trim and goes up to $38,200 for the range-topping XSE AWD. It will arrive at dealerships in early 2026.</p>`,
    author: {
      name: "Marcus Chen",
      avatar: "/images/authors/marcus.jpg",
      bio: "Senior automotive journalist with 15 years of experience covering the auto industry. Former engineer turned writer.",
    },
    date: "2026-01-15",
    category: "car-news",
    featuredImage: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    featuredImageAlt: "2026 Toyota Camry Hybrid in silver",
    tags: ["Toyota", "Camry", "Hybrid", "Sedan", "2026 Models"],
    relatedPosts: ["post-3", "post-7", "post-10"],
    featured: true,
  },
  {
    id: "post-2",
    slug: "ford-mustang-gtd-nurburgring-record",
    title: "Ford Mustang GTD Sets New Nürburgring Record for American Cars",
    excerpt:
      "The Ford Mustang GTD has shattered records at the Nürburgring, becoming the fastest American production car to ever lap the legendary German circuit with a blistering time.",
    content: `<p>The Ford Mustang GTD has made history at the Nürburgring Nordschleife, posting a lap time of 6:57.685 — making it the fastest American production car to ever tackle the Green Hell.</p>
    <p>Powered by a supercharged 5.2-liter V8 producing over 800 horsepower, the GTD features active aerodynamics, carbon-ceramic brakes, and a transaxle rear-mounted eight-speed dual-clutch transmission. This is the most extreme Mustang ever built for the road.</p>
    <h2>Record-Breaking Performance</h2>
    <p>The GTD's lap time puts it in the company of hypercars costing three times as much. Ford's engineers spent over two years developing the aerodynamics package specifically for Nordschleife performance.</p>
    <p>Key features enabling this record include the active rear wing that provides up to 200 pounds of downforce, the pushrod suspension adapted from motorsport, and bespoke Michelin Pilot Sport Cup 2 R tires developed specifically for this application.</p>
    <h2>Limited Production</h2>
    <p>Ford will produce only 1,000 units of the Mustang GTD, with each carrying a price tag of approximately $300,000. Deliveries are expected to begin in Q2 2026.</p>`,
    author: {
      name: "Sarah Rodriguez",
      avatar: "/images/authors/sarah.jpg",
      bio: "Motorsport correspondent and performance car specialist. Has driven over 500 cars on tracks worldwide.",
    },
    date: "2026-01-12",
    category: "car-news",
    featuredImage: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&q=80",
    featuredImageAlt: "Ford Mustang GTD on track",
    tags: ["Ford", "Mustang", "GTD", "Nürburgring", "Performance", "Record"],
    relatedPosts: ["post-4", "post-5", "post-1"],
    featured: true,
  },
  // ---- NEWS / BIKE NEWS ----
  {
    id: "post-3",
    slug: "2026-harley-davidson-livewire-s2-del-mar",
    title: "Harley-Davidson LiveWire S2 Del Mar: The Electric Revolution Goes Mainstream",
    excerpt:
      "Harley-Davidson's LiveWire brand introduces the S2 Del Mar, an electric motorcycle aimed at making EV riding accessible with a sub-$15,000 price point and 100-mile city range.",
    content: `<p>The LiveWire S2 Del Mar represents a pivotal moment for Harley-Davidson's electric division. Priced at $14,999, it's the most affordable electric motorcycle from a major manufacturer with genuine performance credentials.</p>
    <p>The Del Mar uses LiveWire's second-generation Arrow powertrain, producing 80 horsepower and 184 lb-ft of torque. The 0-60 mph sprint happens in just 3.1 seconds, making it quicker than many sport bikes from a stoplight.</p>
    <h2>Urban-Focused Design</h2>
    <p>With a 100-mile city range and DC fast charging capability (20-80% in 40 minutes), the Del Mar is purpose-built for urban commuters. The flat-track-inspired design sets it apart visually from traditional electric motorcycles.</p>
    <p>The lightweight modular chassis contributes to a curb weight of just 435 pounds, making the Del Mar accessible to riders of all experience levels.</p>
    <h2>Technology Integration</h2>
    <p>A 4-inch TFT display with smartphone connectivity provides navigation, ride modes, and over-the-air update capability. LiveWire's app allows owners to monitor charging status and locate stations.</p>`,
    author: {
      name: "Alex Thompson",
      avatar: "/images/authors/alex.jpg",
      bio: "Motorcycle enthusiast and tech reviewer. Covers the intersection of two wheels and emerging technology.",
    },
    date: "2026-01-10",
    category: "bike-news",
    featuredImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    featuredImageAlt: "LiveWire S2 Del Mar electric motorcycle",
    tags: ["Harley-Davidson", "LiveWire", "Electric Motorcycle", "EV"],
    relatedPosts: ["post-4", "post-1", "post-8"],
    featured: false,
  },
  // ---- NEWS / EV NEWS ----
  {
    id: "post-4",
    slug: "tesla-cybertruck-production-milestone-500k",
    title: "Tesla Cybertruck Hits 500,000 Production Milestone Amid Strong Demand",
    excerpt:
      "Tesla has announced that Cybertruck production has reached 500,000 units, marking a significant achievement for the controversial electric pickup truck that continues to divide opinion.",
    content: `<p>Tesla's Cybertruck has reached a production milestone of 500,000 units, CEO Elon Musk announced during the Q4 2025 earnings call. The angular electric pickup has overcome initial production challenges to become one of America's best-selling electric vehicles.</p>
    <p>The Austin, Texas Gigafactory is now producing approximately 50,000 Cybertrucks per quarter, with plans to increase output as supply chain constraints ease. The company has also introduced a more affordable single-motor variant starting at $60,990.</p>
    <h2>Market Impact</h2>
    <p>The Cybertruck has disrupted the traditional pickup market, with Tesla reporting that 40% of Cybertruck buyers are first-time truck owners. The vehicle's unique stainless steel exoskeleton and steer-by-wire system continue to attract attention — both positive and negative.</p>
    <h2>What's Next</h2>
    <p>Tesla is reportedly working on a smaller, more affordable electric pickup codenamed "Model 2 Pickup" for global markets. Meanwhile, the Cybertruck will begin deliveries in Europe and Australia in late 2026.</p>`,
    author: {
      name: "Marcus Chen",
      avatar: "/images/authors/marcus.jpg",
      bio: "Senior automotive journalist with 15 years of experience covering the auto industry.",
    },
    date: "2026-01-08",
    category: "ev-news",
    featuredImage: "https://images.unsplash.com/photo-1715880894524-41d6c2b77b69?w=800&q=80",
    featuredImageAlt: "Tesla Cybertruck on road",
    tags: ["Tesla", "Cybertruck", "Electric Vehicle", "Production", "EV"],
    relatedPosts: ["post-1", "post-2", "post-9"],
    featured: true,
  },
  // ---- NEWS / MOTORSPORT ----
  {
    id: "post-5",
    slug: "f1-2026-regulations-revealed-active-aero",
    title: "F1 2026 Regulations Revealed: Active Aero and Sustainable Fuels Take Center Stage",
    excerpt:
      "The FIA has unveiled the comprehensive 2026 Formula 1 technical regulations featuring active aerodynamics, 100% sustainable fuels, and a revised power unit formula aimed at closer racing.",
    content: `<p>The FIA has officially published the 2026 Formula 1 technical regulations, introducing the most significant rules overhaul in over a decade. The new regulations focus on three key areas: active aerodynamics, sustainable fuels, and a simplified yet more powerful hybrid system.</p>
    <p>Cars will feature movable front and rear wings that drivers can adjust between a low-drag "Z-mode" for straights and a high-downforce "X-mode" for corners. This active aero system eliminates the need for DRS while creating more overtaking opportunities.</p>
    <h2>Sustainable Fuel Revolution</h2>
    <p>All F1 cars will run on 100% advanced sustainable fuel produced from carbon capture and non-food biomass. This "drop-in" fuel works with existing internal combustion engines and is being developed for eventual road-car application.</p>
    <h2>Power Unit Changes</h2>
    <p>The new power units eliminate the MGU-H, increasing the MGU-K's electrical output to 350 kW. Combined with a more powerful V6 turbo, total system output approaches 1,000 horsepower despite using less fuel than ever before.</p>`,
    author: {
      name: "Sarah Rodriguez",
      avatar: "/images/authors/sarah.jpg",
      bio: "Motorsport correspondent and performance car specialist.",
    },
    date: "2026-01-05",
    category: "motorsport",
    featuredImage: "https://images.unsplash.com/photo-1635853295122-66d1ed6344cd?w=800&q=80",
    featuredImageAlt: "Formula 1 car on track",
    tags: ["F1", "Formula 1", "Motorsport", "FIA", "Regulations", "2026"],
    relatedPosts: ["post-2", "post-6", "post-1"],
    featured: true,
  },
  // ---- REVIEWS / VEHICLE REVIEWS ----
  {
    id: "post-6",
    slug: "2026-bmw-i5-m60-review-electric-sports-sedan",
    title: "2026 BMW i5 M60 Review: The Electric Sports Sedan That Converts Skeptics",
    excerpt:
      "We spend a week with the 2026 BMW i5 M60, the most powerful electric 5 Series ever made. With 593 horsepower and a luxurious interior, does it capture the essence of the ultimate driving machine?",
    content: `<p>After spending a week with the 2026 BMW i5 M60, I can confidently say this is the car that will convert electric vehicle skeptics. The i5 M60 delivers 593 horsepower and 586 lb-ft of torque through dual electric motors, propelling this luxury sedan from 0-60 mph in just 3.3 seconds.</p>
    <p>But numbers only tell part of the story. What makes the i5 M60 special is how it delivers that performance — with the poise, balance, and engagement that BMW enthusiasts demand. The rear-wheel steering and adaptive M suspension create a driving experience that belies the car's 5,200-pound weight.</p>
    <h2>Interior Excellence</h2>
    <p>The curved display housing both the 12.3-inch instrument cluster and 14.9-inch infotainment screen dominates the dashboard. iDrive 9 is responsive and intuitive, though some physical climate controls would be welcome. The available Bowers & Wilkins surround sound system is among the best in any vehicle at any price.</p>
    <h2>Range and Charging</h2>
    <p>With an EPA-estimated 295 miles of range and 205 kW DC fast charging capability (10-80% in 30 minutes), the i5 M60 is a genuinely usable daily driver. Our real-world testing returned 270 miles in mixed driving, impressive for a performance-oriented EV.</p>
    <h2>Verdict</h2>
    <p>At $85,000 as tested, the i5 M60 isn't cheap, but it delivers a compelling blend of luxury, performance, and technology that few competitors can match. It earns our highest recommendation.</p>`,
    author: {
      name: "Marcus Chen",
      avatar: "/images/authors/marcus.jpg",
      bio: "Senior automotive journalist with 15 years of experience.",
    },
    date: "2026-01-14",
    category: "vehicle-reviews",
    featuredImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    featuredImageAlt: "2026 BMW i5 M60 in blue",
    tags: ["BMW", "i5", "Electric", "Review", "Sports Sedan", "M60"],
    relatedPosts: ["post-7", "post-1", "post-4"],
    featured: true,
  },
  // ---- REVIEWS / COMPARISONS ----
  {
    id: "post-7",
    slug: "kia-ev9-vs-rivian-r1s-electric-suv-comparison",
    title: "Kia EV9 vs Rivian R1S: Which 3-Row Electric SUV Reigns Supreme?",
    excerpt:
      "We put the Kia EV9 and Rivian R1S head-to-head in an exhaustive comparison of the two most compelling three-row electric SUVs on the market today.",
    content: `<p>The three-row electric SUV segment is heating up, and two vehicles stand out: the Kia EV9 and the Rivian R1S. Both offer seating for up to seven, impressive electric range, and distinct approaches to the family hauler formula.</p>
    <p>We spent a week with each vehicle, testing them across identical routes covering highway commuting, suburban errands, and a 500-mile road trip to determine which one deserves your money.</p>
    <h2>Pricing and Value</h2>
    <p>The Kia EV9 starts at $54,900 for the Light RWD trim and tops out at $73,900 for the GT-Line AWD. The Rivian R1S starts at $77,900 for the Adventure Dual-Motor and reaches $92,900 for the Quad-Motor. The Kia clearly wins on value, offering similar space and range for significantly less money.</p>
    <h2>Performance and Capability</h2>
    <p>The R1S Quad-Motor produces 835 horsepower and hits 60 mph in 3.1 seconds, while the EV9 GT-Line manages 379 horsepower and a 4.5-second sprint. However, the Rivian's off-road capability far exceeds the Kia's, with adjustable air suspension and dedicated off-road modes.</p>
    <h2>Interior and Practicality</h2>
    <p>Both offer genuine three-row usability, but the EV9's second-row captain's chairs and more accessible third row give it a slight edge for families. The R1S counters with a larger frunk and more cargo capacity overall.</p>
    <h2>Winner</h2>
    <p>For most families, the Kia EV9 offers better value. For those prioritizing performance and off-road ability, the Rivian R1S is the clear choice.</p>`,
    author: {
      name: "Alex Thompson",
      avatar: "/images/authors/alex.jpg",
      bio: "Motorcycle enthusiast and tech reviewer. Covers the intersection of two wheels and emerging technology.",
    },
    date: "2026-01-09",
    category: "comparisons",
    featuredImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    featuredImageAlt: "Kia EV9 and Rivian R1S side by side",
    tags: ["Kia", "EV9", "Rivian", "R1S", "Comparison", "Electric SUV"],
    relatedPosts: ["post-6", "post-4", "post-8"],
    featured: false,
  },
  // ---- GUIDES / BUYING GUIDES ----
  {
    id: "post-8",
    slug: "best-electric-cars-under-40000-2026",
    title: "Best Electric Cars Under $40,000 in 2026: Complete Buying Guide",
    excerpt:
      "Our comprehensive guide to the best electric cars available under $40,000 in 2026, covering range, charging speed, features, and real-world ownership costs.",
    content: `<p>The sub-$40,000 electric car market has never been more competitive. With federal tax credits, state incentives, and improving technology, going electric is more accessible than ever. Here is our definitive guide to the best options in 2026.</p>
    <h2>1. Tesla Model 3 Rear-Wheel Drive — $37,990</h2>
    <p>The refreshed Model 3 offers 272 miles of range, access to Tesla's Supercharger network, and the most refined version of Tesla's minimalist interior. The 2026 update brings ventilated front seats and improved noise insulation.</p>
    <h2>2. Hyundai Ioniq 6 SE — $38,900</h2>
    <p>With its sleek aerodynamic design and 361 miles of range (SE trim), the Ioniq 6 is the range king under $40,000. The 800V architecture enables 10-80% charging in just 18 minutes at compatible stations.</p>
    <h2>3. Chevrolet Equinox EV 1LT — $34,995</h2>
    <p>The Equinox EV brings 319 miles of range and generous interior space at an unbeatable price. GM's Ultium platform delivers solid efficiency and a comfortable ride quality.</p>
    <h2>4. Ford Mustang Mach-E Select — $39,995</h2>
    <p>The Mach-E combines Mustang-inspired styling with 250 miles of range and engaging driving dynamics. Ford's BlueCruise hands-free highway driving is available as an option.</p>
    <h2>Key Buying Considerations</h2>
    <p>When shopping, consider total cost of ownership including insurance, home charger installation, and local electricity rates. Most owners save $800-1,200 annually compared to gasoline equivalents.</p>`,
    author: {
      name: "Marcus Chen",
      avatar: "/images/authors/marcus.jpg",
      bio: "Senior automotive journalist with 15 years of experience.",
    },
    date: "2026-01-07",
    category: "buying-guides",
    featuredImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    featuredImageAlt: "Electric cars charging at station",
    tags: ["Electric Cars", "Buying Guide", "Affordable EVs", "2026"],
    relatedPosts: ["post-4", "post-7", "post-10"],
    featured: true,
  },
  // ---- GUIDES / ACCESSORIES ----
  {
    id: "post-9",
    slug: "best-dash-cams-2026-complete-guide",
    title: "Best Dash Cams of 2026: Protect Yourself with These Top Picks",
    excerpt:
      "We test and rank the best dash cams for every budget in 2026, from budget-friendly 1080p options to premium 4K models with cloud connectivity and AI-powered features.",
    content: `<p>A dash cam is one of the most important accessories you can buy for your vehicle. In 2026, the technology has advanced significantly, with 4K resolution, AI-powered driver assistance, and cloud connectivity becoming mainstream.</p>
    <h2>1. Vantrue Nexus N5 — Best Overall</h2>
    <p>The Vantrue Nexus N5 leads our list with its 4K front recording, 2K rear camera, and built-in GPS. The Sony STARVIS 2 sensor delivers exceptional night vision, while the parking mode with radar detection keeps your car protected 24/7.</p>
    <h2>2. Garmin Dash Cam Mini 3 — Best Budget</h2>
    <p>At just $129, the Garmin Mini 3 is tiny enough to hide behind your rearview mirror while still capturing crisp 1080p HDR footage. Voice control and Garmin's excellent mobile app make it a breeze to use.</p>
    <h2>3. BlackVue DR970X-2CH — Best Premium</h2>
    <p>For those wanting the best, the BlackVue delivers 4K front and 1080p rear recording with built-in cloud connectivity. The parking mode with impact and motion detection provides comprehensive coverage.</p>
    <h2>Installation Tips</h2>
    <p>We recommend hardwiring your dash cam for clean installation and parking mode functionality. Most professional installers charge $75-150 for a clean setup.</p>`,
    author: {
      name: "Alex Thompson",
      avatar: "/images/authors/alex.jpg",
      bio: "Motorcycle enthusiast and tech reviewer.",
    },
    date: "2026-01-03",
    category: "accessories",
    featuredImage: "https://images.unsplash.com/photo-1612367286802-07bf57fcde89?w=800&q=80",
    featuredImageAlt: "Dash cam mounted in car",
    tags: ["Dash Cams", "Accessories", "Car Tech", "Safety", "2026"],
    relatedPosts: ["post-8", "post-10", "post-6"],
    featured: false,
  },
  // ---- MORE CAR NEWS ----
  {
    id: "post-10",
    slug: "honda-prelude-returns-2026-hybrid-coupe",
    title: "Honda Prelude Returns for 2026 as a Hybrid Sports Coupe",
    excerpt:
      "Honda has confirmed the return of the iconic Prelude nameplate for 2026 as a sleek hybrid sports coupe, bridging the gap between the Civic Si and the upcoming electric sports car.",
    content: `<p>Honda has officially confirmed that the Prelude will return to its lineup for the 2026 model year, reviving a nameplate that has been dormant since 2001. The new Prelude will arrive as a hybrid sports coupe, featuring Honda's two-motor hybrid system tuned for performance.</p>
    <p>The exterior design takes inspiration from the well-received concept shown at the 2025 Tokyo Auto Show, with a long hood, short deck proportions, and a wide stance that signals its sporting intentions. LED lighting elements and a subtle integrated rear spoiler complete the modern yet timeless look.</p>
    <h2>Powertrain Details</h2>
    <p>The hybrid system pairs a 2.0-liter Atkinson-cycle four-cylinder with two electric motors, producing a combined 210 horsepower. While not overwhelming on paper, Honda engineers have tuned the system for immediate throttle response and a simulated gear-shift experience that mimics a traditional automatic.</p>
    <h2>Market Positioning</h2>
    <p>Priced around $32,000, the Prelude slots between the Civic Si and the upcoming electric sports car Honda is developing. It's aimed at buyers who want style, efficiency, and engagement without the premium price of European coupes.</p>`,
    author: {
      name: "Sarah Rodriguez",
      avatar: "/images/authors/sarah.jpg",
      bio: "Motorsport correspondent and performance car specialist.",
    },
    date: "2025-12-28",
    category: "car-news",
    featuredImage: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=800&q=80",
    featuredImageAlt: "Honda Prelude concept in red",
    tags: ["Honda", "Prelude", "Hybrid", "Sports Coupe", "2026"],
    relatedPosts: ["post-1", "post-6", "post-2"],
    featured: false,
  },
  // ---- MORE POSTS ----
  {
    id: "post-11",
    slug: "ducati-panigale-v4-2026-superbike-unveiled",
    title: "Ducati Panigale V4 2026: The Most Powerful Production Superbike Ever",
    excerpt:
      "Ducati raises the superbike bar with the 2026 Panigale V4, producing 240 horsepower from its Desmosedici Stradale engine and featuring MotoGP-derived aerodynamics.",
    content: `<p>Ducati has unveiled the 2026 Panigale V4, and it is the most powerful production superbike ever built. The Desmosedici Stradale V4 engine now produces 240 horsepower in track configuration, with 228 horsepower available in road-legal trim.</p>
    <p>The new aerodynamic package, derived directly from Ducati's MotoGP program, generates 35% more downforce than the previous model while reducing drag. New winglets integrated into the fairing design provide stability under hard braking and cornering.</p>
    <h2>Chassis Upgrades</h2>
    <p>The front frame has been revised for improved front-end feel, and the new Öhlins NPX 30 electronically controlled suspension adapts to road conditions in real-time. Carbon fiber wheels reduce unsprung weight by 2.5 kg.</p>
    <h2>Electronics Suite</h2>
    <p>Ducati's latest electronics package includes cornering ABS, traction control, wheelie control, slide control, and launch control — all adjustable through the new 6.9-inch TFT display. The data acquisition system now includes GPS lap timing as standard.</p>`,
    author: {
      name: "Alex Thompson",
      avatar: "/images/authors/alex.jpg",
      bio: "Motorcycle enthusiast and tech reviewer.",
    },
    date: "2025-12-20",
    category: "bike-news",
    featuredImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    featuredImageAlt: "Ducati Panigale V4 in red",
    tags: ["Ducati", "Panigale", "Superbike", "Motorcycle"],
    relatedPosts: ["post-3", "post-5", "post-2"],
    featured: false,
  },
  {
    id: "post-12",
    slug: "best-family-suvs-2026-comparison",
    title: "Best Family SUVs of 2026: Toyota Grand Highlander vs Kia Telluride vs Honda Pilot",
    excerpt:
      "We compare the three best three-row family SUVs of 2026 to help you decide which one deserves a spot in your garage.",
    content: `<p>The three-row family SUV segment is the most competitive in the automotive industry. For 2026, three vehicles rise above the rest: the Toyota Grand Highlander, Kia Telluride, and Honda Pilot. We've tested them all to help you make the right choice.</p>
    <h2>Toyota Grand Highlander — Best Overall</h2>
    <p>The Grand Highlander offers three powertrain options including the impressive Hybrid Max with 362 horsepower and 27 MPG combined. The third row is genuinely usable for adults, and Toyota's reputation for reliability provides peace of mind.</p>
    <h2>Kia Telluride — Best Value</h2>
    <p>The refreshed Telluride continues to impress with its upscale interior, generous standard features, and class-leading warranty. The X-Pro trim adds genuine off-road capability without sacrificing on-road comfort.</p>
    <h2>Honda Pilot — Best to Drive</h2>
    <p>The Pilot's new V6 and 10-speed automatic deliver the most engaging driving experience of the group. The TrailSport trim offers legitimate off-road chops, and Honda's flexible seating system is brilliantly practical.</p>`,
    author: {
      name: "Marcus Chen",
      avatar: "/images/authors/marcus.jpg",
      bio: "Senior automotive journalist with 15 years of experience.",
    },
    date: "2025-12-15",
    category: "comparisons",
    featuredImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    featuredImageAlt: "Family SUVs lined up",
    tags: ["SUV", "Family", "Comparison", "Toyota", "Kia", "Honda"],
    relatedPosts: ["post-7", "post-8", "post-1"],
    featured: false,
  },
  // Extra posts for pagination
  {
    id: "post-13",
    slug: "porsche-911-hybrid-2026-first-drive",
    title: "2026 Porsche 911 Hybrid First Drive: Electrification Done Right",
    excerpt:
      "We drive the first-ever hybrid Porsche 911, and it proves that electrification can enhance rather than dilute the iconic sports car experience.",
    content: `<p>The idea of a hybrid Porsche 911 has been controversial among purists, but after driving the 2026 Carrera GTS Hybrid, those concerns evaporate within the first mile. Porsche has used electrification not to dull the experience but to sharpen it.</p>
    <p>The hybrid system, derived from the 919 Hybrid LMP1 race car, adds an electric turbocharger and an e-motor integrated into the PDK transmission. Total output is 478 horsepower, with the electric motor filling torque gaps for instantaneous throttle response.</p>
    <h2>Weight and Balance</h2>
    <p>Despite the hybrid components, weight increase is limited to just 110 pounds. Porsche achieved this through lightweight battery technology and by integrating the e-motor directly into the gearbox housing. The 911's legendary balance remains intact.</p>
    <h2>The Verdict</h2>
    <p>The 911 Hybrid isn't just a good hybrid sports car — it's a better 911. The electric assistance enhances every aspect of the driving experience without compromising what makes the 911 special.</p>`,
    author: {
      name: "Sarah Rodriguez",
      avatar: "/images/authors/sarah.jpg",
      bio: "Motorsport correspondent and performance car specialist.",
    },
    date: "2025-12-10",
    category: "vehicle-reviews",
    featuredImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    featuredImageAlt: "2026 Porsche 911 Hybrid on mountain road",
    tags: ["Porsche", "911", "Hybrid", "Sports Car", "Review"],
    relatedPosts: ["post-6", "post-2", "post-1"],
    featured: false,
  },
  {
    id: "post-14",
    slug: "best-car-wax-ceramic-coatings-2026",
    title: "Best Car Wax and Ceramic Coatings of 2026: Expert Tested",
    excerpt:
      "We test 15 of the most popular car waxes and ceramic coatings to help you protect your vehicle's paint and achieve a showroom shine at home.",
    content: `<p>Protecting your car's paint doesn't require a professional detailer. We tested 15 consumer-grade waxes and ceramic coatings over three months to find the best options for every budget and skill level.</p>
    <h2>Best Ceramic Coating: Gtechniq Crystal Serum Light</h2>
    <p>This professional-grade coating is surprisingly DIY-friendly and provides 3-5 years of protection. It withstands automatic car washes and chemical degreasers without degrading.</p>
    <h2>Best Spray Wax: Turtle Wax Hybrid Solutions Ceramic Spray</h2>
    <p>At just $15, this spray wax delivers impressive hydrophobic properties and UV protection. It's perfect for maintenance between full details and takes just 15 minutes to apply.</p>
    <h2>Best Traditional Wax: Meguiar's Ultimate Liquid Wax</h2>
    <p>For those who enjoy the process, Meguiar's synthetic polymer formula provides deep gloss and 6+ months of durability. The liquid format makes application easier than traditional paste waxes.</p>`,
    author: {
      name: "Alex Thompson",
      avatar: "/images/authors/alex.jpg",
      bio: "Motorcycle enthusiast and tech reviewer.",
    },
    date: "2025-12-05",
    category: "accessories",
    featuredImage: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    featuredImageAlt: "Car detailing products on workbench",
    tags: ["Car Care", "Detailing", "Wax", "Ceramic Coating", "Accessories"],
    relatedPosts: ["post-9", "post-8", "post-7"],
    featured: false,
  },
  {
    id: "post-15",
    slug: "rivian-r2-revealed-affordable-electric-suv",
    title: "Rivian R2 Revealed: $45,000 Electric SUV Promises 330-Mile Range",
    excerpt:
      "Rivian has taken the wraps off its most important vehicle yet — the R2, a compact electric SUV starting at $45,000 that aims to bring the brand to the masses.",
    content: `<p>Rivian has officially revealed the R2, a compact electric SUV that represents the company's most significant product launch since the R1T truck. Starting at $45,000 with a target range of 330 miles, the R2 is Rivian's play for the mainstream market.</p>
    <p>The R2 retains Rivian's distinctive design language with the stadium headlights and clean surfacing that made the R1S stand out. However, it's been scaled down to a more city-friendly footprint roughly the size of a Jeep Grand Cherokee.</p>
    <h2>Interior Innovation</h2>
    <p>Inside, Rivian has adopted a more approachable design with physical controls for climate and volume. Both front seats fold flat, enabling a camp mode that allows two people to sleep inside. The rear glass drops down independently of the tailgate.</p>
    <h2>Production Timeline</h2>
    <p>Production begins in early 2026 at Rivian's Normal, Illinois plant, with first deliveries expected by summer. Reservations are now open with a fully refundable $100 deposit.</p>`,
    author: {
      name: "Marcus Chen",
      avatar: "/images/authors/marcus.jpg",
      bio: "Senior automotive journalist with 15 years of experience.",
    },
    date: "2025-11-28",
    category: "ev-news",
    featuredImage: "https://images.unsplash.com/photo-1696894054785-b54e7dba8e7f?w=800&q=80",
    featuredImageAlt: "Rivian R2 electric SUV concept",
    tags: ["Rivian", "R2", "Electric SUV", "EV", "Affordable"],
    relatedPosts: ["post-4", "post-7", "post-8"],
    featured: false,
  },
  {
    id: "post-16",
    slug: "motogp-2026-calendar-preview",
    title: "MotoGP 2026 Calendar: 22 Races Across 18 Countries Announced",
    excerpt:
      "Dorna Sports has revealed the 2026 MotoGP calendar featuring 22 races, including a return to Brazil and a brand-new night race in Saudi Arabia.",
    content: `<p>MotoGP will visit 18 countries across 22 rounds in 2026, with the season kicking off in Qatar on March 1 and concluding in Valencia on November 15. The calendar includes several notable changes from the 2025 schedule.</p>
    <p>Brazil returns to the calendar for the first time since 2004 at the newly upgraded Autódromo de Goiânia. Saudi Arabia debuts with a night race at the Qiddiya Speed Park circuit, a purpose-built facility designed by Hermann Tilke.</p>
    <h2>Key Dates</h2>
    <p>The summer break runs from July 19 to August 9. The triple-header sequence of Japan, Australia, and Malaysia returns in October, while the Americas triple-header (Argentina, COTA, Brazil) anchors the spring schedule.</p>
    <h2>Technical Updates for 2026</h2>
    <p>The 2026 season also introduces revised tire pressure regulations and updated concession tiers designed to close the competitive gap between manufacturers.</p>`,
    author: {
      name: "Sarah Rodriguez",
      avatar: "/images/authors/sarah.jpg",
      bio: "Motorsport correspondent and performance car specialist.",
    },
    date: "2025-11-20",
    category: "motorsport",
    featuredImage: "https://images.unsplash.com/photo-1630854862169-94e5d03d4e88?w=800&q=80",
    featuredImageAlt: "MotoGP race start",
    tags: ["MotoGP", "2026", "Calendar", "Racing", "Motorsport"],
    relatedPosts: ["post-5", "post-11", "post-2"],
    featured: false,
  },
];

// Category display names
export const categoryNames = {
  "car-news": "Car News",
  "bike-news": "Bike News",
  "ev-news": "EV News",
  motorsport: "Motorsport",
  "vehicle-reviews": "Vehicle Reviews",
  comparisons: "Comparisons",
  "buying-guides": "Buying Guides",
  accessories: "Accessories",
};

// Category parent relationships for breadcrumbs
export const categoryParents = {
  "car-news": "news",
  "bike-news": "news",
  "ev-news": "news",
  motorsport: "news",
  "vehicle-reviews": "reviews",
  comparisons: "reviews",
  "buying-guides": "guides",
  accessories: "guides",
};

// Get posts by category
export function getPostsByCategory(category, page = 1, perPage = 6) {
  const filtered = blogPosts.filter((post) => post.category === category);
  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const posts = filtered.slice(start, start + perPage);
  return { posts, total, totalPages, page, perPage };
}

// Get all posts with pagination
export function getAllPosts(page = 1, perPage = 6) {
  const total = blogPosts.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const posts = blogPosts.slice(start, start + perPage);
  return { posts, total, totalPages, page, perPage };
}

// Get featured posts
export function getFeaturedPosts(limit = 4) {
  return blogPosts.filter((post) => post.featured).slice(0, limit);
}

// Get post by slug
export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

// Get related posts
export function getRelatedPosts(post) {
  if (!post || !post.relatedPosts) return [];
  return post.relatedPosts
    .map((id) => blogPosts.find((p) => p.id === id))
    .filter(Boolean);
}

// Get recent posts excluding a specific post
export function getRecentPosts(excludeSlug = null, limit = 4) {
  return blogPosts
    .filter((post) => post.slug !== excludeSlug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export default blogPosts;
