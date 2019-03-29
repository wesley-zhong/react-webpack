import {Component} from 'react';
import i18n from 'i18n';
import  './Wdtabs.less';
import  {Tabs} from  "uxcore"
const TabPane = Tabs.TabPane
import  WdtabPanleTable from '../wd_tabpane_tab'
export default class Wdtabs extends Component {
  constructor(props) {
    super(props);
  }

  testPrint() {
    //  const {tabsDatas}  = this.props;
    // console.log("oooooooooo" ,tabsDatas)
    // console.log("qqqqqqqqqqq ", tabsDatas.activeIndex + "")
  }


  onTabClose(title, event) {
    event.preventDefault()
    let {tabsDatas}  = this.props;
    let index = 0;
    for(var i = 0 ; i <  tabsDatas.tabs.length; ++i){
      if(tabsDatas.tabs[i].title == title)
        index = i;
    }
    this.props.onTabClose(index)
    tabsDatas.tabs.splice(index, 1)
    if (index < tabsDatas.activeIndex) {
      tabsDatas.activeIndex = tabsDatas.activeIndex - 1;
    }
    else{
      tabsDatas.activeIndex = tabsDatas.tabs.length - 1;
    }
  }

  checkTabState(tabsDatas) {
    let t = this;
    for (var i = 0; i < tabsDatas.tabs.length; ++i) {
      if (tabsDatas.tabs[i].tstate == 0) {
        tabsDatas.tabs[i].tstate = 1;
      }
      if (tabsDatas.tabs[i].tab == null) {
        tabsDatas.tabs[i].tab = (
          <WdtabPanleTable tab={tabsDatas.tabs[i].title} onClose={ this.onTabClose.bind(t)} />)
      }
    }
  }

  onTabClick(key) {
    let {tabsDatas}  = this.props;

    var index = parseInt(key)
    if(index == tabsDatas.tabs.length){
      tabsDatas.activeIndex =  tabsDatas.tabs.length - 1
    }
    else{
      tabsDatas.activeIndex = key;
    }
    this.setState({})
  }

  render() {
    let t = this;
    let index = 0;
    const {tabsDatas}  = this.props;
    t.checkTabState(tabsDatas)
    return (
      <div>
        <Tabs defaultActiveKey={0} activeKey={tabsDatas.activeIndex + ""} onTabClick={this.onTabClick.bind(t)}
              type="small">
          {
            tabsDatas.tabs.map(function (item) {
              index++
              return (
                <TabPane tab={item.tab} key={ (index - 1)}>{item.component}</TabPane>
              )
            })
          }
        </Tabs>
      </div>
    );
  }

  componentWillReceiveProps(nextProps){

  }
}
