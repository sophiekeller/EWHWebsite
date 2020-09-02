import React from "react";

/* FilterButton Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 * title = title of filter button, string
 * selected = if the filter is currently selected, bool
 * updateFilter = function () => changes this filter button to selected
 */
export default class FilterButton extends React.Component {
  /* renders filter button component */
  render() {
    let underline = <div />;
    if (this.props.selected) {
      underline = <div className="filter-underline" />;
    }
    let className = "filter-button";
    if (this.props.mobile) {
      className = "filter-button-m";
    }
    return (
      <div
        className={className}
        onClick={() => {
          this.props.updateFilter(this.props.title);
        }}
      >
        <div className="filter-button">{this.props.title}</div>
        {underline}
      </div>
    );
  }
}
