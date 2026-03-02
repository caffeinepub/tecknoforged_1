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
    slug: "self-tapping-screws",
    name: "Self Tapping Screws",
    shortSpec: "M3–M14, various drives",
    image: "/assets/generated/screw-self-tapping.dim_600x600.jpg",
    category: "Screws",
    description: [
      "Tecknoforged self tapping screws are precision cold-forged fasteners engineered to cut their own threads into substrate materials including sheet metal, plastic, and thin-section components. Manufactured to international dimensional standards, they eliminate the need for pre-threading and reduce assembly time significantly.",
      "Our self tapping screws are available in a wide range of drive types including Phillips, Slotted, Pozidriv, Hex, and Torx, allowing compatibility with virtually all assembly tool configurations. The precision-formed thread profile ensures repeatable clamping force and vibration resistance.",
      "With over four decades of manufacturing experience, Tecknoforged produces self tapping screws in bulk quantities with consistent thread quality, dimensional accuracy, and surface coating uniformity verified by in-house CMM inspection.",
    ],
    applications: [
      "Automotive body panels and interior assemblies",
      "Electrical enclosures and switchgear",
      "HVAC ductwork and sheet metal fabrication",
      "Consumer electronics and appliance assembly",
      "General light engineering and fabrication",
    ],
    specifications: {
      material: "Steel, Stainless Steel 304, Stainless Steel 316, Brass",
      grades: "4.6, 8.8, 10.9",
      sizes: "M3 to M14 (custom sizes available)",
      threadTypes: "Metric, AB, B, Type 25",
      coatings:
        "Zinc plated, Hot DIP galvanized, Black oxide, Plain, Nickel plated",
      standards: "DIN 7971, DIN 7972, ISO 1481, ISO 1483, ANSI B18.6.4",
    },
    moq: "Minimum order 5,000 pieces. Standard lead time 10–15 working days for stocked items. Custom specifications 21–28 days. Bulk orders up to 5 million pieces/month.",
  },
  {
    slug: "self-drilling-screws",
    name: "Self Drilling Screws",
    shortSpec: "Tek point, M4–M12",
    image: "/assets/generated/screw-self-drilling.dim_600x600.jpg",
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
    image: "/assets/generated/screw-self-tapping.dim_600x600.jpg",
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
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
