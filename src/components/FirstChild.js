import React, { useState, useEffect, useLayoutEffect, Component } from 'react';

// 使用 useLayoutEffect 和 useEffect 的函数组件
function Com() {
  const [number, setNumber] = useState(0)
  useEffect(() => {
    console.log('useEffect 执行...');
    return () => {
      console.log('useEffect 销毁...');
    }
  }, [number]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect 执行...');
    return () => {
      console.log('useLayoutEffect 销毁...');
    }
  });

  return (
    <div>
      {console.log('Com 渲染')}
      <h2>Com1</h2>
      <p>{number}</p>
      <button onClick={() => setNumber(pre => pre +1)}>change Number</button>
    </div>
  )
}

// 使用生命周期的类组件
class App extends Component {
  state = { count: 0 }
  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount() {
    console.log('App componentDidMount');
  }
  componentDidUpdate() {
    console.log('App componentDidUpdate');
  }
  render() {
    return (
      <div>
        {this.state.count}
        <Com />
        {console.log('App 渲染')}
        <button onClick={this.setCount}>count + 1</button>
      </div>
    )
  }
}

export default App