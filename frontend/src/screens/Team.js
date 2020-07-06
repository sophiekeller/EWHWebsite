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

  console.log("switched to", f)
  }
  render() {
    console.log("filter", this.state.filter)
    return (
        <div className="home-container">
          <Header photo={images.group} title = "Our Team"/>
          <div className="sections-container">
              <div className = "leads-container">
                <div className = "team-title">Leads</div>
                <div className = "lead-blocks-container">
                    {this.state.leads.map((person, index) => {
                        if (person!= null){
                            return (<PersonBlock data = {person} /> )}})}
                </div>
              </div>
              <div className = "team-container">
                <div className = "team-title">Team</div>
                <div className = "team-filters-container">
                    {this.state.all_filters.map((filter, index) => {
                        if (filter!= null){
                            return (<FilterButton title = {filter} selected = {this.state.filter === filter} updateFilter = {() => {this.updateFilter(filter);console.log("filter is ",filter)}}/> )}})}
                </div>
                <div className = "team-blocks-container">
                    {this.state.selected.map((person, index) => {
                        if (person!= null){
                            return (<PersonBlock data = {person} /> )}})}
                </div>
              </div>
          </div>
        </div>
    );
  }
}
let nadine = {name: 'Nadine Farhat', title: 'President', year: 'Sophomore', major: 'Computer Science', projects: 'Menstrual Game, INDAGO', image: images.nadine}
