const LoadingCountry = (index: string): JSX.Element => (
  <li className="overview__item" key={`lc-${index}`}>
    <span className="sr-text">Loading...</span>
    <article
      className="teaser teaser--country teaser--skeleton"
      aria-hidden="true"
    >
      <div className="teaser__inner">
        <div className="teaser__content">
          <header className="teaser__header">
            <div className="country country--full">
              <div className="country__flag"></div>
              <h3 className="country__name teaser__title">
                <span className="skeleton">Country loading...</span>
              </h3>
            </div>
            <div className="meta">
              <div className="meta__item continent">
                <span className="skeleton">Continent loading...</span>
              </div>
            </div>
          </header>

          <div className="teaser__status"></div>
        </div>
      </div>
    </article>
  </li>
)

const LoadingCountries = (): JSX.Element => (
  <ul className="overview__list">
    {LoadingCountry('0')}
    {LoadingCountry('1')}
    {LoadingCountry('2')}
    {LoadingCountry('3')}
    {LoadingCountry('4')}
    {LoadingCountry('5')}
    {LoadingCountry('6')}
    {LoadingCountry('7')}
    {LoadingCountry('8')}
    {LoadingCountry('9')}
  </ul>
);

export default LoadingCountries;
