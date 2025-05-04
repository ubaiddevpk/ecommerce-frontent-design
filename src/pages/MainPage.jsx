import React from "react";
import DealsAndOffers from "../components/DealsAndOffers";
import HomeAndOutdoor from "../components/HomeAndOutdoor";
import RequestQuote from "../components/RequestQuote";
import RecommendedItems from "../components/RecommendedItems";
import ExtraServices from "../components/ExtraServices";
import SuppliersByRegion from "../components/SuppliersByRegion";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import { products } from "../data/product";
import { homeOutdoorProducts, customerElectronics } from "../data/homeOutdoor";
import { itemData } from "../data/items";
import { serviceData } from "../data/services";
import { supplierData } from "../data/suppliers";
import ItemDetail from "../components/itemdetail";

const MainPage = () => {
  return (
    <>
      {/* <Mainsection /> */}
      <ItemDetail />
      <DealsAndOffers
        title="Deals and Offers"
        subtitle="Hygiene Equipments"
        endTime="2025-05-23T23:59:59"
        products={products}
      />
      <HomeAndOutdoor
        title="Home and outdoor"
        buttonLabel="Source now"
        products={homeOutdoorProducts}
      />
      <HomeAndOutdoor
        title="Consumer electronics and gadgets"
        buttonLabel="Source now"
        products={customerElectronics}
      />
      <RequestQuote
        heading="An easy way to send requests to all suppliers"
        subheading="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        inputLabel1="What item you need?"
        inputLabel2="Type more details"
        quantityLabel="Quantity"
        unitOptions={["Pcs", "Kg", "Ltr"]}
        buttonText="Send inquiry"
      />
      <RecommendedItems items={itemData} />
      <ExtraServices services={serviceData} />
      <SuppliersByRegion suppliers={supplierData} />
      <SubscribeNewsletter />
    </>
  );
};

export default MainPage;
