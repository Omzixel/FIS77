import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { textContent } from "@/components/text components/Products_TC";

const photos = [
  {
    photoName: "Amaterska fotografija",
    photoPrice: "0,35 €",
    photoDimensions: "10x15",
  },
  {
    photoName: "Amaterska fotografija",
    photoPrice: "0,80 €",
    photoDimensions: "15x20",
  },
  {
    photoName: "Profesionalna fotografija",
    photoPrice: "0,70 €",
    photoDimensions: "10x15",
  },
  {
    photoName: "Amaterska fotografija",
    photoPrice: "1,60 €",
    photoDimensions: "15x20",
  },
];

const papers = [
  {
    paperName: "A4 CB  1-150",
    paperPrice: "0,07 €",
  },
  {
    paperName: "A3 CB  1-50",
    paperPrice: "0,13 €",
  },
  {
    paperName: "A4 Color",
    paperPrice: "0,35 €",
  },
  {
    paperName: "A3 Color",
    paperPrice: "0,65 €",
  },
];

interface IProps {
  className: string;

  langName: string;
}

const Products: FC<IProps> = ({ className, langName }) => {
  return (
    <div className={`theme-${className}-text theme-${className}-main pb-5`}>
      <section
        className="bg-cover h-96"
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908")',
        }}
      ></section>
      <h1 className={`w-1/2 mx-auto text-center font-semibold text-xl my-5`}>
        {langName === "eng"
          ? textContent.eng.main_title
          : textContent.cro.main_title}
      </h1>
      <Table className={`w-1/2 mx-auto`}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">
              {langName === "eng"
                ? textContent.eng.product1.product_name
                : textContent.cro.product1.product_name}
            </TableHead>
            <TableHead>Dimenzija</TableHead>
            <TableHead className="text-right">
              {langName === "eng"
                ? textContent.eng.product1.product_price
                : textContent.cro.product1.product_price}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {photos.map((photoName) => (
            <TableRow key={photoName.photoPrice}>
              <TableCell className="font-medium">
                {photoName.photoName}
              </TableCell>
              <TableCell>{photoName.photoDimensions}</TableCell>
              <TableCell className="text-right">
                {photoName.photoPrice}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h1
        className={`w-1/2 mx-auto text-center font-semibold text-xl mt-10 mb-5`}
      >
        FOTOKOPIRANJE
      </h1>
      <Table className={`w-1/2 mx-auto`}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Izrada fotografije</TableHead>
            <TableHead className="text-right">Cijena</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {papers.map((paperName) => (
            <TableRow key={paperName.paperPrice}>
              <TableCell className="font-medium">
                {paperName.paperName}
              </TableCell>
              <TableCell className="text-right">
                {paperName.paperPrice}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Products;
