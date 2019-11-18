import classNames from 'classnames'
import React from 'react'

// 从 React v15.5 开始 ，React.PropTypes 助手函数已被弃用，我们建议使用 prop-types 库 来定义contextTypes。
import PropTypes from 'prop-types'


function Button(props) {
    const cssclasses=classNames('Button',props.className);
    return props.href?<a{...props} className={cssclasses}/>:<button {...props} className={cssclasses} />;
}

Button.propTypes={
    href:PropTypes.string,
};

export default Button