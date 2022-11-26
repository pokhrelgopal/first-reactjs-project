import { boxes } from './box-data';
import Box from './box';

function App(){
  return(
    <section className="container mx-auto boxes grid grid-cols-3 gap-4">
      {boxes.map(function(box){
        return<Box key={box.id} {...box}/>
      })}
    </section>
  )
}

export default App;
