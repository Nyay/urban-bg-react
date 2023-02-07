import './App.css'
import { Card, Text, CardWrapper } from './components';
import { imgList } from './static';

function App() {

  return (
      <>
        <Text value='Beauty of the beauty 🥰' />
        <CardWrapper>
          { imgList.map(( value ) => <Card imgSrc={ value } alt={ value } />)}
        </CardWrapper>
      </>
  )
}

export default App
