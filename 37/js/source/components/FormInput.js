import Rating from './Rating'
import React,{Component} from 'react'
import Sugest from './Suggest'
// 从 React v15.5 开始 ，React.PropTypes 助手函数已被弃用，我们建议使用 prop-types 库 来定义contextTypes。
import PropTypes from 'prop-types'

class FormInput extends Component{
    getValue(){}
    render(){
        const common={
            //通用属性
            id:this.props.id,
            ref:'input',
            defaultValue:this.props.defaultValue
        };

        switch (this.props.type) {
            case 'year':
                return (
                    <input {...common}
                        type="number"
                           defaultValue={this.props.defaultValue||new Date().getFullYear()}
                    />
                );

            case 'suggest':
                return <Suggest {...common} options={this.props.options}/>;
            case 'rating':
                return



        }
    }
}

FormInput.propTypes={
    type:PropTypes.oneOf(['year','suggest','rating','text','input']),
    id:PropTypes.string,
    options:PropTypes.array,//用于<option>选项列表的自动补全功能
    defaultValue:PropTypes.any
};
export default FormInput
