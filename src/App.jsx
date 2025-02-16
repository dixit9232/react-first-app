// import seriesData from "./api/series_data.json";
// import { SeriesCard } from "./components/SeriesCard";

import { EventPropagation } from "./EventHandling/EventPropagation";

// import { EventProps } from "./EventHandling/EventProps";

// import { EventHandling } from "./EventHandling/EventHandling.jsx";

export default function App() {
  return (
    <section className="container">
      {/* <h1 className="heading">Web Series List</h1>
      <div className="grid grid-three-columns ">
        {seriesData.map((series, index) => (
          <SeriesCard key={index} series={series} />
        ))}
      </div> */}

      {/* <EventHandling /> */}

      {/* <EventProps/> */}
      <EventPropagation />


    </section>
  );
}
