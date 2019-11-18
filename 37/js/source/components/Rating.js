import classNames from 'classnames'
import React,{Component} from 'react'
// 从 React v15.5 开始 ，React.PropTypes 助手函数已被弃用，我们建议使用 prop-types 库 来定义contextTypes。
import PropTypes from 'prop-types'

class Rating extends Component{
    constructor(props){
        super(props);
        this.state={
            rating:props.defaultValue,
            tmpRating:props.defaultValue
        }
    }

    getValue(){
        //我们的所有输入组件提供了这个函数
        return this.state.rating;
    }

    setTemp(rating){
        //用户把鼠标方在组件上时，调用该方法
        this.setState({tmpRating:rating})
    }
    setRating(rating){
        //用户点进组件时，调用该方法
        this.setState({
            tmpRating:rating,
            rating:rating
        });
    }
    reset(){
        //用户把鼠标移开时，调用该方法
        this.setTemp(this.state.rating);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        //响应组件外部的变化
        this.setRating(nextProps.defaultValue);
    }

    render() {
        const stars=[];
        for(let i=1;i<this.props.max;i++){
            stars.push(
                <span className={i<=this.state.tmpRating?'RatingOn':null}
                      key={i}
                      onClick={!this.props.readonly? this.setRating.bind(this,i):undefined}
                      onMouseOver={!this.props.readonly ? this.setTemp.bind(this,i):undefined}
                >
                    &#9734;
                </span>
            );
        }
        return (
            <div className={classNames({"Rating":true,"RatingReadonly":this.props.readonly})}
                 onMouseOut={this.reset.bind(this)}
            >
                {stars}
                {this.props.readonly || !this.props.id?null:
                    <input type="hidden" id={this.props.id} value={this.state.rating}/>
                }
            </div>
        )
    }
}

Rating.propTypes={
    defaultValue:PropTypes.number,
    readonly:PropTypes.bool,
    max:PropTypes.number
};

Rating.defaultProps={
    defaultValue:0,
    max:5
};

export default Rating