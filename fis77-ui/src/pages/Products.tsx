import { textContent } from "@/components/text components/Products_TC";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FC } from "react";

const photos = [
  {
    photoName: {
      hrv: "Amaterska fotografija",
      eng: "Amateur Photography",
    },
    photoPrice: "0,35 €",
    photoDimensions: "10x15",
  },
  {
    photoName: {
      hrv: "Amaterska fotografija",
      eng: "Amateur Photography",
    },
    photoPrice: "0,80 €",
    photoDimensions: "15x20",
  },
  {
    photoName: {
      hrv: "Profesionalna fotografija",
      eng: "Professional Photography",
    },
    photoPrice: "0,70 €",
    photoDimensions: "10x15",
  },
  {
    photoName: {
      hrv: "Amaterska fotografija",
      eng: "Amateur Photography",
    },
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
          backgroundImage: 'url("https://anjix3.sirv.com/Images/products.jpg")',
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
                ? textContent.eng.product.product_name
                : textContent.cro.product.product_name}
            </TableHead>
            <TableHead>Dimenzija</TableHead>
            <TableHead className="text-right">
              {langName === "eng"
                ? textContent.eng.product.product_price
                : textContent.cro.product.product_price}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {photos.map((photo, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {langName === "eng" ? photo.photoName.eng : photo.photoName.hrv}
              </TableCell>
              <TableCell>{photo.photoDimensions}</TableCell>
              <TableCell className="text-right">{photo.photoPrice}</TableCell>
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
            <TableHead className="w-[200px]">
              {langName === "eng"
                ? textContent.eng.product.product_name
                : textContent.cro.product.product_name}
            </TableHead>
            <TableHead className="text-right">
              {langName === "eng"
                ? textContent.eng.product.product_price
                : textContent.cro.product.product_price}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {papers.map((paper, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{paper.paperName}</TableCell>
              <TableCell className="text-right">{paper.paperPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Products;
