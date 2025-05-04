import { useState } from "react";

const tabs = [
  { id: "description", label: "Description" },
  { id: "reviews", label: "Reviews" },
  { id: "shipping", label: "Shipping" },
  { id: "about", label: "About seller" },
];

const ExtraServices = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <>
            <p className="text-sm text-gray-700 mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora impedit modi voluptatibus accusantium molestias hic commodi ab consequatur provident repellat aspernatur laboriosam fuga expedita deserunt nesciunt, cupiditate eum, officia cum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt voluptatum ipsa voluptatibus. Perspiciatis eos aperiam tenetur dolor a voluptate at? Nemo, soluta pariatur. Exercitationem alias ad repudiandae perspiciatis veniam.
            </p>
            <table className="text-sm text-gray-700 w-[50%]">
              <tbody>
                <tr className="border">
                  <td className="bg-[#EFF2F4] w-1/3 p-2 border">Model</td>
                  <td className="p-2 border">#8786867</td>
                </tr>
                <tr className="border">
                  <td className="bg-[#EFF2F4] p-2 border">Style</td>
                  <td className="p-2 border">Classic style</td>
                </tr>
                <tr className="border">
                  <td className="bg-[#EFF2F4] p-2 border">Certificate</td>
                  <td className="p-2 border">ISO-898921212</td>
                </tr>
                <tr className="border">
                  <td className="bg-[#EFF2F4] p-2 border">Memory</td>
                  <td className="p-2 border">36GB RAM</td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc list-inside mt-4 text-sm text-gray-700 space-y-1">
              <li>Some great feature name here</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Duis aute irure dolor in reprehenderit</li>
            </ul>
          </>
        );
      case "reviews":
        return <p className="text-sm text-gray-700">⭐ 4.8/5 from 124 buyers . Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit, at dolores vero quis iste ipsa laboriosam sapiente laborum facere magnam obcaecati pariatur atque cupiditate, in et modi adipisci officiis, aliquid magni. Debitis dolores nostrum ducimus quasi quidem at ratione ipsam quisquam accusamus aspernatur, est quam dolorum quibusdam soluta inventore numquam labore optio, a commodi voluptates, iste error similique quis repudiandae! Similique magnam est fugiat hic vero esse voluptate non veritatis debitis culpa. Molestiae expedita rem esse quo fugit voluptatem soluta, suscipit totam ipsam ullam nisi? Commodi non unde impedit alias maxime. Blanditiis nemo sequi explicabo repellat odio, voluptatem laboriosam.</p>;
      case "shipping":
        return <p className="text-sm text-gray-700">Free delivery in 2–4 days. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo, officiis ea mollitia maxime non, perferendis, iste nulla placeat et atque molestiae ut pariatur maiores similique alias libero eveniet tenetur suscipit provident optio! Provident eligendi eaque consequatur quam recusandae quod soluta atque in, facilis, expedita modi pariatur velit reiciendis maxime at eum nesciunt explicabo vel. Nostrum distinctio porro culpa, necessitatibus sapiente excepturi nisi dolore magni dolores expedita recusandae illum suscipit!</p>;
      case "about":
        return <p className="text-sm text-gray-700">Trusted seller with fast shipping. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime veritatis quas iste sequi porro magni. Nam impedit corporis, earum tempore hic beatae, temporibus atque sapiente iusto non mollitia vero, adipisci iste error consectetur voluptatum soluta culpa! Hic cupiditate repellendus debitis, alias enim at ullam suscipit id tempore velit ipsum delectus voluptatibus veritatis tempora, quibusdam rerum, amet recusandae assumenda ipsa quis reiciendis! Tenetur est vero nesciunt distinctio voluptates accusamus rerum eum asperiores fuga, quaerat ad impedit repudiandae dolor aut amet non.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-sm w-full ">
      <div className="flex flex-wrap gap-4 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default ExtraServices;
