import React from "react";
import axios from 'axios';
import images from "../assets/images/images.js"

//COMPONENTS
import Header from "../components/Header";
import PersonBlock from "../components/PersonBlock";
import FilterButton from "../components/FilterButton";

export default class Team extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        leads: [],
        team: [nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine],
        filter: "All",
        all_filters: ["All", "Business", "Design", "Software", "Electrical", "Integrative Design", "Research"]
      };
    }

  async componentDidMount(){
    const results = (await axios.get('http://localhost:8081/leads')).data;
    this.setState({leads: results})
  }
  render() {
    //notation passes along all props from the Home component to child components
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
                            return (<FilterButton title = {filter} selected = {this.state.filter === filter} updateFilter = {() => {this.setState({filter: filter});console.log("filter is ",filter)}}/> )}})}
                </div>
                <div className = "team-blocks-container">
                    {this.state.team.map((person, index) => {
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
