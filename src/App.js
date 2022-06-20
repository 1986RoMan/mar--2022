
import Simson from "./components/Simson";
import Kartku from "./components/Kartku";

function App() {
  return (
    <div>
        <Kartku/>
        <hr/>
      <Simson name={'Homer'}
              about={'один из главных героев мультсериала «Симпсоны»'}
                picture={'https://upload.wikimedia.org/wikipedia/ru/b/bd/Homer_Simpson.png'}
      />
        <Simson name={'Bart'}
                about={'герой мультипликационного сериала «Симпсоны»'}
                picture={'https://upload.wikimedia.org/wikipedia/ru/thumb/2/29/Bart_Simpson.gif/270px-Bart_Simpson.gif'}
        />
        <Simson name={'Marge'}
                about={'постоянный персонаж мультипликационного сериала «Симпсоны»'}
                picture={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
        />
        <Simson name={'Lisa'}
                about={' Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов '}
                picture={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
        />
        <Simson name={'Burns'}
                about={'один из главных персонажей мультсериала «Симпсоны»'}
                picture={'https://upload.wikimedia.org/wikipedia/ru/5/56/Mr_Burns.png'}
        />

    </div>
  );
}

export default App;
