type Props = {
  labelStyling?: string;
  imageStyling?: string;
  whiteText?: string;
  primaryText?: string;
  tabs: {
    id: number;
    label?: string;
    image?: string;
    Component: (props: { id: number }) => JSX.Element;
  }[];
  selectedTab: number;
  onClick: (id: number) => void;
  onMouseEnter: (id: number) => void;
};

const Tab = ({
  labelStyling,
  imageStyling,
  whiteText,
  primaryText,
  tabs = [],
  selectedTab = 1,
  onClick,
  onMouseEnter,
}: Props): JSX.Element => {
  const Panel = tabs && tabs.find((tab) => tab.id === selectedTab);
  const tabLabelUnderline =
    "bg-zeroThree  bg-0-100  bg-no-repeat  hover:bg-Ninety3Pixel hover:bg-gradient-lightPink hover:transition-bgSize5sEaseInOut delay-75 duration-75 transition-all";

  return (
    <div className={labelStyling ? labelStyling : imageStyling}>
      <div
        className={`${whiteText} ${primaryText} ${
          labelStyling
            ? "flex-col justify-center sm:flex-row"
            : "flex-col items-center divide-y divide-solid divide-color-description sm:absolute sm:right-0 sm:items-end"
        }   flex  `}
      >
        {tabs.map((tab) =>
          tab.label ? (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              className={`${tabLabelUnderline} ${
                selectedTab === tab.id
                  ? "text-primary-pink "
                  : "text-color-white dark:text-primary-100"
              }  py-2 pr-5 text-lg transition  ease-in-out hover:text-primary-pink-hover`}
              type="button"
              role="tab"
              tabIndex={selectedTab === tab.id ? 0 : -1}
              aria-selected={selectedTab === tab.id}
              aria-controls={`pane-${tab.id}`}
              onClick={() => onClick(tab.id)}
            >
              {tab.label}
            </button>
          ) : (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              className={`${
                selectedTab === tab.id ? "nav-link active" : "nav-link"
              } relative flex justify-end  py-5 pr-5 sm:first:left-10 `}
              type="button"
              role="tab"
              tabIndex={selectedTab === tab.id ? 0 : -1}
              aria-selected={selectedTab === tab.id}
              aria-controls={`pane-${tab.id}`}
              onMouseEnter={() => onMouseEnter(tab.id)}
            >
              {<img src={tab.image} />}
            </button>
          )
        )}
      </div>

      <div>
        <div
          id={`pane-${selectedTab}`}
          className={`${
            labelStyling ? "mx-auto flex justify-center px-5 pt-10" : ""
          }`}
          role="tabpanel"
          aria-labelledby={`tab-${selectedTab}`}
        >
          {Panel?.Component && <Panel.Component id={selectedTab} />}
        </div>
      </div>
    </div>
  );
};
export default Tab;
