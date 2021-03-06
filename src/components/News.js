import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  //   articles = [
  //     {
  //       source: { id: null, name: "NPR" },
  //       author: "Jaclyn Diaz",
  //       title:
  //         "Photos: Hurricane Ida Hit Louisiana's Coastline Hard, Leaving Serious Damage - NPR",
  //       description:
  //         "Louisiana is beginning the tough task of recovery after Hurricane Ida swept through the state's coast and caused significant damage and power outages.",
  //       url: "https://www.npr.org/2021/08/31/1032737199/images-louisiana-hurricane-ida",
  //       urlToImage:
  //         "https://media.npr.org/assets/img/2021/08/31/ap21242617099345_wide-8ce4e7577fefed364fe8ad2190bc2c5d9622995c.jpg?s=1400",
  //       publishedAt: "2021-08-31T09:29:27Z",
  //       content:
  //         "Jeremy Hodges climbs up the side of his family's destroyed storage unit in the aftermath of Hurricane Ida, Monday, Aug. 30, 2021, in Houma, La., a city which sits just along the coast of Louisiana.\r\n… [+4517 chars]",
  //     },
  //     {
  //       source: { id: "cnn", name: "CNN" },
  //       author: "Matias Grez, CNN",
  //       title:
  //         "Andy Murray says he 'lost respect' for Stefanos Tsitsipas after US Open defeat - CNN",
  //       description:
  //         'Three-time grand slam champion Andy Murray says he "lost respect" for Stefanos Tsitsipas, after the Greek world No. 3 took multiple extended breaks at crucial times during their first round US Open match.',
  //       url: "https://www.cnn.com/2021/08/31/tennis/andy-murray-lost-respect-stefanos-tsitsipas-us-open-spt-intl/index.html",
  //       urlToImage:
  //         "https://cdn.cnn.com/cnnnext/dam/assets/210831082016-murray-tsitsipas-super-tease.jpg",
  //       publishedAt: "2021-08-31T09:08:00Z",
  //       content:
  //         '(CNN)Three-time grand slam champion Andy Murray says he "lost respect" for Stefanos Tsitsipas, after the Greek world No. 3 took multiple extended breaks at crucial times during their first round US O… [+3918 chars]',
  //     },
  //     {
  //       source: { id: "cnn", name: "CNN" },
  //       author: "Madeline Holcombe, CNN",
  //       title:
  //         "These 5 states have less than 10% of ICU beds left as Covid-19 overwhelms hospitals - CNN",
  //       description:
  //         "As Covid-19 cases surge across the US, particularly among unvaccinated Americans, hospitals have been pushed to their limits treating the influx of patients -- and five states are nearly out of ICU beds.",
  //       url: "https://www.cnn.com/2021/08/31/health/us-coronavirus-tuesday/index.html",
  //       urlToImage:
  //         "https://cdn.cnn.com/cnnnext/dam/assets/210831040102-texas-hospital-0818-super-tease.jpg",
  //       publishedAt: "2021-08-31T08:35:00Z",
  //       content:
  //         "(CNN)As Covid-19 cases surge across the US, particularly among unvaccinated Americans, hospitals have been pushed to their limits treating the influx of patients -- and five states are nearly out of … [+5820 chars]",
  //     },
  //     {
  //       source: { id: null, name: "Fox Business" },
  //       author: "Associated Press",
  //       title:
  //         "US stocks trending higher day after both Nasdaq and S&P set records - Fox Business",
  //       description:
  //         "U.S. equity futures are trending higher after the S&P notched its 53rd record close of the year Monday as technology stocks lifted major indexes.",
  //       url: "https://www.foxbusiness.com/markets/us-stocks-trending-higher-day-after-both-nasdaq-and-sp-set-records",
  //       urlToImage:
  //         "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2018/02/0/0/market12.jpg?ve=1&tl=1",
  //       publishedAt: "2021-08-31T07:59:48Z",
  //       content:
  //         "U.S. equity futures\r\n are trending higher after the S&amp;P notched its 53rd record close of the year Monday as technology stocks lifted major indexes.\r\nStocks in this Article\r\nOn Wall Street on Mond… [+2996 chars]",
  //     },
  //     {
  //       source: { id: "cnn", name: "CNN" },
  //       author: "Joe Sutton, CNN",
  //       title:
  //         "Two dead and 10 injured after Mississippi highway washed away by heavy rain - CNN",
  //       description:
  //         "Two people were killed and 10 others injured after part of a highway was washed away Monday night near the town of Lucedale, Mississippi, officials said.",
  //       url: "https://www.cnn.com/2021/08/31/us/mississippi-highway-26-collapse-flooding/index.html",
  //       urlToImage:
  //         "https://cdn.cnn.com/cnnnext/dam/assets/210831034159-lucedale-ms-highway-collapse-super-tease.jpg",
  //       publishedAt: "2021-08-31T07:50:00Z",
  //       content:
  //         "(CNN)Two people were killed and 10 others injured after part of a highway was washed away Monday night near the town of Lucedale, Mississippi, officials said.\r\nThe incident occurred on the two-lane H… [+458 chars]",
  //     },
  //     {
  //       source: { id: "cnn", name: "CNN" },
  //       author: "Kelly McCleary, CNN",
  //       title:
  //         "Caldor Fire prompts states of emergency in Nevada and California, with more than 50,000 told to evacuate the Lake Tahoe region - CNN",
  //       description:
  //         "The governors of California and Nevada declared states of emergency Monday as the fast-moving Caldor Fire prompted officials to tell everyone in the city of South Lake Tahoe to get out.",
  //       url: "https://www.cnn.com/2021/08/31/weather/western-wildfires-tuesday/index.html",
  //       urlToImage:
  //         "https://cdn.cnn.com/cnnnext/dam/assets/210831003326-01-caldor-fire-evacuation-0830-super-tease.jpg",
  //       publishedAt: "2021-08-31T07:38:00Z",
  //       content:
  //         "(CNN)The governors of California and Nevada declared states of emergency Monday as the fast-moving Caldor Fire prompted officials to tell everyone in the city of South Lake Tahoe to get out.\r\nIn Cali… [+4506 chars]",
  //     },
  //     {
  //       source: { id: null, name: "CNBC" },
  //       author: "Yen Nee Lee",
  //       title:
  //         "Taiwan is banking on a homegrown Covid vaccine as it struggles to secure supplies - CNBC",
  //       description:
  //         "The locally produced Covid-19 vaccine by Medigen Vaccine Biologics was rolled out last week, with President Tsai Ing-wen receiving her first shot.",
  //       url: "https://www.cnbc.com/2021/08/31/covid-taiwan-banking-on-homegrown-medigen-vaccine.html",
  //       urlToImage:
  //         "https://image.cnbcfm.com/api/v1/image/106843345-1613965286144-gettyimages-1230905944-_04I7315.jpeg?v=1630387495",
  //       publishedAt: "2021-08-31T06:51:48Z",
  //       content:
  //         "Taiwan is banking on a homegrown Covid-19 shot to speed up its inoculation program as the island and many countries struggle to secure vaccine deliveries from major drug companies.\r\nThe locally produ… [+2578 chars]",
  //     },
  //     {
  //       source: { id: null, name: "New York Post" },
  //       author: "Dan Martin",
  //       title:
  //         "Aaron Boone weighs in on Mets’ 'thumbs-down' controversy - New York Post ",
  //       description:
  //         "Aaron Boone liked to point out that with a name like his, you don’t get booed.",
  //       url: "https://nypost.com/2021/08/31/aaron-boone-weighs-in-on-mets-thumbs-down-controversy/",
  //       urlToImage:
  //         "https://nypost.com/wp-content/uploads/sites/2/2021/08/Yankees-Boone.jpg?quality=90&strip=all&w=1024",
  //       publishedAt: "2021-08-31T06:02:00Z",
  //       content:
  //         "ANAHEIM, Calif. Aaron Boone liked to point out that with a name like his, you dont get booed.\r\nBut the Yankees manager certainly heard his fair share of them after he was traded to the Yankees in 200… [+857 chars]",
  //     },
  //     {
  //       source: { id: "fox-news", name: "Fox News" },
  //       author: "David Aaro",
  //       title:
  //         "Reporter stays with Taliban fighters as they enter Kabul airport hangar - Fox News",
  //       description:
  //         "A reporter stayed with several Taliban fighters this week who were seen entering a hangar at Kabul airport and examining Chinook helicopters left behind following the U.S. withdrawal from Afghanistan, according to a report.",
  //       url: "https://www.foxnews.com/world/taliban-fighters-kabul-airport-hangar-examine-helicopters-us-troops-depart-afghanistan",
  //       urlToImage:
  //         "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/5123e2e1-GettyImages-1234967942.jpg",
  //       publishedAt: "2021-08-31T05:36:40Z",
  //       content:
  //         "A reporter stayed with several Taliban fighters who were seen entering a hangar at Kabul airport to examine Chinook helicopters left behind following the U.S. withdrawal from Afghanistan, according t… [+3221 chars]",
  //     },
  //     {
  //       source: { id: "business-insider", name: "Business Insider" },
  //       author: "Sarah Al-Arshani",
  //       title:
  //         "Even with the Delta variant, the ability of COVID-19 vaccines to prevent hospitalization hasn't significantly dropped, CDC scientist says - Yahoo News",
  //       description:
  //         "Since the Delta variant appeared, vaccine effectiveness against hospitalization ranged from 75% to 95%, Dr. Sara Oliver said.",
  //       url: "https://www.businessinsider.com/vaccine-ability-to-prevent-hospitalization-from-covid-19-still-high-2021-8",
  //       urlToImage:
  //         "https://s.yimg.com/ny/api/res/1.2/8uUD7APANHb9Cz3JIggbJg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTg-/https://s.yimg.com/uu/api/res/1.2/Zxqvfz4uWlvVGyEET5baEg--~B/aD0yNjc2O3c9MzU3NzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/business_insider_articles_888/78c59e971cae5a3d1f51f5d0a18d400c",
  //       publishedAt: "2021-08-31T05:30:44Z",
  //       content:
  //         "Francine Orr /Los Angeles Times via Getty Images\r\n<ul><li>COVID-19 vaccine efficacy against infection seems to have declined, a CDC scientist said.\r\n</li><li>Dr. Sara Oliver said vaccines are still h… [+2271 chars]",
  //     },
  //     {
  //       source: { id: null, name: "CBS Sports" },
  //       author: "",
  //       title:
  //         "Bishop Sycamore's legitimacy in question after football team's 58-0 loss to IMG Academy - CBS Sports",
  //       description:
  //         "There were several factors that led many to question the legitimacy of Bishop Sycamore as a football program",
  //       url: "https://www.cbssports.com/high-school/football/news/bishop-sycamores-legitimacy-in-question-after-football-teams-58-0-loss-to-img-academy/",
  //       urlToImage:
  //         "https://sportshub.cbsistatic.com/i/r/2020/12/05/69bc201a-d670-4745-860b-85ba39644468/thumbnail/1200x675/d6b4a232eadfa1ae1b5dd298b11c8d90/gettyimages-1026295186.jpg",
  //       publishedAt: "2021-08-31T04:53:26Z",
  //       content:
  //         "IMG Academy's football team faced off against Ohio-based Bishop Sycamore recently and it wasn't a pretty result. IMG Academy looked absolutely dominant in a 58-0 win, which was supposed to feature tw… [+4186 chars]",
  //     },
  //     {
  //       source: { id: "cnn", name: "CNN" },
  //       author: "Sonia Moghe, CNN",
  //       title:
  //         "First male to speak publicly of alleged sexual abuse by R. Kelly testifies at trial - CNN",
  //       description:
  //         'A man identified only as "Louis" testified Monday at R. Kelly\'s trial, saying the singer lured him to his home and studio when he was 17 with promises of helping his music career but instead sexually abused him.',
  //       url: "https://www.cnn.com/2021/08/30/us/r-kelly-testimony-male-witness/index.html",
  //       urlToImage:
  //         "https://cdn.cnn.com/cnnnext/dam/assets/210830191636-r-kelly-march-2019-super-tease.jpg",
  //       publishedAt: "2021-08-31T03:53:00Z",
  //       content:
  //         'This story contains graphic court testimony.\r\nNew York (CNN)A man identified only as "Louis" testified Monday at R. Kelly\'s trial, saying the singer lured him to his home and studio when he was 17 wi… [+5213 chars]',
  //     },
  //     {
  //       source: { id: "fox-news", name: "Fox News" },
  //       author: "David Aaro",
  //       title:
  //         "Lightning strike at New Jersey beach kills lifeguard, injures 7, police say - Fox News",
  //       description:
  //         "A lifeguard was killed and 7 others were injured after lightning struck a beach in New Jersey Monday afternoon, authorities said.",
  //       url: "https://www.foxnews.com/us/lightning-strike-new-jersey-beach-kills-lifeguard-injures-7-police",
  //       urlToImage:
  //         "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/AP21243049450745.jpg",
  //       publishedAt: "2021-08-31T03:36:19Z",
  //       content:
  //         "A lifeguard was killed and seven others were injured after lightning struck a beach in New Jersey Monday afternoon, authorities said. \r\nPolice were called to the 21st Avenue Beach in the South Seasid… [+2622 chars]",
  //     },
  //     {
  //       source: { id: null, name: "9to5Mac" },
  //       author: null,
  //       title:
  //         "Chrome 94 beta adds WebGPU API with support for Apple's Metal - 9to5Mac",
  //       description:
  //         "Google Chrome 94 adds support for the new WebGPU API, which comes to replace WebGL and can even access Apple's Metal API.",
  //       url: "https://9to5mac.com/2021/08/30/chrome-94-beta-adds-webgpu-api-with-support-for-apples-metal/",
  //       urlToImage:
  //         "https://i2.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/08/Google-Chrome.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  //       publishedAt: "2021-08-31T02:20:00Z",
  //       content:
  //         "Google this week announced the beta release of Chrome 94, the next update to Google’s desktop web browser. In addition to general improvements, the update also adds support for the new WebGPU API, wh… [+2144 chars]",
  //     },
  //     {
  //       source: { id: null, name: "New York Times" },
  //       author: "Neil Vigdor",
  //       title:
  //         "Iowa Farmworker Gets Life in Prison for the Murder of Mollie Tibbetts - The New York Times",
  //       description:
  //         "Cristhian Bahena Rivera was convicted in May in the 2018 fatal stabbing of Ms. Tibbetts, which Donald J. Trump used to stoke opposition to illegal immigration.",
  //       url: "https://www.nytimes.com/2021/08/30/us/mollie-tibbets-murder-life-sentence.html",
  //       urlToImage:
  //         "https://static01.nyt.com/images/2021/05/28/multimedia/30xp-tibbetts-1-mollie/28xp-tibbetts-2-facebookJumbo.jpg",
  //       publishedAt: "2021-08-31T01:59:28Z",
  //       content:
  //         "Because of your actions, Mollies father, Rob, will never get to walk his only daughter down the aisle, Ms. Calderwood said. Because of your actions, Mr. Rivera, I will never get to see my daughter be… [+1052 chars]",
  //     },
  //     {
  //       source: { id: "cbs-news", name: "CBS News" },
  //       author: "Caroline Caroline, Eleanor Watson",
  //       title:
  //         "This is the last American soldier to leave Afghanistan - CBS News",
  //       description:
  //         "Major General Chris Donahue, commander of the U.S. Army 82nd Airborne Division, XVIII Airborne Corps, was one of the commanders on the ground running the evacuation mission.",
  //       url: "https://www.cbsnews.com/news/afghanistan-last-american-soldier-to-leave/",
  //       urlToImage:
  //         "https://cbsnews3.cbsistatic.com/hub/i/r/2021/08/31/055060e2-6551-4076-9af7-96c89ce6f505/thumbnail/1200x630/ac19927407a261ad2ad6d7dd5fd11505/last-soldier-afghanistan.jpg",
  //       publishedAt: "2021-08-31T01:52:00Z",
  //       content:
  //         "The last soldier to leave Afghanistan on the day the U.S. concluded its 20-year war has been identified as Major General Chris Donahue, commander of the U.S. Army 82nd Airborne Division, XVIII Airbor… [+2306 chars]",
  //     },
  //     {
  //       source: { id: "cnn", name: "CNN" },
  //       author: "Maggie Fox, CNN",
  //       title:
  //         "South African researchers keep wary eye on yet another new coronavirus variant - CNN",
  //       description:
  //         "Genetics researchers who have been watching for new coronavirus variants say they've seen a troubling new lineage that carries many of the same hallmarks as other strains, including Alpha, Beta and Gamma.",
  //       url: "https://www.cnn.com/2021/08/30/health/new-coronavirus-variant-maybe/index.html",
  //       urlToImage:
  //         "https://cdn.cnn.com/cnnnext/dam/assets/210830204014-file-covid-19-swab-super-tease.jpg",
  //       publishedAt: "2021-08-31T01:34:00Z",
  //       content:
  //         "(CNN)Genetics researchers who have been watching for new coronavirus variants say they've seen a troubling new lineage that carries many of the same hallmarks as other strains, including Alpha, Beta … [+2958 chars]",
  //     },
  //     {
  //       source: { id: "cnn", name: "CNN" },
  //       author: "By Devan Cole, CNN",
  //       title:
  //         "'I hope I'm wrong': GOP lawmaker explains mixed feelings over leaving Afghanistan in Taliban control - CNN",
  //       description:
  //         "Republican Congressman and US military veteran Adam Kinzinger on Monday reflected on the closing of America's longest war, saying that while he's relieved, Afghanistan now being under Taliban control has left him with mixed emotions.",
  //       url: "https://www.cnn.com/2021/08/30/politics/lawmakers-react-afghanistan-war-end-cnntv/index.html",
  //       urlToImage:
  //         "https://cdn.cnn.com/cnnnext/dam/assets/210112182127-rep-adam-kinzinger-file-super-tease.jpg",
  //       publishedAt: "2021-08-31T01:15:00Z",
  //       content:
  //         "Washington(CNN) Republican Congressman and US military veteran Adam Kinzinger on Monday reflected on the closing of America's longest war, saying that while he's relieved, Afghanistan now being under… [+4667 chars]",
  //     },
  //   ];

  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLettre(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(props) {
    super(props);
    // console.log("heloo im a constructor from news conponent");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLettre(
      this.props.category
    )} Headlines - NewsCat`;
  }

  // api
  async updateNews() {
    this.props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);

    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });

    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center">
          NewsCat - Top{" "}
          {this.props.category.slice(0, 1).toUpperCase() +
            this.props.category.slice(1, this.props.category.length)}{" "}
          Headlines
        </h2>

        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      batchColor={this.props.batchColor}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* PreviousNext Buttons */}
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-sm btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous Page
          </button>

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-sm btn-dark"
            onClick={this.handleNextClick}
          >
            Next Page &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
