const companyProfile = {
	id: "CompanyProfile",
	title: "Company profile",
	description: "Get general information of a company. You can query by symbol.",
	argumentsAttributes: [{name: "symbol", description: "Symbol of the company: AAPL e.g."}],
	responseAttributes: [
		{name: "country", description: "Country of company's headquarter."},
		{name: "currency", description: "Currency used in company filings."},
		{name: "exchange", description: "Listed exchange."},
		{name: "finnhubIndustry", description: "Finnhub industry classification."},
		{name: "ipo", description: "IPO date."},
		{name: "logo", description: "Logo image."},
		{name: "marketCapitalization", description: "Market Capitalization"},
		{name: "name", description: "Company name."},
		{name: "phone", description: "Company phone number."},
		{name: "shareOutstanding", description: "Number of oustanding shares."},
		{name: "ticker", description: "Company symbol/ticker as used on the listed exchange."},
		{name: "weburl", description: "Company website."},
	],
	query : `query($companyProfileSymbol: String!){
  companyProfile(symbol: $companyProfileSymbol) {
    country
    currency
    finnhubIndustry
    ipo
    marketCapitalization
    name
    phone
    shareOutstanding
    ticker
    weburl
  }
}`,
	variables: `{  
  "companyProfileSymbol": "AAPL"
}`,
	response: `{
	  "data": {
	    "companyProfile": {
	      "country": "US",
	      "currency": "USD",
	      "finnhubIndustry": "Technology",
	      "ipo": "1980-12-12",
	      "marketCapitalization": "2449605.3",
	      "name": "Apple Inc",
	      "phone": "14089961010.0",
	      "shareOutstanding": "16687.631",
	      "ticker": "AAPL",
	      "weburl": "https://www.apple.com/"
	    }
	  }
	}`
}

const marketNews = {
	id: "MarketNews",
	title: "Market News",
	description: "Get latest market news.",
	argumentsAttributes: [{name: "category", description: "This parameter can be 1 of the following values: general, forex, crypto, merger."}],
	responseAttributes: [
		{name: "category", description: "News category."},
		{name: "datetime", description: "headline"},
		{name: "id", description: "News ID. This value can be used for minId params to get the latest news only."},
		{name: "image", description: "Thumbnail image URL."},
		{name: "related", description: "Related stocks and companies mentioned in the article."},
		{name: "source", description: "News source."},
		{name: "summary", description: "News summary."},
		{name: "url", description: "URL of the original article."},
	],
	query : `query($marketNewsCategory: CategoryNews!){
  marketNews(category: $marketNewsCategory) {
    category
    datetime
    headline
    id
    image
    related
    source
    summary
    url
  }
}`,
	variables: `{
  "marketNewsCategory": "forex"
}`,
	response: `{
  "data": {
    "marketNews": [
      {
        "category": "forex",
        "datetime": "1629698098",
        "headline": "Trade ideas thread - European session 23 August 2021",
        "id": "6885536",
        "image": "https://az705044.vo.msecnd.net/20210823/23-8-2021-1-49-25-pm.png",
        "related": "",
        "source": "Forexlive",
        "summary": "Daily thread to exchange&nbsp;ideas&nbsp;and to share your thoughts\\nThe loonie is leading the charge in the major currencies space, after having seen a late turnaround in CAD/JPY last week to prevent a drop that validated the head-and-shoulders pattern as feared . Here's a look at the chart now:",
        "url": "https://www.forexlive.com/news/!/trade-ideas-thread-european-session-23-august-2021-20210823"
      }, ... , ]`
}

const trends = {
	id: "RecommendationTrends",
	title: "Recommendation Trends",
	description: "Get latest analyst recommendation trends for a company.",
	argumentsAttributes: [{name: "Symbol ", description: "Symbol of the company: AAPL."}],
	responseAttributes: [
		{name: "buy", description: "Number of recommendations that fall into the Buy category"},
		{name: "hold", description: "Number of recommendations that fall into the Hold category"},
		{name: "period", description: "Updated period"},
		{name: "sell", description: "Number of recommendations that fall into the Sell category"},
		{name: "strongBuy", description: "Number of recommendations that fall into the Strong Buy category"},
		{name: "strongSell", description: "Number of recommendations that fall into the Strong Sell category"},
		{name: "symbol", description: "Company symbol."},
	],
	query : `query($recommendationTrendsSymbol: String!){
  recommendationTrends(symbol: $recommendationTrendsSymbol) {
    symbol
    buy
    hold
    period
    sell
    strongBuy
    strongSell    
  }
}`,
	variables: `{
  "recommendationTrendsSymbol": "GOOGL"
}`,
	response: `{
  "data": {
    "recommendationTrends": [
      {
        "symbol": "GOOGL",
        "buy": "33",
        "hold": "3",
        "period": "2021-08-01",
        "sell": "0",
        "strongBuy": "19",
        "strongSell": "0"
      }, ... , ]`
}

const StockQuotes = {
	id: "QuoteStocks",
	title: "Quote Stocks",
	description: "Get real-time quote data for US stocks.",
	argumentsAttributes: [{name: "", description: ""}],
	responseAttributes: [
		{name: "c", description: "Current price"},
		{name: "d", description: "Change"},
		{name: "dp", description: "Percent change"},
		{name: "h", description: "High price of the day"},
		{name: "l", description: "Low price of the day"},
		{name: "o", description: "Open price of the day"},
		{name: "pc", description: "Previous close price"},
	],
	query : `query($quoteSymbol: String!){quote(symbol: $quoteSymbol) {
  c
  h
  l
  o
  pc
  t
}}`,
	variables: `{  
  "quoteSymbol": "GOOGL"
}`,
	response: `{
  "data": {
    "quote": {
      "c": "2815.095",
      "h": "2817.49",
      "l": "2752.15",
      "o": "2759.39",
      "pc": "2748.59",
      "t": "1629734202"
    }
  }
}`
}

const companiesNews = {
	id: "CompanyNews",
	title: "Company News",
	description: "List latest company news by symbol. This endpoint is only available for North American companies.",
	argumentsAttributes: [{name: "symbol", description: "Company symbol."},{name: "From", description: "From date YYYY-MM-DD."},{name: "To", description: "To date YYYY-MM-DD."}],
	responseAttributes: [
		{name: "category", description: "News category."},
		{name: "datetime", description: "Published time in UNIX timestamp."},
		{name: "headline", description: "News headline."},
		{name: "id", description: "News ID. This value can be used for minId params to get the latest news only."},
		{name: "image", description: "Thumbnail image URL."},
		{name: "related", description: "Related stocks and companies mentioned in the article."},
		{name: "source", description: "News source."},
		{name: "summary", description: "News summary."},
		{name: "url", description: "URL of the original article."},
	],
	query : `query($companyNewsSymbol: String!, $companyNewsFrom: String!, $companyNewsTo: String!){
  companyNews(symbol: $companyNewsSymbol, from: $companyNewsFrom, to: $companyNewsTo) {
    id
    category
    datetime
    headline
    image
    related
    source
    summary
    url
  }
}`,
	variables: `{  "companyNewsSymbol": "GOOGL",
  "companyNewsFrom": "2021-08-21",
  "companyNewsTo": "2021-08-22"
}`,
	response: `{
  "data": {
    "companyNews": [
      {
        "id": "69783421",
        "category": "company",
        "datetime": "1629634991",
        "headline": "Sony: Free Cash Flow Yield Stacking Up Well Versus Big Tech Names",
        "image": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/471309375/medium_image_471309375.jpg",
        "related": "GOOGL",
        "source": "SeekingAlpha",
        "summary": "Sony's core businesses such as PlayStation, image sensors and Sony Music are globally competitive franchises and remains relevant in today's tech-dominated world.",
        "url": "https://finnhub.io/api/news?id=25ea794e9ea4db5dbf15da14e101bcd4d15aa40d2133ea78a72fb30af24f5c87"
      }, ... , 
      ]`
}

const news = {
	title: "",
	description: "",
	argumentsAttributes: [{name: "", description: ""}],
	responseAttributes: [
		{name: "", description: ""},
	],
	query : ``,
	variables: ``,
	response: ``
}


export const Data = [
	companyProfile,
	marketNews,
	trends,
	StockQuotes,
	companiesNews,
]

