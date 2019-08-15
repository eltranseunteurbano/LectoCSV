import React from 'react';
import './App.css';
import CSVReader from 'react-csv-reader'

export default class App extends React.PureComponent{

  constructor(props){
    super(props);
    this.state={
      data: null,
      uploadedData: false,
    }
  }

  uploadData = ( data ) => {
    this.setState({data, uploadedData:true})
    console.log(data);
  }

  showData = () => {
    if(!this.state.uploadedData){
      return <p>No se ha cargado ningún archivo.</p>
    }else {
      return<p>{this.state.data}</p>
    }
  }

  render(){
    return (
      <div className="App">
        <CSVReader
          cssClass="react-csv-input"
          label="Por favor, adjunte el archivo CSV que quiere visualizar"
          onFileLoaded={this.uploadData}
        />

        {this.showData()}
        
      </div>
      

    );
  }
}