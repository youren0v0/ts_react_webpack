import * as React from "react";
export interface Props {
  load: any,
  children: any
}
export interface State {
  mod: any
}
export default class Bundle extends React.Component<Props, State> {
  state: State = {
    mod: null
  }
  componentWillMount() {
    this.load(this.props);
  }
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  async load(props: any) {

    this.setState({
      mod: null
    });
    /*
      使用 props.load() 返回的是一个 promise
     */
    const mod = await props.load();
    this.setState({
      mod: mod.default ? mod.default : mod[Object.keys(mod)[0]] //TODO,不知道import是否存在特殊情况导致报错
    });
  }

  render() {
    /*
       将存在状态中的 mod 组件作为参数传递给当前包装组件的'子'
    */
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}