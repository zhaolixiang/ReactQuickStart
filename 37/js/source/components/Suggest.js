import React,{Component} from 'react'
// 从 React v15.5 开始 ，React.PropTypes 助手函数已被弃用，我们建议使用 prop-types 库 来定义contextTypes。
import PropTypes from 'prop-types'
class Suggest extends Component{
    getValue(){
        return this.refs.lowlevelinput.value;
    }

    render(){
        const randomid=Math.random().toString(16).substring(2);
        return (
            <div>
                <input
                list={randomid}
                defaultValue={this.props.defaultValue}
                ref="lowlwvwlinput"
                id={this.props.id}
                />
                <datalist id={randomid}>
                    {
                        this.props.options.map((item,idx)=>
                            <option value={item} key={idx}></option>
                        )
                    }
                </datalist>
            </div>
        );
    }
}

Suggest.propTypes={
    options:PropTypes.arrayOf(PropTypes.string)
}

export default Suggest