export interface Product {
  slug: string;
  name: string;
  shortSpec: string;
  image: string;
  category: string;
  description: string[];
  applications: string[];
  specifications: {
    material: string;
    grades: string;
    sizes: string;
    threadTypes: string;
    coatings: string;
    standards: string;
  };
  moq: string;
}

export const products: Product[] = [
  {
    slug: "self-drilling-screws",
    name: "Self Drilling Screws",
    shortSpec: "Tek point, M4–M12",
    image: "/assets/uploads/item-phil-flat-sds-blk__54303-1-1.jpg",
    category: "Screws",
    description: [
      "Tecknoforged self drilling screws (Tek screws) incorporate a precision-drilled point that eliminates pre-drilling operations entirely, providing a complete drill-tap-fasten action in a single pass. Engineered for structural steel, roofing, cladding and light-gauge metal applications.",
      "The drill point geometry is precision-formed to ensure consistent penetration through specified steel thicknesses without deflection or wander. Thread form is engineered to maximize pull-out strength in the substrate while maintaining installation torque within tool capacity.",
      "Available in multiple point lengths (Tek 1 through Tek 5) to match substrate thickness requirements, our self drilling screws maintain dimensional conformance across every production batch.",
    ],
    applications: [
      "Steel structural framing and purlins",
      "Roofing and wall cladding systems",
      "Electrical cable management trays",
      "HVAC ducting and air handling systems",
      "Modular building and pre-fab construction",
    ],
    specifications: {
      material: "Case-hardened Steel, Stainless Steel 410",
      grades: "Case-hardened, 4.8, 5.5",
      sizes: "M4 to M12, #8 to #14 (custom available)",
      threadTypes: "Type 17, Coarse thread",
      coatings: "Zinc plated, Geomet coated, Dacromet, Stainless passivated",
      standards: "ISO 15480, DIN 7504, AS 3566",
    },
    moq: "Minimum order 5,000 pieces. Standard lead time 10–15 working days. Custom drill point geometries available from 25,000 piece MOQ.",
  },
  {
    slug: "allen-cap-screws",
    name: "Allen Cap Screws",
    shortSpec: "M4–M24, Grade 8.8/10.9",
    image: "/assets/generated/screw-allen-cap.dim_600x600.jpg",
    category: "Bolts",
    description: [
      "Tecknoforged Allen Cap Screws (Hex Socket Head Cap Screws) are high-strength fasteners machined to precise tolerances for demanding structural and mechanical applications. The internal hex drive allows access in recessed or confined spaces while transmitting higher installation torques than equivalent external-drive fasteners.",
      "Manufactured from alloy steel and heat-treated to achieve Grade 8.8 and 10.9 mechanical properties, our Allen cap screws are extensively tested under our ISO 9001:2015 quality system. Dimensional inspection using CMM ensures thread pitch, head dimensions and socket depth conform to DIN 912 / ISO 4762 standards.",
      "Available with partial or full thread configurations, metric and UNC/UNF thread forms, and a range of surface treatments optimized for different service environments including corrosive, high-temperature, and aesthetic applications.",
    ],
    applications: [
      "Machine tool beds and precision fixtures",
      "Automotive engine and transmission assemblies",
      "Industrial machinery and press tools",
      "Hydraulic and pneumatic manifolds",
      "Structural steel connections requiring high tensile strength",
    ],
    specifications: {
      material:
        "Alloy Steel, Stainless Steel 304, Stainless Steel 316, Titanium",
      grades: "8.8, 10.9, 12.9 (also 70, 80 in stainless)",
      sizes: "M4 to M24, lengths 8mm to 200mm",
      threadTypes: "Metric coarse, Metric fine, UNC, UNF",
      coatings: "Black oxide, Zinc plated, Mechanical zinc, Plain, Dacromet",
      standards: "DIN 912, ISO 4762, ANSI B18.3",
    },
    moq: "Minimum order 1,000 pieces for standard sizes. Grade 12.9 from 2,000 pieces. Full thread custom lengths from 5,000 pieces.",
  },
  {
    slug: "hex-flange-bolts",
    name: "Hex Flange Bolts",
    shortSpec: "M6–M20, DIN 6921",
    image: "/assets/generated/screw-hex-flange.dim_600x600.jpg",
    category: "Bolts",
    description: [
      "Tecknoforged Hex Flange Bolts combine a hexagonal head with an integral flanged bearing surface, eliminating the need for a separate washer while distributing clamping load over a larger area. This provides superior joint integrity in soft or coated materials and resistance to loosening under vibration.",
      "The precision-formed serrated flange variant provides additional locking action against vibration-induced loosening, making these fasteners ideal for automotive, agricultural and heavy engineering applications where dynamic loads are present.",
      "Manufactured to DIN 6921 dimensional standards with mechanical properties conforming to ISO 898-1, available in full or partial thread configurations.",
    ],
    applications: [
      "Automotive chassis and suspension components",
      "Agricultural machinery and implement attachment",
      "Heavy engineering and earth-moving equipment",
      "Structural steel and modular construction",
      "General purpose assembly with soft or coated substrates",
    ],
    specifications: {
      material: "Carbon Steel, Alloy Steel, Stainless Steel 304",
      grades: "5.6, 8.8, 10.9",
      sizes: "M6 to M20, lengths 16mm to 120mm",
      threadTypes: "Metric coarse standard",
      coatings:
        "Zinc plated (bright/yellow), Hot DIP galvanized, Black oxide, Plain",
      standards: "DIN 6921, ISO 4162, ANSI/ASME B18.2.1",
    },
    moq: "Minimum order 2,000 pieces. Standard lead time 10–15 days. Hot-dip galvanized finish 21–28 days.",
  },
  {
    slug: "rivets",
    name: "Rivets",
    shortSpec: "Aluminum & Steel, 3mm–6mm",
    image: "/assets/generated/screw-rivets.dim_600x600.jpg",
    category: "Rivets",
    description: [
      "Tecknoforged manufactures a comprehensive range of blind rivets (pop rivets), solid rivets, and drive rivets in aluminum, steel and stainless steel materials. Engineered for one-side-access joints where bolt-and-nut assembly is impractical, our rivets provide permanent, vibration-resistant fastening across a wide range of material combinations.",
      "Blind rivets feature precision-engineered mandrel geometry to ensure consistent setting force and uniform blind-side expansion, producing reliable clamp loads within specified material thickness ranges. Shell and mandrel materials are selected to minimize galvanic corrosion risk.",
      "Production batch traceability ensures every rivet shipment is accompanied by dimensional and mechanical test data from our in-house laboratory.",
    ],
    applications: [
      "Sheet metal panels in automotive and coachwork",
      "Aircraft and aerospace interior assemblies",
      "Aluminum extrusion structures and enclosures",
      "Signage, display systems and light fabrication",
      "Electrical panel and switchboard assembly",
    ],
    specifications: {
      material: "Aluminum (5xxx series), Carbon Steel, Stainless Steel 304/316",
      grades: "A2, A4 (stainless); 5052, 5056 aluminum",
      sizes: "3mm, 4mm, 4.8mm, 6mm body diameter, 8mm–25mm lengths",
      threadTypes: "N/A — permanent fastener",
      coatings: "Anodized, Zinc plated steel mandrel, Natural aluminum",
      standards: "ISO 15977–15983, DIN 7337, ASME B18.29",
    },
    moq: "Minimum order 10,000 pieces for standard sizes. Mixed pack orders from 50,000 pieces total.",
  },
  {
    slug: "washers",
    name: "Washers",
    shortSpec: "Plain & Spring, M3–M24",
    image: "/assets/generated/screw-washers.dim_600x600.jpg",
    category: "Washers",
    description: [
      "Tecknoforged manufactures flat (plain) washers and spring (lock) washers for use across all standard metric bolt sizes from M3 through M24. Precision stamped from steel strip to DIN and ISO dimensional tolerances, our washers provide consistent bearing surface area and reliable clamping load distribution.",
      "Spring washers (split lock washers) are manufactured from hardened carbon spring steel to provide axial locking force against rotational loosening under vibration. Dimensional control of split gap and thickness ensures consistent spring rate across production batches.",
      "Available in standard and large/oversize OD configurations to spread load in soft or thin substrate applications.",
    ],
    applications: [
      "General mechanical and structural assembly",
      "Load distribution under bolt heads and nuts",
      "Vibration resistance in dynamic assemblies",
      "Electrical panel wiring and equipment mounting",
      "Automotive, agricultural and construction equipment",
    ],
    specifications: {
      material: "Carbon Steel, Stainless Steel 304/316, Brass, Copper",
      grades:
        "Mild steel, Grade 200HV (hardened flat), Spring steel (spring washers)",
      sizes: "M3 to M24 ID (standard and large OD variants)",
      threadTypes: "N/A",
      coatings:
        "Zinc plated, Hot DIP galvanized, Black oxide, Bright nickel, Plain",
      standards: "DIN 125, DIN 9021, DIN 127, ISO 7089, ISO 7090, ISO 7093",
    },
    moq: "Minimum order 10,000 pieces. High-volume orders supplied on reels or loose in bulk boxes.",
  },
  {
    slug: "bt-cut-screws",
    name: "BT Cut Screws",
    shortSpec: "Thread cutting, M4–M12",
    image: "/assets/uploads/product-jpeg-4.jpg",
    category: "Screws",
    description: [
      "Tecknoforged BT Cut Screws are thread-cutting fasteners designed specifically for plastics, die-cast metals, and soft alloys where conventional self-tapping screws may not provide adequate pull-out strength. The specialized thread form cuts rather than displaces material, minimizing boss hoop stress and cracking.",
      "The BT (Blunt Tipped) thread form features a distinctive cutting geometry with chip clearance flutes that evacuate displaced material, preventing material buildup that could cause boss cracking in brittle substrates. Particularly suited to engineering plastics including nylon, acetal, ABS, and polycarbonate.",
      "Dimensional consistency is critical for thread-cutting applications — Tecknoforged maintains ±0.05mm tolerance on major thread diameter through 100% go/no-go gauge inspection at production.",
    ],
    applications: [
      "Engineering plastic housings and enclosures",
      "Die-cast aluminum and zinc alloy components",
      "Electrical connector and terminal blocks",
      "Consumer electronics and domestic appliances",
      "Automotive plastic trim and interior parts",
    ],
    specifications: {
      material: "Carbon Steel (case-hardened), Stainless Steel 410",
      grades: "Case-hardened to Vickers 450–550 HV",
      sizes: "M4 to M12, lengths 10mm to 80mm",
      threadTypes: "BT (blunt-tip thread-cutting), Type 23, Type F",
      coatings: "Zinc plated, Black oxide, Nickel plated, Plain",
      standards: "DIN 7513, ISO 7050 (modified), ANSI B18.6.3 Type F",
    },
    moq: "Minimum order 5,000 pieces. Custom thread forms from 20,000 pieces with engineering approval.",
  },
  {
    slug: "hi-low-screws",
    name: "Hi-Low Screws",
    shortSpec: "Dual thread, M3–M10",
    image: "/assets/generated/screw-hi-low.dim_600x600.jpg",
    category: "Screws",
    description: [
      "Tecknoforged Hi-Low screws feature a unique dual-thread geometry with alternating high and low thread flanks that dramatically improve pull-out and strip-out resistance in plastics and soft materials. The design reduces radial stress on plastic bosses while achieving superior axial retention compared to standard self-tapping screws.",
      "The alternating thread geometry reduces the contact area and boss-wall stress while the high thread provides primary pull-out resistance and the low thread provides additional resistance to rotation, making re-usability possible in certain applications.",
      "Available with Phillips, Pozidriv, and Torx drive systems for compatibility with automated assembly equipment.",
    ],
    applications: [
      "High-performance plastic housing assemblies",
      "Automotive interior trim requiring reusability",
      "Medical device enclosures and housings",
      "Electronic instrument and control panels",
      "Industrial equipment guard and cover panels",
    ],
    specifications: {
      material: "Carbon Steel (case-hardened), Stainless Steel 304",
      grades: "Case-hardened Vickers 390–490 HV",
      sizes: "M3 to M10, lengths 8mm to 60mm",
      threadTypes: "Hi-Low proprietary dual thread",
      coatings: "Zinc plated, Black oxide, Nickel plated",
      standards: "Proprietary Hi-Low standard, compatible with IFI-137",
    },
    moq: "Minimum order 5,000 pieces. Drive type combinations from 10,000 pieces mixed.",
  },
  {
    slug: "button-head-screws",
    name: "Button Head Screws",
    shortSpec: "M3–M16, ISO 7380",
    image: "/assets/generated/screw-button-head.dim_600x600.jpg",
    category: "Bolts",
    description: [
      "Tecknoforged Button Head Screws (ISO 7380) feature a low-profile domed head with an internal hex socket drive, providing a flush, aesthetically clean installation profile while maintaining good holding strength. The wide, low head distributes clamping load over a larger bearing area than standard socket head cap screws.",
      "Suitable for applications where standard hex socket head protrusion is unacceptable, button head screws are increasingly popular in visible product assemblies, automotive trim, and electronic equipment where appearance matters alongside function.",
      "Manufactured in Grade 8.8 and 10.9 from alloy steel with consistent mechanical properties throughout the cross-section from our controlled heat treatment process.",
    ],
    applications: [
      "Visible assemblies requiring low-profile appearance",
      "Automotive interior and exterior trim",
      "Electronic equipment panels and frames",
      "Bicycle, motorcycle and sporting equipment",
      "Furniture hardware and architectural metalwork",
    ],
    specifications: {
      material: "Alloy Steel, Stainless Steel 304, Stainless Steel 316",
      grades: "8.8, 10.9 (steel); A2-70, A4-80 (stainless)",
      sizes: "M3 to M16, lengths 6mm to 100mm",
      threadTypes: "Metric coarse",
      coatings: "Black oxide, Plain (stainless), Zinc plated, Nickel plated",
      standards: "ISO 7380-1, DIN EN ISO 7380",
    },
    moq: "Minimum order 2,000 pieces for standard sizes. Stainless from 1,000 pieces.",
  },
  {
    slug: "nyloc-nuts",
    name: "Nylock Nuts",
    shortSpec: "M3–M20, DIN 985/982",
    image:
      "/assets/uploads/nyloc-nut-m6_hub1092eb01ee6ec83a4e5197484c145c2_37704_1000x1000_resize_q85_box-1.jpg",
    category: "Nuts",
    description: [
      "Tecknoforged Nylock Nuts (Nylon Insert Lock Nuts) are prevailing torque fasteners that incorporate a nylon insert collar which deforms around the bolt thread to create a permanent frictional locking action. Unlike conventional nuts, they resist loosening under vibration and dynamic loads without requiring separate locking elements.",
      "The nylon insert is precision-moulded to maintain consistent interference fit across the bolt thread diameter range. The insert does not damage the bolt thread and allows removal and re-installation when required, providing a cost-effective reusable locking solution in demanding applications.",
      "Manufactured to DIN 985 (thin type) and DIN 982 (standard type) dimensional standards, our Nyloc nuts are available in steel (zinc plated) and stainless steel grades suitable for environments from general engineering to marine and food-grade applications.",
    ],
    applications: [
      "Automotive suspension and chassis assemblies",
      "Industrial machinery subject to vibration and dynamic loads",
      "Agricultural and construction equipment fastening",
      "Electrical panel and switchgear assembly",
      "General engineering requiring vibration-resistant joints",
    ],
    specifications: {
      material: "Carbon Steel, Stainless Steel 304, Stainless Steel 316",
      grades: "5, 8, 10 (steel); A2-70, A4-80 (stainless)",
      sizes: "M3 to M20 (standard and fine pitch available)",
      threadTypes: "Metric coarse (standard), Metric fine on request",
      coatings: "Zinc plated, Hot DIP galvanized, Plain (stainless), Geomet",
      standards: "DIN 985, DIN 982, ISO 7042, ANSI B18.16.6",
    },
    moq: "Minimum order 5,000 pieces for standard sizes. Stainless from 2,000 pieces. Custom sizes and fine pitch from 10,000 pieces.",
  },
  {
    slug: "flange-head-screws",
    name: "Flange Head Screws",
    shortSpec: "M4–M16, DIN 6921",
    image: "/assets/generated/screw-hex-flange.dim_600x600.jpg",
    category: "Bolts",
    description: [
      "Tecknoforged Flange Head Screws incorporate an integral flanged bearing face under the hex head that distributes clamping load and eliminates the need for a separate washer. Available in plain and serrated flange variants, the serrated flange provides positive rotational locking without additional locking elements.",
      "The integral flange is particularly beneficial in automated assembly where separate washer handling would reduce production throughput. The consistent flange geometry ensures repeatable clamp load in robotic torque-controlled assembly applications.",
      "Dimensional conformance to DIN 6921 with ISO 898-1 mechanical properties validated through batch sampling at our in-house testing laboratory.",
    ],
    applications: [
      "Automotive body-in-white and powertrain assembly",
      "High-volume automated assembly lines",
      "Sheet metal assemblies without separate washers",
      "Agricultural and construction equipment",
      "Structural applications requiring washer-free installation",
    ],
    specifications: {
      material: "Carbon Steel, Alloy Steel, Stainless Steel 304",
      grades: "5.8, 8.8, 10.9",
      sizes: "M4 to M16, lengths 12mm to 100mm",
      threadTypes: "Metric coarse",
      coatings: "Zinc plated, Yellow chromate, Geomet, Plain, Black oxide",
      standards: "DIN 6921, ISO 15071, ANSI/ASME B18.2.1",
    },
    moq: "Minimum order 2,000 pieces. Serrated flange variant from 5,000 pieces. Custom flange OD from 10,000 pieces.",
  },
  {
    slug: "pt-screws",
    name: "PT Screws",
    shortSpec: "Thread forming, M3–M10",
    image: "/assets/uploads/VBT-PT-EJOT-PT-Pos1-500Wx500H-1-2.png",
    category: "Screws",
    description: [
      "Tecknoforged PT Screws are high-performance thread-forming fasteners developed for direct assembly into thermoplastics and engineering polymers without pre-tapping. The unique PT thread profile forms a mating thread by displacing — not cutting — material, resulting in high pull-out strength and excellent vibration resistance.",
      "The distinctive trilobular cross-section reduces driving torque while maximizing stripping torque margin, which is critical in automated assembly. The cold-forming action work-hardens the plastic thread walls, improving fatigue and creep resistance in service.",
      "Manufactured to EJOT PT geometry specifications with controlled major diameter tolerances of ±0.03mm for consistency across automated assembly operations.",
    ],
    applications: [
      "Engineering thermoplastic housings and enclosures",
      "Consumer electronics and domestic appliances",
      "Automotive interior plastic trim components",
      "Medical device plastic housings",
      "Electrical connector and junction box assembly",
    ],
    specifications: {
      material: "Carbon Steel (case-hardened), Stainless Steel 304/410",
      grades: "Case-hardened to Vickers 500–600 HV",
      sizes: "M3 to M10, lengths 8mm to 60mm",
      threadTypes: "PT trilobular thread-forming profile",
      coatings: "Zinc plated, Black oxide, Nickel plated, Geomet",
      standards: "EJOT PT standard, DIN 7500 (compatible), ISO 7085",
    },
    moq: "Minimum order 5,000 pieces. Custom lengths from 10,000 pieces. Stainless grade from 3,000 pieces.",
  },
  {
    slug: "torx-screws",
    name: "Torx Screws",
    shortSpec: "Star drive, M3–M12",
    image: "/assets/uploads/41n-VIBCdrL._AC_UF1000-1000_QL80_-1-1.jpg",
    category: "Screws",
    description: [
      "Tecknoforged Torx Screws feature the 6-point star-shaped drive system (ISO 10664) that delivers superior torque transfer compared to Phillips or slotted drives. The drive geometry virtually eliminates cam-out, allowing higher installation torques and making these screws ideal for automated high-speed assembly.",
      "The Torx drive transmits torque through vertical side walls rather than angled flanks, distributing load evenly across the six drive points and dramatically reducing wear on both the screw and driver bit. This extends tool life and reduces rework in high-volume production environments.",
      "Available in countersunk, pan head, button head, and hex head variants with full or partial thread configurations across metric sizes.",
    ],
    applications: [
      "Automotive interior and exterior trim assembly",
      "Electronics and electrical equipment manufacturing",
      "Precision instruments requiring cam-out-free installation",
      "Appliance and white goods production lines",
      "Structural and cladding applications requiring high-torque driving",
    ],
    specifications: {
      material: "Carbon Steel, Alloy Steel, Stainless Steel 304/316",
      grades: "4.8, 8.8, 10.9 (steel); A2-70, A4-80 (stainless)",
      sizes: "M3 to M12, lengths 6mm to 100mm",
      threadTypes: "Metric coarse; also available in metric fine",
      coatings:
        "Zinc plated, Black oxide, Stainless passivated, Geomet, Dacromet",
      standards: "ISO 10664, DIN 912 (Torx), ISO 7380 (Torx button head)",
    },
    moq: "Minimum order 2,000 pieces for standard sizes. Stainless from 1,000 pieces. Custom head forms from 10,000 pieces.",
  },
  {
    slug: "taptite-screws",
    name: "Taptite Screws",
    shortSpec: "Thread rolling, M3–M10",
    image: "/assets/uploads/4943e27c833539659ab8221f61096f4d.thumb-2-1.webp",
    category: "Screws",
    description: [
      "Tecknoforged Taptite Screws are thread-rolling fasteners that form a mating thread in pre-drilled holes by cold-displacing the base material rather than cutting it. This produces a stronger, work-hardened thread with superior pull-out and strip-out resistance compared to thread-cutting alternatives.",
      "The trilobular cross-section of Taptite screws reduces driving torque while maximizing the stripping torque margin — a critical requirement for automated assembly. The cold-formed thread walls exhibit improved fatigue strength and resist loosening under dynamic and vibratory service conditions.",
      "Particularly effective in ferrous and non-ferrous metals including mild steel, aluminum, zinc die-cast, and brass. Available with pan head, countersunk, and button head forms with Phillips, Torx, and hex socket drive options.",
    ],
    applications: [
      "Sheet metal enclosures and electrical panels",
      "Automotive body and trim assembly",
      "Zinc die-cast and aluminum housings",
      "Consumer electronics and appliance manufacturing",
      "Industrial equipment panels and covers",
    ],
    specifications: {
      material: "Carbon Steel (case-hardened), Stainless Steel 304/410",
      grades: "Case-hardened to Vickers 450–550 HV",
      sizes: "M3 to M10, lengths 8mm to 60mm",
      threadTypes: "Taptite trilobular thread-rolling profile",
      coatings: "Zinc plated, Black oxide, Nickel plated, Geomet",
      standards: "Reminc Taptite standard, DIN 7500-1, ISO 7085",
    },
    moq: "Minimum order 5,000 pieces. Custom lengths from 10,000 pieces. Stainless grade from 3,000 pieces.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
