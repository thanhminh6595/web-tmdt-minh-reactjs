import { NavLink } from "react-router-dom";

const DUMMY_LINK = [
  {
    id: 0,
    title: "customer services",
    description: [
      { des: "Help & Contact Us" },
      { des: "Returns & Refunds" },
      { des: "Online Stores" },
      { des: "Terms & Coditions" },
    ],
  },
  {
    id: 1,
    title: "company",
    description: [
      { des: "what we do" },
      { des: "Availble services" },
      { des: "Latest Posts" },
      { des: "FAQs" },
    ],
  },
  {
    id: 2,
    title: "social media",
    description: [
      { des: "Twitter" },
      { des: "instagram" },
      { des: "Facebook" },
      { des: "Pinterest" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-3 mx-auto max-w-7xl py-10 italic">
        {/* Hiển thị danh sách footer */}
        {DUMMY_LINK.map((item) => {
          return (
            <div key={item.id}>
              <h1 className="uppercase mb-3 font-normal">{item.title}</h1>
              {item.description.map((des) => {
                return (
                  <div key={des.des}>
                    <NavLink
                      href="#"
                      className="w-fit capitalize text-gray-500 font-extralight mb-1 block"
                    >
                      {des.des}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
