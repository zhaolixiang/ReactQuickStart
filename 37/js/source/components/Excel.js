import React from 'react'
// 从 React v15.5 开始 ，React.PropTypes 助手函数已被弃用，我们建议使用 prop-types 库 来定义contextTypes。
import PropTypes from 'prop-types'

class Excel extends React.Component{
    // propTypes:{
    //     headers:[],
    //     initialData: []
    // },
    // propTypes:{
    //     headers:React.PropTypes.isRequired.arrayOf(React.PropTypes.string),
    //     initialData: React.PropTypes.arrayOf(
    //         React.PropTypes.arrayOf(React.PropTypes.string)
    //     ).isRequired
    // },
    getInitialState(){
        return {
            data:this.props.initialData,
            sortby:null,
            descending:false,
            edit: null,// [行索引, 列索引],
            search:false
        }
    }
    _sort(e){
        var column=e.target.cellIndex;
        var data=this.state.data.slice();
        var descending=this.state.sortby===column && !this.state.descending;
        data.sort(function (a,b) {
            return descending?(a[column]<b[column]?1:-1):(a[column]>b[column]?1:-1)
        });
        this.setState({
            data:data,
            sortby:column,
            descending:descending
        });
    }
    _showEditor(e){
        this.setState({
            edit:{
                row:parseInt(e.target.dataset.row,10),
                cell:e.target.cellIndex
            }
        });
    }
    _save(e){
        e.preventDefault();
        //进行保存
        var input=e.target.firstChild;
        var data=this.state.data.slice();
        data[this.state.edit.row][this.state.edit.cell]=input.value;
        this.setState({
            edit:null,
            data:data
        })

    }
    _renderToolBar(){

        return React.DOM.div({className: 'toolbar'},
            React.DOM.button(
                {onClick: this._toggleSearch,className:'toolbar'},
                'search'
            ),
            React.DOM.a({onClick:this._download.bind(this,'json'),href:'data.json'},'Export JSON'),
            React.DOM.a({onClick:this._download.bind(this,'csv'),href:'data.csv'},'Export CSV'),
        )
    }
    _download(format,ev){
        var contents=format==='json'?JSON.stringify(this.state.data):
            this.state.data.reduce(function (result, row) {
                return result+
                    row.reduce(function (rowresult,cell,idx) {
                        return rowresult+'"'+cell.replace(/"/g,'""')+'"'
                            +(idx<row.length-1?',':'');
                    },'')
                    +"\n";
            },'');
        var URL=window.URL||window.webkitURL;
        var blob=new Blob([contents],{type:'text/'+format})
        ev.target.href=URL.createObjectURL(blob);
        ev.target.download='data.'+format
    }
    _renderSearch(){
        if(!this.state.search){
            return null
        }
        return (React.DOM.tr({onChange:this._search},
            this.props.headers.map(function (_ignore, idx) {
                return React.DOM.td({key:idx},
                    React.DOM.input({type:'text','data-idx':idx})
                )
            })
        ))
    }
    _toggleSearch(){
        if(this.state.search){
            this.setState({
                data:this._preSearchData,
                search:false
            });
            this._preSearchData=null;
        }else{
            this._preSearchData=this.state.data;
            this.setState({
                search:true
            });
        }
    }
    _search(e){
        var needle=e.target.value.toLowerCase();
        if(!needle){
            // 当搜索字符串被删除时
            this.setState({
                data:this._preSearchData
            });
            return;
        }
        // 需要搜索的那一列的索引值
        var idx=e.target.dataset.idx;
        var searchData=this._preSearchData.filter(function (row) {
            return row[idx].toString().toLowerCase().indexOf(needle)>-1;
        });
        this.setState({
            data:searchData
        });
    }
    _renderTable(){
        return(
            React.DOM.table(null,
                React.DOM.thead({onClick:this._sort},
                    React.DOM.tr(null,
                        this.props.headers.map(function (title,idx) {
                            console.log(this)
                            if(this.state.sortby===idx){
                                title+=this.state.descending?'\u2191':'\u2193'
                            }
                            return React.DOM.th({key:idx},title);
                        },this)
                    )

                ),
                React.DOM.tbody({onDoubleClick:this._showEditor},
                    this._renderSearch(),
                    this.state.data.map(function (row, rowidx) {
                        return (
                            React.DOM.tr({key:rowidx},
                                row.map(function (cell, idx) {
                                    console.log("state",this);
                                    var content=cell;
                                    var edit=this.state.edit;
                                    if(edit && edit.row===rowidx && edit.cell===idx){
                                        content=React.DOM.form(
                                            {onSubmit:this._save},
                                            React.DOM.input({
                                                type:'text',
                                                defaultValue:content
                                            })
                                        )
                                    }
                                    return React.DOM.td({
                                        key:idx,
                                        'data-row':rowidx
                                    },content)
                                },this)
                            )
                        )
                    },this)
                )
            )
        )
    }
    render(){
        return (
            <div className="Excel">
                {this._renderToolbar()}
                {this._renderTable()}
            </div>
        )
    }
}

Excel.propTypes={
    headers:PropTypes.arrayOf(PropTypes.string),
    initialData: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.string)
    ).isRequired
};

export default Excel