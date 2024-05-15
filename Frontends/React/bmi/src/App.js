import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className="App">
      <section id="Head" className='w-full flex flex-row'>
        <article className='Headline w-1/2 flex flex-column item-start'  >
          <h1>Body Mass Index Calculator</h1>
          <p>Better understand your weight in relation to your height using
            our body mass index (BM) calculator. While BMI is not the
            sole determinant of a healthy weight, it offers a valuable
            starting point to evaluate your overall health and well-being.</p>
        </article>
        <article id="Calculator" className='w-1/2'>
            <form>
              <div className='form_group unit'>

              </div>
              <div className='form_group '>

              </div>
            </form>
            <div id="Banner">
              <p>Welcome!</p>
              <p>Enter your height and weight and you'll see your BMI result here</p>
            </div>
        </article>
      </section>
      <section id="BMI">

      </section>
      <section id="limitation">

      </section>
    </section>
  );
}

export default App;
