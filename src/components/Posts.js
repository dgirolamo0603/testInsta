import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component{
    render(){
     return (
           <div className="left">
                < Post alt = "nature"
                src = "http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg" />
                 < Post alt = "nature"
                src = "http://nevseoboi.com.ua/uploads/posts/2011-04/1302011390_w000143_www.nevseoboi.com.ua.jpg" / >
        </div>
     )
    }
}