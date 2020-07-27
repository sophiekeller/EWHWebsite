import React from "react";
import axios from 'axios';
import images from "../assets/images/images.js"
import data from "../assets/data.json"

//COMPONENTS
import Header from "../components/Header";
import PersonBlock from "../components/PersonBlock";
import FilterButton from "../components/FilterButton";

export default class Team extends React.Component {
    constructor(props) {
      super(props);
      console.log("data", data)
      this.state = {
        leads: data.leads,
        selected: data.members,
        filter: "All",
        all_filters: ["All", "Business", "INDAGO", "Software", "Parasym", "Integrative Design"]
      };
    }

  async componentDidMount(){
    const results = (await axios.get('http://localhost:8081/leads')).data;
    this.setState({leads: results})
  }
  updateFilter(f){
      if (f === "All"){
          this.setState({selected: data.members})
      }else if (f === "Business"){
          this.setState({selected: data.teams.business})
      }else if (f === "Software"){
          this.setState({selected: data.teams.software})
      }else if (f === "Integrative Design"){
          this.setState({selected: data.teams.integrative_design})
      }else if (f === "Parasym"){
          this.setState({selected: data.teams.parasym})
      }else if (f === "INDAGO"){
      this.setState({selected: data.teams.indago})
  }
 this.setState({filter: f});

  }
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
          <Header mobile = {this.props.mobile} photo={images.group} title = "Our Team"/>
          <div className="sections-container">
              <div className = "leads-container">
                <div className = "team-title">Leads</div>
                <div className = {leads}>
                    {this.state.leads.map((person, index) => {
                        if (person!= null){
                            return (<PersonBlock mobile = {this.props.mobile} data = {person} /> )}})}
                </div>
              </div>
              <div className = "team-container">
                <div className = "team-title">Team</div>
                <div className = {filters}>
                    {this.state.all_filters.map((filter, index) => {
                        if (filter!= null){
                            return (<FilterButton title = {filter} selected = {this.state.filter === filter} updateFilter = {() => {this.updateFilter(filter);console.log("filter is ",filter)}}/> )}})}
                </div>
                <div className = {team}>
                    {this.state.selected.map((person, index) => {
                        if (person!= null){
                            return (<PersonBlock mobile = {this.props.mobile} data = {person} /> )}})}
                </div>
              </div>
          </div>
        </div>
    );
  }
}
let nadine = {name: 'Nadine Farhat', title: 'President', year: 'Sophomore', major: 'Computer Science', projects: 'Menstrual Game, INDAGO', image: images.nadine}
