const products = [
  // ── Metabolic Research ──────────────────────────────────────
  {
    id: 1, slug: 'semaglutide-5mg', name: 'Semaglutide', strength: '5mg',
    category: 'Metabolic Research', price: 89, purity: '99%',
    image: 'semaglutide-5mg.jpeg', badge: 'Best Seller',
    description: 'Semaglutide is a GLP-1 receptor agonist widely used in metabolic research. Each lyophilized vial contains 5mg of research-grade semaglutide with verified 99% purity by HPLC. COA available on request.'
  },
  {
    id: 2, slug: 'mazdutide-10mg', name: 'Mazdutide', strength: '10mg',
    category: 'Metabolic Research', price: 119, purity: '99%',
    image: 'mazdutide-10mg.jpeg', badge: null,
    description: 'Mazdutide (IBI362) is a dual GLP-1/glucagon receptor agonist under active metabolic research. 10mg lyophilized vial, 99% purity.'
  },
  {
    id: 3, slug: 'survodutide-10mg', name: 'Survodutide', strength: '10mg',
    category: 'Metabolic Research', price: 129, purity: '99%',
    image: 'survodutide-10mg.jpeg', badge: 'New',
    description: 'Survodutide is a dual GLP-1/glucagon receptor co-agonist of interest in metabolic research. 10mg lyophilized vial with certificate of analysis.'
  },

  // ── Recovery & Blends ───────────────────────────────────────
  {
    id: 4, slug: 'bpc157-5mg', name: 'BPC-157', strength: '5mg',
    category: 'Recovery & Blends', price: 49, purity: '99%',
    image: 'bpc157-5mg.jpeg', badge: null,
    description: 'BPC-157 (Body Protective Compound 157) is a pentadecapeptide widely studied for tissue repair and gut-health research. 5mg lyophilized vial.'
  },
  {
    id: 5, slug: 'bpc157-10mg', name: 'BPC-157', strength: '10mg',
    category: 'Recovery & Blends', price: 79, purity: '99%',
    image: 'bpc157-10mg.jpeg', badge: 'Best Seller',
    description: 'BPC-157 10mg economy size. More peptide per dollar for sustained research protocols. 99% purity, COA verified.'
  },
  {
    id: 6, slug: 'tb500-5mg', name: 'TB-500', strength: '5mg',
    category: 'Recovery & Blends', price: 59, purity: '99%',
    image: 'tb500-5mg.jpeg', badge: null,
    description: 'TB-500 (Thymosin Beta-4 fragment) is studied for its role in actin regulation and tissue regeneration. 5mg lyophilized vial.'
  },
  {
    id: 7, slug: 'tb500-10mg', name: 'TB-500', strength: '10mg',
    category: 'Recovery & Blends', price: 95, purity: '99%',
    image: 'tb500-10mg.jpeg', badge: null,
    description: 'TB-500 10mg. High-volume research vial of Thymosin Beta-4 fragment. 99% purity, domestic Canadian stock.'
  },
  {
    id: 8, slug: 'bpc-tb-5-5', name: 'BPC+TB Blend', strength: '5mg+5mg',
    category: 'Recovery & Blends', price: 99, purity: '99%',
    image: 'bpc-tb-5-5.jpeg', badge: 'Popular',
    description: 'Our signature BPC-157 + TB-500 blend, co-lyophilized in a single vial. 5mg each compound. Convenient for combined recovery research protocols.'
  },
  {
    id: 9, slug: 'bpc-tb-10-10', name: 'BPC+TB Blend', strength: '10mg+10mg',
    category: 'Recovery & Blends', price: 149, purity: '99%',
    image: 'bpc-tb-10-10.jpeg', badge: null,
    description: 'Economy BPC-157 + TB-500 co-lyophilized blend vial. 10mg of each peptide. Best value for extended research runs.'
  },
  {
    id: 10, slug: 'ss-31-10mg', name: 'SS-31', strength: '10mg',
    category: 'Recovery & Blends', price: 109, purity: '99%',
    image: 'ss-31-10mg.jpeg', badge: null,
    description: 'SS-31 (Elamipretide) is a mitochondria-targeted antioxidant peptide used in cellular energy and oxidative stress research. 10mg vial.'
  },
  {
    id: 11, slug: 'aod-9604-10mg', name: 'AOD-9604', strength: '10mg',
    category: 'Recovery & Blends', price: 69, purity: '99%',
    image: 'aod-9604-10mg.jpeg', badge: null,
    description: 'AOD-9604 is a modified fragment of human growth hormone studied for its lipolytic properties in metabolic and fat-metabolism research.'
  },
  {
    id: 12, slug: 'glow-blend-70mg', name: 'Glow Blend', strength: '70mg',
    category: 'Recovery & Blends', price: 139, purity: '99%',
    image: 'glow-blend-70mg.jpeg', badge: 'New',
    description: 'FxPept Glow Blend — a curated multi-peptide recovery formula in a 70mg lyophilized vial. Ideal for comprehensive tissue-support research protocols.'
  },
  {
    id: 13, slug: 'klow-blend-80mg', name: 'Klow Blend', strength: '80mg',
    category: 'Recovery & Blends', price: 149, purity: '99%',
    image: 'klow-blend-80mg.jpeg', badge: null,
    description: 'FxPept Klow Blend — an 80mg multi-peptide complex designed for advanced research applications in cellular repair and inflammation pathways.'
  },

  // ── Nootropics & Longevity ──────────────────────────────────
  {
    id: 14, slug: 'semax-10mg', name: 'Semax', strength: '10mg',
    category: 'Nootropics & Longevity', price: 69, purity: '99%',
    image: 'semax-10mg.jpeg', badge: null,
    description: 'Semax is a synthetic ACTH-derived peptide studied for neuroprotection, cognitive enhancement, and BDNF modulation. 10mg lyophilized vial.'
  },
  {
    id: 15, slug: 'selank-10mg', name: 'Selank', strength: '10mg',
    category: 'Nootropics & Longevity', price: 65, purity: '99%',
    image: 'selank-10mg.jpeg', badge: null,
    description: 'Selank is a synthetic analogue of the endogenous immunomodulator tuftsin, studied for anxiolytic and nootropic effects in preclinical research.'
  },
  {
    id: 16, slug: 'dsip-10mg', name: 'DSIP', strength: '10mg',
    category: 'Nootropics & Longevity', price: 55, purity: '99%',
    image: 'dsip-10mg.jpeg', badge: null,
    description: 'Delta Sleep-Inducing Peptide (DSIP) — a neuromodulatory peptide researched for its role in sleep regulation and stress-response pathways.'
  },
  {
    id: 17, slug: 'cjc-1295-5mg', name: 'CJC-1295', strength: '5mg',
    category: 'Nootropics & Longevity', price: 59, purity: '99%',
    image: 'cjc-1295-5mg.jpeg', badge: null,
    description: 'CJC-1295 (without DAC) is a GHRH analogue that stimulates growth hormone release in pituitary research. 5mg lyophilized vial, 99% purity.'
  },
  {
    id: 18, slug: 'cjc-ipa-5-5', name: 'CJC+Ipamorelin', strength: '5mg+5mg',
    category: 'Nootropics & Longevity', price: 99, purity: '99%',
    image: 'cjc-ipa-5-5.jpeg', badge: 'Popular',
    description: 'CJC-1295 + Ipamorelin co-lyophilized blend. A synergistic GHRH/GHRP combination widely used in growth hormone axis research. 5mg each.'
  },
  {
    id: 19, slug: 'epitalon-10mg', name: 'Epitalon', strength: '10mg',
    category: 'Nootropics & Longevity', price: 75, purity: '99%',
    image: 'epitalon-10mg.jpeg', badge: null,
    description: 'Epitalon (Epithalon) is a synthetic tetrapeptide derived from the pineal gland, researched for telomerase activation and longevity mechanisms.'
  },
  {
    id: 20, slug: 'epitalon-50mg', name: 'Epitalon', strength: '50mg',
    category: 'Nootropics & Longevity', price: 299, purity: '99%',
    image: 'epitalon-50mg.jpeg', badge: 'Best Value',
    description: 'Epitalon 50mg — large-batch research vial for extended longevity studies. Best per-mg price in our catalog. 99% purity, COA verified.'
  },
  {
    id: 21, slug: 'mots-c-10mg', name: 'MOTS-c', strength: '10mg',
    category: 'Nootropics & Longevity', price: 89, purity: '99%',
    image: 'mots-c-10mg.jpeg', badge: null,
    description: 'MOTS-c is a mitochondria-derived peptide researched for its role in metabolic homeostasis, insulin sensitivity, and longevity signaling.'
  },
  {
    id: 22, slug: 'mots-c-40mg', name: 'MOTS-c', strength: '40mg',
    category: 'Nootropics & Longevity', price: 299, purity: '99%',
    image: 'mots-c-40mg.jpeg', badge: 'Best Value',
    description: 'MOTS-c 40mg economy vial. 99% purity, ideal for high-volume mitochondrial and metabolic longevity research protocols.'
  },
  {
    id: 23, slug: 'pinealon-10mg', name: 'Pinealon', strength: '10mg',
    category: 'Nootropics & Longevity', price: 72, purity: '99%',
    image: 'pinealon-10mg.jpeg', badge: null,
    description: 'Pinealon is a tripeptide studied for neuroprotective properties and modulation of the central nervous system in longevity research.'
  },
  {
    id: 24, slug: 'igf1-lr3-1mg', name: 'IGF-1 LR3', strength: '1mg',
    category: 'Nootropics & Longevity', price: 79, purity: '99%',
    image: 'igf1-lr3-1mg.jpeg', badge: null,
    description: 'IGF-1 LR3 (Long R3 Insulin-like Growth Factor-1) is a potent anabolic research compound studied in muscle cell proliferation and survival pathways.'
  },
  {
    id: 25, slug: 'thymosin-alpha1-5mg', name: 'Thymosin Alpha-1', strength: '5mg',
    category: 'Nootropics & Longevity', price: 89, purity: '99%',
    image: 'thymosin-alpha1-5mg.jpeg', badge: null,
    description: 'Thymosin Alpha-1 (Tα1) is a 28-amino-acid peptide derived from thymosin fraction 5, researched for immune modulation and antiviral properties.'
  },
  {
    id: 26, slug: 'tesamorelin-10mg', name: 'Tesamorelin', strength: '10mg',
    category: 'Nootropics & Longevity', price: 119, purity: '99%',
    image: 'tesamorelin-10mg.jpeg', badge: null,
    description: 'Tesamorelin is a GHRH analogue researched for its effects on growth hormone secretion and visceral adipose tissue in metabolic studies.'
  },

  // ── Skin & Specialty ────────────────────────────────────────
  {
    id: 27, slug: 'pt141-10mg', name: 'PT-141', strength: '10mg',
    category: 'Skin & Specialty', price: 79, purity: '99%',
    image: 'pt141-10mg.jpeg', badge: null,
    description: 'PT-141 (Bremelanotide) is a melanocortin receptor agonist researched for sexual function and melanocortin pathway studies. 10mg lyophilized vial.'
  },
  {
    id: 28, slug: 'kisspeptin10-10mg', name: 'Kisspeptin-10', strength: '10mg',
    category: 'Skin & Specialty', price: 85, purity: '99%',
    image: 'kisspeptin10-10mg.jpeg', badge: null,
    description: 'Kisspeptin-10 is the bioactive decapeptide fragment of kisspeptin-54, studied for its role in reproductive endocrinology and GnRH signaling.'
  },
  {
    id: 29, slug: 'oxytocin-10mg', name: 'Oxytocin', strength: '10mg',
    category: 'Skin & Specialty', price: 69, purity: '99%',
    image: 'oxytocin-10mg.jpeg', badge: null,
    description: 'Oxytocin is a nonapeptide hormone researched for its roles in social bonding, stress response, and neuroendocrine regulation. 10mg vial.'
  },
];

module.exports = products;
