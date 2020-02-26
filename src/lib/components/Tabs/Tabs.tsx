import * as React from 'react';
import { Link } from 'gatsby';
import './tabs.scss';

export type TabType = {
  label: string;
  href: string;
  selected: boolean;
};

export interface Props {
  tabs: TabType[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const path = window.location.href;
  const [selectedState, setSelected] = React.useState<string>();
  return (
    <div className="tabs-line">
      <div className="tabs">
        {tabs.map((tab: TabType, index: number) => (
          <React.Fragment key={index + tab.label}>
            <Link
              activeClassName={path.match(tab.label) ? 'selected' : null}
              className="tab-element "
              key={index + tab.label}
              onClick={() => setSelected(tab.label)}
              to={tab.href}
            >
              {tab.label}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
