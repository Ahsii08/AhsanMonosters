import React from 'react';
import './App.css';
import Button from './Button';
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/searchBox/searchBox.component';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  myFunc = (e) => {
    console.log("Wooow he is calling me")
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  handleChange = e => (
    this.setState({searchField: e.target.value})
   )
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonostered = monsters.filter(monster =>  //Ahsan
     monster.name.toLowerCase().includes(searchField.toLowerCase()) 
      );
    return(
       
        <div className="App">
         <h1>Monosters Rolodex</h1>
{/*<Button handleClick={(e) => this.myFunc(e)} >My Button</Button>*/} {/*Method 1*/}

         <SearchBox placeholder='search Monsters'
         handlechange={this.handleChange}/>  {/*Method 2*/}
  
         <CardList monsters={filteredMonostered}/>
        </div>
        );
      
  }
}

export default App;
