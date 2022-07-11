import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cards from './cards';



function App() {

  let data = [
    {
      title: "Free",
      price: "$0",
      details: [
        { list: "Single User", class: ""},
        { list: "5GB Storage", class: "" },
        { list: "Unlimited Public Projects", class: "" },
        { list: "Community Access", class: "" },
        { list: "Unlimited Private Projects", class: "text-muted" },
        { list: "Dedicated Phone Support", class: "text-muted" },
        { list: "Free Subdomain", class: "text-muted" },
        { list: "Monthly Status Reports", class: "text-muted" },
      ]
    },
  
    {
      title: "Plus",
      price: "$9",
      details: [
        { list: "5 User", class: ""},
        { list: "50GB Storage", class: "" },
        { list: "Unlimited Public Projects", class: "" },
        { list: "Community Access", class: "" },
        { list: "Unlimited Private Projects", class: "" },
        { list: "Dedicated Phone Support", class: "" },
        { list: "Free Subdomain", class: "" },
        { list: "Monthly Status Reports", class: "text-muted" },
      ]
    },
  
    {
      title: "Pro",
      price: "$49",
      details: [
        { list: "Unlimited User", class: ""},
        { list: "150GB Storage", class: "" },
        { list: "Unlimited Public Projects", class: "" },
        { list: "Community Access", class: "" },
        { list: "Unlimited Private Projects", class: "" },
        { list: "Dedicated Phone Support", class: "" },
        { list: "Unlimited Free Subdomain", class: "" },
        { list: "Monthly Status Reports", class: "" },
      ]
    }
  ];
  
  return (
    <section className="pricing py-5">
       <div className="container">
          <div className="row">
            {data.map((data)=>{
              return(
                <Cards
                title = {data.title}
                price = {data.price}
                details = {data.details}/>
              )
            })}
          </div>
       </div>
    </section>
  );
}

export default App;
