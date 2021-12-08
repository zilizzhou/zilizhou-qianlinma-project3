import React, { Component} from "react";
import SearchPage from "../pages/SearchPage";
import "../style/HomePage.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";




class HomePage extends Component{
    state = {
        serarchfield: "",
        // category: "name"
      };

      render() {
        // const { classes } = this.props;
        // const { serarchfield} = this.state;
        return (
           <div className="container">
            {/* <Particles className={classes.particles} params={particlesOptions} /> */}
            <NavBar />
            <Header />
            <SearchPage searchChange={this.onSearchChange}/>  
          </div>
        );
      }
    
      onSearchChange = e => {
        this.setState({ serarchfield: e.target.value });
      };
    
    //   onCategoryChange = event => {
    //     this.setState({ category: event.target.value });
    //   };
    }
    
    export default HomePage;