import React from "react";
import images from "../assets/images/images.js"
import data from "../assets/data.json"

//COMPONENTS
import Header from "../components/Header";
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
        leads: data.leads,
        selected: data.members,
        filter: "All",
        all_filters: ["All", "Business", "INDAGO", "Software", "Electrical", "Integrative Design"]
      };
    }

    /* switches selected team members based on subtream buttons
    * filter = name of filter button pressed, string
    */
    updateFilter(filter){
        if (filter === "All"){
            this.setState({selected: data.members})
        }else if (filter === "Business"){
            this.setState({selected: data.teams.business})
        }else if (filter === "Software"){
            this.setState({selected: data.teams.software})
        }else if (filter === "Integrative Design"){
            this.setState({selected: data.teams.integrative_design})
        }else if (filter === "Electrical"){
            this.setState({selected: data.teams.electrical})
        }else if (filter === "INDAGO"){
            this.setState({selected: data.teams.indago})
        }
        this.setState({filter: filter});
      }

    /* renders team page */
    render() {
        let leads = "lead-blocks-container"
        let filters = "team-filters-container"
        let team = "team-blocks-container"
        if (this.props.mobile){
            leads = "lead-blocks-container-m"
            filters = "team-filters-container-m"
            team = "team-blocks-container-m"
        }
        return (
            <div className="home-container">
                <Header mobile = {this.props.mobile}
                    photo={images.group}
                    title = "Our Team"/>
                <div className="sections-container">
                    <div className = "leads-container">
                        <div className = "team-title">Leads</div>
                        <div className = {leads}>
                        {this.state.leads.map((person, index) => {
                            if (person!= null){
                                return (<PersonBlock
                                            mobile = {this.props.mobile}
                                            data = {person} /> )}})}
                        </div>
                    </div>
                    <div className = "team-container">
                        <div className = "team-title">Team</div>
                            <div className = {filters}>
                                {this.state.all_filters.map((filter, index) => {
                                    if (filter!= null){
                                       return (<FilterButton
                                                mobile = {this.props.mobile}
                                                title = {filter}
                                                selected = {this.state.filter === filter}
                                                updateFilter = {() => {
                                                    this.updateFilter(filter)
                                                }}/> )}})}
                            </div>
                        <div className = {team}>
                            {this.state.selected.map((person, index) => {
                                if (person!= null){
                                    return (
                                        <PersonBlock mobile = {this.props.mobile}
                                            data = {person} /> )}})}
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}
