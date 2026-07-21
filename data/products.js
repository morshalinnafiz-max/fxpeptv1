const products = [

  // ── Metabolic Research ──────────────────────────────────────
  {
    id: 1, slug: 'semaglutide-5mg', name: 'Semaglutide', strength: '5mg',
    category: 'Metabolic Research', price: 29, purity: '99%',
    image: 'semaglutide-5mg.jpeg', badge: null,
    description: 'Semaglutide is a GLP-1 receptor agonist widely used in metabolic research. Each lyophilized vial contains 5mg of research-grade semaglutide with verified 99% purity by HPLC. COA available on request.'
  },
  {
    id: 2, slug: 'semaglutide-10mg', name: 'Semaglutide', strength: '10mg',
    category: 'Metabolic Research', price: 49, purity: '99%',
    image: 'semaglutide-5mg.jpeg', badge: 'Popular',
    description: 'Semaglutide 10mg — higher dose vial for extended GLP-1 metabolic research protocols. 99% purity by HPLC, COA available on request.'
  },
  {
    id: 3, slug: 'retatrutide-10mg', name: 'Retatrutide', strength: '10mg',
    category: 'Metabolic Research', price: 79, purity: '99%',
    image: 'mazdutide-10mg.jpeg', badge: null,
    description: 'Retatrutide is a triple GIP/GLP-1/glucagon receptor agonist under active metabolic research. Entry-level 10mg lyophilized vial, 99% purity.'
  },
  {
    id: 4, slug: 'retatrutide-20mg', name: 'Retatrutide', strength: '20mg',
    category: 'Metabolic Research', price: 95, purity: '99%',
    image: 'mazdutide-10mg.jpeg', badge: 'Best Seller',
    description: 'Retatrutide 20mg — the main research strength. Triple agonist GIP/GLP-1/glucagon receptor compound. 99% purity, COA verified.'
  },
  {
    id: 5, slug: 'retatrutide-30mg', name: 'Retatrutide', strength: '30mg',
    category: 'Metabolic Research', price: 125, purity: '99%',
    image: 'mazdutide-10mg.jpeg', badge: null,
    description: 'Retatrutide 30mg — mid-range dose for extended metabolic research. 99% purity by HPLC, COA available.'
  },
  {
    id: 6, slug: 'retatrutide-50mg', name: 'Retatrutide', strength: '50mg',
    category: 'Metabolic Research', price: 179, purity: '99%',
    image: 'mazdutide-10mg.jpeg', badge: null,
    description: 'Retatrutide 50mg — premium dose vial for high-volume metabolic research. 99% purity, COA verified.'
  },
  {
    id: 7, slug: 'retatrutide-60mg', name: 'Retatrutide', strength: '60mg',
    category: 'Metabolic Research', price: 199, purity: '99%',
    image: 'mazdutide-10mg.jpeg', badge: 'Best Value',
    description: 'Retatrutide 60mg — highest dose vial. Best per-mg value for extended triple-agonist metabolic research protocols.'
  },
  {
    id: 8, slug: 'tirzepatide-10mg', name: 'Tirzepatide', strength: '10mg',
    category: 'Metabolic Research', price: 42, purity: '99%',
    image: 'survodutide-10mg.jpeg', badge: null,
    description: 'Tirzepatide is a dual GIP/GLP-1 receptor agonist studied for metabolic and glycemic research. Entry-level 10mg lyophilized vial, 99% purity.'
  },
  {
    id: 9, slug: 'tirzepatide-20mg', name: 'Tirzepatide', strength: '20mg',
    category: 'Metabolic Research', price: 52, purity: '99%',
    image: 'survodutide-10mg.jpeg', badge: 'Best Seller',
    description: 'Tirzepatide 20mg — the primary research strength for dual GIP/GLP-1 studies. 99% purity by HPLC, COA verified.'
  },
  {
    id: 10, slug: 'tirzepatide-50mg', name: 'Tirzepatide', strength: '50mg',
    category: 'Metabolic Research', price: 95, purity: '99%',
    image: 'survodutide-10mg.jpeg', badge: null,
    description: 'Tirzepatide 50mg — premium high-volume vial for extended dual-agonist metabolic research. 99% purity, COA available.'
  },
  {
    id: 11, slug: 'cagrilintide-10mg', name: 'Cagrilintide', strength: '10mg',
    category: 'Metabolic Research', price: 79, purity: '99%',
    image: 'semaglutide-5mg.jpeg', badge: null,
    description: 'Cagrilintide is a long-acting amylin analogue studied in combination metabolic research protocols. 10mg lyophilized vial, 99% purity.'
  },
  {
    id: 12, slug: 'mazdutide-10mg', name: 'Mazdutide', strength: '10mg',
    category: 'Metabolic Research', price: 119, purity: '99%',
    image: 'mazdutide-10mg.jpeg', badge: null,
    description: 'Mazdutide (IBI362) is a dual GLP-1/glucagon receptor agonist under active metabolic research. 10mg lyophilized vial, 99% purity.'
  },
  {
    id: 13, slug: 'survodutide-10mg', name: 'Survodutide', strength: '10mg',
    category: 'Metabolic Research', price: 129, purity: '99%',
    image: 'survodutide-10mg.jpeg', badge: 'New',
    description: 'Survodutide is a dual GLP-1/glucagon receptor co-agonist of interest in metabolic research. 10mg lyophilized vial with certificate of analysis.'
  },

  // ── Recovery & Blends ───────────────────────────────────────
  {
    id: 14, slug: 'bpc157-5mg', name: 'BPC-157', strength: '5mg',
    category: 'Recovery & Blends', price: 29, purity: '99%',
    image: 'bpc157-5mg.jpeg', badge: null,
    description: 'BPC-157 (Body Protective Compound 157) is a pentadecapeptide widely studied for tissue repair and gut-health research. 5mg lyophilized vial.'
  },
  {
    id: 15, slug: 'bpc157-10mg', name: 'BPC-157', strength: '10mg',
    category: 'Recovery & Blends', price: 39, purity: '99%',
    image: 'bpc157-10mg.jpeg', badge: 'Best Seller',
    description: 'BPC-157 10mg economy size. More peptide per dollar for sustained research protocols. 99% purity, COA verified.'
  },
  {
    id: 16, slug: 'tb500-5mg', name: 'TB-500', strength: '5mg',
    category: 'Recovery & Blends', price: 39, purity: '99%',
    image: 'tb500-5mg.jpeg', badge: null,
    description: 'TB-500 (Thymosin Beta-4 fragment) is studied for its role in actin regulation and tissue regeneration. 5mg lyophilized vial.'
  },
  {
    id: 17, slug: 'tb500-10mg', name: 'TB-500', strength: '10mg',
    category: 'Recovery & Blends', price: 49, purity: '99%',
    image: 'tb500-10mg.jpeg', badge: null,
    description: 'TB-500 10mg. High-volume research vial of Thymosin Beta-4 fragment. 99% purity, domestic Canadian stock.'
  },
  {
    id: 18, slug: 'bpc-tb-5-5', name: 'BPC+TB Blend', strength: '5mg+5mg',
    category: 'Recovery & Blends', price: 49, purity: '99%',
    image: 'bpc-tb-5-5.jpeg', badge: 'Popular',
    description: 'Our signature BPC-157 + TB-500 blend, co-lyophilized in a single vial. 5mg each compound. Convenient for combined recovery research protocols.'
  },
  {
    id: 19, slug: 'bpc-tb-10-10', name: 'BPC+TB Blend', strength: '10mg+10mg',
    category: 'Recovery & Blends', price: 65, purity: '99%',
    image: 'bpc-tb-10-10.jpeg', badge: null,
    description: 'Economy BPC-157 + TB-500 co-lyophilized blend vial. 10mg of each peptide. Best value for extended research runs.'
  },
  {
    id: 20, slug: 'ss-31-10mg', name: 'SS-31', strength: '10mg',
    category: 'Recovery & Blends', price: 52, purity: '99%',
    image: 'ss-31-10mg.jpeg', badge: null,
    description: 'SS-31 (Elamipretide) is a mitochondria-targeted antioxidant peptide used in cellular energy and oxidative stress research. 10mg vial.'
  },
  {
    id: 21, slug: 'glow-blend-70mg', name: 'Glow Blend', strength: '70mg',
    category: 'Recovery & Blends', price: 69, purity: '99%',
    image: 'glow-blend-70mg.jpeg', badge: 'Popular',
    description: 'FxPept Glow Blend — a curated multi-peptide recovery formula in a 70mg lyophilized vial. Ideal for comprehensive tissue-support research protocols.'
  },
  {
    id: 22, slug: 'epitalon-10mg', name: 'Epitalon', strength: '10mg',
    category: 'Recovery & Blends', price: 25, purity: '99%',
    image: 'epitalon-10mg.jpeg', badge: null,
    description: 'Epitalon (Epithalon) is a synthetic tetrapeptide derived from the pineal gland, researched for telomerase activation and longevity mechanisms.'
  },
  {
    id: 23, slug: 'epitalon-50mg', name: 'Epitalon', strength: '50mg',
    category: 'Recovery & Blends', price: 69, purity: '99%',
    image: 'epitalon-50mg.jpeg', badge: 'Best Value',
    description: 'Epitalon 50mg — large-batch research vial for extended longevity studies. Best per-mg price in our catalog. 99% purity, COA verified.'
  },
  {
    id: 24, slug: 'aod-9604-10mg', name: 'AOD-9604', strength: '10mg',
    category: 'Recovery & Blends', price: 69, purity: '99%',
    image: 'aod-9604-10mg.jpeg', badge: null,
    description: 'AOD-9604 is a modified fragment of human growth hormone studied for its lipolytic properties in metabolic and fat-metabolism research.'
  },
  {
    id: 25, slug: 'klow-blend-80mg', name: 'Klow Blend', strength: '80mg',
    category: 'Recovery & Blends', price: 149, purity: '99%',
    image: 'klow-blend-80mg.jpeg', badge: null,
    description: 'FxPept Klow Blend — an 80mg multi-peptide complex designed for advanced research applications in cellular repair and inflammation pathways.'
  },

  // ── Nootropics & Longevity ──────────────────────────────────
  {
    id: 26, slug: 'semax-10mg', name: 'Semax', strength: '10mg',
    category: 'Nootropics & Longevity', price: 35, purity: '99%',
    image: 'semax-10mg.jpeg', badge: 'Best Seller',
    description: 'Semax is a synthetic ACTH-derived peptide studied for neuroprotection, cognitive enhancement, and BDNF modulation. 10mg lyophilized vial.'
  },
  {
    id: 27, slug: 'selank-10mg', name: 'Selank', strength: '10mg',
    category: 'Nootropics & Longevity', price: 39, purity: '99%',
    image: 'selank-10mg.jpeg', badge: null,
    description: 'Selank is a synthetic analogue of the endogenous immunomodulator tuftsin, studied for anxiolytic and nootropic effects in preclinical research.'
  },
  {
    id: 28, slug: 'pinealon-10mg', name: 'Pinealon', strength: '10mg',
    category: 'Nootropics & Longevity', price: 25, purity: '99%',
    image: 'pinealon-10mg.jpeg', badge: null,
    description: 'Pinealon is a tripeptide studied for neuroprotective properties and modulation of the central nervous system in longevity research.'
  },
  {
    id: 29, slug: 'dsip-10mg', name: 'DSIP', strength: '10mg',
    category: 'Nootropics & Longevity', price: 55, purity: '99%',
    image: 'dsip-10mg.jpeg', badge: null,
    description: 'Delta Sleep-Inducing Peptide (DSIP) — a neuromodulatory peptide researched for its role in sleep regulation and stress-response pathways.'
  },
  {
    id: 30, slug: 'cjc-1295-5mg', name: 'CJC-1295', strength: '5mg',
    category: 'Nootropics & Longevity', price: 29, purity: '99%',
    image: 'cjc-1295-5mg.jpeg', badge: null,
    description: 'CJC-1295 (without DAC) is a GHRH analogue that stimulates growth hormone release in pituitary research. 5mg lyophilized vial, 99% purity.'
  },
  {
    id: 31, slug: 'cjc-ipa-5-5', name: 'CJC+Ipamorelin', strength: '5mg+5mg',
    category: 'Nootropics & Longevity', price: 52, purity: '99%',
    image: 'cjc-ipa-5-5.jpeg', badge: 'Popular',
    description: 'CJC-1295 + Ipamorelin co-lyophilized blend. A synergistic GHRH/GHRP combination widely used in growth hormone axis research. 5mg each.'
  },
  {
    id: 32, slug: 'ipamorelin-10mg', name: 'Ipamorelin', strength: '10mg',
    category: 'Nootropics & Longevity', price: 39, purity: '99%',
    image: 'cjc-1295-5mg.jpeg', badge: null,
    description: 'Ipamorelin is a selective GHRP (growth hormone releasing peptide) studied for GH secretion with minimal side-effect profile. 10mg lyophilized vial.'
  },
  {
    id: 33, slug: 'sermorelin-10mg', name: 'Sermorelin', strength: '10mg',
    category: 'Nootropics & Longevity', price: 49, purity: '99%',
    image: 'cjc-1295-5mg.jpeg', badge: null,
    description: 'Sermorelin is a synthetic GHRH analogue researched for stimulation of endogenous growth hormone secretion. 10mg lyophilized vial, 99% purity.'
  },
  {
    id: 34, slug: 'tesamorelin-10mg', name: 'Tesamorelin', strength: '10mg',
    category: 'Nootropics & Longevity', price: 59, purity: '99%',
    image: 'tesamorelin-10mg.jpeg', badge: null,
    description: 'Tesamorelin is a GHRH analogue researched for its effects on growth hormone secretion and visceral adipose tissue in metabolic studies.'
  },
  {
    id: 35, slug: 'mots-c-5mg', name: 'MOTS-c', strength: '5mg',
    category: 'Nootropics & Longevity', price: 29, purity: '99%',
    image: 'mots-c-10mg.jpeg', badge: null,
    description: 'MOTS-c 5mg — entry-level mitochondria-derived peptide researched for metabolic homeostasis, insulin sensitivity, and longevity signaling.'
  },
  {
    id: 36, slug: 'mots-c-10mg', name: 'MOTS-c', strength: '10mg',
    category: 'Nootropics & Longevity', price: 42, purity: '99%',
    image: 'mots-c-10mg.jpeg', badge: 'Best Seller',
    description: 'MOTS-c 10mg — primary mitochondrial support research vial. Researched for metabolic homeostasis, insulin sensitivity, and longevity signaling.'
  },
  {
    id: 37, slug: 'mots-c-20mg', name: 'MOTS-c', strength: '20mg',
    category: 'Nootropics & Longevity', price: 65, purity: '99%',
    image: 'mots-c-40mg.jpeg', badge: null,
    description: 'MOTS-c 20mg — premium dose for advanced mitochondrial and longevity research protocols. 99% purity, COA verified.'
  },
  {
    id: 38, slug: 'nad-500mg', name: 'NAD+', strength: '500mg',
    category: 'Nootropics & Longevity', price: 39, purity: '99%',
    image: 'epitalon-10mg.jpeg', badge: 'Best Seller',
    description: 'NAD+ (Nicotinamide Adenine Dinucleotide) 500mg — a key coenzyme researched for cellular energy metabolism, DNA repair, and longevity pathways.'
  },
  {
    id: 39, slug: 'nad-1000mg', name: 'NAD+', strength: '1000mg',
    category: 'Nootropics & Longevity', price: 52, purity: '99%',
    image: 'epitalon-50mg.jpeg', badge: null,
    description: 'NAD+ 1000mg — high-dose vial for advanced cellular energy and longevity research. Best per-mg value for extended NAD+ protocols.'
  },
  {
    id: 40, slug: 'glutathione-1500mg', name: 'Glutathione', strength: '1500mg',
    category: 'Nootropics & Longevity', price: 39, purity: '99%',
    image: 'thymosin-alpha1-5mg.jpeg', badge: null,
    description: 'Glutathione 1500mg — the body\'s master antioxidant, researched for oxidative stress reduction, immune modulation, and cellular detoxification.'
  },
  {
    id: 41, slug: 'ghk-cu-50mg', name: 'GHK-Cu', strength: '50mg',
    category: 'Nootropics & Longevity', price: 29, purity: '99%',
    image: 'thymosin-alpha1-5mg.jpeg', badge: null,
    description: 'GHK-Cu (Copper Peptide) 50mg — studied for skin regeneration, anti-aging mechanisms, wound healing, and anti-inflammatory pathways.'
  },
  {
    id: 42, slug: 'ghk-cu-100mg', name: 'GHK-Cu', strength: '100mg',
    category: 'Nootropics & Longevity', price: 42, purity: '99%',
    image: 'thymosin-alpha1-5mg.jpeg', badge: null,
    description: 'GHK-Cu 100mg — double-strength copper peptide vial for extended anti-aging and regenerative research protocols. 99% purity.'
  },
  {
    id: 43, slug: 'igf1-lr3-1mg', name: 'IGF-1 LR3', strength: '1mg',
    category: 'Nootropics & Longevity', price: 79, purity: '99%',
    image: 'igf1-lr3-1mg.jpeg', badge: null,
    description: 'IGF-1 LR3 (Long R3 Insulin-like Growth Factor-1) is a potent anabolic research compound studied in muscle cell proliferation and survival pathways.'
  },
  {
    id: 44, slug: 'thymosin-alpha1-5mg', name: 'Thymosin Alpha-1', strength: '5mg',
    category: 'Nootropics & Longevity', price: 89, purity: '99%',
    image: 'thymosin-alpha1-5mg.jpeg', badge: null,
    description: 'Thymosin Alpha-1 (Tα1) is a 28-amino-acid peptide derived from thymosin fraction 5, researched for immune modulation and antiviral properties.'
  },

  // ── Skin & Specialty ────────────────────────────────────────
  {
    id: 45, slug: 'pt141-10mg', name: 'PT-141', strength: '10mg',
    category: 'Skin & Specialty', price: 35, purity: '99%',
    image: 'pt141-10mg.jpeg', badge: null,
    description: 'PT-141 (Bremelanotide) is a melanocortin receptor agonist researched for sexual function and melanocortin pathway studies. 10mg lyophilized vial.'
  },
  {
    id: 46, slug: 'melanotan2-10mg', name: 'Melanotan II', strength: '10mg',
    category: 'Skin & Specialty', price: 38, purity: '99%',
    image: 'pt141-10mg.jpeg', badge: null,
    description: 'Melanotan II is a synthetic melanocortin analogue researched for its effects on melanogenesis and skin pigmentation pathways. 10mg lyophilized vial.'
  },
  {
    id: 47, slug: 'lemon-bottle-10ml', name: 'Lemon Bottle', strength: '10ml',
    category: 'Skin & Specialty', price: 39, purity: '99%',
    image: 'aod-9604-10mg.jpeg', badge: 'New',
    description: 'Lemon Bottle is a premium fat-dissolving research compound studied for its lipolytic and adipocyte apoptosis properties. 10ml vial.'
  },
  {
    id: 48, slug: '5-amino-1mq-5mg', name: '5-Amino-1MQ', strength: '5mg',
    category: 'Skin & Specialty', price: 39, purity: '99%',
    image: 'dsip-10mg.jpeg', badge: null,
    description: '5-Amino-1MQ is a cell-permeable small molecule researched as an NNMT inhibitor with applications in metabolic and fat-cell research. 5mg vial.'
  },
  {
    id: 49, slug: 'foxo4-dri-10mg', name: 'FOXO4-DRI', strength: '10mg',
    category: 'Skin & Specialty', price: 79, purity: '99%',
    image: 'epitalon-50mg.jpeg', badge: null,
    description: 'FOXO4-DRI is a modified FOXO4 peptide researched as a senolytic agent that selectively induces apoptosis in senescent cells. 10mg lyophilized vial.'
  },
  {
    id: 50, slug: 'adipotide-5mg', name: 'Adipotide', strength: '5mg',
    category: 'Skin & Specialty', price: 55, purity: '99%',
    image: 'semaglutide-5mg.jpeg', badge: null,
    description: 'Adipotide (FTTP) is a pro-apoptotic peptidomimetic researched for targeted fat cell reduction via disruption of adipose vasculature. 5mg vial.'
  },
  {
    id: 51, slug: 'adipotide-10mg', name: 'Adipotide', strength: '10mg',
    category: 'Skin & Specialty', price: 69, purity: '99%',
    image: 'semaglutide-5mg.jpeg', badge: null,
    description: 'Adipotide (FTTP) 10mg — higher dose vial for extended pro-apoptotic adipose research. 99% purity, COA available on request.'
  },
  {
    id: 52, slug: 'kisspeptin10-10mg', name: 'Kisspeptin-10', strength: '10mg',
    category: 'Skin & Specialty', price: 85, purity: '99%',
    image: 'kisspeptin10-10mg.jpeg', badge: null,
    description: 'Kisspeptin-10 is the bioactive decapeptide fragment of kisspeptin-54, studied for its role in reproductive endocrinology and GnRH signaling.'
  },
  {
    id: 53, slug: 'oxytocin-10mg', name: 'Oxytocin', strength: '10mg',
    category: 'Skin & Specialty', price: 69, purity: '99%',
    image: 'oxytocin-10mg.jpeg', badge: null,
    description: 'Oxytocin is a nonapeptide hormone researched for its roles in social bonding, stress response, and neuroendocrine regulation. 10mg vial.'
  },
];

module.exports = products;
