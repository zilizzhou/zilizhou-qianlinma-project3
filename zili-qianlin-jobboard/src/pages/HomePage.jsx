import React, { Component} from "react";
import SearchPage from "../pages/SearchPage";
import "../style/HomePage.css";
import { Routes, Route } from "react-router-dom";
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
            {/* <NavBar /> */}
            <Header />
            <SearchPage searchChange={this.onSearchChange}/>
            <Routes>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <div>
                      {/* <Header /> */}
                      {/* <SearchPage
                        searchChange={this.onSearchChange}
                        // categoryChange={this.onCategoryChange}
                      /> */}
                      {/* <ProfileCardList
                        serarchfield={serarchfield}
                        category={category}
                      /> */}
                    </div>
                  );
                }}
              />
              {/* <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/users/:userId" component={Profile} /> */}
              {/* <Route exact path="/profile" component={CreateProfile} />
              <Route exact path="/add" component={AddProject} />
              <Route exact path="/del" component={DeleteProject} /> */}
            </Routes>
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