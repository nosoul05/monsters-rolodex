import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox} from './components/search-box/search-box.component';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Hello my name is Chris</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



class App extends Component {

constructor(){
  super();

  this.state ={
   
    monsters:[],
    searchField: ''
   
  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  //user below to test response
  //.then(users => console.log(users)
  .then(users => this.setState({monsters: users}));
}

/*Example of using function Using this would change handleChange={this.handleChange|*/
/*
handleChange(e) {
  this.setState({searchField: e.target.value })
}

this.handleChange= this.handleChange.bind(this)

Instead of the aboev it is better to use
handleChange =e=>{
  this.setState({searchField: e.target.value});
}
*/

onSearchChange = event => {
  this.setState({ searchField: event.target.value});
};

render() {

  const { monsters, searchField } =  this.state;
  const filteredMonsters = monsters.filter(monsters => 
    monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase())

  )
  return (
        <div className="App">
          <h1 className="monsterHeader">Monsters Rolodex</h1>
      {/* <CardList name='Chris'> <h1>Chris</h1> */}
      {/* Use the below for testing value */}
      {/* <input type='search' placeholder='search monsters' onChange={e=> console.log(e.target.value)}/> */}
    
    <SearchBox
   /*  placeholder='search monsters'
     handleChange={e => this.setState({searchField: e.target.value})}*/
     placeholder='search monsters'
    handleChange ={this.onSearchChange}
    /> 
      <CardList monsters={filteredMonsters} >
    
      {/* {
          this.state.monsters.map(monsters =>( <h1 key={monsters.id}> {monsters.name} </h1>
            
          ))} */}
          </CardList>
           
        </div>
  )
}


}




export default App;
