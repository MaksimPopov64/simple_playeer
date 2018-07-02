import axios from 'axios';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MockAdapter from 'axios-mock-adapter';
import Search from '../controls/Search/Search';


export default class Common extends Component{

 constructor(props){
     super(props);
     this.state ={
         videos:''
     }
 }

 handleInput = (event) => {
     console.log(event.target.value);
     const apikey ='AIzaSyAw3zkUJ1FuAFxMup3THuzep_dWFhkmluw';
     let  search =  event.target.value;
     const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${apikey}&q=${search}&alt=json`;
     axios.get(url)
         .then(res => {
             this.setState({
                 videos: res.data.items,
             });
         });
 };

 componentDidMount () {

 }

 render() {
     return <div>

         <Search handleChange = {this.handleInput}/>
     </div>
 }


}
