import React, {Component} from 'react';
import User from './User';
export default class Post extends Component{
    render(){
        return(
            <div className="post">
                <User
                src = "https://people.accenture.com/misc/PhotoProvider.ashx?pk=1728153&dt=&dt=1559207186197"
                alt = "prince"
                name="Harry"
                min />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa reiciendis, officiis, quaerat rem veritatis in natus aliquam expedita aliquid error repellendus sit perferendis voluptas? Voluptate error tenetur fugit excepturi.
                </div>
            </div>
        )
    }
}