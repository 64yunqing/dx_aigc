import AppHeader from './components/app-header';
// 父组件
const App = () => {
  return(
    <div className="container">
      {/* 子组件 */}
      <AppHeader name="wow奶茶"/>
    </div>
  )
};
export default App;