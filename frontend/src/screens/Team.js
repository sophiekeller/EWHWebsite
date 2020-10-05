import React from "react";
import images from "../assets/images/aboutImages/aboutImages.js";
import members from "../assets/members.json";
import teams from "../assets/teams.json";

//COMPONENTS
import Header from "../components/Header";
import NavBar from "../components/Navbar.js";
import MobileNavBar from "../components/MobileNavBar.js";
import PersonBlock from "../components/PersonBlock";
import FilterButton from "../components/FilterButton";

/* Team Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: members.leads,
      selected: members.members,
      filter: "All",
      all_filters: [
        "All",
        "Business",
        "MSH",
        "Software",
        "Electrical",
        "Integrative Design",
      ],
    };
  }

  /* switches selected team members based on subtream buttons
   * filter = name of filter button pressed, string
   */
  getFilter(filter) {
    switch (filter) {
      case "All":
        return members.members;
      case "Business":
        return teams.teams.business;
      case "Software":
        return teams.teams.software;
      case "Integrative Design":
        return teams.teams.integrative_design;
      case "Electrical":
        return teams.teams.electrical;
      case "MSH":
        return teams.teams.MSH;
      default:
        return members.members;
    }
  }
  updateFilter(filter) {
    this.setState({ selected: this.getFilter(filter) });
    this.setState({ filter: filter });
  }

  /* renders team page */
  render() {
    let leads = "lead-blocks-container";
    let filters = "team-filters-container";
    let team = "team-blocks-container";
    let navbar = <NavBar />;
    if (this.props.mobile) {
      leads = "lead-blocks-container-m";
      filters = "team-filters-container-m";
      team = "team-blocks-container-m";
      navbar = <MobileNavBar />;
    }
    return (
      <div className="home-container">
        {navbar}
        <Header
          mobile={this.props.mobile}
          photo={images.group}
          title="Our Team"
        />
        <div className="sections-container">
          <div className="leads-container">
            <div className="team-title">Leads</div>
            <div className={leads}>
              {this.state.leads.map((person, index) => {
                return <PersonBlock mobile={this.props.mobile} data={person} />;
              })}
            </div>
          </div>
          <div className="team-container">
            <div className="team-title">Team</div>
            <div className={filters}>
              {this.state.all_filters.map((filter, index) => {
                return (
                  <FilterButton
                    mobile={this.props.mobile}
                    title={filter}
                    selected={this.state.filter === filter}
                    updateFilter={() => {
                      this.updateFilter(filter);
                    }}
                  />
                );
              })}
            </div>
            <div className={team}>
              {this.state.selected.map((person, index) => {
                return <PersonBlock mobile={this.props.mobile} data={person} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
