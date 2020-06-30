import React from "react";

export default class FilterButton extends React.Component {

  render() {
    let underline = <div/>
    if (this.props.selected){
        underline = <div className = "filter-underline"/>
    }
    console.log("rendered filterbutton:", this.state)
    return (
        <div className= "filter-button" onClick={() => { this.props.updateFilter(this.props.title)}}>
          <div className = "filter-button">{this.props.title}</div>
          {underline}
          </div>
                );

  }
  }
