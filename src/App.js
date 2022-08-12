import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./cards";

function App() {
  let data = [
    {
      title: "Free",
      currency: "$",
      price: 0,
      period: "month",
      details: [
        { list: "Single User", isEnable: true },
        { list: "5GB Storage", isEnable: true },
        { list: "Unlimited Public Projects", isEnable: true },
        { list: "Community Access", isEnable: true },
        { list: "Unlimited Private Projects", isEnable: false },
        { list: "Dedicated Phone Support", isEnable: false },
        { list: "Free Subdomain", isEnable: false },
        { list: "Monthly Status Reports", isEnable: false },
      ],
    },

    {
      title: "Plus",
      currency: "$",
      price: 9,
      period: "month",
      details: [
        { list: "5 User", isEnable: true, isBold: true },
        { list: "50GB Storage", isEnable: true },
        { list: "Unlimited Public Projects", isEnable: true },
        { list: "Community Access", isEnable: true },
        { list: "Unlimited Private Projects", isEnable: true },
        { list: "Dedicated Phone Support", isEnable: true },
        { list: "Free Subdomain", isEnable: true },
        { list: "Monthly Status Reports", isEnable: false },
      ],
    },

    {
      title: "Pro",
      currency: "$",
      price: 49,
      period: "month",
      details: [
        { list: "Unlimited User", isEnable: true, isBold: true },
        { list: "150GB Storage", isEnable: true },
        { list: "Unlimited Public Projects", isEnable: true },
        { list: "Community Access", isEnable: true },
        { list: "Unlimited Private Projects", isEnable: true },
        { list: "Dedicated Phone Support", isEnable: true },
        { list: "Unlimited Free Subdomain", isEnable: true },
        { list: "Monthly Status Reports", isEnable: true },
      ],
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return (
              <Cards
                item= {item}
              />
            );                                                                 
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
