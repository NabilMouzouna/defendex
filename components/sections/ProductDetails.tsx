import { Button } from "@/components/ui/button";
import { ArrowRight, Download, LucideProps, MapPin, Radio, Ship } from "lucide-react";
import Link from "next/link";
import React from "react";

type ProductDetailsProps = {
  ProductTitle: string;
  ProductDescription: string;
  ProductPreview: string;
  DownloadLink : string;
  ProductOverview: {
    description : string,
    boxs :{
        id: number,
        icon : React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
        title : string,
        description : string
      }[]
  }
};

export default function ProductDetails({
  ProductTitle,
  ProductDescription,
  ProductPreview,
  DownloadLink,
  ProductOverview,
}: ProductDetailsProps) {
  return (
    <>
      <div className="min-h-screen bg-[#eeeeee] text-[#000]">
        <header className="bg-[#666666] text-white px-8 py-28">
          <nav className="mb-8">
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>&gt;</li>
              <li>
              <Link href="/products">Categories</Link>
              </li>
              <li>&gt;</li>
              <li>{ProductTitle}</li>
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">{ProductTitle}</h1>
              <p className="mb-6">{ProductDescription}</p>
              <Button className="bg-white text-[#666666] hover:bg-[#979797]">
                <a href={DownloadLink}>Download Brochure</a> <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={ProductPreview}
                alt={ProductTitle}
                className="w-full h-auto"
              />
            </div>
          </div>
        </header>
        <main className="p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
          <p className="text-[#666666] mb-6">
            {ProductOverview.description}
          </p>
        </section>
        <section className="grid md:grid-cols-3 gap-8">
          {
            ProductOverview.boxs.map((box) => (
              <div className="bg-white p-6 rounded-lg shadow">
              <box.icon className="h-12 w-12 text-[#666666] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
            <p className="text-[#979797]">{box.description}</p>
            </div>
            ))
          }
        </section>
      </main>
      </div>
      <footer className="bg-[#000] text-white p-8 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Let's discuss your security needs
          </h2>
          <p className="mb-6">
            Fill out our contact form, and we'll be in touch shortly!
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-[#000] hover:bg-[#979797]">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}