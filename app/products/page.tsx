"use client";

import { useState, useEffect, Suspense } from "react";
import { Stethoscope, Baby, ArrowLeft, Activity } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Product = {
  id: number;
  name: string;
  form: string;
  indication: string;
  composition?: string;
  division: "gynaec" | "ortho" | "physician";
  image?: string;
};

const gynaecProducts: Product[] = [
  { id: 1, name: "DYDR0PAL", form: "Tablets", division: "gynaec", indication: "Threatened Abortion, Recurrent Pregnancy Loss, Supports Luteal Phase, Relieves Menstrual Disorders", composition: "Dydrogesterone 10 mg" , image: "/images/products/dydraflow.png" },
  { id: 2, name: "LACTOJOY", form: "Veg Capsules", division: "gynaec", indication: "Bacterial Vaginosis, UTI, PCOS", composition: "Lactobacillus rhamnosus + Lactobacillus reuteri + Lactobacillus acidophilus" , image: "/images/products/lactojoy.png" },
  { id: 3, name: "EVA-SHINE 35", form: "Tablets", division: "gynaec", indication: "PCOS, Hirsutism, Acne, Regulates Menstrual Cycle, Reduces Excess Facial Hair", composition: "Cyproterone Acetate 2 mg + Ethinyl Estradiol 0.035 mg" , image: "/images/products/shine.png" },
  { id: 4, name: "VIGVIT", form: "Supplement", division: "gynaec", indication: "Protein Deficiency in Pregnancy & Lactation", composition: "Protein Hydrolysate + DHA + Iron + Folic Acid + Calcium + Zinc + Vitamins", image: "/images/products/pro27.jpeg" },
  { id: 5, name: "SIAFOL-DHA", form: "Tablets", division: "gynaec", indication: "Pregnancy Nutrition, Neural Tube Defect Prevention", composition: "Folic Acid + DHA + Vitamin B12 + Iron" , image: "/images/products/adfol.jpeg" },
  { id: 6, name: "RG NINE", form: "Sachets", division: "gynaec", indication: "Recurrent Pregnancy Loss, Foetal Growth Support", composition: "L-Arginine + Proanthocyanidins + Folic Acid + Zinc" , image: "/images/products/rgnine.png" },
  { id: 7, name: "OSTEOCARE", form: "Tablets", division: "gynaec", indication: "Postmenopausal Osteoporosis, Supports Bone Density, Prevents Calcium Deficiency", composition: "Calcium Carbonate + Vitamin D3 + Magnesium + Zinc" , image: "/images/products/calnine.png" },
  { id: 8, name: "CALSIG-XT", form: "Tablets", division: "gynaec", indication: "Pregnancy & Lactation Calcium Support, Promotes Fetal Bone Development, Prevents Maternal Bone Loss", composition: "Calcium Citrate Malate + Vitamin D3 + Vitamin K2-7 + Magnesium + Zinc" , image: "/images/products/calninext.png" },
  { id: 9, name: "FERNNUM-XT", form: "Tablets", division: "gynaec", indication: "Iron Deficiency Anaemia, Supports Red Blood Cell Formation, Boosts Energy Levels, Promotes Fetal Development", composition: "Ferrous Ascorbate + Folic Acid + Zinc" , image: "/images/products/ferninext.png" },
  { id: 10, name: "MYONIN-FORTE", form: "Tablets", division: "gynaec", indication: "PCOS, Insulin Resistance, Irregular Menses", composition: "Myo-Inositol + D-Chiro Inositol + Folic Acid + Vitamin D3" , image: "/images/products/myoninedm.png" },
  { id: 11, name: "NOVA-D3-60k", form: "Softgel Capsules", division: "gynaec", indication: "Vitamin D3 Deficiency in Pregnancy, Improves Calcium Absorption, Supports Immune Function", composition: "Cholecalciferol (Vitamin D3)" , image: "/images/products/corald3.png" },
  { id: 12, name: "CAVIT-PM", form: "Tablets", division: "gynaec", indication: "Menopausal Bone Loss, Relieves Menopausal Symptoms, Supports Bone Density, Reduces Osteoporosis Risk", composition: "Calcium + Vitamin D3 + Soy Isoflavones + Magnesium" , image: "/images/products/isopause.png" },
  { id: 13, name: "FINECAL-500", form: "Tablets", division: "gynaec", indication: "Pregnancy & Lactation Calcium Support, Maintains Maternal Bone Health, Promotes Fetal Development", composition: "Calcium Carbonate (500 mg elemental calcium) + Vitamin D3" , image: "/images/products/calpregxt.png" },
  { id: 14, name: "PRO-V", form: "Dry Fruit Powder", division: "gynaec", indication: "Nutritional Supplement in Pregnancy & General Weakness", composition: "Almonds + Cashews + Pistachio + Dates + Saffron + Protein Blend + Vitamins & Minerals" , image: "/images/products/m-pro.png" },
  { id: 15, name: "GESTOPREG SR-200", form: "Soft Gelatin Capsules", division: "gynaec", indication: "Threatened Abortion, Luteal Phase Support, Recurrent Pregnancy Loss", composition: "Micronised Progesterone 200 mg" , image: "/images/products/gestopreg.png" },
  { id: 16, name: "GESTONE-400", form: "Soft Gelatin Capsules", division: "gynaec", indication: "Threatened Abortion, Luteal Phase Support, Recurrent Pregnancy Loss, Maintains Healthy Pregnancy, Prevents Preterm Birth", composition: "Micronised Progesterone 400 mg" , image: "/images/products/gestopreg400.png" },
  { id: 17, name: "DIENOGESTEROL-PLUS", form: "Tablets", division: "gynaec", indication: "PCOS, Endometriosis, Hormonal Regulation", composition: "Dienogest 2 mg + Ethinyloestradiol 0.03 mg" , image: "/images/products/dienopreg.jpeg" }
];

const orthoProducts: Product[] = [
  { id: 1, name: "OSTEOCARE", form: "Tablets", division: "ortho", indication: "Calcium & Vitamin D Deficiency, Osteoporosis, Supports Bone Density, Prevents Fractures", composition: "Calcium Carbonate + Vitamin D3" , image: "/images/products/calnine.png" },
  { id: 2, name: "CALSIG-XT", form: "Tablets", division: "ortho", indication: "Diabetic & Drug Induced Bone Loss, Postmenopausal Osteoporosis, Enhances Bone Mineral Density", composition: "Calcium Citrate Malate + Vitamin D3 + Vitamin K2-7 + Magnesium + Zinc" , image: "/images/products/calninext.png" },
  { id: 3, name: "NOVA-D3-60k", form: "Softgel Capsules", division: "ortho", indication: "Vitamin D3 Deficiency, Bone Health Support, Improves Calcium Absorption", composition: "Cholecalciferol (Vitamin D3)" , image: "/images/products/corald3.png" },
  { id: 4, name: "FERNNUM-XT", form: "Tablets", division: "ortho", indication: "Iron Deficiency Anaemia, Supports Red Blood Cell Formation, Boosts Energy Levels, Enhances Oxygen Transport", composition: "Ferrous Ascorbate + Folic Acid + Zinc" , image: "/images/products/ferninext.png" },
  { id: 5, name: "FINECAL-500", form: "Tablets", division: "ortho", indication: "Calcium Supplementation, Bone Strength, Prevents Calcium Deficiency", composition: "Calcium Carbonate (500 mg elemental calcium) + Vitamin D3" , image: "/images/products/calpregxt.png" }
];

const physicianProducts: Product[] = [
  { id: 1, name: "LACTOJOY", form: "Veg Capsules", division: "physician", indication: "Gut Dysbiosis, IBS, Diarrhoea", composition: "Lactobacillus rhamnosus + Lactobacillus reuteri + Lactobacillus acidophilus" , image: "/images/products/lactojoy.png" },
  { id: 2, name: "CALSIG-XT", form: "Tablets", division: "physician", indication: "Diabetic & Drug Induced Bone Loss, Osteoporosis", composition: "Calcium Citrate Malate + Vitamin D3 + Vitamin K2-7 + Magnesium + Zinc" , image: "/images/products/calninext.png" },
  { id: 3, name: "FERNNUM-XT", form: "Tablets", division: "physician", indication: "Iron Deficiency Anaemia, Supports Red Blood Cell Formation, Boosts Energy Levels, Enhances Oxygen Transport", composition: "Ferrous Ascorbate + Folic Acid + Zinc" , image: "/images/products/ferninext.png" },
  { id: 4, name: "NOVA-D3-60k", form: "Softgel Capsules", division: "physician", indication: "Vitamin D3 Deficiency, Improves Calcium Absorption, Supports Immune Function", composition: "Cholecalciferol (Vitamin D3)" , image: "/images/products/corald3.png" },
  { id: 5, name: "FINECAL-500", form: "Tablets", division: "physician", indication: "Calcium Supplementation, Bone Health Support, Prevents Calcium Deficiency", composition: "Calcium Carbonate (500 mg elemental calcium) + Vitamin D3" , image: "/images/products/calpregxt.png" },
  { id: 6, name: "PRO-V", form: "Dry Fruit Powder", division: "physician", indication: "Nutritional Supplement, General Weakness, Recovery Support", composition: "Almonds + Cashews + Pistachio + Dates + Saffron + Protein Blend + Vitamins & Minerals" , image: "/images/products/m-pro.png" }
];

function ProductsContent() {
  const [active, setActive] = useState<"gynaec" | "ortho" | "physician">("gynaec");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get("tab") as "gynaec" | "ortho" | "physician" | null;
    if (tabParam && ["gynaec", "ortho", "physician"].includes(tabParam)) {
      setActive(tabParam);
    }
  }, [searchParams]);

  const products = active === "gynaec" ? gynaecProducts : active === "ortho" ? orthoProducts : physicianProducts;

  return (
    <div className="min-h-screen bg-white">
      {/* Top breadcrumb bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-gray-200">/</span>
          <span className="text-sm text-gray-700 font-semibold">All Products</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-14">
        {/* Page Header */}
        <div className="mb-12 pb-10 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Our Products</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight mb-3">
                GMP-Certified Medicine.<br /> Formulated with Purpose.
              </h1>
              <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
                Every product in our portfolio is clinically validated, GMP-certified, and prescribed by doctors across India.
                Browse by division to find the right formulation.
              </p>
            </div>
            {/* Stats strip */}
            <div className="flex items-center gap-8 flex-shrink-0">
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">20+</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">Products</p>
              </div>
              <div className="w-px h-8 bg-gray-100" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">3</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">Divisions</p>
              </div>
              <div className="w-px h-8 bg-gray-100" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">GMP</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Division Toggles */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => setActive("gynaec")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === "gynaec"
                ? "bg-black text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            <Baby className="w-4 h-4" />
            Gynaec Division
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${active === "gynaec" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
              {gynaecProducts.length}
            </span>
          </button>

          <button
            onClick={() => setActive("ortho")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === "ortho"
                ? "bg-black text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            <Activity className="w-4 h-4" />
            Ortho Division
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${active === "ortho" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
              {orthoProducts.length}
            </span>
          </button>
          
          <button
            onClick={() => setActive("physician")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === "physician"
                ? "bg-black text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            Physician Division
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${active === "physician" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
              {physicianProducts.length}
            </span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-full">
          {products.map((product) => (
            <div
              key={`${product.division}-${product.id}`}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow group"
            >
              <div className="bg-white p-6 relative border-b border-gray-100 flex justify-center items-center min-h-[200px]">
                <img 
                  src={product.image || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80"} 
                  alt={product.name}
                  className="w-full h-auto max-h-[280px] object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1 h-full">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-black/60 tracking-widest">
                    #{product.id.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                    {product.form}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="text-[18px] font-bold text-[#0A1931] tracking-tight mb-1.5">
                    {product.name}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-snug">
                    {product.composition}
                  </p>
                </div>

                <div className="flex-1 mt-2 mb-5">
                  <p className="text-[14px] font-bold text-[#2A3B52] mb-3">Key Uses:</p>
                  <ul className="space-y-2.5">
                    {product.indication.split(',').map((use, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <svg className="w-[18px] h-[18px] text-[#00D26A] mt-[1px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className="text-[14px] text-slate-600 font-medium leading-snug">{use.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi Adshine Pharmaceuticals, I would like to inquire about ${product.name} (${product.form}) - ${product.composition || product.indication}. Please provide more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white text-[13px] font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}
