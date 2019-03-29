import {Component} from 'react';
import i18n from 'i18n';
import './Wdnavigation.less';
import {Menu} from 'uxcore';

const {SubMenu} = Menu;
import {Link} from 'react-router';

export default class Wdnavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  render() {
    let t = this;
    return (
      <div className="mod-wdnavigation">
        <Menu mode="inline" className="kuma-menu-none-border-dark">
          {
            t.state.menus.map(function (item) {
              return (
                <SubMenu key={item.id} title={<span><i className={'iconfont ' + item.icon} /><span style={{marginLeft: '12px'}}>{item.text}</span></span>}>
                  {
                    item.children == null ? "" :
                      item.children.map(function (childItem1) {
                        return (
                          childItem1.children == null ?
                            <Menu.Item key={childItem1.id}>
                              <Link to={t.getNodeUlr(childItem1)}>{childItem1.text}</Link>
                            </Menu.Item> :
                            <SubMenu>
                              {
                                childItem1.children.map(function (childItem11) {
                                  return (
                                    <Menu.Item key={childItem11.id}>
                                      <Link to={t.getNodeUlr(childItem11)}>{childItem11.text}</Link>
                                    </Menu.Item>
                                  )
                                })
                              }
                            </SubMenu>
                        )
                      })
                  }
                </SubMenu>
              )
            })
          }
        </Menu>
      </div>
    )
  }

  getNodeUlr(item) {
    if(item.url != null && item.url.indexOf("?") > 0) {
      return "/" + item.url;
    }else{
      return "/" + item.url + "?title=" + item.text;
    }
  }

  componentDidMount() {
    let t = this;
    wdPost("/urpc/UserAuthManage/getUserMenus", {
      showConfig:'WEB'
    }, function (response) {
      response = JSON.parse(response)
      if (response.errorCode == 0) {
        t.setState({
          menus: response.data.menus
        })
        return;
      }
    })
  }
}
